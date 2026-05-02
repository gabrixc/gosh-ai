# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- In Progress

## Current Goal

- Define next feature spec and implement editor content area

## Completed

- `01-design-system.md` — shadcn/ui initialized (Tailwind v4), components added: Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea; lucide-react installed; lib/utils.ts with cn(); dark class applied to html element
- `02-editor.md` — EditorNavbar (fixed top bar, sidebar toggle with PanelLeftOpen/Close icons); ProjectSidebar (floating overlay, slides from left, Projects title + close button, My Projects / Shared tabs with empty states, New Project button); dialog pattern ready via existing shadcn Dialog
- Editor chrome: navbar and project sidebar shell completed with accessibility improvements
- `03-auth.md` — Clerk auth fully wired:
  - Installed `@clerk/nextjs` v7.3.0 + `@clerk/ui` v1.7.0
  - `proxy.ts` at project root: Clerk middleware protecting all routes except `/sign-in` and `/sign-up`
  - Root layout wrapped with `ClerkProvider` + dark theme from `@clerk/ui/themes`
  - `app/sign-in/[[...sign-in]]/page.tsx` and `app/sign-up/[[...sign-up]]/page.tsx`: two-panel layout (left branding hidden on mobile, right Clerk form); all colors via CSS tokens
  - Shared `components/auth/auth-layout.tsx` and `components/auth/clerk-appearance.ts`
  - Root `/` redirects authenticated → `/editor`, unauthenticated → `/sign-in`
  - `UserButton` added to editor navbar right section (handles sign-out via dropdown)
- `current-issues.md` — created `app/editor/page.tsx`: composes EditorNavbar + ProjectSidebar with "Coming soon" placeholder; resolves /editor 404 and exposes UserButton sign-out

## In Progress

- None

## Next Up

- Editor content area (real editing functionality)

## Open Questions

- None yet.

## Architecture Decisions

- Auth: Clerk (`@clerk/nextjs` v7) — all routes protected by default, public routes via env vars

## Session Notes

- Starting from Create Next App baseline (Next.js 16, React 19, Tailwind v4)
