# AGENTS.md

Personal monorepo for [bpopadic.dev](https://bpopadic.dev) — a landing page and a home for side
projects.

## Agent skills

### Issue tracker

GitHub Issues on `popadicbranislav/bpopadic`, via the `gh` CLI — **except** infrastructure,
domain, DNS, and deployment topics, which stay in gitignored `.scratch/` markdown because the
repo is public. See `.agents/issue-tracker.md` and `.agents/issue-tracker-local.md`.

### Triage labels

The five canonical roles, used verbatim as label strings: `needs-triage`, `needs-info`,
`ready-for-agent`, `ready-for-human`, `wontfix`. No mapping file — the mapping is identity.

`/wayfinder` uses an orthogonal namespace: `wayfinder:map` on a map issue, and one of
`wayfinder:research` / `wayfinder:prototype` / `wayfinder:grilling` / `wayfinder:task` on each
ticket.

### Domain docs

Single-context: `CONTEXT.md` at the root, ADRs in `docs/adr/`. See `.agents/domain.md`.

## Never commit

`.scratch/` is gitignored and holds private infrastructure notes. Never `git add -f` it, never
paste its contents into a GitHub issue, PR, or commit message.
