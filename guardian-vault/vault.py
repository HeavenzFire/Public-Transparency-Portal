#!/usr/bin/env python3
"""Local-only encrypted evidence vault prototype; performs no network requests."""
import argparse, base64, getpass, hashlib, hmac, json, secrets, sys
from datetime import datetime, timezone
from pathlib import Path
try:
    from cryptography.hazmat.primitives.ciphers.aead import AESGCM
except ImportError:
    raise SystemExit("Install dependency: py -m pip install cryptography>=44.0.0")

MAGIC=b"HFV1"; AAD=b"HeavenzFire-GuardianVault-v1"; VERSION=1
def canon(v): return json.dumps(v,sort_keys=True,separators=(",",":"),ensure_ascii=False).encode()
def key_for(password,salt):
    if len(password)<12: raise ValueError("Passphrase must be at least 12 characters.")
    return hashlib.scrypt(password.encode(),salt=salt,n=2**14,r=8,p=1,dklen=32)
def private_write(path,data):
    path.write_bytes(data)
    try: path.chmod(0o600)
    except OSError: pass # Configure restrictive NTFS ACLs on Windows.

class Vault:
    def __init__(self,root,password):
        self.root=Path(root).expanduser().resolve()
        cp=self.root/"vault.json"; mp=self.root/"manifest.json"
        if not cp.is_file() or not mp.is_file(): raise ValueError("Vault not initialized; run init.")
        cfg=json.loads(cp.read_text()); self.key=key_for(password,base64.b64decode(cfg["salt"],validate=True))
        self.manifest=json.loads(mp.read_text()); self.check_manifest()
    @classmethod
    def initialize(cls,root,password):
        root=Path(root).expanduser().resolve()
        if root.exists() and any(root.iterdir()): raise ValueError("Refusing to initialize a non-empty directory.")
        root.mkdir(parents=True,exist_ok=True); salt=secrets.token_bytes(16); key=key_for(password,salt)
        private_write(root/"vault.json",canon({"format":VERSION,"kdf":"scrypt","salt":base64.b64encode(salt).decode()})+b"\n")
        m={"format":VERSION,"entries":[]}; m["hmac_sha256"]=hmac.new(key,canon(m),hashlib.sha256).hexdigest()
        private_write(root/"manifest.json",canon(m)+b"\n"); (root/"evidence").mkdir(mode=0o700)
        return cls(root,password)
    def check_manifest(self):
        unsigned={k:v for k,v in self.manifest.items() if k!="hmac_sha256"}
        expected=hmac.new(self.key,canon(unsigned),hashlib.sha256).hexdigest()
        if not isinstance(self.manifest.get("hmac_sha256"),str) or not hmac.compare_digest(expected,self.manifest["hmac_sha256"]):
            raise ValueError("Manifest authentication failed; metadata may have been altered.")
    def save_manifest(self):
        m={"format":VERSION,"entries":self.manifest["entries"]}
        m["hmac_sha256"]=hmac.new(self.key,canon(m),hashlib.sha256).hexdigest()
        private_write(self.root/"manifest.json",canon(m)+b"\n"); self.manifest=m
    def add(self,source):
        source=Path(source).expanduser().resolve(strict=True)
        if not source.is_file(): raise ValueError("Evidence input must be a regular file.")
        raw=source.read_bytes()
        payload=canon({"original_name":source.name,"sha256":hashlib.sha256(raw).hexdigest(),"bytes_b64":base64.b64encode(raw).decode()})
        nonce=secrets.token_bytes(12); blob=MAGIC+nonce+AESGCM(self.key).encrypt(nonce,payload,AAD)
        cid=datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")+"-"+secrets.token_hex(6); name=cid+".hfv"
        private_write(self.root/"evidence"/name,blob)
        self.manifest["entries"].append({"case_id":cid,"created_utc":datetime.now(timezone.utc).isoformat(),"blob":name,"ciphertext_sha256":hashlib.sha256(blob).hexdigest()})
        self.save_manifest(); return cid
    def verify(self):
        self.check_manifest(); good=0; errors=[]
        for e in self.manifest["entries"]:
            try:
                name=e["blob"]
                if Path(name).name!=name or not name.endswith(".hfv"): raise ValueError("Invalid blob path.")
                blob=(self.root/"evidence"/name).read_bytes()
                if not hmac.compare_digest(hashlib.sha256(blob).hexdigest(),e["ciphertext_sha256"]): raise ValueError("Ciphertext hash mismatch.")
                if len(blob)<32 or blob[:4]!=MAGIC: raise ValueError("Invalid encrypted format.")
                raw=AESGCM(self.key).decrypt(blob[4:16],blob[16:],AAD); p=json.loads(raw)
                data=base64.b64decode(p["bytes_b64"],validate=True)
                if not hmac.compare_digest(hashlib.sha256(data).hexdigest(),p["sha256"]): raise ValueError("Plaintext hash mismatch.")
                good+=1
            except Exception as ex: errors.append(str(e.get("case_id","unknown"))+": "+str(ex))
        return good,errors
    def entries(self): return [{"case_id":e["case_id"],"created_utc":e["created_utc"]} for e in self.manifest["entries"]]

def main():
    p=argparse.ArgumentParser(description="Local-only encrypted HeavenzFire evidence vault")
    p.add_argument("--vault",required=True); sub=p.add_subparsers(dest="cmd",required=True)
    sub.add_parser("init"); a=sub.add_parser("add"); a.add_argument("file"); sub.add_parser("list"); sub.add_parser("verify")
    args=p.parse_args()
    try:
        password=getpass.getpass("Vault passphrase (12+ characters): ")
        if args.cmd=="init": Vault.initialize(args.vault,password); print("Vault initialized; passphrase cannot be recovered.")
        else:
            v=Vault(args.vault,password)
            if args.cmd=="add": print("Imported case ID:",v.add(args.file))
            elif args.cmd=="list": print(json.dumps(v.entries(),indent=2))
            else:
                n,errors=v.verify(); print("Verified encrypted records:",n)
                if errors: print("\n".join(errors),file=sys.stderr); return 1
                print("Integrity checks passed.")
        return 0
    except Exception as ex: print("ERROR:",ex,file=sys.stderr); return 1
if __name__=="__main__": raise SystemExit(main())
