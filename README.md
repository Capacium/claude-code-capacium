# Claude Code — Capacium Plugin

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

## MCP Server

This plugin bundles `capacium-mcp` for capability resolution and installation via Claude Code's MCP integration.
