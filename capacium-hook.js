#!/usr/bin/env node
// Capacium PostToolUse hook — triggers after file write operations
// Registered in plugin.json hooks.PostToolUse

const hookPayload = JSON.parse(process.argv[2] || '{}');
const toolName = hookPayload.tool_name || '';
const filePath = hookPayload.file_path || '';
const args = hookPayload.args || {};

if (toolName === 'Write' || toolName === 'Edit') {
    const ext = filePath.split('.').pop()?.toLowerCase();

    const suggestions = {
        py: 'Try `/capacium-search python` for testing, linting, and code review capabilities.',
        js: 'Try `/capacium-search javascript` for bundling, testing, and formatting capabilities.',
        ts: 'Try `/capacium-search typescript` for type-checking, testing, and linting capabilities.',
        go: 'Try `/capacium-search go` for formatting, testing, and CI capabilities.',
        rs: 'Try `/capacium-search rust` for clippy, testing, and build capabilities.',
        md: 'Try `/capacium-search documentation` for markdown linting and publishing capabilities.',
        yaml: 'Try `/capacium-search yaml` for schema validation and linting capabilities.',
        toml: 'Try `/capacium-search config` for configuration management capabilities.',
        json: 'Try `/capacium-search json` for schema validation and formatting capabilities.',
    };

    if (suggestions[ext]) {
        console.log(`\n💡 Capacium: ${suggestions[ext]}`);
    }
}
