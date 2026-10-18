import json, tempfile, unittest
from pathlib import Path
from vault import Vault

class VaultTests(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory(); self.root=Path(self.tmp.name)
        self.src=self.root/"private-evidence.txt"; self.src.write_text("Sensitive family information")
        self.vault=Vault.initialize(self.root/"vault","correct horse battery staple")
    def tearDown(self): self.tmp.cleanup()
    def test_encrypt_and_verify(self):
        self.vault.add(self.src)
        manifest=(self.root/"vault"/"manifest.json").read_text()
        blob=next((self.root/"vault"/"evidence").glob("*.hfv")).read_bytes()
        self.assertNotIn(self.src.name,manifest); self.assertNotIn(b"Sensitive family information",blob)
        self.assertEqual(self.vault.verify(),(1,[]))
    def test_wrong_password_rejected(self):
        with self.assertRaisesRegex(ValueError,"Manifest authentication failed"):
            Vault(self.root/"vault","wrong passphrase definitely")
    def test_ciphertext_tampering_detected(self):
        self.vault.add(self.src); p=next((self.root/"vault"/"evidence").glob("*.hfv"))
        b=bytearray(p.read_bytes()); b[-1]^=1; p.write_bytes(b)
        n,errors=self.vault.verify(); self.assertEqual(n,0); self.assertIn("Ciphertext hash mismatch",errors[0])
    def test_manifest_tampering_detected(self):
        self.vault.add(self.src); p=self.root/"vault"/"manifest.json"; m=json.loads(p.read_text())
        m["entries"][0]["case_id"]="altered"; p.write_text(json.dumps(m))
        with self.assertRaisesRegex(ValueError,"Manifest authentication failed"):
            Vault(self.root/"vault","correct horse battery staple")
    def test_short_password_rejected(self):
        with self.assertRaisesRegex(ValueError,"at least 12"): Vault.initialize(self.root/"short","short")
    def test_nonempty_directory_preserved(self):
        d=self.root/"occupied"; d.mkdir(); f=d/"keep.txt"; f.write_text("keep")
        with self.assertRaisesRegex(ValueError,"non-empty"): Vault.initialize(d,"correct horse battery staple")
        self.assertEqual(f.read_text(),"keep")
if __name__=="__main__": unittest.main()
