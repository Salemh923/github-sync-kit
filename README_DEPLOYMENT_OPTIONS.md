# Nexora AI — Deployment Options Guide

## Which ZIP should I use?

| Your host type | Use this ZIP |
|----------------|-------------|
| Vercel, Netlify, Render, Cloudflare Pages (Git), GitHub Pages | **Nexora-Studio-Source-Code.zip** |
| Cloudflare Direct Upload, cPanel, Hostinger, Namecheap, GoDaddy, Firebase Hosting, Surge, any static HTML/CSS host | **Nexora-Studio-Static-Dist.zip** |

---

## Nexora-Studio-Source-Code.zip

### For hosts that run `npm run build` automatically

Extract the ZIP, push to Git, connect to your host. The host installs dependencies and builds for you.

---

## Vercel

| Setting | Value |
|---------|-------|
| Framework Preset | Vite |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js Version | 20.x |

**SPA routing:** Pre-configured via `vercel.json`

**Steps:**
1. Push source code to GitHub / GitLab / Bitbucket
2. Import at [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite settings
4. Click **Deploy**

---

## Netlify

| Setting | Value |
|---------|-------|
| Build Command | `npm run build` |
| Publish Directory | `dist` |
| Node.js Version | 20 |

**SPA routing:** Pre-configured via `netlify.toml` + `public/_redirects`

**Steps:**
1. Push source to GitHub / GitLab
2. Import at [app.netlify.com](https://app.netlify.com)
3. Netlify reads `netlify.toml` automatically
4. Click **Deploy site**

---

## Render — Static Site

| Setting | Value |
|---------|-------|
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |

**SPA routing:** Add rewrite in Render dashboard:
- Source: `/*` → Destination: `/index.html` → Action: **Rewrite**

**Steps:**
1. Push to GitHub
2. New → Static Site at [dashboard.render.com](https://dashboard.render.com)
3. Set build command and publish directory
4. Add the rewrite rule above
5. Click **Create Static Site**

---

## Cloudflare Pages — Git Integration

| Setting | Value |
|---------|-------|
| Build Command | `npm run build` |
| Build Output Directory | `dist` |
| Node.js Version | 20 |

**SPA routing:** Pre-configured via `public/_redirects`

**Steps:**
1. Push to GitHub
2. New project at [pages.cloudflare.com](https://pages.cloudflare.com)
3. Connect repository, set build settings
4. Click **Save and Deploy**

---

## GitHub Pages — GitHub Actions

> ⚠️ GitHub Pages cannot serve this SPA from raw source files. Use the Actions workflow below.

Create `.github/workflows/deploy.yml`:

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

**Custom domain:** keep `base: "/"` in `vite.config.ts`  
**Subdirectory** (`user.github.io/repo-name/`): change to `base: "/repo-name/"`

---

## Nexora-Studio-Static-Dist.zip

### For hosts that do NOT run `npm build`

Extract the ZIP. Upload all its contents directly to your hosting root. No build step required.

Contents of this ZIP:
```
index.html
assets/
  index-[hash].css
  index-[hash].js
_redirects
```

---

## Cloudflare Pages — Direct Upload

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Create new project → **Direct Upload**
3. Upload `Nexora-Studio-Static-Dist.zip`
4. Done — Cloudflare deploys immediately

> The `_redirects` file inside handles SPA routing automatically.

---

## cPanel / public_html

1. Log in to cPanel
2. Open **File Manager** → navigate to `public_html`
3. Upload `Nexora-Studio-Static-Dist.zip`
4. Extract it — all files land directly in `public_html`
5. Done

> Make sure `index.html` is at the root of `public_html`.  
> For SPA routing, add the following to your `.htaccess`:
> ```apache
> RewriteEngine On
> RewriteCond %{REQUEST_FILENAME} !-f
> RewriteCond %{REQUEST_FILENAME} !-d
> RewriteRule ^ index.html [L]
> ```

---

## Hostinger

1. Log in → **Hosting** → **File Manager**
2. Navigate to `public_html`
3. Upload and extract `Nexora-Studio-Static-Dist.zip`
4. For SPA routing, create `.htaccess` with the content above

---

## Namecheap Hosting

Same process as cPanel above.

---

## GoDaddy Hosting

Same process as cPanel above.

---

## Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Set public directory to: dist
# Configure as single-page app: Yes
```

Then copy the `assets/` folder and `index.html` from `Nexora-Studio-Static-Dist.zip` into your `dist/` folder, then:

```bash
firebase deploy
```

---

## Surge

```bash
npm install -g surge
# Extract Nexora-Studio-Static-Dist.zip to a folder, e.g. ./static-build
surge ./static-build your-domain.surge.sh
```

---

## Local Development (Source Code only)

```bash
# Extract Nexora-Studio-Source-Code.zip
npm install
npm run dev        # → http://localhost:3000
npm run build      # → dist/
npm run preview    # → http://localhost:4173
npm run typecheck
```

Requirements: Node.js 20+, npm 9+

---

## SPA Routing — Quick Reference

All routes (`/home-v1`, `/pricing`, `/dashboard-overview`, etc.) are handled by client-side routing. Every host must serve `index.html` for unknown paths.

| Host | Config Method | Included? |
|------|--------------|-----------|
| Vercel | `vercel.json` | ✅ |
| Netlify | `netlify.toml` + `_redirects` | ✅ |
| Cloudflare Pages Git | `_redirects` | ✅ |
| Cloudflare Direct Upload | `_redirects` in dist | ✅ |
| cPanel / Apache | `.htaccess` (see above) | Manual |
| Render | Dashboard rewrite rule | Manual |
| Firebase | `firebase.json` rewrites | Manual |
| Surge | `200.html` = copy of `index.html` | Manual |
