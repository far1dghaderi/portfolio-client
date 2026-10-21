# Farid Ghaderi · Portfolio

Source for [far1d.rapidoteam.com](https://far1d.rapidoteam.com): a single-page portfolio (about, projects,
experience, stack, contact) plus an optional CMS-backed writing section.

## Tech Stack

- **React 19 + TypeScript**, built with **Vite**
- **Tailwind CSS 4** for styling; scroll and hover animations are plain CSS + `IntersectionObserver`
- **React Router** for `/`, `/writing` and the admin CMS (lazy-loaded)
- **NestJS + Prisma + PostgreSQL** API for writing posts (`apps/api`)

Content lives in `apps/web/src/data/` (`site.ts`, `projects.ts`, `cvData.ts`, `contact.ts`); project screenshots
are in `apps/web/public/projects/`. The web app deploys to Vercel on push to `main`; `vercel.json` rewrites
every path to `index.html` so client-side routes work on refresh. The writing section only appears once the API
returns published posts.

## Repository Structure

This is a pnpm monorepo:

```
.
├── apps/
│   ├── web/        # The Vite + React portfolio app (@portfolio/web)
│   └── api/        # NestJS + Prisma CMS API (@portfolio/api)
└── packages/       # Shared code (config, UI, types, ...)
```

## Admin CMS

The site includes a small content management system for writing essays.

- **Public API**: `GET /api/posts`, `GET /api/posts/:slug` (published posts only)
- **Auth**: `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me` (JWT in an httpOnly cookie)
- **Admin API** (guarded): `GET/POST /api/admin/posts`, `GET/PATCH/DELETE /api/admin/posts/:id`, `PATCH /api/admin/posts/reorder`
- **Admin UI**: `/login` then `/admin` (create, edit, publish, delete, reorder posts with a Markdown editor and live preview)

## Getting Started

### Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io) 9+

### Installation

```bash
# Install all workspace dependencies from the root
pnpm install

# Start the web dev server
pnpm dev

# Start the API (separate terminal)
pnpm dev:api
```

### Database & API setup

The API uses PostgreSQL + Prisma.

```bash
# Option A: use the bundled Postgres via Docker (exposed on port 5433)
pnpm db:up

# Option B: use a local Postgres. Create the role + database once:
#   CREATE ROLE portfolio LOGIN PASSWORD 'portfolio' CREATEDB;
#   CREATE DATABASE portfolio OWNER portfolio;

# Configure environment (defaults are provided in .env.example)
cp apps/api/.env.example apps/api/.env

# Generate the Prisma client, run migrations and seed sample content
pnpm --filter @portfolio/api prisma:generate
pnpm db:migrate
pnpm db:seed
```

The seed creates an admin account from `ADMIN_EMAIL` / `ADMIN_PASSWORD` in `apps/api/.env`
(defaults: `admin@portfolio.local` / `admin12345`). Change these before deploying.

The web app talks to the API through a Vite dev proxy (`/api` → `http://127.0.0.1:3002`),
so no CORS setup is needed in development. Point `VITE_API_URL` at your API in production.

### Other commands

```bash
# Build for production (web + api)
pnpm build

# Preview production build
pnpm preview

# Lint both workspaces
pnpm lint
```

## Available Scripts

Run these from the repository root (they delegate to `@portfolio/web`):

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

You can also scope commands to a workspace, e.g. `pnpm --filter @portfolio/web dev`.
