# Capacium Lifecycle

Manage Capacium capabilities throughout their lifecycle — discover, install, verify, update, and remove.

## Common Workflows

### Search and Discover

Use `/capacium-search <query>` to find capabilities. Query tips:
- Be specific: "python unit testing" > "testing"
- Filter by kind: add "kind:mcp-server" or "kind:skill"
- Filter by trust: "trust:verified" or "trust:signed"

### Install with Verification

Before installing, check:
1. **Trust state** — prefer `verified` or `signed`. Avoid `discovered` for production.
2. **Fingerprint** — note the SHA-256 fingerprint shown in search results.
3. **Publisher** — signed capabilities have verified Ed25519 publisher identities.

After install:
```bash
cap verify <owner/name>
cap doctor
```

### Update Flow

Check for updates:
```bash
cap list
cap update <owner/name>
```

### Troubleshooting

| Symptom | Check |
|---------|-------|
| Capability not found | `cap search` — verify spelling, try owner/name format |
| Install fails | `cap doctor` — check runtime requirements (uv, node, python) |
| Runtime mismatch | `cap runtimes list` — install missing runtimes |
| Trust warning | `cap verify <name>` — check fingerprint matches published one |
| Lock file error | `cap lock --update` — refresh lock file |

### Enterprise Workflow

On-prem / air-gapped deployments:
```bash
cap package <name> --oci
cap publish <name> --registry https://registry.company.internal
```

### In This Project

- `cap list` — see currently installed capabilities
- `cap verify --all` — verify all installed fingerprints
- `.cap-meta.json` — per-capability metadata in install directories
