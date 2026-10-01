# Modern React Portfolio

A modern, blazing-fast portfolio built with the latest and greatest web technologies.

## Tech Stack

- **React 18** - A JavaScript library for building user interfaces
- **TypeScript** - JavaScript with syntax for types
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - A utility-first CSS framework
- **shadcn/ui** - Beautifully designed components built with Radix UI
- **React Router** - Declarative routing for React
- **Lucide Icons** - Beautiful & consistent icon toolkit

## Features

- Lightning-fast HMR with Vite
- Beautiful, accessible UI components with shadcn/ui
- Type-safe development with TypeScript
- Fully responsive design
- Dark mode support built-in
- Smooth animations with Tailwind CSS
- Modern tooling and best practices

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

## Customization

### Colors & Theme

Edit `src/index.css` to customize the color palette and theme variables.

### Components

Add new shadcn/ui components using the official documentation at [ui.shadcn.com](https://ui.shadcn.com)

## Available Scripts

Run these from the repository root (they delegate to `@portfolio/web`):

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

You can also scope commands to a workspace, e.g. `pnpm --filter @portfolio/web dev`.

## Contributing

Contributions, issues, and feature requests are welcome!

## License

This project is open source and available under the MIT License.
