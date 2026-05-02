Read `AGENTS.md` before starting.

We're adding the design system and UI primitive components.

Install and configure `shadcn/ui`.

Add these shadcn components:
- Button
- Card
- Dialog
- Input
- Tabs
- Textarea
- ScrollArea

The components in `components/ui/*` are custom shadcn-style wrappers built on `@base-ui/react` (not the default Radix-based shadcn generated output). They are part of the project source and may be modified as needed. This project uses shadcn/ui v4 conventions but the primitives come from `@base-ui/react`.

Also install `lucide-react`.

Create `lib/utils.ts` with a reusable `cn()` helper for merging Tailwind classes.

Ensure all components match the existing dark theme in `globals.css`.

### Check when done

- All components import without errors.
- `cn()` works properly
- No default light styling