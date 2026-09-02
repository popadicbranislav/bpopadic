# Issue tracker: GitHub

Issues and specs live as GitHub issues on
[popadicbranislav/bpopadic](https://github.com/popadicbranislav/bpopadic). Use the `gh` CLI,
run inside the clone so it infers the repo.

GitHub shares one number space across issues and PRs, so a bare `#42` may be either — resolve
with `gh pr view 42`, falling back to `gh issue view 42`.

PRs are **not** a request surface for this repo.

## Privacy split

This is a public repo. Anything that reveals infrastructure detail — ISP account facts, public
IP addresses, router/port-forwarding config, domain registrar settings, DNS records, server
credentials, deployment topology — **never goes into a GitHub issue**.

Such tickets and their findings live locally instead, under `.scratch/` (gitignored), per
[issue-tracker-local.md](./issue-tracker-local.md). When a GitHub issue must reference one,
link it by path and name only, and keep the sensitive detail out of the gist.

**Test before writing to GitHub:** would this line help a stranger reach my hardware or my
accounts? If yes, it goes in `.scratch/`.

## Wayfinding

Used by `/wayfinder`. The **map** is one issue labelled `wayfinder:map`; **tickets** are GitHub
sub-issues of it, each labelled `wayfinder:<research|prototype|grilling|task>`. A ticket is
claimed by assigning it.

Blocking uses GitHub's **native issue dependencies**:

```
gh api --method POST repos/<owner>/<repo>/issues/<child>/dependencies/blocked_by -F issue_id=<blocker-db-id>
```

`<blocker-db-id>` is the blocker's numeric **database id**
(`gh api repos/<owner>/<repo>/issues/<n> --jq .id`) — not its `#number` or `node_id`. Read live
blockers from `issue_dependencies_summary.blocked_by`, which counts open blockers only.

A GitHub ticket blocked by a local `.scratch/` ticket has no native edge: record it as
`Blocked by: .scratch/<effort>/issues/NN-<slug>.md` at the top of the child body, open until
that file reads `Status: resolved`.
