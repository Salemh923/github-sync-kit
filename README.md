# Nexora AI — Enterprise Template Kit for React

A complete, production-ready React template for AI SaaS products.  
30+ pages · Full design system · 3 homepage variants · Premium animations.

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run typecheck` | TypeScript check |

## Requirements

- Node.js 20+
- npm 9+

## Stack

- **React 19** + TypeScript (strict)
- **Vite 7** build tool
- **Tailwind CSS v4** design system
- **Framer Motion** animations
- **shadcn/ui** components (Radix UI)
- **Wouter** client-side routing
- **TanStack Query** data fetching

## Deployment

See `HOSTING_DEPLOYMENT_GUIDE.md` for platform-specific instructions.

| Platform | Build Command | Output |
|----------|--------------|--------|
| Vercel | `npm run build` | `dist` |
| Netlify | `npm run build` | `dist` |
| Cloudflare Pages | `npm run build` | `dist` |
| Render | `npm install && npm run build` | `dist` |

SPA routing is pre-configured:
- `vercel.json` — Vercel rewrites
- `netlify.toml` — Netlify redirects  
- `public/_redirects` — Cloudflare Pages / Netlify
