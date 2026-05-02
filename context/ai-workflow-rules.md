# AI Workflow Rules

## Approach

Build this project incrementally using a spec-driven workflow.
Before any implementation or architectural decision, read the
context files in this order:
1. `context/project-overview.md` — product definition and scope
2. `context/architecture.md` — stack, boundaries, and invariants
3. `context/ui-context.md` — theme, typography, component conventions
4. `context/code-standards.md` — implementation rules
5. `context/ai-workflow-rules.md` — this file
6. `context/progress-tracker.md` — current phase and next steps

Always implement against these specs. Do not infer or invent
behavior that is not defined here.

## Scoping Rules

- Work on one feature unit at a time
- Prefer small, verifiable increments over large
  speculative changes
- Do not combine unrelated system boundaries in a
  single implementation step

## When to Split Work

Split an implementation step if it combines:

- UI changes and data/API changes
- Multiple unrelated feature areas or system boundaries
- Behavior not clearly defined in the context files

If a change cannot be verified end to end quickly,
the scope is too broad — split it.

## Handling Missing Requirements

- Do not invent product behavior not defined in the
  context files
- If a requirement is ambiguous, resolve it in the
  relevant context file before implementing
- If a requirement is missing, add it as an open question
  in `progress-tracker.md` before continuing

## Protected Files

Do not modify the following unless explicitly instructed:

- `node_modules/` — third-party library internals
- `app/globals.css` — global CSS; changes here affect the
  entire design system, coordinate before touching

## Keeping Docs in Sync

Update the relevant context file whenever implementation
changes:

- System architecture or boundaries
- Storage model decisions
- Code conventions or standards
- Feature scope

## Before Moving to the Next Unit

1. The current unit works end to end within its defined scope
2. No invariant defined in `architecture.md` was violated
3. `progress-tracker.md` reflects the completed work
4. `npm run build` passes
