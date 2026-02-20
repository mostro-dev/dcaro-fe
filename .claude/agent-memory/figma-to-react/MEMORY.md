# Agent Memory — dcaro-fe

## Project Identity
Architect portfolio, frontend-only. React 18 + Vite, TypeScript strict, Tailwind CSS v3, Storybook (CSF3).

## Design Tokens (all already in tailwind.config.ts — do NOT modify)
- Colors: `black` (#232C33), `red` (#F05D5E), `blue` (#A0C1D1), `grey` (#B5B2C2)
- Font families: `font-montserrat`, `font-jura`
- Font sizes: `text-h1` (20px/500), `text-h2` (16px/500), `text-h3`/`text-regular` (15px/400), `text-small` (11px/400), `text-xsmall` (7px/400)

## Shared Components Created (src/components/layout/)
- `NavbarItem` — active/inactive sidebar nav item with red underline bar
- `Navbar` — vertical nav with `activeItem: 'about' | 'projects' | 'contact' | null`
- `Footer` — three-column flex: year (Jura small), credit (Jura xsmall grey), Instagram link
- `Logo` — centered logo image from `src/assets/images/logo.png` (187x135px)
- `Link` — anchor with `variant: 'normal' | 'hover' | 'selected' | 'visited'`
All barrel-exported from `src/components/index.ts`.

## Figma File
- Key: `y7xxigOCq25Lz1hnM0Gn4L`
- Design System node: `2009-73`
- Logo image node: `2008-22`

## Storybook Status
Storybook is NOT yet installed (not in package.json). Story files are written in CSF3 format and ready; will work once Storybook is added.

## Key Patterns
- Named exports only for all components (default exports for pages only)
- TypeScript interface directly above each component
- Tailwind utility classes only — no inline styles, no CSS files
- Mobile-first responsive design
- `aria-label` on nav/footer, `aria-current="page"` on active nav item
- Logo asset stored at `src/assets/images/logo.png` (PNG, 1017x737, downloaded from Figma)
- See `patterns.md` for detailed animation and component patterns
