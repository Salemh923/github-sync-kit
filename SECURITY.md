# Security Policy

## Overview

Nexora AI Template Kit is a frontend-only React template. It contains no backend services, no database connections, and no server-side code.

## What this template does NOT include

- No authentication system (UI only — wire to your backend)
- No API keys or secrets
- No database connections
- No server-side processing

## Your responsibilities when deploying

- Implement real authentication before handling sensitive data
- Validate all form inputs server-side
- Configure appropriate Content Security Policy headers
- Use HTTPS in production
- Rotate any API keys added during customisation

## Dependency Audit

```bash
npm audit
npm audit fix
```
