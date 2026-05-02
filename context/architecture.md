# Architecture Context

## Stack

| Layer      | Technology                          | Role                                          |
| ---------- | ----------------------------------- | --------------------------------------------- |
| Framework  | Next.js 16 + TypeScript             | App router, SSR, routing, API routes          |
| UI         | Tailwind v4 + @base-ui/react        | Design tokens, layout, accessible primitives  |
| Components | Custom shadcn-style wrappers        | Button, Dialog, Tabs, Input, Card, etc.       |
| Icons      | lucide-react                        | Icon set used throughout the UI               |
| Auth       | Clerk (`@clerk/nextjs` v7)          | Authentication, session management, user UI   |
| Database   | Not yet decided                     | TBD — add to this table when chosen           |

## System Boundaries

- `app/` — Next.js App Router pages and layouts; route-level entry points only
- `components/editor/` — editor chrome components (navbar, sidebar); one component per file
- `components/ui/` — reusable UI primitives wrapping @base-ui/react; no business logic
- `components/auth/` — shared auth layout and Clerk appearance config; no business logic
- `context/` — spec and progress documents that govern what gets built and how
- `lib/` — shared utilities (e.g. `cn()` for class merging)

## Storage Model

- **Local state (React)**: transient UI state (sidebar open/closed, active tab)
- **Database** (TBD): project metadata, user ownership, relationships
- **File/blob storage** (TBD): generated content and large artifacts

## Auth and Access Model

- Every user signs in via Clerk; all routes protected by default via `proxy.ts` middleware
- Public routes: `/sign-in` and `/sign-up` (defined via `NEXT_PUBLIC_CLERK_SIGN_IN_URL` / `NEXT_PUBLIC_CLERK_SIGN_UP_URL`)
- Root `/` redirects authenticated users to `/editor`, unauthenticated to `/sign-in`
- Project ownership and collaborator access model: TBD when database layer is added

## Invariants

1. Components in `components/ui/` must not contain business logic or call APIs directly
2. Route handlers must not perform long-lived blocking work in the request lifecycle
3. No hardcoded color values — use CSS custom property tokens defined in `globals.css`
4. All interactive controls must be accessible (keyboard navigable, correct ARIA labels)
