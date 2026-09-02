# Issue tracker: Local Markdown (private half)

The private counterpart to [issue-tracker.md](./issue-tracker.md). Tickets that must not appear
on the public GitHub repo — infrastructure, ISP, domain, DNS, deployment, credentials — live as
markdown files under `.scratch/`, which is gitignored and never committed.

## Conventions

- One effort per directory: `.scratch/<effort-slug>/`
- The spec is `.scratch/<effort-slug>/spec.md`
- Issues are one file per ticket at `.scratch/<effort-slug>/issues/<NN>-<slug>.md`, numbered
  from `01` — never a single combined tickets file
- Triage state is recorded as a `Status:` line near the top of each issue file, using the same
  role strings as the GitHub labels (see `AGENTS.md`)
- Comments and conversation history append to the bottom of the file under a `## Comments` heading

## Wayfinding operations

- **Map**: `.scratch/<effort>/map.md`. Normally there is no local map — local tickets are
  children of a GitHub map and are referenced from it by path.
- **Child ticket**: `.scratch/<effort>/issues/NN-<slug>.md`. A `Type:` line records the ticket
  type (`research`/`prototype`/`grilling`/`task`); a `Status:` line records
  `open`/`claimed`/`resolved`. A `Part of:` line carries the parent GitHub map as `#<n>`.
- **Blocking**: a `Blocked by:` line near the top, listing local `NN` numbers and/or GitHub
  `#<n>`. Unblocked when every listed local file is `resolved` and every listed GitHub issue is
  closed.
- **Frontier**: scan `.scratch/<effort>/issues/` for files that are open, unblocked, and
  unclaimed; first by number wins.
- **Claim**: set `Status: claimed` and save before any work.
- **Resolve**: append the answer under an `## Answer` heading, set `Status: resolved`, then
  append a context pointer to the parent map's Decisions-so-far — **gist only**, with the
  sensitive detail left in the local file.

## Research output

`/research` subagents resolving a local ticket write their findings to
`.scratch/<effort>/research/<name>.md` — not to a `research/<name>` git branch, which would risk
a push.
