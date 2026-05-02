# AI Workflow Rules

## Approach

Build this project incrementally using a spec-driven workflow.
Context files define what to build, how to build it, and
the current state of progress. Always implement against
these specs — do not infer or invent behavior from scratch.

Before implementing any feature:

1. Read context files in this order:
   - `context/project-overview.md` — product definition, goals, features, scope
   - `context/architecture.md` — system structure, boundaries, storage model
   - `context/ui-context.md` — theme, colors, typography, component conventions
   - `context/code-standards.md` — implementation rules and conventions
   - `context/ai-workflow-rules.md` — this file
   - `context/progress-tracker.md` — current phase, completed work, next steps

2. Verify the feature is defined in the context files
3. Implement only what is specified
4. Update `progress-tracker.md` after completion

## Scoping Rules

- Work on one feature unit at a time
- Prefer small, verifiable increments over large
  speculative changes
- Do not combine unrelated system boundaries in a
  single implementation step

## When to Split Work

Split an implementation step if it combines:

- UI changes and background task changes
- Multiple unrelated API routes
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

- `components/ui/*` — shadcn/ui generated components (modify only when updating the design system)
- Third-party library internals
- Configuration files without explicit context file changes

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
