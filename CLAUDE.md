# Architect Portfolio — Claude Code Instructions

## Project Overview
A frontend-only portfolio website for an architect. Built with React + Vite, TypeScript, and Tailwind CSS.
5 pages: Landing, About Me, Projects, Project Detail, Contact Me.

---

## Stack
- **Framework:** React 18 + Vite
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v3 — utility classes only, no custom CSS files unless absolutely necessary
- **Component docs:** Storybook
- **Routing:** React Router v6
- **No backend.** This is a frontend-only app.

---

## Folder Structure (Screaming Architecture)

```
src/
├── app/
│   ├── App.tsx               # Router setup
│   └── main.tsx              # Entry point
│
├── pages/                    # One folder per route — named after the feature/page
│   ├── landing/
│   │   ├── LandingPage.tsx
│   │   └── components/       # Components used ONLY on this page
│   ├── about/
│   │   ├── AboutPage.tsx
│   │   └── components/
│   ├── projects/
│   │   ├── ProjectsPage.tsx
│   │   └── components/
│   ├── project-detail/
│   │   ├── ProjectDetailPage.tsx
│   │   └── components/
│   └── contact/
│       ├── ContactPage.tsx
│       └── components/
│
├── components/               # Truly shared, reusable UI components
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── RootLayout.tsx    # Wraps all pages with Navbar + Footer
│   ├── ui/                   # Generic primitives (Button, Input, Tag, etc.)
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   └── index.ts              # Barrel export for all shared components
│
├── assets/                   # Images, fonts, SVGs
│   ├── images/
│   └── icons/
│
├── styles/
│   └── globals.css           # Tailwind directives only (@tailwind base/components/utilities)
│
└── types/
    └── index.ts              # Shared TypeScript types (Project, etc.)
```

---

## Architecture Rules

### Screaming Architecture
- Folder names must **scream the feature/page** they belong to — `landing/`, `about/`, `projects/`, etc.
- A component lives in `pages/<page>/components/` if it is **only used on that page**.
- A component lives in `components/` if it is **used by 2 or more pages**.
- Never put page-specific components in the shared `components/` folder.

### Components
- Every component is a **named export** (no default exports except for pages).
- Every component file = one component. No multi-component files.
- Props must always have a **TypeScript interface** defined directly above the component:
  ```tsx
  interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
  }
  ```
- Use **functional components only**. No class components.
- Never use `any`. Use `unknown` and narrow it, or define a proper type.

### Styling
- **Tailwind utility classes only.** No inline `style={{}}` props.
- No external CSS files per component (no `.module.css`).
- Responsive design is **mobile-first**: start with base styles, add `md:` and `lg:` breakpoints.
- Tailwind config must reflect the design tokens from Figma (colors, fonts, spacing).

### Routing
- Use React Router v6 with `createBrowserRouter`.
- All routes are defined in `app/App.tsx`.
- The `RootLayout` component wraps all routes so Navbar and Footer appear on every page.
- Project detail uses a dynamic route: `/projects/:slug`

### TypeScript
- Strict mode is on. No `@ts-ignore`.
- Shared types live in `src/types/index.ts`.
- The main shared type is `Project`:
  ```ts
  interface Project {
    id: string;
    slug: string;
    title: string;
    category: string;
    year: number;
    coverImage: string;
    images: string[];
    description: string;
  }
  ```

---

## Storybook
- Every component in `src/components/` **must have a `.stories.tsx` file** next to it.
- Every page-level component in `src/pages/` should also have a story.
- Use **CSF3 format** (Component Story Format 3).
- Story file naming: `ComponentName.stories.tsx`

---

## Figma → Code Workflow

When translating a Figma design:
1. Run `get_design_context` on the Figma node first.
2. Run `get_screenshot` for visual reference.
3. Download any image assets into `src/assets/images/`.
4. Extract any color or typography values and add them to `tailwind.config.ts` before writing component code.
5. Implement using Tailwind utility classes.
6. After implementing a page, create Storybook stories for all new components.

---

## Commands
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run storybook    # Start Storybook
npm run type-check   # Run tsc --noEmit
```

---

## Naming Conventions
- **Files:** PascalCase for components (`HeroSection.tsx`), camelCase for utilities (`formatDate.ts`)
- **Folders:** kebab-case (`project-detail/`)
- **Components:** PascalCase (`<HeroSection />`)
- **CSS classes:** Tailwind only — no custom class names unless adding to Tailwind config

---

## What NOT to do
- Do not use `styled-components` or `emotion`
- Do not create `.css` or `.scss` files per component
- Do not use `any` in TypeScript
- Do not put page-specific components in `src/components/`
- Do not add a backend, API routes, or database logic
- Do not use default exports for components (only for pages)
