# Claude Code — Capacium Plugin

> [!NOTE]
> **Public mirror.** The canonical repository is hosted on our self-hosted git.
> This GitHub copy is a read-only mirror kept in sync for visibility and installation.

Search, install, and manage AI agent capabilities from the [Capacium](https://capacium.xyz) marketplace directly within Claude Code.

## Install

1. Open Claude Code
2. Go to Plugins → Marketplace → search "Capacium"
3. Click Install

Or install manually:
```bash
git clone https://github.com/Capacium/claude-code-capacium.git
cp -r claude-code-capacium ~/.claude/plugins/capacium/
```

## Slash Commands

| Command | Description |
|---------|-------------|
| `/capacium-search <query>` | Search marketplace |
| `/capacium-install <owner/name>` | Install capability |
| `/capacium-status` | Show status + installed |
| `/capacium-lifecycle` | Lifecycle management guide |

## MCP Server

This plugin bundles `capacium-mcp` for capability resolution and installation via Claude Code's MCP integration.

## Changelog

### v0.2.0
- Added `/capacium-lifecycle` slash command — lifecycle management guide
- Added PostToolUse hook — suggests capabilities based on file type
- Improved install instructions

### v0.1.0
- Initial release — marketplace search and install
