# HeavenzFire Guardian Vault v0.1

Local-only encrypted file vault prototype for the private evidence component of a protection and accountability network focused on children and vulnerable families.

## What it does
- AES-256-GCM authenticated encryption; passphrase-derived key using scrypt and random per-file nonces.
- HMAC-authenticated manifest and ciphertext hashes detect manifest/blob modification when the passphrase remains secret.
- Original filenames and file bytes are inside the encrypted payload. The plaintext manifest contains opaque case IDs, UTC timestamps, blob names, and ciphertext hashes.
- No network calls, uploads, telemetry, AI processing, or source-file deletion.
- Refuses to initialize a non-empty directory. Passphrase is requested interactively, not passed on the command line.

## Install and use (PowerShell)
Python 3.11+ and cryptography 44+ are required.

    py -m pip install "cryptography>=44.0.0"
    py guardian-vault\vault.py --vault "$HOME\HF-Private-Vault" init
    py guardian-vault\vault.py --vault "$HOME\HF-Private-Vault" add "C:\path\to\evidence.pdf"
    py guardian-vault\vault.py --vault "$HOME\HF-Private-Vault" list
    py guardian-vault\vault.py --vault "$HOME\HF-Private-Vault" verify

Tests: py -m unittest discover -s guardian-vault -p "test_*.py" -v

## Critical limits
This is a prototype, not a certified chain-of-custody system or a legal evidence guarantee. A hash proves integrity against a known value, not truth or authorship. A local administrator or malware may access files while the vault is open. Windows NTFS ACLs and full-disk encryption must be configured separately. Keep the vault outside repositories, public web roots, shared folders, and cloud-synced folders; make a protected backup. Lost passphrases cannot be recovered. Do not upload child/survivor identities or raw evidence to GitHub or public forms. Never use this to store illegal child sexual abuse imagery.
