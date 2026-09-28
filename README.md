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
│   └── web/        # The Vite + React portfolio app (@portfolio/web)
└── packages/       # Shared code (config, UI, types, ...)
```

## Getting Started

### Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io) 9+

### Installation

```bash
# Install all workspace dependencies from the root
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
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
