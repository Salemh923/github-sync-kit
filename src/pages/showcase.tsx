import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Check,
  ExternalLink,
  Globe,
  Layout,
  Monitor,
  Smartphone,
  Sparkles,
  Star,
  Tablet,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─────────────────────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────────────────────── */

/** Resolve a route path to a full URL the iframe can load */
function iframeSrc(path: string) {
  const base = import.meta.env.BASE_URL ?? "/";
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${clean}`;
}

/* ─────────────────────────────────────────────────────────────
   BROWSER CHROME MOCKUP
   Renders a realistic macOS-style browser frame containing a
   scaled-down iframe of a real app route.
───────────────────────────────────────────────────────────── */

interface BrowserMockupProps {
  route: string;
  label: string;
  scale?: number;
  viewportW?: number;
  viewportH?: number;
  className?: string;
}

function BrowserMockup({
  route,
  label,
  scale = 0.38,
  viewportW = 1280,
  viewportH = 820,
  className = "",
}: BrowserMockupProps) {
  const chromeH = 38;
  const displayW = Math.round(viewportW * scale);
  const displayH = Math.round(viewportH * scale);
  const totalH = displayH + Math.round(chromeH * scale);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 shadow-[0_32px_80px_-12px_oklch(0.05_0.02_265/70%)] ${className}`}
      style={{ width: displayW, height: totalH }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 border-b border-white/8 bg-[oklch(0.16_0.026_265)] px-3"
        style={{ height: Math.round(chromeH * scale) }}
      >
        <span className="size-2 rounded-full bg-[oklch(0.65_0.22_25)]" />
        <span className="size-2 rounded-full bg-[oklch(0.78_0.18_75)]" />
        <span className="size-2 rounded-full bg-[oklch(0.72_0.2_148)]" />
        <div
          className="ml-2 flex flex-1 items-center gap-1.5 rounded border border-white/10 bg-[oklch(0.12_0.02_265/80%)] px-2"
          style={{ height: Math.round(22 * scale) }}
        >
          <Globe style={{ width: Math.round(10 * scale), height: Math.round(10 * scale) }} className="text-muted-foreground/60 shrink-0" />
          <span
            className="truncate text-muted-foreground/70 font-mono"
            style={{ fontSize: Math.round(10 * scale) }}
          >
            nexora.ai{route}
          </span>
        </div>
      </div>

      {/* Scaled iframe viewport */}
      <div
        style={{ width: displayW, height: displayH, overflow: "hidden", position: "relative" }}
      >
        <iframe
          src={iframeSrc(route)}
          title={label}
          scrolling="no"
          style={{
            width: viewportW,
            height: viewportH,
            border: "none",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   DEVICE MOCKUPS
───────────────────────────────────────────────────────────── */

function DesktopMockup({ route }: { route: string }) {
  const scale = 0.42;
  const vw = 1280;
  const vh = 800;
  const dw = Math.round(vw * scale);
  const dh = Math.round(vh * scale);
  const chromeH = 36;
  const frameH = Math.round(chromeH * scale);

  return (
    <div className="flex flex-col items-center">
      {/* Screen bezel */}
      <div
        className="overflow-hidden rounded-xl border-[3px] border-[oklch(0.22_0.03_265)] bg-[oklch(0.1_0.02_265)] shadow-[0_40px_80px_-8px_oklch(0.05_0.02_265/80%)]"
        style={{ width: dw + 6, padding: 3 }}
      >
        {/* Browser chrome */}
        <div
          className="flex items-center gap-1.5 rounded-t-lg border-b border-white/8 bg-[oklch(0.16_0.026_265)] px-2"
          style={{ height: frameH }}
        >
          {["oklch(0.65_0.22_25)", "oklch(0.78_0.18_75)", "oklch(0.72_0.2_148)"].map((c, i) => (
            <span key={i} className="rounded-full" style={{ width: Math.round(7 * scale), height: Math.round(7 * scale), background: c }} />
          ))}
          <div
            className="ml-1.5 flex-1 rounded border border-white/10 bg-[oklch(0.12_0.02_265/80%)] px-1.5"
            style={{ height: Math.round(18 * scale) }}
          >
            <span className="text-muted-foreground/50" style={{ fontSize: Math.round(8 * scale) }}>
              nexora.ai{route}
            </span>
          </div>
        </div>
        {/* Viewport */}
        <div style={{ width: dw, height: dh, overflow: "hidden", position: "relative" }}>
          <iframe
            src={iframeSrc(route)}
            scrolling="no"
            style={{
              width: vw,
              height: vh,
              border: "none",
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
      {/* Stand */}
      <div className="h-5 w-24 rounded-b-sm bg-[oklch(0.2_0.03_265)]" />
      <div className="h-2 w-36 rounded-full bg-[oklch(0.22_0.03_265)]" />
    </div>
  );
}

function TabletMockup({ route }: { route: string }) {
  const scale = 0.45;
  const vw = 768;
  const vh = 1024;
  const dw = Math.round(vw * scale);
  const dh = Math.round(vh * scale);

  return (
    <div
      className="overflow-hidden rounded-[18px] border-[5px] border-[oklch(0.22_0.03_265)] bg-black shadow-[0_32px_64px_-8px_oklch(0.05_0.02_265/70%)]"
      style={{ width: dw + 10, height: dh + 10 }}
    >
      {/* Top notch row */}
      <div className="flex h-5 items-center justify-center bg-[oklch(0.12_0.02_265)]">
        <div className="h-1.5 w-8 rounded-full bg-[oklch(0.2_0.03_265)]" />
      </div>
      {/* Viewport */}
      <div style={{ width: dw, height: dh - 20, overflow: "hidden", position: "relative" }}>
        <iframe
          src={iframeSrc(route)}
          scrolling="no"
          style={{
            width: vw,
            height: vh,
            border: "none",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            pointerEvents: "none",
          }}
        />
      </div>
      {/* Home indicator */}
      <div className="flex h-5 items-center justify-center bg-[oklch(0.12_0.02_265)]">
        <div className="h-1 w-12 rounded-full bg-[oklch(0.3_0.04_265)]" />
      </div>
    </div>
  );
}

function MobileMockup({ route }: { route: string }) {
  const scale = 0.48;
  const vw = 390;
  const vh = 844;
  const dw = Math.round(vw * scale);
  const dh = Math.round(vh * scale);

  return (
    <div
      className="overflow-hidden rounded-[28px] border-[5px] border-[oklch(0.24_0.035_265)] bg-black shadow-[0_32px_64px_-8px_oklch(0.05_0.02_265/70%)]"
      style={{ width: dw + 10, height: dh + 10 }}
    >
      {/* Dynamic island */}
      <div className="flex h-7 items-center justify-center bg-[oklch(0.1_0.02_265)]">
        <div className="h-4 w-16 rounded-full bg-black" />
      </div>
      {/* Viewport */}
      <div style={{ width: dw, height: dh - 28, overflow: "hidden", position: "relative" }}>
        <iframe
          src={iframeSrc(route)}
          scrolling="no"
          style={{
            width: vw,
            height: vh,
            border: "none",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            pointerEvents: "none",
          }}
        />
      </div>
      {/* Home indicator */}
      <div className="flex h-7 items-center justify-center bg-[oklch(0.1_0.02_265)]">
        <div className="h-1 w-20 rounded-full bg-[oklch(0.3_0.04_265)]" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE GALLERY CARD  (small browser mockup for the grid)
───────────────────────────────────────────────────────────── */

function PageCard({
  route,
  label,
  category,
}: {
  route: string;
  label: string;
  category: string;
}) {
  return (
    <a
      href={iframeSrc(route)}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="overflow-hidden rounded-xl border border-white/8 bg-[oklch(0.14_0.026_265/60%)] shadow-[0_8px_32px_-8px_oklch(0.05_0.02_265/50%)] transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[0_16px_48px_-8px_oklch(0.72_0.16_222/25%)] group-hover:-translate-y-1">
        {/* mini chrome */}
        <div className="flex items-center gap-1 border-b border-white/6 bg-[oklch(0.16_0.026_265)] px-2.5 py-1.5">
          {["oklch(0.65_0.22_25)", "oklch(0.78_0.18_75)", "oklch(0.72_0.2_148)"].map((c, i) => (
            <span key={i} className="size-1.5 rounded-full" style={{ background: c }} />
          ))}
          <div className="ml-2 flex-1 truncate rounded-sm bg-[oklch(0.12_0.02_265/70%)] px-1.5 py-0.5 text-[9px] font-mono text-muted-foreground/50">
            nexora.ai{route}
          </div>
          <ExternalLink className="size-2.5 text-muted-foreground/30 transition-colors group-hover:text-primary/60" />
        </div>
        {/* iframe preview */}
        <div style={{ height: 160, overflow: "hidden", position: "relative" }}>
          <iframe
            src={iframeSrc(route)}
            scrolling="no"
            title={label}
            style={{
              width: 1280,
              height: 820,
              border: "none",
              transform: "scale(0.22)",
              transformOrigin: "top left",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>
      <div className="mt-2.5 px-0.5">
        <p className="text-[11px] font-semibold uppercase tracking-[.15em] text-primary/60">{category}</p>
        <p className="text-sm font-semibold text-foreground/90">{label}</p>
      </div>
    </a>
  );
}

/* ─────────────────────────────────────────────────────────────
   ALL PAGES DATA
───────────────────────────────────────────────────────────── */

const pages = [
  { route: "/home-v1",           label: "Home V1 — Neural",      category: "Homepage" },
  { route: "/home-v2",           label: "Home V2 — Editorial",   category: "Homepage" },
  { route: "/home-v3",           label: "Home V3 — Cinematic",   category: "Homepage" },
  { route: "/pricing",           label: "Pricing",               category: "Marketing" },
  { route: "/features",          label: "Features",              category: "Marketing" },
  { route: "/solutions",         label: "Solutions",             category: "Marketing" },
  { route: "/integrations",      label: "Integrations",          category: "Marketing" },
  { route: "/use-cases",         label: "Use Cases",             category: "Marketing" },
  { route: "/dashboard-overview",label: "Dashboard",             category: "App" },
  { route: "/ai-chat",           label: "AI Chat",               category: "App" },
  { route: "/ai-agents",         label: "AI Agents",             category: "App" },
  { route: "/ai-automation",     label: "AI Automation",         category: "App" },
  { route: "/ai-analytics",      label: "AI Analytics",          category: "App" },
  { route: "/ai-workspace",      label: "AI Workspace",          category: "App" },
  { route: "/sign-in",           label: "Sign In",               category: "Auth" },
  { route: "/sign-up",           label: "Sign Up",               category: "Auth" },
  { route: "/forgot-password",   label: "Forgot Password",       category: "Auth" },
  { route: "/documentation",     label: "Documentation",         category: "Docs" },
  { route: "/api-documentation", label: "API Docs",              category: "Docs" },
  { route: "/help-center",       label: "Help Center",           category: "Docs" },
  { route: "/blog",              label: "Blog",                  category: "Content" },
  { route: "/blog-post",         label: "Blog Post",             category: "Content" },
  { route: "/resources",         label: "Resources",             category: "Content" },
  { route: "/case-studies",      label: "Case Studies",          category: "Content" },
  { route: "/case-study",        label: "Case Study Detail",     category: "Content" },
  { route: "/testimonials",      label: "Testimonials",          category: "Content" },
  { route: "/about",             label: "About",                 category: "Company" },
  { route: "/team",              label: "Team",                  category: "Company" },
  { route: "/careers",           label: "Careers",               category: "Company" },
  { route: "/contact",           label: "Contact",               category: "Company" },
  { route: "/faq",               label: "FAQ",                   category: "Company" },
  { route: "/pricing-comparison",label: "Pricing Comparison",    category: "Marketing" },
  { route: "/coming-soon",       label: "Coming Soon",           category: "Utility" },
  { route: "/404",               label: "404 Error",             category: "Utility" },
];

const categories = ["All", "Homepage", "App", "Marketing", "Auth", "Docs", "Content", "Company", "Utility"];

const includedFeatures = [
  "30+ Production-ready pages",
  "3 homepage variations",
  "Full design system (OKLCH tokens)",
  "Manrope + Space Grotesk typography",
  "Glassmorphism & premium gradients",
  "Dark mode, carefully tuned",
  "Full shadcn/ui component library",
  "Responsive across all breakpoints",
  "Vite + React 19 + TypeScript",
  "Tailwind CSS v4 with custom utilities",
  "TanStack React Query integration",
  "Premium animations & transitions",
  "svg neural network visualization",
  "Interactive dashboard components",
  "Auth pages (sign in / sign up / forgot)",
  "Blog & resource center layouts",
  "Documentation page",
  "AI agent, workflow & analytics UIs",
  "Pricing, FAQ, testimonials pages",
  "Team, careers, contact pages",
];

/* ─────────────────────────────────────────────────────────────
   MAIN SHOWCASE PAGE
───────────────────────────────────────────────────────────── */

export function ShowcasePage() {
  const [activeVariant, setActiveVariant] = useState<"v1" | "v2" | "v3">("v1");
  const [activeCategory, setActiveCategory] = useState("All");
  const [deviceTab, setDeviceTab] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const variantRoute = activeVariant === "v1" ? "/home-v1" : activeVariant === "v2" ? "/home-v2" : "/home-v3";
  const filteredPages = activeCategory === "All" ? pages : pages.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">

      {/* ── TOP NAV ─────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 border-b border-white/8 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="premium-gradient grid size-7 place-items-center rounded-xl shadow-[var(--shadow-glow)]">
              <Sparkles className="size-3.5 text-primary-foreground" />
            </span>
            <span className="font-display text-base font-bold tracking-tight">
              Nexora<span className="text-primary">AI</span>
            </span>
            <span className="hidden rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[.2em] text-primary sm:block">
              Template Kit
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="glass" size="sm" asChild>
              <a href={iframeSrc("/home-v1")} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="size-3.5" />
                Live Preview
              </a>
            </Button>
            <Button variant="premium" size="sm">
              <Star className="size-3.5" />
              Buy on ThemeForest
            </Button>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-5 pb-32 pt-24 lg:px-8">
        {/* Atmospheric glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 45% at 50% 0%, oklch(0.4 0.16 264 / 22%), transparent 60%)",
          }}
        />
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-20" />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[.25em] text-primary">
            <Sparkles className="size-3" />
            ThemeForest Premium Template
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[.96] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Nexora AI —{" "}
            <span className="text-gradient">Enterprise Template</span>
            <br />
            Kit for React
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            A complete, production-ready React template for AI SaaS products.
            30+ pages, full design system, 3 homepage variants, and premium
            animations — ready to customise and ship.
          </p>

          {/* Stats row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              ["30+", "Pages included"],
              ["3", "Homepage variants"],
              ["100%", "TypeScript"],
              ["React 19", "+ Tailwind v4"],
            ].map(([n, l]) => (
              <div key={n} className="text-center">
                <p className="font-display text-2xl font-bold text-foreground">{n}</p>
                <p className="text-xs text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button size="lg" variant="premium" asChild>
              <a href={iframeSrc("/home-v1")} target="_blank" rel="noopener noreferrer">
                View Live Demo <ArrowRight />
              </a>
            </Button>
            <Button size="lg" variant="glass">
              <Star className="size-4" /> Buy Now — $39
            </Button>
          </div>
        </div>

        {/* ── HERO BROWSER MOCKUP ─ */}
        <div className="relative mt-20 flex justify-center">
          <div
            className="pointer-events-none absolute -inset-x-20 -top-16 bottom-0 rounded-[4rem] blur-3xl"
            style={{ background: "oklch(0.72 0.16 222 / 12%)" }}
          />
          {/* Variant selector */}
          <div className="absolute -top-5 left-1/2 z-10 -translate-x-1/2">
            <div className="flex items-center gap-1 rounded-full border border-border/60 bg-card/70 px-1.5 py-1 backdrop-blur-lg shadow-[var(--shadow-glow)]">
              {(["v1", "v2", "v3"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setActiveVariant(v)}
                  className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                    activeVariant === v
                      ? "premium-gradient text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Home {v.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-5xl">
            {/* Shadow/glow behind mockup */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-70 blur-3xl"
              style={{ background: "oklch(0.72 0.16 222 / 14%)" }}
            />
            <div className="glass-panel relative overflow-hidden rounded-[1.75rem] p-2.5 shadow-[var(--shadow-glow-strong)]">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3">
                <span className="size-2.5 rounded-full bg-[oklch(0.65_0.22_25)]" />
                <span className="size-2.5 rounded-full bg-[oklch(0.78_0.18_75)]" />
                <span className="size-2.5 rounded-full bg-[oklch(0.72_0.2_148)]" />
                <div className="ml-3 flex h-6 flex-1 items-center gap-2 rounded-md border border-border bg-background/40 px-3 text-[11px] text-muted-foreground">
                  <Globe className="size-3 shrink-0 opacity-60" />
                  nexora.ai{variantRoute}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground/40">
                  <span className="size-2 rounded-full bg-success" />
                  Secure
                </div>
              </div>

              {/* Large scaled iframe */}
              <div
                className="overflow-hidden rounded-xl bg-background/60"
                style={{ height: 480 }}
              >
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <iframe
                    key={variantRoute}
                    src={iframeSrc(variantRoute)}
                    scrolling="no"
                    title={`Nexora AI ${activeVariant.toUpperCase()}`}
                    style={{
                      width: 1280,
                      height: 900,
                      border: "none",
                      transform: "scale(var(--hero-scale, 0.735))",
                      transformOrigin: "top left",
                      pointerEvents: "none",
                    }}
                    className="[--hero-scale:0.56] sm:[--hero-scale:0.62] lg:[--hero-scale:0.735]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 HOMEPAGE VARIANTS ─────────────────────────────── */}
      <section className="relative px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[.3em] text-primary">3 Homepage Styles</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              One kit. Three visual identities.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
              Switch between Neural, Editorial, and Cinematic homepage styles — each a distinct
              direction for your product launch.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              { route: "/home-v1", label: "Home V1", subtitle: "Neural Architecture", desc: "Dense constellation visuals, telemetry panels, floating agents. Maximum technical depth." },
              { route: "/home-v2", label: "Home V2", subtitle: "Editorial", desc: "Generous whitespace, oversized typography, and clean modular grid sections." },
              { route: "/home-v3", label: "Home V3", subtitle: "Cinematic", desc: "Full-bleed visuals, dramatic gradients, and immersive motion-first storytelling." },
            ].map(({ route, label, subtitle, desc }) => (
              <div key={route} className="glass-panel group relative overflow-hidden rounded-2xl p-1 transition-all duration-300 hover:shadow-[var(--shadow-glow-strong)] hover:-translate-y-1">
                <div className="overflow-hidden rounded-xl" style={{ height: 280 }}>
                  <iframe
                    src={iframeSrc(route)}
                    scrolling="no"
                    style={{
                      width: 1280,
                      height: 800,
                      border: "none",
                      transform: "scale(0.305)",
                      transformOrigin: "top left",
                      pointerEvents: "none",
                    }}
                  />
                </div>
                <div className="p-4 pt-3">
                  <div className="flex items-center justify-between">
                    <p className="font-display text-base font-semibold">{label}</p>
                    <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">{subtitle}</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{desc}</p>
                  <a
                    href={iframeSrc(route)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    Open full page <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVICE SHOWCASE ─────────────────────────────────── */}
      <section className="relative overflow-hidden px-5 py-28 lg:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, oklch(0.3 0.1 260 / 12%), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[.3em] text-primary">Fully Responsive</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Pixel-perfect on every screen.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
              Designed mobile-first and tested across desktop, tablet, and mobile. Every layout adapts beautifully.
            </p>
          </div>

          {/* Device type tabs */}
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-1 rounded-full border border-border/60 bg-card/50 p-1 backdrop-blur">
              {(["desktop", "tablet", "mobile"] as const).map((d) => {
                const Icon = d === "desktop" ? Monitor : d === "tablet" ? Tablet : Smartphone;
                return (
                  <button
                    key={d}
                    onClick={() => setDeviceTab(d)}
                    className={`flex cursor-pointer items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition-all ${
                      deviceTab === d
                        ? "premium-gradient text-primary-foreground shadow-[var(--shadow-glow)]"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="size-3.5" />
                    {d}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Device frames */}
          <div className="mt-16 flex justify-center">
            {deviceTab === "desktop" && (
              <div className="flex flex-col items-center gap-6">
                <DesktopMockup route="/home-v1" />
                <p className="text-sm text-muted-foreground">1280 × 800 — Desktop</p>
              </div>
            )}
            {deviceTab === "tablet" && (
              <div className="flex flex-col items-center gap-6">
                <TabletMockup route="/home-v1" />
                <p className="text-sm text-muted-foreground">768 × 1024 — Tablet (iPad)</p>
              </div>
            )}
            {deviceTab === "mobile" && (
              <div className="flex flex-col items-center gap-6">
                <MobileMockup route="/home-v1" />
                <p className="text-sm text-muted-foreground">390 × 844 — Mobile (iPhone 14)</p>
              </div>
            )}
          </div>

          {/* Three devices side by side (larger screens only) */}
          <div className="mt-20 hidden items-end justify-center gap-8 lg:flex">
            <div className="flex flex-col items-center gap-3">
              <TabletMockup route="/pricing" />
              <p className="text-xs text-muted-foreground">Pricing · Tablet</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <DesktopMockup route="/dashboard-overview" />
              <p className="text-xs text-muted-foreground">Dashboard · Desktop</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MobileMockup route="/sign-in" />
              <p className="text-xs text-muted-foreground">Sign In · Mobile</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAGE GALLERY ────────────────────────────────────── */}
      <section className="px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[.3em] text-primary">
              {pages.length}+ Pages
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Every page you could need.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
              From marketing to authentication to full AI dashboards — previews generated live from
              the real pages.
            </p>
          </div>

          {/* Category filter */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                    : "border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Page grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPages.map((page) => (
              <PageCard key={page.route} {...page} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ─────────────────────────────────── */}
      <section className="relative px-5 py-28 lg:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(40% 50% at 0% 50%, oklch(0.4 0.16 264 / 14%), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.3em] text-primary">
                What&apos;s Included
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                Everything to ship faster.
              </h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Built for teams who care about quality. Nexora AI includes a full design system,
                every marketing and app page you need, and premium interactions you&apos;d normally
                spend weeks building.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {includedFeatures.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-success/15">
                      <Check className="size-2.5 text-success" />
                    </div>
                    <span className="text-sm text-foreground/80">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: stacked browser mockups */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Back card */}
                <div className="absolute -bottom-4 -right-4 w-full rotate-[2deg] overflow-hidden rounded-2xl border border-white/8 opacity-50">
                  <div className="flex items-center gap-1.5 border-b border-white/6 bg-[oklch(0.16_0.026_265)] px-3 py-2">
                    {["oklch(0.65_0.22_25)", "oklch(0.78_0.18_75)", "oklch(0.72_0.2_148)"].map((c, i) => (
                      <span key={i} className="size-2 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <div style={{ height: 220, overflow: "hidden" }}>
                    <iframe
                      src={iframeSrc("/pricing")}
                      scrolling="no"
                      style={{ width: 1280, height: 820, border: "none", transform: "scale(0.3)", transformOrigin: "top left", pointerEvents: "none" }}
                    />
                  </div>
                </div>
                {/* Mid card */}
                <div className="absolute -left-4 top-4 w-full -rotate-[1.5deg] overflow-hidden rounded-2xl border border-white/8 opacity-70">
                  <div className="flex items-center gap-1.5 border-b border-white/6 bg-[oklch(0.16_0.026_265)] px-3 py-2">
                    {["oklch(0.65_0.22_25)", "oklch(0.78_0.18_75)", "oklch(0.72_0.2_148)"].map((c, i) => (
                      <span key={i} className="size-2 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <div style={{ height: 220, overflow: "hidden" }}>
                    <iframe
                      src={iframeSrc("/dashboard-overview")}
                      scrolling="no"
                      style={{ width: 1280, height: 820, border: "none", transform: "scale(0.3)", transformOrigin: "top left", pointerEvents: "none" }}
                    />
                  </div>
                </div>
                {/* Front card */}
                <div className="glass-panel relative overflow-hidden rounded-2xl shadow-[var(--shadow-glow-strong)]">
                  <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
                    {["oklch(0.65_0.22_25)", "oklch(0.78_0.18_75)", "oklch(0.72_0.2_148)"].map((c, i) => (
                      <span key={i} className="size-2.5 rounded-full" style={{ background: c }} />
                    ))}
                    <div className="ml-2 flex-1 truncate rounded-md border border-border bg-background/40 px-3 py-1 text-[11px] text-muted-foreground">
                      nexora.ai/home-v1
                    </div>
                  </div>
                  <div style={{ height: 260, overflow: "hidden" }}>
                    <iframe
                      src={iframeSrc("/home-v1")}
                      scrolling="no"
                      style={{ width: 1280, height: 820, border: "none", transform: "scale(0.325)", transformOrigin: "top left", pointerEvents: "none" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────── */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="glass-panel rounded-3xl p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[.3em] text-primary">Tech Stack</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  Modern stack, production-ready.
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                  Built on the same foundations the best SaaS products use. No bloat, no legacy —
                  just the best tools available in 2025.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "React 19", "TypeScript 5.9", "Vite 8", "Tailwind CSS v4",
                    "shadcn/ui", "TanStack Query", "Wouter", "Lucide Icons",
                    "OKLCH Colors", "Manrope + Space Grotesk", "tw-animate-css",
                    "class-variance-authority",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/60 bg-surface/80 px-3 py-1 text-[11px] font-semibold text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-4 lg:items-end">
                <div className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs font-semibold text-success">
                  <Zap className="size-3.5" />
                  Production ready
                </div>
                <div className="text-right">
                  <p className="font-display text-4xl font-bold text-foreground">A+</p>
                  <p className="text-xs text-muted-foreground">Lighthouse score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="relative px-5 pb-32 pt-20 lg:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 100%, oklch(0.35 0.15 260 / 20%), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[.25em] text-primary">
            <Layout className="size-3" />
            Ready to use
          </div>
          <h2 className="font-display text-5xl font-semibold leading-[.96] tracking-[-0.04em] sm:text-6xl">
            Ship your AI product
            <br />
            <span className="text-gradient">in days, not months.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground">
            Every page, component, and design decision has been made for you.
            Clone the repo, customise the brand, and launch.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="premium" className="px-10 text-base shadow-[var(--shadow-glow-strong)]">
              <Star className="size-4" />
              Buy on ThemeForest — $39
            </Button>
            <Button size="lg" variant="glass" asChild>
              <a href={iframeSrc("/home-v1")} target="_blank" rel="noopener noreferrer">
                View Live Demo <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>
          <p className="mt-5 text-xs text-muted-foreground/60">
            One-time purchase · Regular license · 6 months support included
          </p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="border-t border-white/8 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="premium-gradient grid size-5 place-items-center rounded-lg">
              <Sparkles className="size-2.5 text-primary-foreground" />
            </span>
            <span className="font-display font-bold">Nexora<span className="text-primary">AI</span></span>
            <span className="text-muted-foreground/40">·</span>
            <span>Premium ThemeForest Template Kit</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={iframeSrc("/home-v1")} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Live Demo</a>
            <a href={iframeSrc("/documentation")} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Documentation</a>
            <a href={iframeSrc("/home-v2")} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">V2 Preview</a>
            <a href={iframeSrc("/home-v3")} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">V3 Preview</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
