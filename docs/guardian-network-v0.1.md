# HeavenzFire Guardian Network v0.1 — build definition

## Mission
Protect children and vulnerable families while enabling evidence-led, lawful accountability. Hybrid architecture: public information and accountability website plus a private local evidence vault. The public site must not accept raw evidence or identifying details in this first version.

## Release 0.1
1. Public protection front door: plain-language safety guidance and vetted reporting/support links; clearly state that HeavenzFire is not an emergency, legal, or official reporting service.
2. Private evidence vault: encrypted files at rest, authenticated manifest, integrity verification, original source remains unchanged, no network requests. Prototype is in guardian-vault/.
3. Accountability register: distinguish verified documents, attributed claims, allegations, agency responses, and unresolved questions. Redact children’s and survivors’ identifying details before publication.
4. Safeguards: no doxxing, harassment, vigilante targeting, automated accusations, or public naming of private individuals on unverified claims. Prioritize survivor consent, responsible disclosure, lawful reporting, and due process.
5. No public intake until access control, encrypted transport, rate limiting, abuse controls, retention/deletion policy, safeguarding review, incident response, secure backups, and independent security review are implemented.

## Threat model
Protect evidence, identities, contact details, location data, and metadata. Treat public hosting as observable. Endpoint compromise, administrator access, and unsafe backups can defeat local protection. Hashes do not prove allegations, event timing, or authorship. This prototype is not a certified chain-of-custody system. Do not store illegal child sexual abuse imagery or publish sensitive evidence.

## Required gates before accepting reports online
Independent security and safeguarding reviews; privacy notice and data map; consent/withdrawal and retention schedule; authenticated least-privilege access; encrypted transport and storage; abuse/rate limiting; tested backups/restore; vetted urgent-danger guidance; and incident response.
