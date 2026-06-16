# Customisation Guide

## Branding
Edit `src/components/site.tsx` — search "Nexora" for all brand instances.

## Colours
Edit CSS variables in `src/index.css`.

## Pages
1. Create `src/pages/my-page.tsx`
2. Add route in `src/App.tsx`: `<Route path="/my-page"><MyPage /></Route>`

## Backend / Auth
Replace form handlers in `src/components/site.tsx` with your auth provider (Clerk, Auth0, Supabase, etc.).
