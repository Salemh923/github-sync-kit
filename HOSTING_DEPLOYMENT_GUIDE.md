# Hosting & Deployment Guide — Nexora AI Template Kit

## Quick Reference

| Platform | Install | Build Command | Output |
|----------|---------|--------------|--------|
| Vercel | `npm install` | `npm run build` | `dist` |
| Netlify | `npm install` | `npm run build` | `dist` |
| Cloudflare Pages | *(auto)* | `npm run build` | `dist` |
| Render Static | *(auto)* | `npm install && npm run build` | `dist` |
| GitHub Pages | manual | build first | `dist/` |

---

## Vercel

| Field | Value |
|-------|-------|
| Framework Preset | Vite |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

The included `vercel.json` handles SPA fallback automatically.

---

## Netlify

| Field | Value |
|-------|-------|
| Build Command | `npm run build` |
| Publish Directory | `dist` |
| Node Version | 20 |

The included `netlify.toml` and `public/_redirects` handle SPA fallback automatically.

**Note on Rollup native binaries:** The `optionalDependencies` in `package.json` explicitly includes `@rollup/rollup-linux-x64-gnu` and other platform binaries so Netlify's Linux build environment can find the native Rollup module without errors.

---

## Cloudflare Pages

| Field | Value |
|-------|-------|
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js Version | 20.x |

The included `public/_redirects` handles SPA fallback automatically.

---

## Render — Static Site

| Field | Value |
|-------|-------|
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |

Add rewrite rule in dashboard: `/* → /index.html` (Rewrite, 200).

---

## GitHub Pages

> ⚠️ Must build first — GitHub Pages cannot serve this SPA from source files.

Use GitHub Actions (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Local Development

```bash
npm install
npm run dev       # → http://localhost:3000
npm run build     # → dist/
npm run preview   # → http://localhost:4173
npm run typecheck
```

## Requirements

| Item | Minimum |
|------|---------|
| Node.js | **20.x** |
| npm | **9.x** |
