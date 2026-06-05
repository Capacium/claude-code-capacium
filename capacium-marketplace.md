# Capacium Marketplace

Search, discover, and install AI agent capabilities from the Capacium ecosystem.

## Search

Use `/capacium-search <query>` to find capabilities. Results come from the Capacium Exchange API and include:
- Skills (prompt engineering patterns, coding conventions)
- MCP Servers (tools for Claude to use)
- Workflows (multi-step automation)
- Tools (utilities and helpers)
- Bundles (collections of capabilities)

## Install

Use `/capacium-install <owner/name>` to install a capability. The capability will be downloaded and registered in Claude Code's config.

## Status

Use `/capacium-status` to see:
- Connection status to api.capacium.xyz
- Currently installed capabilities
- Available updates

## Trust States

Capabilities have trust states:
- **discovered** — found by crawler, not yet reviewed
- **audited** — basic automated checks passed
- **verified** — manual review completed
- **signed** — publisher Ed25519 signature verified

Always prefer `verified` or `signed` capabilities for production use.

## Tips

- Be specific in search queries (e.g., "/capacium-search python code review")
- Install bundles for related toolsets
- Check trust state before installing
- Run `/capacium-status` periodically for updates
