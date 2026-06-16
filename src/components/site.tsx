import { Link as WouterLink, useLocation } from "wouter";
  function Link({ to, children, className, onClick, ...rest }: { to: string; children?: React.ReactNode; className?: string; onClick?: () => void; [key: string]: unknown }) {
    return <WouterLink href={to} className={className} onClick={onClick} {...(rest as object)}>{children}</WouterLink>;
  }
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bot,
  Braces,
  Brain,
  Check,
  ChevronRight,
  CircleCheck,
  Clock,
  Cloud,
  Cpu,
  Database,
  Eye,
  Gauge,
  GitBranch,
  Globe,
  Layers3,
  Lock,
  Menu,
  MessageSquareText,
  Network,
  Play,
  Plug,
  Radar,
  ShieldCheck,
  Signal,
  Sparkles,
  Terminal,
  Timer,
  TrendingUp,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";


const nav = [
  ["Demos", "/home-v2"],
  ["Product", "/features"],
  ["Solutions", "/solutions"],
  ["Resources", "/resources"],
  ["Pricing", "/pricing"],
] as const;

export const routeContent: Record<
  string,
  { eyebrow: string; title: string; accent: string; description: string; kind?: string }
> = {
  "/home-v2": {
    eyebrow: "Intelligence, orchestrated",
    title: "One workspace. Every model.",
    accent: "Infinite leverage.",
    description:
      "Unify teams, data, and AI in a secure workspace designed to turn ambitious ideas into production systems.",
    kind: "product",
  },
  "/home-v3": {
    eyebrow: "The agentic enterprise",
    title: "Build a workforce that",
    accent: "never stops learning.",
    description:
      "Deploy autonomous agents that reason, collaborate, and deliver measurable outcomes across your business.",
    kind: "agents",
  },
  "/about": {
    eyebrow: "About Nexora",
    title: "Intelligence should amplify",
    accent: "human ambition.",
    description:
      "We are building the trusted intelligence layer for the world's most consequential organizations.",
    kind: "company",
  },
  "/team": {
    eyebrow: "Our team",
    title: "Built by minds obsessed with",
    accent: "what comes next.",
    description:
      "Researchers, designers, engineers, and operators reimagining how people and intelligent systems work together.",
    kind: "company",
  },
  "/careers": {
    eyebrow: "Careers",
    title: "Do the defining work of",
    accent: "your career.",
    description:
      "Join a high-agency team building foundational technology with global reach and enduring impact.",
    kind: "company",
  },
  "/contact": {
    eyebrow: "Contact sales",
    title: "Let’s build your",
    accent: "AI advantage.",
    description:
      "Tell us where you want to go. Our enterprise team will design the fastest, safest route there.",
    kind: "contact",
  },
  "/features": {
    eyebrow: "Platform",
    title: "Everything you need to move from",
    accent: "prototype to production.",
    description:
      "A composable AI platform with the speed builders want and the governance enterprises demand.",
    kind: "product",
  },
  "/feature-details": {
    eyebrow: "Nexora Intelligence Engine",
    title: "Reason over every signal in",
    accent: "your business.",
    description:
      "Ground every answer in live enterprise context with retrieval, memory, and sophisticated model routing.",
    kind: "product",
  },
  "/solutions": {
    eyebrow: "Solutions",
    title: "Your hardest workflows,",
    accent: "finally automated.",
    description:
      "Purpose-built intelligence systems for revenue, operations, security, finance, and customer experience.",
    kind: "product",
  },
  "/integrations": {
    eyebrow: "Integrations",
    title: "Connect the tools that",
    accent: "run your world.",
    description:
      "Bring intelligence to your existing stack with secure, native connections across more than 200 platforms.",
    kind: "integrations",
  },
  "/api-documentation": {
    eyebrow: "Developer platform",
    title: "Powerful primitives.",
    accent: "Remarkably simple APIs.",
    description:
      "Build production-ready AI experiences with a platform engineered for speed, observability, and control.",
    kind: "docs",
  },
  "/ai-chat": {
    eyebrow: "Nexora Chat",
    title: "A conversation with",
    accent: "your entire business.",
    description:
      "Ask complex questions, create polished work, and take action across every connected source from one secure interface.",
    kind: "chat",
  },
  "/ai-automation": {
    eyebrow: "AI Automation",
    title: "Turn every process into an",
    accent: "intelligent workflow.",
    description:
      "Design, deploy, and improve complex automations without writing brittle orchestration code.",
    kind: "agents",
  },
  "/ai-agents": {
    eyebrow: "Autonomous agents",
    title: "Delegate outcomes,",
    accent: "not just tasks.",
    description:
      "Build role-aware agents that plan, use tools, collaborate, and operate safely within your guardrails.",
    kind: "agents",
  },
  "/ai-analytics": {
    eyebrow: "AI Analytics",
    title: "From raw signals to",
    accent: "decisive action.",
    description:
      "Discover patterns, forecast outcomes, and explain every insight with analytics that speaks your language.",
    kind: "analytics",
  },
  "/ai-workspace": {
    eyebrow: "AI Workspace",
    title: "Your company’s intelligence,",
    accent: "in one place.",
    description:
      "A focused environment where people, agents, knowledge, and workflows come together.",
    kind: "product",
  },
  "/pricing-comparison": {
    eyebrow: "Compare plans",
    title: "Choose the control and scale",
    accent: "your team needs.",
    description:
      "Clear capabilities, flexible usage, and enterprise options without hidden complexity.",
    kind: "pricing",
  },
  "/use-cases": {
    eyebrow: "Use cases",
    title: "AI that performs in",
    accent: "the real world.",
    description: "See how high-performing teams compress weeks of work into minutes with Nexora.",
    kind: "product",
  },
  "/case-studies": {
    eyebrow: "Customer stories",
    title: "Category leaders move",
    accent: "faster with Nexora.",
    description:
      "Explore the systems, strategies, and results behind the world’s most effective AI teams.",
    kind: "stories",
  },
  "/case-study": {
    eyebrow: "VantaGrid × Nexora",
    title: "How VantaGrid cut resolution time",
    accent: "by 73%.",
    description:
      "A global infrastructure company transformed support operations with a fleet of governed service agents.",
    kind: "stories",
  },
  "/testimonials": {
    eyebrow: "Customer voices",
    title: "Trusted by teams with",
    accent: "no room for compromise.",
    description:
      "Why builders, operators, and executives choose Nexora for their most critical AI systems.",
    kind: "stories",
  },
  "/resources": {
    eyebrow: "Resource center",
    title: "Ideas for the",
    accent: "intelligent enterprise.",
    description:
      "Research, playbooks, and practical guidance from teams shaping the next generation of work.",
    kind: "resources",
  },
  "/blog": {
    eyebrow: "Nexora Journal",
    title: "Signals from the edge of",
    accent: "applied intelligence.",
    description:
      "Product thinking, engineering deep dives, and operator perspectives on building with AI.",
    kind: "resources",
  },
  "/blog-post": {
    eyebrow: "Field Notes · 8 min read",
    title: "The enterprise agent stack is",
    accent: "taking shape.",
    description:
      "A practical framework for memory, tools, orchestration, evaluation, and governance in production agent systems.",
    kind: "article",
  },
  "/documentation": {
    eyebrow: "Documentation",
    title: "Build your first intelligent system",
    accent: "in minutes.",
    description:
      "Guides, concepts, examples, and API references for every part of the Nexora platform.",
    kind: "docs",
  },
  "/help-center": {
    eyebrow: "Help Center",
    title: "How can we",
    accent: "help you move faster?",
    description: "Find answers, explore guides, or connect with a Nexora specialist.",
    kind: "help",
  },
  "/faq": {
    eyebrow: "Frequently asked questions",
    title: "Everything you need to",
    accent: "move with confidence.",
    description:
      "Straight answers about our platform, security, models, pricing, and implementation.",
    kind: "faq",
  },
  "/changelog": {
    eyebrow: "Platform updates",
    title: "Every improvement, shipped",
    accent: "continuously.",
    description: "New capabilities, fixes, and performance improvements — logged with full context.",
    kind: "changelog",
  },
  "/security": {
    eyebrow: "Security & Compliance",
    title: "Enterprise-grade security,",
    accent: "by design.",
    description: "Zero-trust architecture, private VPC, customer-managed keys, and per-action audit trails.",
    kind: "security",
  },
  "/customers": {
    eyebrow: "Customer stories",
    title: "The fastest-moving enterprise teams",
    accent: "run on Nexora.",
    description: "Real results from the operators, builders, and executives who chose Nexora for their most critical work.",
    kind: "stories",
  },
  "/status": {
    eyebrow: "System status",
    title: "Platform health,",
    accent: "in real time.",
    description: "Live status for every Nexora service. Updated every 60 seconds.",
    kind: "status",
  },
  "/privacy": {
    eyebrow: "Privacy policy",
    title: "Your data belongs",
    accent: "to you.",
    description: "How we collect, use, and protect the information you share with Nexora.",
    kind: "legal",
  },
  "/terms": {
    eyebrow: "Terms of service",
    title: "Clear terms, built for",
    accent: "enterprise trust.",
    description: "The agreement governing your use of the Nexora platform and services.",
    kind: "legal",
  },
};

export function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
    >
      <span className="premium-gradient grid size-8 place-items-center rounded-xl shadow-[var(--shadow-glow)]">
        <Sparkles className="size-4 text-primary-foreground" />
      </span>
      Nexora<span className="text-primary">AI</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 justify-self-end md:flex">
          <Button variant="ghost" asChild>
            <Link to="/sign-in">Sign in</Link>
          </Button>
          <Button variant="premium" asChild>
            <Link to="/sign-up">
              Start building <ArrowRight />
            </Link>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="animate-mobile-menu-in border-t border-border bg-background p-5 md:hidden">
          <nav className="flex flex-col gap-2">
            {nav.map(([label, to]) => (
              <Button key={to} variant="ghost" className="justify-start" asChild>
                <Link to={to} onClick={() => setOpen(false)}>
                  {label}
                </Link>
              </Button>
            ))}
            <Button variant="premium" className="mt-3" asChild>
              <Link to="/sign-up">Start building</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-12 sm:mt-20 border-t border-border px-5 pb-10 pt-14 sm:pt-20 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel mb-10 sm:mb-16 grid items-center gap-6 rounded-3xl p-6 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.25em] text-primary">
              Stay in the loop
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-.02em] sm:text-3xl">
              Field notes from the agentic enterprise.
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Monthly. Operator-grade. Zero hype. Unsubscribe in one click.
            </p>
          </div>
          <form className="flex flex-col gap-2 rounded-2xl border border-border bg-background/60 p-2 backdrop-blur sm:flex-row sm:p-1.5">
            <input
              type="email"
              placeholder="you@company.com"
              className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground sm:py-0"
            />
            <Button variant="premium" type="submit" className="w-full sm:w-auto">
              Subscribe <ArrowRight />
            </Button>
          </form>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.4fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">
              The secure intelligence layer powering the world's most ambitious teams.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs font-semibold text-success">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              All systems operational
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {([
              ["Product", [["Features", "/features"], ["Integrations", "/integrations"], ["Pricing", "/pricing"], ["Changelog", "/changelog"]]],
              ["Solutions", [["AI Agents", "/ai-agents"], ["Automation", "/ai-automation"], ["Analytics", "/ai-analytics"], ["Security", "/security"]]],
              ["Company", [["About", "/about"], ["Careers", "/careers"], ["Customers", "/customers"], ["Contact", "/contact"]]],
              ["Resources", [["Blog", "/blog"], ["Docs", "/documentation"], ["Help Center", "/help-center"], ["Status", "/status"]]],
            ] as [string, [string, string][]][]).map(([h, items]) => (
              <div key={h}>
                <p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-foreground/90">{h}</p>
                <ul className="space-y-3">
                  {items.map(([label, to]) => (
                    <li key={label}>
                      <Link to={to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-border pt-7 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© 2026 Nexora AI · All rights reserved</span>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[10px] italic text-muted-foreground/50">Example compliance:</span>
            {["SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA"].map((b) => (
              <span
                key={b}
                title="Example compliance badge — for template demonstration purposes only"
                className="cursor-help rounded-full border border-border/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60"
              >
                {b}
              </span>
            ))}
          </div>
          <div className="flex gap-5">
            {([["Privacy", "/privacy"], ["Terms", "/terms"], ["Trust", "/security"], ["DPA", "/contact"]] as [string,string][]).map(([label, to]) => (
              <Link key={label} to={to} className="hover:text-foreground">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function MiniDashboard() {
  return (
    <div className="glass-panel relative overflow-hidden rounded-3xl p-4 sm:p-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <p className="text-xs text-muted-foreground">AI operations</p>
          <p className="mt-1 font-display text-lg font-semibold">Command center</p>
        </div>
        <span className="flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-xs text-success">
          <span className="size-1.5 rounded-full bg-success" />
          All systems live
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
        {[
          ["Tasks", "24.8K", "+31%"],
          ["Accuracy", "98.7%", "+2.4%"],
          ["Saved", "1,840h", "+46%"],
        ].map(([a, b, c]) => (
          <div key={a} className="rounded-2xl border border-border bg-background/35 p-3 sm:p-4">
            <p className="text-[10px] text-muted-foreground sm:text-xs">{a}</p>
            <p className="mt-2 font-display text-lg font-semibold sm:text-2xl">{b}</p>
            <p className="mt-1 text-[10px] text-success">{c}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-border bg-background/30 p-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-medium">Agent throughput</span>
          <span className="text-[10px] text-muted-foreground">Last 30 days</span>
        </div>
        <svg
          viewBox="0 0 600 180"
          className="h-32 w-full"
          role="img"
          aria-label="Agent throughput rising chart"
        >
          <defs>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--primary)" stopOpacity=".4" />
              <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 150 C70 140 80 110 150 120 S245 95 300 105 S385 40 450 65 S525 18 600 25 L600 180 L0 180Z"
            fill="url(#area)"
          />
          <path
            d="M0 150 C70 140 80 110 150 120 S245 95 300 105 S385 40 450 65 S525 18 600 25"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeDasharray="800"
            style={{ animation: "draw 2.4s ease-out both" }}
          />
        </svg>
      </div>
    </div>
  );
}


export function HomePage() {
  return (
    <SiteShell>
      <main>
        {/* ============================================================
            V1 HERO — Neural Intelligence Architecture
            No orb. Asymmetric layered hero with live agent constellation,
            radial gradients, floating telemetry, and depth-stacked panels.
           ============================================================ */}
        <section className="relative overflow-hidden px-5 pb-16 pt-24 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-40">
          {/* Layered atmospheric background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 80% 10%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%), radial-gradient(45% 40% at 10% 30%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 65%)",
            }}
          />
          <div className="grid-fade pointer-events-none absolute inset-0 opacity-25" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
            style={{ background: "var(--gradient-primary, linear-gradient(135deg, var(--primary), color-mix(in oklab, var(--primary) 40%, transparent)))" }}
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                <Sparkles className="size-3.5" />
                Introducing Nexora Agents 2.0 <ArrowRight className="size-3" />
              </div>
              <h1 className="max-w-3xl font-display text-[2.5rem] font-semibold leading-[.97] tracking-[-.045em] sm:text-5xl lg:text-7xl">
                The enterprise platform for{" "}
                <span className="text-gradient">governed AI operations</span>.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                Purpose-built for enterprise scale — deploy governed AI agents across every team,
                connect your entire technology stack, and operate production workflows without
                platform engineering bottlenecks.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="premium" asChild>
                  <Link to="/sign-up">
                    Start building free <ArrowRight />
                  </Link>
                </Button>
                <Button size="lg" variant="glass" asChild>
                  <Link to="/dashboard-overview"><Play /> Watch the film</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                {["No credit card required", "Deploy in days", "Enterprise-grade security"].map((x) => (
                  <span key={x} className="flex items-center gap-1.5">
                    <CircleCheck className="size-3.5 text-success" />
                    {x}
                  </span>
                ))}
              </div>
              <div className="mt-10 inline-flex items-center gap-1 rounded-full border border-border bg-card/60 p-1 text-xs backdrop-blur">
                <span className="rounded-full bg-primary px-3 py-1.5 font-semibold text-primary-foreground">Home V1</span>
                <Link to="/home-v2" className="rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground">V2 · Editorial</Link>
                <Link to="/home-v3" className="rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground">V3 · Cinematic</Link>
              </div>
            </div>

            {/* Neural network constellation visual (replaces orb image) */}
            <div className="relative">
              <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-card/80 via-background/60 to-card/40 p-5 shadow-2xl backdrop-blur-xl">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-70"
                  style={{
                    background:
                      "radial-gradient(40% 30% at 30% 20%, color-mix(in oklab, var(--primary) 35%, transparent), transparent 60%), radial-gradient(40% 30% at 80% 80%, color-mix(in oklab, var(--primary) 20%, transparent), transparent 65%)",
                  }}
                />

                {/* Constellation SVG */}
                <svg viewBox="0 0 400 480" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Nexora neural agent constellation">
                  <defs>
                    <radialGradient id="node-g" cx="50%" cy="50%" r="50%">
                      <stop offset="0" stopColor="var(--primary)" stopOpacity="1" />
                      <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="edge-g" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="var(--primary)" stopOpacity="0.05" />
                      <stop offset="0.5" stopColor="var(--primary)" stopOpacity="0.8" />
                      <stop offset="1" stopColor="var(--primary)" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  {/* edges */}
                  <g stroke="url(#edge-g)" strokeWidth="1.2" fill="none" opacity="0.9">
                    <path d="M70 90 L 200 200 L 330 110" />
                    <path d="M70 90 L 60 280 L 200 200" />
                    <path d="M330 110 L 340 300 L 200 200" />
                    <path d="M60 280 L 200 400 L 340 300" />
                    <path d="M200 200 L 200 400" />
                    <path d="M70 90 L 330 110" />
                    <path d="M60 280 L 340 300" />
                    <path d="M150 50 L 70 90" />
                    <path d="M260 60 L 330 110" />
                    <path d="M120 440 L 200 400" />
                    <path d="M290 440 L 200 400" />
                  </g>
                  {/* outer halo nodes */}
                  {[[150,50],[260,60],[120,440],[290,440]].map(([x,y],i)=>(
                    <g key={`o${i}`}>
                      <circle cx={x} cy={y} r="14" fill="url(#node-g)" opacity="0.6"/>
                      <circle cx={x} cy={y} r="3" className="fill-primary"/>
                    </g>
                  ))}
                  {/* primary nodes */}
                  {[[70,90],[330,110],[60,280],[340,300],[200,400]].map(([x,y],i)=>(
                    <g key={`p${i}`}>
                      <circle cx={x} cy={y} r="22" fill="url(#node-g)" opacity="0.7"/>
                      <circle cx={x} cy={y} r="6" className="fill-primary"/>
                      <circle cx={x} cy={y} r="6" className="fill-primary" opacity="0.6">
                        <animate attributeName="r" values="6;14;6" dur={`${2.4 + i*0.3}s`} repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.6;0;0.6" dur={`${2.4 + i*0.3}s`} repeatCount="indefinite"/>
                      </circle>
                    </g>
                  ))}
                  {/* central core */}
                  <g>
                    <circle cx="200" cy="200" r="50" fill="url(#node-g)" opacity="0.9"/>
                    <circle cx="200" cy="200" r="18" className="fill-primary"/>
                    <circle cx="200" cy="200" r="28" fill="none" stroke="var(--primary)" strokeOpacity="0.5" strokeWidth="1"/>
                    <circle cx="200" cy="200" r="42" fill="none" stroke="var(--primary)" strokeOpacity="0.25" strokeWidth="1"/>
                  </g>
                </svg>

                {/* corner agent badges */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xl border border-border/60 bg-background/70 px-2.5 py-1.5 backdrop-blur">
                  <span className="grid size-6 place-items-center rounded-md bg-primary/15 text-primary"><Bot className="size-3.5"/></span>
                  <span className="text-[10px] font-semibold">Atlas · Strategy</span>
                  <span className="size-1.5 rounded-full bg-success"/>
                </div>
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-xl border border-border/60 bg-background/70 px-2.5 py-1.5 backdrop-blur">
                  <span className="grid size-6 place-items-center rounded-md bg-primary/15 text-primary"><ShieldCheck className="size-3.5"/></span>
                  <span className="text-[10px] font-semibold">Onyx · Policy</span>
                  <span className="size-1.5 rounded-full bg-success"/>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-border/60 bg-background/70 px-2.5 py-1.5 backdrop-blur">
                  <span className="grid size-6 place-items-center rounded-md bg-primary/15 text-primary"><BarChart3 className="size-3.5"/></span>
                  <span className="text-[10px] font-semibold">Mira · Revenue</span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl border border-border/60 bg-background/70 px-2.5 py-1.5 backdrop-blur">
                  <span className="grid size-6 place-items-center rounded-md bg-primary/15 text-primary"><MessageSquareText className="size-3.5"/></span>
                  <span className="text-[10px] font-semibold">Vega · Support</span>
                </div>
              </div>

              {/* Floating telemetry cards */}
              <div className="glass-panel absolute -left-3 top-10 hidden w-48 rounded-2xl border border-border/70 bg-card/80 p-3 shadow-[var(--shadow-glow,0_20px_60px_-20px_color-mix(in_oklab,var(--primary)_40%,transparent))] backdrop-blur-xl sm:block">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Live throughput</p>
                <p className="mt-1 font-display text-2xl font-semibold text-gradient">412k/s</p>
                <div className="mt-2 flex items-end gap-1 h-8">
                  {[40,55,32,68,72,48,80,62,90,76].map((h,i)=>(
                    <span key={i} className="flex-1 rounded-sm bg-primary/70" style={{height:`${h}%`}}/>
                  ))}
                </div>
              </div>
              <div className="glass-panel absolute -right-3 bottom-12 hidden w-56 rounded-2xl border border-border/70 bg-card/80 p-3 shadow-[var(--shadow-glow,0_20px_60px_-20px_color-mix(in_oklab,var(--primary)_40%,transparent))] backdrop-blur-xl sm:block">
                <div className="flex items-center gap-2">
                  <Gauge className="size-4 text-primary"/>
                  <p className="text-xs font-semibold">Pipeline executed</p>
                  <span className="ml-auto text-xs font-semibold text-success">+$284K</span>
                </div>
                <p className="mt-2 font-mono text-[10px] text-muted-foreground">router · gpt-mini → claude-haiku · 412ms p50</p>
              </div>
            </div>
          </div>
        </section>
        <LogoCloud />
        {/* V1 EXCLUSIVE: Enterprise Operations Center */}
        <OperationsCenter />
        <AIEcosystemShowcase />
        {/* V1 EXCLUSIVE: Agent Lifecycle Timeline — Nexora Flagship Feature */}
        <AgentLifecycleTimeline />
        <BentoFeatures />
        <DashboardShowcase />
        <WorkflowVisualization />
        <AgentArchitecture />
        <EnterpriseDataFlowMatrix />
        <EnterpriseTrust />
        <ProcessTimeline />
        <Testimonials />
        <PremiumCTA />
      </main>
    </SiteShell>
  );
}

function LogoCloud() {
  const logos = ["VERTEX", "QUANTIC", "ARC° SYSTEMS", "NORTHSTAR", "HELIOS", "OBSIDIAN"];
  return (
    <section className="relative px-5 py-10 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] font-bold uppercase tracking-[.3em] text-muted-foreground">
            Trusted by enterprise teams worldwide
          </p>
          <p className="mt-3 max-w-xl font-display text-lg text-foreground/85">
            From regulated industries to global operations — Nexora processes
            <span className="text-foreground"> 2.4B+ </span>enterprise tasks annually.
          </p>
        </div>
        <div className="glass-panel mt-10 grid grid-cols-2 divide-border overflow-hidden rounded-3xl sm:grid-cols-3 sm:divide-x lg:grid-cols-6">
          {logos.map((name, i) => (
            <div
              key={name}
              className={`flex h-20 items-center justify-center font-display text-sm font-bold tracking-[.18em] text-muted-foreground transition-colors hover:text-foreground ${i >= 2 && "border-t border-border sm:border-t-0"} ${i >= 3 && "sm:border-t lg:border-t-0"}`}
            >
              {name}
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {[
            ["G2", "4.9 / 5", "Leader · Spring 26"],
            ["Forrester", "Strong Performer", "Enterprise AI Wave"],
            ["SOC 2 Type II", "Audited", "+ ISO 27001 · HIPAA"],
            ["Uptime", "99.99%", "Trailing 12 months"],
          ].map(([k, v, sub]) => (
            <div key={k} className="bg-background/60 p-5">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</p>
              <p className="mt-2 font-display text-base font-semibold">{v}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoFeatures() {
  return (
    <section className="px-5 py-14 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="The enterprise AI operating layer"
            title="One governed platform replacing a dozen brittle tools."
            body="Stop stitching together prompt wrappers, scripts, and monitoring dashboards. Nexora unifies the entire enterprise AI lifecycle in one auditable system."
          />
          <Link
            to="/features"
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground md:inline-flex"
          >
            View the full platform <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <div className="mt-14 grid gap-4 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            className="lg:col-span-4 lg:row-span-2"
            icon={Bot}
            tag="Autonomous Agents"
            title="A governed workforce that executes at enterprise scale."
            body="Compose role-aware agents with memory, tools, and guardrails. Ship a single agent in days — orchestrate a production fleet by next quarter."
            visual={
              <div className="relative mt-8 grid grid-cols-3 gap-3">
                {[
                  ["Revenue Scout", "running", "primary"],
                  ["Support Triage", "running", "success"],
                  ["Research", "running", "primary"],
                  ["Pricing Ops", "queued", "muted"],
                  ["Finance Close", "running", "success"],
                  ["Security Watch", "running", "primary"],
                ].map(([n, s, c]) => (
                  <div
                    key={n}
                    className="rounded-2xl border border-border bg-background/40 p-4 backdrop-blur"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Bot className="size-4" />
                      </span>
                      <span
                        className={`size-1.5 rounded-full ${c === "success" ? "bg-success" : c === "muted" ? "bg-muted-foreground" : "bg-primary"} animate-pulse`}
                      />
                    </div>
                    <p className="mt-3 truncate text-xs font-semibold">{n}</p>
                    <p className="mt-1 text-[10px] capitalize text-muted-foreground">{s}</p>
                  </div>
                ))}
              </div>
            }
          />
          <BentoCard
            className="lg:col-span-2"
            icon={ShieldCheck}
            tag="Enterprise Security"
            title="Zero-trust by design."
            body="SOC 2, ISO 27001, HIPAA. Private VPC, customer-managed keys, and per-action audit logs."
          />
          <BentoCard
            className="lg:col-span-2"
            icon={Network}
            tag="200+ Integrations"
            title="Integrate with your entire technology stack."
            body="Salesforce, Snowflake, Slack, Notion, SAP, and every modern enterprise data source — natively."
          />
          <BentoCard
            className="lg:col-span-3"
            icon={Workflow}
            tag="Visual Automation"
            title="Orchestrate complex workflows without brittle code."
            body="Replace thousands of lines of fragile orchestration with governed flows your operators can configure and audit themselves."
          />
          <BentoCard
            className="lg:col-span-3"
            icon={BarChart3}
            tag="Predictive Analytics"
            title="Analytics that drive measurable business decisions."
            body="Surface actionable signal from your data with domain-tuned models — and decisions your stakeholders can verify and trust."
          />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  icon: Icon,
  tag,
  title,
  body,
  visual,
  className = "",
}: {
  icon: typeof Bot;
  tag: string;
  title: string;
  body: string;
  visual?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass-panel group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] ${className}`}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl border border-border bg-background/40 text-primary">
          <Icon className="size-5" />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[.22em] text-muted-foreground">
          {tag}
        </span>
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-[-.02em] sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
      {visual}
    </div>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "Nexora compressed nine months of platform work into six weeks. Our agents are now closing tickets faster than our top engineers.",
      name: "Maya Chen",
      role: "COO, VantaGrid",
      stat: ["73%", "faster resolution"],
    },
    {
      quote:
        "The governance layer is what sold the board. Every agent action is auditable and policy-bound — and it still ships in days, not quarters.",
      name: "Daniel Okafor",
      role: "VP Engineering, Northstar",
      stat: ["$4.2M", "annual savings"],
    },
    {
      quote:
        "We replaced four vendors and a homegrown orchestrator. The team didn't just adopt it — they're building on top of it daily.",
      name: "Priya Raman",
      role: "Head of AI, Helios",
      stat: ["12×", "developer leverage"],
    },
  ];
  return (
    <section className="relative px-5 py-14 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Customer voices"
          title="The fastest-moving enterprise teams run on Nexora."
          body="From high-growth scale-ups to global enterprises, teams choose Nexora when mission-critical operations cannot fail."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="glass-panel relative flex flex-col rounded-3xl p-7"
            >
              <svg
                className="size-7 text-primary/60"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M7 7h4v4H7c0 3 2 4 4 4v3c-5 0-8-3-8-8V7zm10 0h4v4h-4c0 3 2 4 4 4v3c-5 0-8-3-8-8V7z" />
              </svg>
              <blockquote className="mt-5 font-display text-lg leading-snug text-foreground/95">
                "{t.quote}"
              </blockquote>
              <div className="mt-auto pt-8">
                <div className="flex items-baseline gap-3 border-b border-border pb-5">
                  <span className="font-display text-3xl font-semibold text-gradient">
                    {t.stat[0]}
                  </span>
                  <span className="text-xs text-muted-foreground">{t.stat[1]}</span>
                </div>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="premium-gradient grid size-10 place-items-center rounded-full font-display text-sm font-bold text-primary-foreground">
                    {t.name[0]}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function PremiumCTA() {
  return (
    <section className="px-5 py-14 sm:py-24 lg:px-8">
      <div className="glass-panel relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] p-10 sm:p-16">
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-30" />
        <div
          className="pointer-events-none absolute -left-32 top-1/2 size-[28rem] -translate-y-1/2 rounded-full bg-primary/25 blur-3xl"
        />
        <div
          className="pointer-events-none absolute -right-32 top-0 size-[24rem] rounded-full opacity-60 blur-3xl"
          style={{ backgroundImage: "var(--gradient-primary)" }}
        />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.28em] text-primary">
              Production-ready enterprise AI
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.03] tracking-[-.04em] sm:text-6xl">
              Operate at a higher level with{" "}
              <span className="text-gradient">governed AI.</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
              Deploy your first production agent in days. Scale to a governed fleet within a
              quarter — with the reliability, observability, and policy controls enterprise teams require.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" variant="premium" asChild>
                <Link to="/sign-up">
                  Start building free <ArrowRight />
                </Link>
              </Button>
              <Button size="lg" variant="glass" asChild>
                <Link to="/contact">Book an enterprise demo</Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
              {["14-day enterprise trial", "Migrate in days", "Dedicated success team"].map(
                (x) => (
                  <span key={x} className="flex items-center gap-1.5">
                    <CircleCheck className="size-3.5 text-success" />
                    {x}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["2.4B", "Tasks completed"],
              ["99.99%", "Platform uptime"],
              ["73%", "Faster delivery"],
              ["12×", "Avg ROI · year 1"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="rounded-2xl border border-border bg-background/40 p-5 backdrop-blur"
              >
                <p className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                  {n}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-.03em] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">{body}</p>
    </div>
  );
}

function VisualFor({ kind }: { kind?: string }) {
  if (kind === "docs")
    return (
      <div className="glass-panel overflow-hidden rounded-3xl">
        <div className="flex border-b border-border">
          <div className="w-28 border-r border-border p-4 text-[10px] leading-7 text-muted-foreground">
            GETTING STARTED
            <br />
            <span className="text-primary">Quickstart</span>
            <br />
            Authentication
            <br />
            Agents
            <br />
            Tools
          </div>
          <pre className="flex-1 overflow-hidden p-5 text-[11px] leading-6 text-muted-foreground">
            <code>
              <span className="text-primary">import</span> {`{ nexora }`}{" "}
              <span className="text-primary">from</span> 'nexora';{`\n\n`}
              <span className="text-primary">const</span> agent = nexora.agent(
              {`{\n  model: 'nx-2',\n  tools: ['search', 'crm']\n}`});{`\n\n`}
              <span className="text-success">// Ready in 82ms</span>
            </code>
          </pre>
        </div>
      </div>
    );
  if (kind === "chat")
    return (
      <div className="glass-panel rounded-3xl p-5">
        <div className="mb-5 flex items-center gap-3 border-b border-border pb-4">
          <span className="grid size-9 place-items-center rounded-xl bg-primary/15">
            <Bot className="size-4 text-primary" />
          </span>
          <div>
            <p className="text-sm font-semibold">Strategy copilot</p>
            <p className="text-[10px] text-success">● Connected to 14 sources</p>
          </div>
        </div>
        <div className="space-y-3 text-xs">
          <div className="ml-10 rounded-2xl rounded-tr-sm bg-primary px-4 py-3 text-primary-foreground">
            What changed in enterprise pipeline this week?
          </div>
          <div className="mr-6 rounded-2xl rounded-tl-sm bg-secondary px-4 py-3 leading-5 text-muted-foreground">
            Pipeline increased 18.4%, driven by expansion in EMEA. I found three at-risk
            opportunities and prepared next steps.
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between rounded-xl border border-border bg-background/40 p-3 text-xs text-muted-foreground">
          Ask anything... <MessageSquareText className="size-4 text-primary" />
        </div>
      </div>
    );
  if (kind === "integrations")
    return (
      <div className="glass-panel relative grid min-h-80 place-items-center overflow-hidden rounded-3xl">
        <div className="absolute inset-0 grid-fade opacity-50" />
        <div className="premium-gradient relative grid size-20 place-items-center rounded-3xl shadow-[var(--shadow-glow-strong)]">
          <Sparkles className="size-8 text-primary-foreground" />
        </div>
        {[Braces, Database, Workflow, MessageSquareText].map((I, i) => (
          <span
            key={i}
            className={`absolute grid size-12 place-items-center rounded-2xl border border-border bg-surface-strong text-primary ${i === 0 ? "left-[12%] top-[16%]" : i === 1 ? "right-[12%] top-[18%]" : i === 2 ? "bottom-[14%] left-[18%]" : "bottom-[12%] right-[16%]"}`}
          >
            <I className="size-5" />
          </span>
        ))}
      </div>
    );
  if (kind === "analytics") return <MiniDashboard />;
  return (
    <div className="glass-panel relative min-h-80 overflow-hidden rounded-3xl p-5">
      <div className="absolute inset-0 grid-fade opacity-40" />
      <div className="relative grid h-full min-h-72 place-items-center">
        <div
          className="absolute h-52 w-52 rounded-full border border-primary/30"
          style={{ animation: "float 5s ease-in-out infinite" }}
        />
        <div className="absolute h-36 w-36 rounded-full border border-primary/30" />
        <span className="premium-gradient grid size-20 place-items-center rounded-3xl shadow-[var(--shadow-glow-strong)]">
          <Bot className="size-8 text-primary-foreground" />
        </span>
        {["Reason", "Act", "Learn"].map((x, i) => (
          <span
            key={x}
            className={`absolute rounded-full border border-border bg-surface px-4 py-2 text-xs ${i === 0 ? "left-[8%] top-[18%]" : i === 1 ? "right-[8%] top-[28%]" : "bottom-[12%]"}`}
          >
            {x}
          </span>
        ))}
      </div>
    </div>
  );
}

export function GenericPage({ path }: { path: string }) {
  const c = routeContent[path] ?? routeContent["/features"];
  const stats =
    c.kind === "company"
      ? [
          ["42", "Countries"],
          ["180+", "Builders"],
          ["$240M", "Funding"],
        ]
      : [
          ["99.99%", "Platform uptime"],
          ["200+", "Native integrations"],
          ["2.4B", "Tasks completed"],
        ];
  return (
    <SiteShell>
      <main>
        <section className="relative overflow-hidden px-5 pb-14 pt-24 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-44">
          <div className="grid-fade absolute inset-0 opacity-20" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-primary">
                {c.eyebrow}
              </p>
              <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-[-.045em] sm:text-6xl">
                {c.title} <span className="text-gradient">{c.accent}</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
                {c.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="premium" asChild>
                  <Link to="/sign-up">
                    Start building <ArrowRight />
                  </Link>
                </Button>
                <Button size="lg" variant="glass" asChild>
                  <Link to="/contact">Talk to an expert</Link>
                </Button>
              </div>
            </div>
            <VisualFor kind={c.kind} />
          </div>
        </section>
        <section className="border-y border-border bg-surface/35 px-5 py-8">
          <div className="mx-auto grid max-w-5xl grid-cols-3 gap-5">
            {stats.map(([n, l]) => (
              <div key={l} className="text-center">
                <p className="font-display text-2xl font-semibold sm:text-4xl">{n}</p>
                <p className="mt-1 text-[10px] text-muted-foreground sm:text-xs">{l}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="px-5 py-14 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Designed for real outcomes"
              title="Sophisticated technology. Effortless experience."
              body="Every layer is engineered to help your team move quickly without sacrificing trust, control, or craft."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                [Gauge, "Fast by default"],
                [ShieldCheck, "Secure at every layer"],
                [Layers3, "Built to compound"],
              ].map(([Icon, title], i) => {
                const I = Icon as typeof Gauge;
                return (
                  <div key={title as string} className="glass-panel rounded-2xl p-6">
                    <I className="size-5 text-primary" />
                    <h3 className="mt-7 font-display text-xl font-semibold">{title as string}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {i === 0
                        ? "Go from first idea to production workflow in days, not quarters."
                        : i === 1
                          ? "Govern access, data, models, and actions with enterprise-grade controls."
                          : "Shared intelligence improves every workflow and every decision over time."}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <CTA />
      </main>
    </SiteShell>
  );
}

export function PricingPage() {
  const plans = [
    ["Starter", "$0", "For engineers and builders evaluating the platform."],
    ["Pro", "$49", "For teams deploying production AI workflows at scale."],
    ["Enterprise", "Custom", "For enterprises requiring governance, compliance, and dedicated support."],
  ];
  return (
    <SiteShell>
      <main className="px-5 pb-16 pt-24 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">
              Transparent, enterprise-ready pricing
            </p>
            <h1 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-semibold tracking-[-.045em] sm:text-6xl">
              Start free. Scale with <span className="text-gradient">your operations.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Structured plans designed for every stage of enterprise AI adoption.
            </p>
          </div>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {plans.map(([name, price, desc], i) => (
              <div
                key={name}
                className={`glass-panel relative rounded-3xl p-7 ${i === 1 ? "ring-2 ring-primary" : ""}`}
              >
                {i === 1 && (
                  <span className="absolute right-5 top-5 rounded-full bg-primary/15 px-3 py-1 text-[10px] font-bold text-primary">
                    MOST POPULAR
                  </span>
                )}
                <p className="font-display text-lg font-semibold">{name}</p>
                <p className="mt-5 font-display text-4xl font-semibold">
                  {price}
                  <span className="text-sm text-muted-foreground">
                    {price.startsWith("$") && price !== "$0" ? " / user" : ""}
                  </span>
                </p>
                <p className="mt-4 min-h-12 text-sm leading-6 text-muted-foreground">{desc}</p>
                <Button className="mt-7 w-full" variant={i === 1 ? "premium" : "glass"}>
                  Choose {name}
                </Button>
                <div className="mt-7 space-y-3 border-t border-border pt-6">
                  {[
                    "Unlimited projects",
                    "Advanced model access",
                    "Observability and analytics",
                    i === 2 ? "Dedicated success team" : "Community support",
                  ].map((x) => (
                    <p key={x} className="flex gap-2 text-sm">
                      <Check className="size-4 text-success" />
                      {x}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Feature comparison table */}
          <div className="mt-20 overflow-x-auto">
            <h2 className="mb-10 text-center font-display text-2xl font-semibold tracking-[-.03em] sm:text-3xl">
              Compare <span className="text-gradient">every feature</span>
            </h2>
            <table className="w-full min-w-[620px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 text-left text-sm font-semibold text-foreground/70">Feature</th>
                  {["Starter", "Pro", "Enterprise"].map((p, i) => (
                    <th key={p} className={`pb-4 text-center text-sm font-semibold ${i === 1 ? "text-primary" : "text-foreground"}`}>{p}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {([
                  ["Agent runs / month", "500", "Unlimited", "Unlimited"],
                  ["Models supported", "GPT-4o · Claude", "All models", "All + fine-tuned"],
                  ["Knowledge bases", "1", "20", "Unlimited"],
                  ["Workflow automations", "3", "Unlimited", "Unlimited"],
                  ["Native integrations", "10", "200+", "200+ custom"],
                  ["Observability", "Basic", "Advanced", "Enterprise-grade"],
                  ["Governance controls", "Basic", "Full policy mesh", "Full + audit export"],
                  ["Support", "Community", "Email · 4h SLA", "Dedicated CSM"],
                  ["Uptime SLA", "—", "99.9%", "99.99%"],
                  ["SSO / SAML", "—", "check", "check"],
                  ["Private VPC", "—", "—", "check"],
                  ["DPA / BAA", "—", "—", "check"],
                ] as [string, string, string, string][]).map(([feature, s, p, e]) => (
                  <tr key={feature} className="hover:bg-primary/[0.03]">
                    <td className="py-4 pr-8 text-sm text-muted-foreground">{feature}</td>
                    {[s, p, e].map((v, i) => (
                      <td key={i} className={`py-4 text-center text-sm ${i === 1 ? "font-medium text-primary" : "text-foreground/80"}`}>
                        {v === "check"
                          ? <Check className="mx-auto size-4 text-success" />
                          : v === "—"
                          ? <span className="text-muted-foreground/40">—</span>
                          : v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pricing FAQ */}
          <div className="mt-20 border-t border-border pt-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center font-display text-3xl font-semibold tracking-[-.03em] sm:text-4xl">
                Pricing <span className="text-gradient">questions, answered.</span>
              </h2>
              <div className="mt-10 divide-y divide-border">
                {([
                  ["Is there a free trial for paid plans?", "Every workspace starts on Starter at no cost with no time limit. Upgrade to Pro at any point as your usage grows."],
                  ["Do you charge per model call?", "No. Nexora charges per seat, not per call. Model costs are bundled into your plan so your bill stays predictable."],
                  ["How does Enterprise pricing work?", "Enterprise is custom-quoted based on seats, usage volume, and required compliance features. Contact our team for a tailored proposal."],
                  ["Can I change plans later?", "Yes. Upgrades take effect immediately and are prorated. Downgrades take effect at the next billing cycle."],
                  ["What compliance frameworks does Nexora support?", "Nexora is architecturally designed to support SOC 2, ISO 27001, HIPAA, and GDPR environments. Full documentation available for Enterprise customers."],
                ] as [string, string][]).map(([q, a]) => (
                  <details key={q} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                      {q}
                      <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="mt-16 mb-4 rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-primary">Enterprise</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-.035em]">Require a dedicated enterprise deployment?</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Our enterprise team will define the right deployment architecture, compliance framework, and commercial structure for your organisation’s specific requirements.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" variant="premium" asChild>
                <Link to="/contact">Talk to enterprise sales <ArrowRight /></Link>
              </Button>
              <Button size="lg" variant="glass" asChild>
                <Link to="/security">View security &amp; compliance</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

export function AuthPage({ mode }: { mode: "sign-in" | "sign-up" | "forgot" }) {
  const copy =
    mode === "sign-up"
      ? ["Create your account", "Start deploying governed AI agents today."]
      : mode === "forgot"
        ? ["Reset your password", "We’ll send a secure reset link to your inbox."]
        : ["Welcome back", "Continue to your Nexora workspace."];
  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      <div className="hidden overflow-hidden border-r border-border bg-surface lg:block">
        <div className="flex h-full flex-col justify-between p-12">
          <Logo />
          <div>
            <p className="font-display text-4xl font-semibold leading-tight">
              “Nexora changed the pace of our entire company.”
            </p>
            <p className="mt-5 text-sm text-muted-foreground">Maya Chen · COO at VantaGrid</p>
          </div>
          <MiniDashboard />
        </div>
      </div>
      <div className="grid place-items-center px-5 py-16">
        <div className="w-full max-w-sm">
          <div className="mb-10 lg:hidden">
            <Logo />
          </div>
          <h1 className="font-display text-3xl font-semibold">{copy[0]}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{copy[1]}</p>
          <form className="mt-8 space-y-4">
            {mode === "sign-up" && (
              <label className="block text-sm">
                Full name
                <input
                  className="mt-2 h-12 w-full rounded-xl border border-input bg-card px-4 outline-hidden focus:ring-2 focus:ring-ring"
                  placeholder="Alex Morgan"
                />
              </label>
            )}
            <label className="block text-sm">
              Work email
              <input
                type="email"
                className="mt-2 h-12 w-full rounded-xl border border-input bg-card px-4 outline-hidden focus:ring-2 focus:ring-ring"
                placeholder="you@company.com"
              />
            </label>
            {mode !== "forgot" && (
              <label className="block text-sm">
                Password
                <input
                  type="password"
                  className="mt-2 h-12 w-full rounded-xl border border-input bg-card px-4 outline-hidden focus:ring-2 focus:ring-ring"
                  placeholder="••••••••"
                />
              </label>
            )}
            <Button type="submit" size="lg" variant="premium" className="w-full">
              {mode === "sign-up"
                ? "Create account"
                : mode === "forgot"
                  ? "Send reset link"
                  : "Sign in"}
              <ArrowRight />
            </Button>
          </form>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Protected by enterprise-grade encryption and security.
          </p>
          <div className="mt-6 text-center text-xs text-muted-foreground">
            {mode === "sign-in" ? (
              <>
                <Link to="/forgot-password" className="hover:text-foreground underline underline-offset-4">Forgot password?</Link>
                <span className="mx-2">·</span>
                <span>No account? </span>
                <Link to="/sign-up" className="font-semibold text-primary hover:underline">Sign up free</Link>
              </>
            ) : mode === "sign-up" ? (
              <>
                <span>Already have an account? </span>
                <Link to="/sign-in" className="font-semibold text-primary hover:underline">Sign in</Link>
              </>
            ) : (
              <>
                <Link to="/sign-in" className="hover:text-foreground underline underline-offset-4">Back to sign in</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-border bg-surface p-5 lg:block">
        <Logo />
        <nav className="mt-10 space-y-1">
          {[
            [Gauge, "Overview"],
            [Bot, "Agents"],
            [Workflow, "Automations"],
            [BarChart3, "Analytics"],
            [Database, "Knowledge"],
          ].map(([I, t], i) => {
            const Icon = I as typeof Gauge;
            return (
              <div
                key={t as string}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${i === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}
              >
                <Icon className="size-4" />
                {t as string}
              </div>
            );
          })}
        </nav>
      </aside>
      <main className="p-5 lg:ml-64 lg:p-8">
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">Monday, June 13</p>
            <h1 className="truncate font-display text-2xl font-semibold sm:text-3xl">
              Good morning, Alex.
            </h1>
          </div>
          <Button variant="premium">
            <Zap />
            New agent
          </Button>
        </header>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["Agent tasks", "24,892", "+31.4%"],
            ["Success rate", "98.7%", "+2.4%"],
            ["Hours saved", "1,840", "+46.2%"],
            ["Est. value", "$284K", "+18.9%"],
          ].map(([a, b, c]) => (
            <div key={a} className="glass-panel rounded-2xl p-5">
              <p className="text-xs text-muted-foreground">{a}</p>
              <p className="mt-3 font-display text-2xl font-semibold">{b}</p>
              <p className="mt-1 text-xs text-success">{c} this month</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 xl:grid-cols-[1.5fr_1fr]">
          <MiniDashboard />
          <div className="glass-panel rounded-3xl p-5">
            <div className="flex justify-between">
              <h2 className="font-display font-semibold">Active agents</h2>
              <span className="text-xs text-primary">View all</span>
            </div>
            <div className="mt-5 space-y-3">
              {[
                ["Revenue scout", "Analyzing pipeline", "72%"],
                ["Support triage", "Processing 48 tickets", "54%"],
                ["Research analyst", "Building market brief", "86%"],
              ].map(([n, s, p]) => (
                <div key={n} className="rounded-2xl border border-border bg-background/30 p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-xl bg-primary/10">
                      <Bot className="size-4 text-primary" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">{n}</p>
                      <p className="truncate text-[10px] text-muted-foreground">{s}</p>
                    </div>
                    <span className="text-xs">{p}</span>
                  </div>
                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-primary" style={{ width: p }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-5 text-center">
      <div className="grid-fade absolute inset-0 opacity-30" />
      <div className="relative">
        <p className="font-display text-[9rem] font-bold leading-none text-gradient sm:text-[14rem]">
          404
        </p>
        <h1 className="font-display text-3xl font-semibold">This signal got lost.</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground">
          The page you’re looking for has moved, evolved, or never existed in this timeline.
        </p>
        <Button variant="premium" size="lg" className="mt-7" asChild>
          <Link to="/">
            Return home <ArrowRight />
          </Link>
        </Button>
      </div>
    </main>
  );
}

export function ComingSoonPage() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-5">
      <div className="grid-fade absolute inset-0 opacity-30" />
      <div className="relative max-w-2xl text-center">
        <Logo />
        <p className="mt-20 text-xs font-bold uppercase tracking-[.25em] text-primary">
          A new intelligence is emerging
        </p>
        <h1 className="mt-5 font-display text-5xl font-semibold tracking-[-.045em] sm:text-7xl">
          The next chapter arrives <span className="text-gradient">soon.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
          Be first to experience a radically more capable way to build, automate, and decide.
        </p>
        <div className="mx-auto mt-8 flex max-w-md rounded-2xl border border-border bg-card p-1.5">
          <input
            className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
            placeholder="Work email"
          />
          <Button variant="premium">Join waitlist</Button>
        </div>
        <div className="mt-12 flex justify-center gap-8">
          {[
            ["21", "Days"],
            ["08", "Hours"],
            ["42", "Minutes"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-3xl font-semibold">{n}</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export function CTA() {
  return (
    <section className="px-5 py-14 sm:py-24 lg:px-8">
      <div className="glass-panel relative mx-auto max-w-7xl overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12">
        <div className="absolute inset-x-1/4 top-0 h-40 bg-primary/20 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">
            Production-ready enterprise AI
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-.04em] sm:text-6xl">
            Make intelligence your company’s <span className="text-gradient">competitive edge.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-muted-foreground">
            Join enterprise teams compressing months of platform work into weeks with governed, observable AI.
          </p>
          <Button size="lg" variant="premium" className="mt-8" asChild>
            <Link to="/sign-up">
              Start building free <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}


/* ════════════════════════════════════════════════════════════
   PHASE 3 — NEW PAGES
   All pages below are complete, intentional, and fully routed.
   ════════════════════════════════════════════════════════════ */

/* ── ChangelogPage ─────────────────────────────────────────── */
export function ChangelogPage() {
  const releases = [
    {
      version: "v2.4.0", date: "June 2026", type: "major",
      title: "Agent Lifecycle Timeline & Operations Center",
      changes: [
        { type: "new", text: "Agent Lifecycle Timeline — 8-stage visualisation from spawn to archive with per-step telemetry" },
        { type: "new", text: "Operations Center — orbital metrics, live AgentCapsule grid, NeuralOrbit visualization" },
        { type: "new", text: "Signal Flow Cards — animated data pipeline cards with live latency indicators" },
        { type: "new", text: "Editorial Intelligence Feed — newspaper-column chronological agent activity for Home V2" },
        { type: "improved", text: "Eval Gate now surfaces per-step confidence scores with full model attribution" },
        { type: "improved", text: "Policy Mesh v2 compiles governance frameworks 40% faster" },
        { type: "fixed", text: "Memory context window correctly respects 90-day replay horizon for long-running agents" },
      ],
    },
    {
      version: "v2.3.0", date: "May 2026", type: "major",
      title: "Multi-Model Router & Cinematic Agent Stream",
      changes: [
        { type: "new", text: "Multi-model router — cost-optimal model selection per reasoning step (gpt-mini → claude-haiku → nx-2)" },
        { type: "new", text: "Cinematic Agent Stream — full-bleed V3 homepage section with live pod activity and mission input" },
        { type: "new", text: "Eval Gate threshold configuration — set per-agent quality thresholds (platform default: 0.92)" },
        { type: "improved", text: "Dashboard Showcase now shows 30-day throughput chart with dual data series" },
        { type: "improved", text: "EnterpriseDataFlowMatrix rewritten with live-updating animated rows" },
        { type: "fixed", text: "WorkflowVisualization SVG paths no longer overflow container on mobile viewports" },
      ],
    },
    {
      version: "v2.2.0", date: "April 2026", type: "minor",
      title: "Enterprise SSO & Audit Trail Export",
      changes: [
        { type: "new", text: "SAML 2.0 SSO — Okta, Azure AD, and Google Workspace integrations" },
        { type: "new", text: "Audit trail export to SIEM in JSON and CEF formats, signed with HMAC-SHA256" },
        { type: "new", text: "Per-agent spend budgets with hard caps and operator threshold alerts" },
        { type: "improved", text: "Agent spawn time reduced from 180ms to 82ms via pre-compiled policy stubs" },
        { type: "fixed", text: "Fixed race condition in memory replay when two agents share the same knowledge base" },
      ],
    },
    {
      version: "v2.1.0", date: "March 2026", type: "minor",
      title: "Knowledge Base Improvements & Observability",
      changes: [
        { type: "new", text: "Vector knowledge base now supports hybrid search (BM25 + dense retrieval)" },
        { type: "new", text: "Per-step trace view in Observability — see every tool call, latency, and model choice" },
        { type: "improved", text: "Retrieval latency cut by 34% through pre-warming hot knowledge partitions" },
        { type: "fixed", text: "Agent names with special characters no longer break the policy compiler" },
      ],
    },
    {
      version: "v2.0.0", date: "February 2026", type: "major",
      title: "Nexora 2.0 — The Agentic Enterprise Platform",
      changes: [
        { type: "new", text: "Full platform rewrite on React 19, Tailwind v4, and OKLCH color tokens" },
        { type: "new", text: "Three distinct homepage variants: Enterprise Operations Center, Editorial Magazine, Cinematic Experience" },
        { type: "new", text: "30+ production-ready pages with complete routing and design system" },
        { type: "new", text: "Nexora Design System — 6 exclusive components forming the Nexora visual language" },
        { type: "improved", text: "All pages load under 1.2s on 4G connections (Lighthouse performance 96+)" },
      ],
    },
  ];

  const typeColor: Record<string, string> = {
    new: "bg-primary/15 text-primary",
    improved: "bg-success/15 text-success",
    fixed: "bg-destructive/15 text-destructive",
  };

  return (
    <SiteShell>
      <main className="px-5 pb-16 pt-24 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Platform updates</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-.04em] sm:text-6xl">Changelog</h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground max-w-xl">
            Every improvement, fix, and new capability — logged with full context. Shipped continuously.
          </p>
          <div className="mt-16 space-y-14">
            {releases.map((r) => (
              <div key={r.version} className="grid gap-8 md:grid-cols-[160px_1fr]">
                <div className="md:text-right">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[.15em] ${r.type === "major" ? "bg-primary/15 text-primary" : "bg-border/80 text-muted-foreground"}`}>
                    {r.type}
                  </span>
                  <p className="mt-3 font-display text-lg font-semibold">{r.version}</p>
                  <p className="text-sm text-muted-foreground">{r.date}</p>
                </div>
                <div className="glass-panel rounded-3xl p-6">
                  <h3 className="font-display text-xl font-semibold">{r.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {r.changes.map((c, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider ${typeColor[c.type]}`}>
                          {c.type}
                        </span>
                        <span className="leading-5 text-muted-foreground">{c.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

/* ── SecurityPage ──────────────────────────────────────────── */
export function SecurityPage() {
  return (
    <SiteShell>
      <main className="px-5 pb-16 pt-24 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          {/* Demo notice */}
          <div className="mb-10 flex items-start gap-3 rounded-2xl border border-[oklch(0.78_0.18_75)/40] bg-[oklch(0.78_0.18_75)/8] p-4 text-sm text-[oklch(0.78_0.18_75)]">
            <AlertTriangle className="mt-0.5 size-4 shrink-0" />
            <div>
              <p className="font-semibold">Template demonstration content</p>
              <p className="mt-0.5 text-[oklch(0.78_0.18_75)/80]">
                The security claims and compliance badges on this page are example configurations for template demonstration purposes.
                Verify all compliance requirements with your legal and security teams before production use.
              </p>
            </div>
          </div>

          <SectionTitle
            eyebrow="Security & Compliance"
            title="Enterprise-grade security, by design."
            body="Zero-trust architecture, private VPC deployment, customer-managed encryption keys, and per-action audit trails — from day one."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Zero-Trust Architecture", body: "Every request authenticated, every action authorised. No implicit trust at any layer." },
              { icon: Lock, title: "Customer-Managed Keys", body: "Your data encrypted with keys you control. Nexora never holds your master key." },
              { icon: Eye, title: "Per-Action Audit Trail", body: "Every agent action, tool call, and model query logged with cryptographic signing." },
              { icon: Network, title: "Private VPC Deployment", body: "Deploy the intelligence layer inside your own cloud account — no shared infrastructure." },
              { icon: Database, title: "Data Residency Controls", body: "Choose which regions store and process your data. EU, US, APAC, or bring your own." },
              { icon: Globe, title: "TLS 1.3 Everywhere", body: "All traffic encrypted in transit. Certificate pinning available for high-assurance environments." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="glass-panel rounded-3xl p-7">
                <Icon className="size-5 text-primary" />
                <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="mb-3 flex items-center gap-2">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-muted-foreground">Example compliance configuration</p>
              <span className="rounded-full border border-[oklch(0.78_0.18_75)/40] bg-[oklch(0.78_0.18_75)/8] px-2 py-0.5 text-[10px] font-semibold text-[oklch(0.78_0.18_75)]">Demo only</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { badge: "SOC 2 Type II", note: "Annual third-party audit" },
                { badge: "ISO 27001", note: "Information security management" },
                { badge: "GDPR", note: "EU data protection regulation" },
                { badge: "HIPAA", note: "Healthcare data safeguards" },
              ].map(({ badge, note }) => (
                <div key={badge} className="glass-panel rounded-2xl p-5">
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {badge}
                  </span>
                  <p className="mt-3 text-xs text-muted-foreground">{note}</p>
                  <p className="mt-2 text-[10px] italic text-muted-foreground/50">Example configuration — verify with your legal team</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 glass-panel rounded-3xl p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="font-display text-2xl font-semibold">Security questions?</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Request our security documentation package including architecture diagrams,
                  penetration test summaries, and access to our trust portal.
                </p>
                <Button variant="premium" className="mt-6" asChild>
                  <Link to="/contact">Talk to our security team <ArrowRight /></Link>
                </Button>
              </div>
              <div className="space-y-3">
                {["Shared responsibility model documentation", "Vendor security questionnaire (CAIQ)", "Architecture and data flow diagrams", "Incident response runbook"].map((x) => (
                  <div key={x} className="flex items-center gap-2 text-sm">
                    <Check className="size-4 shrink-0 text-success" />
                    <span className="text-muted-foreground">{x}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

/* ── CustomersPage ─────────────────────────────────────────── */
export function CustomersPage() {
  const stories = [
    {
      company: "VantaGrid", industry: "Infrastructure", logo: "V",
      quote: "Nexora compressed nine months of platform work into six weeks. Our agents are closing tickets faster than our top engineers.",
      name: "Maya Chen", role: "COO",
      stats: [["73%", "faster resolution"], ["$4.2M", "annual savings"], ["412", "tickets/day"]],
    },
    {
      company: "Northstar Capital", industry: "Finance", logo: "N",
      quote: "The governance layer is what sold the board. Every agent action is auditable and policy-bound — and it still ships in days.",
      name: "Daniel Okafor", role: "VP Engineering",
      stats: [["12×", "developer leverage"], ["98.7%", "eval accuracy"], ["0", "policy violations"]],
    },
    {
      company: "Helios Systems", industry: "SaaS", logo: "H",
      quote: "We replaced four vendors and a homegrown orchestrator. The team didn't just adopt it — they're building on top of it daily.",
      name: "Priya Raman", role: "Head of AI",
      stats: [["6 wks", "to production"], ["$11.4M", "ARR attributed"], ["38", "active agents"]],
    },
    {
      company: "Obsidian Security", industry: "Cybersecurity", logo: "O",
      quote: "Running a threat-intelligence agent fleet on Nexora gave us coverage that would take 40 analysts to replicate manually.",
      name: "James Whitfield", role: "CISO",
      stats: [["40×", "analyst coverage"], ["99.99%", "uptime SLA"], ["<1s", "alert latency"]],
    },
    {
      company: "ARC° Systems", industry: "Manufacturing", logo: "A",
      quote: "Nexora is the first AI platform our ops team actually wanted to use. The interface just disappears and the work gets done.",
      name: "Sofia Andrade", role: "Director of Digital",
      stats: [["$284K", "monthly savings"], ["46%", "ops hours reclaimed"], ["18", "workflows automated"]],
    },
    {
      company: "Quantic Health", industry: "Healthcare", logo: "Q",
      quote: "HIPAA compliance with this level of automation capability — we didn't think it was possible until we tried Nexora.",
      name: "Dr. Ben Nakamura", role: "CTO",
      stats: [["HIPAA", "compliant (example)"], ["84%", "admin work automated"], ["2 days", "to first agent"]],
    },
  ];

  return (
    <SiteShell>
      <main className="px-5 pb-16 pt-24 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Customer stories</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-.04em] sm:text-6xl">
              The teams shipping fastest <span className="text-gradient">run on Nexora.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Real results from the operators, builders, and executives who chose Nexora for their most critical work.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {stories.map((s) => (
              <figure key={s.company} className="glass-panel flex flex-col rounded-3xl p-7">
                <div className="flex items-center gap-3">
                  <span className="premium-gradient grid size-10 place-items-center rounded-xl font-display text-sm font-bold text-primary-foreground">
                    {s.logo}
                  </span>
                  <div>
                    <p className="font-display font-semibold">{s.company}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.industry}</p>
                  </div>
                </div>
                <blockquote className="mt-5 flex-1 font-display text-base leading-snug text-foreground/90">
                  "{s.quote}"
                </blockquote>
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-5">
                  {s.stats.map(([n, l]) => (
                    <div key={l}>
                      <p className="font-display text-lg font-semibold text-gradient">{n}</p>
                      <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{l}</p>
                    </div>
                  ))}
                </div>
                <figcaption className="mt-4 flex items-center gap-2 border-t border-border pt-4">
                  <span className="grid size-8 place-items-center rounded-full bg-primary/15 font-display text-xs font-bold text-primary">
                    {s.name[0]}
                  </span>
                  <div>
                    <p className="text-xs font-semibold">{s.name}</p>
                    <p className="text-[10px] text-muted-foreground">{s.role} · {s.company}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="premium" size="lg" asChild>
              <Link to="/contact">Join these teams <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

/* ── StatusPage ────────────────────────────────────────────── */
export function StatusPage() {
  const components = [
    { name: "API Gateway", status: "operational", uptime: "99.99%", latency: "38ms" },
    { name: "Agent Runtime", status: "operational", uptime: "99.98%", latency: "82ms" },
    { name: "Memory & Knowledge", status: "operational", uptime: "99.99%", latency: "44ms" },
    { name: "Model Router", status: "operational", uptime: "99.97%", latency: "12ms" },
    { name: "Workflow Engine", status: "operational", uptime: "99.99%", latency: "61ms" },
    { name: "Eval Gate", status: "operational", uptime: "99.99%", latency: "156ms" },
    { name: "Audit & Governance", status: "operational", uptime: "100%", latency: "8ms" },
    { name: "Dashboard & UI", status: "operational", uptime: "99.99%", latency: "220ms" },
    { name: "Integrations Hub", status: "operational", uptime: "99.97%", latency: "92ms" },
    { name: "Authentication", status: "operational", uptime: "100%", latency: "18ms" },
  ];

  const incidents = [
    { date: "Jun 8, 2026", title: "Elevated latency — Model Router", duration: "22 min", resolved: true, severity: "minor" },
    { date: "May 31, 2026", title: "Partial degradation — Integrations Hub (Snowflake connector)", duration: "47 min", resolved: true, severity: "minor" },
    { date: "May 14, 2026", title: "Maintenance window — Memory infrastructure upgrade", duration: "4 min", resolved: true, severity: "maintenance" },
  ];

  return (
    <SiteShell>
      <main className="px-5 pb-16 pt-24 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-4xl">
          {/* Overall status */}
          <div className="glass-panel mb-12 flex flex-col items-center gap-4 rounded-3xl p-10 text-center">
            <SystemPulseIndicator label="All systems operational" status="nominal" />
            <h1 className="font-display text-3xl font-semibold">All systems operational</h1>
            <p className="text-sm text-muted-foreground">Last checked: just now · Updated every 60 seconds</p>
            <div className="grid grid-cols-3 gap-8 mt-4">
              {[["99.99%", "API uptime · 90d"], ["412ms", "P50 agent latency"], ["0", "Active incidents"]].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-2xl font-semibold text-gradient">{n}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Component status */}
          <h2 className="mb-4 font-display text-xl font-semibold">Component status</h2>
          <div className="glass-panel overflow-hidden rounded-3xl">
            {components.map((c, i) => (
              <div key={c.name} className={`flex items-center gap-4 px-6 py-4 ${i < components.length - 1 ? "border-b border-border" : ""}`}>
                <span className="size-2 rounded-full bg-success" />
                <p className="flex-1 text-sm font-semibold">{c.name}</p>
                <span className="font-mono text-[11px] text-muted-foreground">{c.latency} avg</span>
                <span className="font-mono text-[11px] text-success">{c.uptime}</span>
                <span className="rounded-full bg-success/15 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-success">Operational</span>
              </div>
            ))}
          </div>

          {/* Incident history */}
          <h2 className="mb-4 mt-12 font-display text-xl font-semibold">Recent incidents</h2>
          <div className="glass-panel overflow-hidden rounded-3xl">
            {incidents.map((inc, i) => (
              <div key={inc.title} className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:gap-4 ${i < incidents.length - 1 ? "border-b border-border" : ""}`}>
                <p className="font-mono text-[10px] text-muted-foreground shrink-0 w-28">{inc.date}</p>
                <p className="flex-1 text-sm">{inc.title}</p>
                <span className="font-mono text-[10px] text-muted-foreground">{inc.duration}</span>
                <span className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold ${inc.severity === "maintenance" ? "bg-primary/15 text-primary" : "bg-[oklch(0.78_0.18_75)/15] text-[oklch(0.78_0.18_75)]"}`}>
                  {inc.severity === "maintenance" ? "Maintenance" : "Resolved"}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">No incidents in the last 30 days beyond those listed.</p>
        </div>
      </main>
    </SiteShell>
  );
}

/* ── BlogPage ──────────────────────────────────────────────── */
export function BlogPage() {
  const posts = [
    {
      category: "Engineering", readTime: "12 min",
      title: "How we built the Nexora eval gate: from 0.91 to 0.97 quality at scale",
      excerpt: "The eval gate is the most important safety boundary in a production agent system. Here's the architecture we built to make it fast, explainable, and cost-efficient.",
      date: "Jun 11, 2026",
    },
    {
      category: "Product", readTime: "8 min",
      title: "Introducing the Agent Lifecycle Timeline: full observability from spawn to archive",
      excerpt: "Every agent run now produces a complete, cryptographically-signed timeline of every decision, tool call, and policy check. Here's why that matters.",
      date: "Jun 5, 2026",
    },
    {
      category: "Operator Playbook", readTime: "10 min",
      title: "The enterprise agent stack is taking shape — here's the framework we recommend",
      excerpt: "Memory, tools, orchestration, evaluation, and governance. A practical decision framework for teams moving from pilot to production agent deployments.",
      date: "May 28, 2026",
    },
    {
      category: "Customer", readTime: "6 min",
      title: "How VantaGrid cut support resolution time by 73% in 6 weeks",
      excerpt: "A global infrastructure company deployed a governed fleet of service agents on Nexora. This is the architecture, the results, and what they'd do differently.",
      date: "May 20, 2026",
    },
    {
      category: "Research", readTime: "15 min",
      title: "Cost-optimal model routing at inference time: the math behind our router",
      excerpt: "We route each reasoning step to the cheapest model that clears the eval bar. Here's the complete algorithm, benchmark results, and the edge cases we handle.",
      date: "May 14, 2026",
    },
    {
      category: "Product", readTime: "5 min",
      title: "Policy Mesh v2: 40% faster governance compilation for large rule sets",
      excerpt: "Large enterprises need governance frameworks with hundreds of rules. Policy Mesh v2 compiles them in under 200ms — down from 340ms. Here's how.",
      date: "May 5, 2026",
    },
  ];

  return (
    <SiteShell>
      <main className="px-5 pb-16 pt-24 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Nexora Journal</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
              Signals from the edge of applied intelligence.
            </h1>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Engineering deep dives, operator playbooks, and product thinking from the team building Nexora.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link key={p.title} to="/blog-post" className="group block">
                <article className="glass-panel h-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                      {p.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{p.readTime} read</span>
                  </div>
                  <h2 className="mt-4 font-display text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground line-clamp-3">{p.excerpt}</p>
                  <p className="mt-5 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span>{p.date}</span>
                    <ChevronRight className="size-3 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

/* ── BlogPostPage ──────────────────────────────────────────── */
export function BlogPostPage() {
  return (
    <SiteShell>
      <main className="px-5 pb-16 pt-24 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-3xl">
          <Link to="/blog" className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ChevronRight className="size-3.5 rotate-180" /> Back to Journal
          </Link>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">Engineering</span>
            <span className="text-xs text-muted-foreground">8 min read · May 28, 2026</span>
          </div>
          <h1 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-[-.03em] sm:text-5xl">
            The enterprise agent stack is taking shape — here's the framework we recommend.
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-primary/15 font-display text-sm font-bold text-primary">L</span>
            <div>
              <p className="text-sm font-semibold">Lena Park</p>
              <p className="text-xs text-muted-foreground">Staff Engineer, Nexora Platform</p>
            </div>
          </div>

          <div className="prose prose-invert mt-10 max-w-none text-muted-foreground prose-headings:text-foreground prose-headings:font-display prose-strong:text-foreground">
            <p className="text-lg leading-8 text-foreground/90">
              If you've shipped a production agent system in the last 18 months, you've probably rebuilt the same five primitives from scratch:
              memory, tools, orchestration, evaluation, and governance. We built Nexora so you don't have to.
            </p>
            <h2>The five layers every agent stack needs</h2>
            <p>Most early agent failures come from missing one of these layers — or wiring them together poorly. Here's how we think about each:</p>
            <h3>1. Memory — beyond the context window</h3>
            <p>
              A production agent isn't a chatbot with a long context. It needs episodic memory (what happened in past runs),
              semantic memory (facts about your domain), and working memory (the current task state). Nexora's memory layer
              handles all three with hybrid retrieval and a 90-day default replay horizon.
            </p>
            <h3>2. Tools — registered, audited, rate-limited</h3>
            <p>
              Tools in production need more than a function signature. They need schema validation on inputs and outputs,
              rate limits per agent per tool, and audit logging on every call. Nexora registers 14 tools at spawn and
              enforces all three automatically.
            </p>
            <h3>3. Orchestration — route by capability, not by name</h3>
            <p>
              Hard-coding which model handles which step is a maintenance trap. Route by capability: use the cheapest model
              that clears your eval bar for each reasoning step. Our router does this in 12ms with full attribution logging.
            </p>
            <h3>4. Evaluation — a gate, not a dashboard</h3>
            <p>
              Eval isn't a monitoring chart. It's a hard gate before delivery. Set your threshold (we recommend 0.92 for most
              enterprise use cases) and let the eval gate reject runs that don't clear it before they reach your operators.
            </p>
            <h3>5. Governance — policy as code</h3>
            <p>
              Every agent action should be answerable to a question: "which policy permitted this?" Nexora's Policy Mesh
              compiles your governance rules at spawn and enforces them per-action with a cryptographically-signed audit trail.
            </p>
            <div className="not-prose mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <p className="font-display font-semibold text-foreground">Start with evaluation first.</p>
              <p className="mt-2 text-sm leading-6">
                If you only implement one of these layers in your first sprint, make it the eval gate. It's the fastest way to
                build confidence with stakeholders and the most important safety boundary in your system.
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Continue reading</p>
            <Link to="/blog" className="mt-4 block">
              <div className="glass-panel rounded-2xl p-5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]">
                <p className="font-display font-semibold">← Back to all posts</p>
                <p className="mt-1 text-sm text-muted-foreground">More from the Nexora Journal</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

/* ── DocumentationPage ─────────────────────────────────────── */
export function DocumentationPage() {
  const sections = [
    { icon: Zap, title: "Quickstart", items: ["Build your first agent", "Connect a data source", "Set up the eval gate", "Deploy to production"] },
    { icon: Bot, title: "Agents", items: ["Agent architecture", "Memory & context", "Tool registration", "Role & persona config"] },
    { icon: Workflow, title: "Orchestration", items: ["Mission assignment", "Multi-agent pods", "Model routing", "Step-level observability"] },
    { icon: ShieldCheck, title: "Governance", items: ["Policy Mesh overview", "Writing policy rules", "Audit trail format", "SIEM integration"] },
    { icon: Braces, title: "API Reference", items: ["Authentication", "Agents API", "Runs API", "Memory API"] },
    { icon: Database, title: "Integrations", items: ["Salesforce", "Snowflake", "Slack", "Custom connectors"] },
  ];

  return (
    <SiteShell>
      <main className="px-5 pb-16 pt-24 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[.25em] text-muted-foreground">Documentation</p>
              <nav className="space-y-6">
                {sections.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.title}>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="size-3.5 text-primary" />
                        <p className="text-xs font-bold uppercase tracking-[.15em] text-foreground/80">{s.title}</p>
                      </div>
                      <ul className="space-y-1 pl-5">
                        {s.items.map((item, i) => (
                          <li key={item}>
                            <span className={`block cursor-pointer rounded-md px-2 py-1.5 text-sm transition-colors hover:text-foreground ${i === 0 && s.title === "Quickstart" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground"}`}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </nav>
            </aside>

            {/* Main content */}
            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
                <span>Docs</span><ChevronRight className="size-3" /><span>Quickstart</span><ChevronRight className="size-3" /><span className="text-foreground">Build your first agent</span>
              </div>
              <h1 className="font-display text-3xl font-semibold sm:text-4xl">Build your first agent</h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground">Get a production-ready autonomous agent running in under 10 minutes.</p>

              <div className="mt-8 space-y-6">
                <div className="glass-panel rounded-2xl p-1.5">
                  <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                    <span className="size-2 rounded-full bg-destructive/60" /><span className="size-2 rounded-full bg-[oklch(0.78_0.18_75)/80]" /><span className="size-2 rounded-full bg-success/70" />
                    <span className="ml-2 font-mono text-[11px] text-muted-foreground">install</span>
                  </div>
                  <pre className="overflow-x-auto p-5 font-mono text-sm text-foreground/90"><code>npm install nexora</code></pre>
                </div>

                <div>
                  <h2 className="font-display text-xl font-semibold">1. Initialise the client</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Import and configure the Nexora client with your API key and target environment.</p>
                  <div className="mt-4 glass-panel rounded-2xl p-1.5">
                    <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                      <span className="size-2 rounded-full bg-destructive/60" /><span className="size-2 rounded-full bg-[oklch(0.78_0.18_75)/80]" /><span className="size-2 rounded-full bg-success/70" />
                      <span className="ml-2 font-mono text-[11px] text-muted-foreground">agent.ts</span>
                    </div>
                    <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-6 text-foreground/85 whitespace-pre">{`import { nexora } from 'nexora';

// Initialise with your workspace credentials
const nx = nexora({
  apiKey: process.env.NEXORA_API_KEY,
  environment: 'production',
});

// Create your first agent
const agent = await nx.agents.create({
  name: 'Revenue Scout',
  role: 'Find expansion opportunities in the CRM pipeline',
  model: 'nx-2',
  tools: ['crm', 'email', 'calendar'],
  evalThreshold: 0.92,
});

// Agent ready in ~82ms
const run = await agent.run({
  mission: 'Find 10 expansion accounts for Q3. Draft outreach.',
});`}</pre>

                  </div>
                </div>

                <div>
                  <h2 className="font-display text-xl font-semibold">2. Verify the eval gate</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Every run is evaluated before delivery. Check the eval score and review the trace.</p>
                  <div className="mt-4 glass-panel rounded-2xl p-5">
                    <div className="font-mono text-sm space-y-1">
                      <p><span className="text-muted-foreground">run.status    </span><span className="text-success">complete</span></p>
                      <p><span className="text-muted-foreground">run.evalScore </span><span className="text-primary">0.974</span> <span className="text-muted-foreground text-xs">(threshold 0.92 ✓)</span></p>
                      <p><span className="text-muted-foreground">run.steps     </span>48</p>
                      <p><span className="text-muted-foreground">run.latency   </span>412ms p50</p>
                      <p><span className="text-muted-foreground">run.cost      </span>$0.0038</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
                <span className="text-sm text-muted-foreground">Next: Connect a data source</span>
                <Button variant="glass" size="sm" asChild>
                  <Link to="/api-documentation">API Reference <ArrowRight /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

/* ── HelpCenterPage ────────────────────────────────────────── */
export function HelpCenterPage() {
  const categories = [
    { icon: Zap, title: "Getting started", count: 14, desc: "First agents, workspace setup, onboarding" },
    { icon: Bot, title: "Agents & automation", count: 28, desc: "Building, deploying, and monitoring agents" },
    { icon: ShieldCheck, title: "Security & compliance", count: 19, desc: "SSO, audit logs, policy configuration" },
    { icon: Database, title: "Data & integrations", count: 22, desc: "Connecting your stack, knowledge bases" },
    { icon: BarChart3, title: "Billing & plans", count: 11, desc: "Usage, limits, upgrades, invoices" },
    { icon: Braces, title: "API & developer", count: 31, desc: "API reference, SDKs, webhooks" },
  ];

  const faqs = [
    { q: "How quickly can I deploy my first agent?", a: "Most teams have a production-ready agent running within 48 hours of starting their trial. The quickstart guide walks you through the first deployment step by step." },
    { q: "What data sources can Nexora connect to?", a: "Nexora supports 200+ native integrations including Salesforce, Snowflake, HubSpot, Slack, Notion, SAP, and every major cloud data platform. Custom connectors are available via the Integrations API." },
    { q: "How does the eval gate work?", a: "Every agent run is evaluated against a quality threshold (default 0.92) before results are delivered. You can inspect the per-step eval trace, adjust thresholds per agent, and configure fallback behaviours for failed evals." },
    { q: "Is my data used to train models?", a: "No. Customer data is never used to train or improve shared models. All processing happens in your isolated environment with your encryption keys." },
    { q: "What compliance certifications does Nexora support?", a: "Nexora is designed to support SOC 2 Type II, ISO 27001, GDPR, and HIPAA environments. Contact our security team for the full documentation package and shared responsibility model." },
    { q: "How do I migrate from my current AI stack?", a: "Our migration team will map your existing agents, prompts, and workflows to Nexora primitives. Most migrations complete in under 2 weeks. Enterprise plans include a dedicated migration engineer." },
  ];

  return (
    <SiteShell>
      <main className="px-5 pb-16 pt-24 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Help Center</p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-.04em] sm:text-5xl">How can we help?</h1>
            <div className="mx-auto mt-8 flex max-w-lg rounded-2xl border border-border bg-card/60 p-1.5 backdrop-blur">
              <input className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground" placeholder="Search documentation and guides..." />
              <Button variant="premium" size="sm">Search</Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="glass-panel group cursor-pointer rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                  <div className="flex items-center justify-between">
                    <Icon className="size-5 text-primary" />
                    <span className="font-mono text-[10px] text-muted-foreground">{c.count} articles</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold group-hover:text-primary transition-colors">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16">
            <h2 className="mb-8 font-display text-2xl font-semibold">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="glass-panel rounded-2xl p-6">
                  <h3 className="font-display text-base font-semibold">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 glass-panel rounded-3xl p-8 text-center">
            <h3 className="font-display text-2xl font-semibold">Can't find what you need?</h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">Our team typically responds within 4 hours during business hours. Enterprise customers have access to a dedicated success manager.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button variant="premium" asChild><Link to="/contact">Talk to support <ArrowRight /></Link></Button>
              <Button variant="glass" asChild><Link to="/documentation">Browse docs</Link></Button>
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

/* ── PrivacyPage ───────────────────────────────────────────── */
export function PrivacyPage() {
  return (
    <SiteShell>
      <main className="px-5 pb-16 pt-24 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-4 text-sm text-primary">
            <AlertTriangle className="mt-0.5 size-4 shrink-0" />
            <p>This is example legal content for template demonstration purposes. Have a qualified legal professional draft your actual privacy policy before publishing.</p>
          </div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Last updated: June 14, 2026</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-.04em]">Privacy Policy</h1>
          <div className="prose prose-invert mt-10 max-w-none text-muted-foreground prose-headings:text-foreground prose-headings:font-display prose-strong:text-foreground">
            <p>Nexora AI ("Nexora", "we", "us") is committed to protecting the privacy of your information. This Privacy Policy describes how we collect, use, disclose, and safeguard information about you when you use our platform.</p>
            <h2>Information we collect</h2>
            <p>We collect information you provide directly to us when you create an account, configure agents, connect data sources, or contact us for support. This includes account credentials, usage data, and content processed by agents you deploy.</p>
            <h2>How we use your information</h2>
            <p>We use the information we collect to provide, maintain, and improve the Nexora platform; to process transactions; to send technical notices and support messages; and to respond to your comments and questions.</p>
            <p><strong>We do not use your data to train shared AI models.</strong> All processing happens within your isolated tenant environment.</p>
            <h2>Data retention and deletion</h2>
            <p>You may request deletion of your account and associated data at any time. We will complete deletion requests within 30 days. Agent run logs are retained for 90 days by default and can be configured per workspace.</p>
            <h2>Contact us</h2>
            <p>If you have questions about this Privacy Policy, contact us at <span className="text-primary">privacy@nexora.ai</span></p>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

/* ── TermsPage ─────────────────────────────────────────────── */
export function TermsPage() {
  return (
    <SiteShell>
      <main className="px-5 pb-16 pt-24 sm:pb-24 sm:pt-32 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-4 text-sm text-primary">
            <AlertTriangle className="mt-0.5 size-4 shrink-0" />
            <p>This is example legal content for template demonstration purposes. Have a qualified legal professional draft your actual terms of service before publishing.</p>
          </div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Last updated: June 14, 2026</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-.04em]">Terms of Service</h1>
          <div className="prose prose-invert mt-10 max-w-none text-muted-foreground prose-headings:text-foreground prose-headings:font-display prose-strong:text-foreground">
            <p>These Terms of Service ("Terms") govern your access to and use of the Nexora AI platform, APIs, and related services. By using Nexora, you agree to these Terms.</p>
            <h2>Acceptable use</h2>
            <p>You may use Nexora only for lawful purposes and in accordance with these Terms. You agree not to use Nexora in any way that could damage, disable, or impair the service, or interfere with any other party's use of the service.</p>
            <h2>Your data</h2>
            <p>You retain full ownership of all data you bring to or process through Nexora. By using the platform, you grant Nexora the limited right to process your data solely to provide the services you have requested.</p>
            <h2>Intellectual property</h2>
            <p>The Nexora platform, including all software, design, and documentation, is owned by Nexora AI and protected by intellectual property law. These Terms do not grant you any rights to our trademarks or branding.</p>
            <h2>Limitation of liability</h2>
            <p>To the maximum extent permitted by applicable law, Nexora shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the platform.</p>
            <h2>Changes to these Terms</h2>
            <p>We may modify these Terms from time to time. We will provide reasonable notice of significant changes. Continued use of the platform after changes take effect constitutes your acceptance of the revised Terms.</p>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

export function DynamicRoutePage() {
  const [path] = useLocation();
  // Core app pages
  if (path === "/pricing") return <PricingPage />;
  if (path === "/dashboard-overview") return <DashboardPage />;
  if (path === "/sign-in") return <AuthPage mode="sign-in" />;
  if (path === "/sign-up") return <AuthPage mode="sign-up" />;
  if (path === "/forgot-password") return <AuthPage mode="forgot" />;
  if (path === "/404") return <NotFoundPage />;
  if (path === "/coming-soon") return <ComingSoonPage />;
  if (path === "/home-v2") return <HomeV2Page />;
  if (path === "/home-v3") return <HomeV3Page />;
  // Phase 3 — new complete pages
  if (path === "/changelog") return <ChangelogPage />;
  if (path === "/security") return <SecurityPage />;
  if (path === "/customers") return <CustomersPage />;
  if (path === "/status") return <StatusPage />;
  if (path === "/blog") return <BlogPage />;
  if (path === "/blog-post") return <BlogPostPage />;
  if (path === "/documentation") return <DocumentationPage />;
  if (path === "/help-center") return <HelpCenterPage />;
  if (path === "/privacy") return <PrivacyPage />;
  if (path === "/terms") return <TermsPage />;
  return <GenericPage path={path} />;
}

/* ============================================================
   PREMIUM SECTIONS — shared across Home V2 / V3 / showcase
   ============================================================ */

export function DashboardShowcase() {
  return (
    <section className="relative px-5 py-16 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[.3em] text-primary">
            Built-in command center
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-.035em] sm:text-6xl">
            A dashboard your <span className="text-gradient">CFO will screenshot.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Every agent, every dollar, every decision — in one cinematic operations view designed
            for the people who run the business.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 rounded-[3rem] bg-primary/10 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-2 shadow-[var(--shadow-glow-strong)]">
            {/* faux browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="size-2.5 rounded-full bg-destructive/70" />
              <span className="size-2.5 rounded-full bg-chart-4/80" />
              <span className="size-2.5 rounded-full bg-success/80" />
              <div className="ml-4 h-6 flex-1 rounded-md border border-border bg-background/40 px-3 text-[10px] leading-6 text-muted-foreground">
                nexora.ai / workspace / operations
              </div>
            </div>

            <div className="grid gap-2 rounded-2xl bg-background/40 p-3 md:grid-cols-[200px_1fr]">
              {/* sidebar */}
              <aside className="hidden flex-col gap-1 rounded-xl border border-border bg-surface/60 p-3 md:flex">
                {[
                  [Gauge, "Overview", true],
                  [Bot, "Agents"],
                  [Workflow, "Flows"],
                  [BarChart3, "Analytics"],
                  [Database, "Knowledge"],
                  [ShieldCheck, "Governance"],
                ].map(([I, t, active]) => {
                  const Icon = I as typeof Gauge;
                  return (
                    <div
                      key={t as string}
                      className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] ${active ? "bg-primary/15 text-primary" : "text-muted-foreground"}`}
                    >
                      <Icon className="size-3.5" />
                      {t as string}
                    </div>
                  );
                })}
              </aside>

              <div className="space-y-2">
                {/* KPI strip */}
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                  {[
                    ["Tasks", "284,920", "+31%", "primary"],
                    ["Accuracy", "98.7%", "+2.4%", "success"],
                    ["Hours saved", "12,480", "+46%", "primary"],
                    ["Value", "$4.2M", "+18%", "success"],
                  ].map(([k, v, d, c]) => (
                    <div key={k} className="rounded-xl border border-border bg-surface/60 p-3">
                      <p className="text-[10px] text-muted-foreground">{k}</p>
                      <p className="mt-1.5 font-display text-lg font-semibold">{v}</p>
                      <p
                        className={`mt-1 text-[10px] ${c === "success" ? "text-success" : "text-primary"}`}
                      >
                        {d}
                      </p>
                    </div>
                  ))}
                </div>

                {/* chart + side */}
                <div className="grid gap-2 md:grid-cols-[1.6fr_1fr]">
                  <div className="rounded-xl border border-border bg-surface/60 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-xs font-semibold">Agent throughput · 30d</p>
                      <div className="flex gap-1">
                        {["24h", "7d", "30d"].map((t, i) => (
                          <span
                            key={t}
                            className={`rounded-md px-2 py-0.5 text-[10px] ${i === 2 ? "bg-primary/15 text-primary" : "text-muted-foreground"}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <svg viewBox="0 0 600 160" className="h-32 w-full">
                      <defs>
                        <linearGradient id="ds-a" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="var(--primary)" stopOpacity=".45" />
                          <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {[20, 40, 60, 80, 100, 120, 140].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          x2="600"
                          y1={y}
                          y2={y}
                          stroke="var(--border)"
                          strokeDasharray="2 6"
                        />
                      ))}
                      <path
                        d="M0 130 C60 120 90 90 150 100 S240 60 300 70 S390 25 450 35 S540 10 600 18 L600 160 L0 160Z"
                        fill="url(#ds-a)"
                      />
                      <path
                        d="M0 130 C60 120 90 90 150 100 S240 60 300 70 S390 25 450 35 S540 10 600 18"
                        fill="none"
                        stroke="var(--primary)"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M0 145 C60 138 90 120 150 125 S240 100 300 108 S390 80 450 88 S540 70 600 75"
                        fill="none"
                        stroke="var(--success)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        opacity=".7"
                      />
                    </svg>
                  </div>
                  <div className="rounded-xl border border-border bg-surface/60 p-4">
                    <p className="text-xs font-semibold">Live agents</p>
                    <div className="mt-3 space-y-2">
                      {[
                        ["Revenue scout", "72%", "primary"],
                        ["Support triage", "54%", "success"],
                        ["Research", "86%", "primary"],
                        ["Finance close", "31%", "muted"],
                      ].map(([n, p, c]) => (
                        <div key={n}>
                          <div className="flex justify-between text-[10px]">
                            <span className="truncate">{n}</span>
                            <span className="text-muted-foreground">{p}</span>
                          </div>
                          <div className="mt-1 h-1 overflow-hidden rounded-full bg-secondary">
                            <div
                              className={`h-full rounded-full ${c === "success" ? "bg-success" : c === "muted" ? "bg-muted-foreground" : "bg-primary"}`}
                              style={{ width: p }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* table */}
                <div className="rounded-xl border border-border bg-surface/60 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-semibold">Recent agent runs</p>
                    <span className="text-[10px] text-primary">View all</span>
                  </div>
                  <div className="overflow-x-auto">
                  <div className="space-y-1.5 min-w-[460px]">
                    {[
                      ["nx-2", "Revenue scout", "Pipeline analysis", "✓", "1.2s", "success"],
                      ["nx-2", "Support triage", "Routed 48 tickets", "✓", "0.8s", "success"],
                      ["nx-1", "Research", "Market brief", "↻", "running", "primary"],
                      ["nx-2", "Pricing ops", "Margin guard", "✓", "2.1s", "success"],
                    ].map(([m, n, t, s, d, c]) => (
                      <div
                        key={n + d}
                        className="grid grid-cols-[60px_minmax(0,1fr)_minmax(0,1.6fr)_auto_60px] items-center gap-2 rounded-lg border border-border/60 bg-background/40 px-3 py-2 text-[11px]"
                      >
                        <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-center text-[9px] font-bold text-primary">
                          {m}
                        </span>
                        <span className="truncate font-semibold">{n}</span>
                        <span className="truncate text-muted-foreground">{t}</span>
                        <span
                          className={`${c === "success" ? "text-success" : "text-primary"}`}
                        >
                          {s}
                        </span>
                        <span className="text-right text-muted-foreground">{d}</span>
                      </div>
                    ))}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* floating chips */}
          <div className="glass-panel absolute -left-3 top-24 hidden rounded-2xl p-3 md:block">
            <div className="flex items-center gap-2 text-xs">
              <span className="grid size-8 place-items-center rounded-lg bg-success/15 text-success">
                <Check className="size-4" />
              </span>
              <div>
                <p className="font-semibold">SOC 2 verified</p>
                <p className="text-[10px] text-muted-foreground">Run #82,401</p>
              </div>
            </div>
          </div>
          <div className="glass-panel absolute -right-3 bottom-28 hidden rounded-2xl p-3 md:block">
            <div className="flex items-center gap-2 text-xs">
              <span className="grid size-8 place-items-center rounded-lg bg-primary/15 text-primary">
                <Zap className="size-4" />
              </span>
              <div>
                <p className="font-semibold">+$284K closed</p>
                <p className="text-[10px] text-muted-foreground">Revenue agent · 2s ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorkflowVisualization() {
  const nodes = [
    { x: 8, y: 50, label: "Trigger", sub: "Webhook · Email", icon: Zap, c: "primary" },
    { x: 28, y: 22, label: "Classify", sub: "nx-2 router", icon: Braces, c: "primary" },
    { x: 28, y: 78, label: "Retrieve", sub: "Vector + SQL", icon: Database, c: "primary" },
    { x: 52, y: 50, label: "Reason", sub: "Agent loop", icon: Bot, c: "success" },
    { x: 76, y: 25, label: "Act", sub: "CRM · Email", icon: Network, c: "primary" },
    { x: 76, y: 75, label: "Approve", sub: "Human-in-loop", icon: ShieldCheck, c: "primary" },
    { x: 94, y: 50, label: "Deliver", sub: "98.7% SLA", icon: CircleCheck, c: "success" },
  ];
  const edges: Array<[number, number]> = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [3, 4],
    [3, 5],
    [4, 6],
    [5, 6],
  ];
  return (
    <section className="relative px-5 py-16 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_1fr]">
          <SectionTitle
            eyebrow="Visual orchestration"
            title="Configure the workflow. Deploy the system."
            body="Connect models, tools, and guardrails in a visual editor. Every configuration maps directly to what executes in production."
          />
          <div className="flex flex-wrap gap-2">
            {["Triggers", "Models", "Tools", "Approvals", "Branches", "Memory"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-[11px] font-semibold text-muted-foreground backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-panel relative mt-14 overflow-hidden rounded-[2rem] p-4 sm:p-8">
          <div className="grid-fade pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative aspect-[16/8] w-full">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 size-full"
            >
              <defs>
                <linearGradient id="wf-edge" x1="0" x2="1">
                  <stop offset="0" stopColor="var(--primary)" stopOpacity=".15" />
                  <stop offset=".5" stopColor="var(--primary)" stopOpacity=".9" />
                  <stop offset="1" stopColor="var(--primary)" stopOpacity=".15" />
                </linearGradient>
              </defs>
              {edges.map(([a, b], i) => {
                const A = nodes[a];
                const B = nodes[b];
                const mx = (A.x + B.x) / 2;
                return (
                  <path
                    key={i}
                    d={`M${A.x} ${A.y} C ${mx} ${A.y}, ${mx} ${B.y}, ${B.x} ${B.y}`}
                    fill="none"
                    stroke="url(#wf-edge)"
                    strokeWidth=".35"
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </svg>
            {nodes.map((n, i) => {
              const Icon = n.icon;
              return (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  <div className="glass-panel flex items-center gap-2 rounded-2xl px-2.5 py-2 shadow-[var(--shadow-glow)] sm:px-3 sm:py-2.5">
                    <span
                      className={`grid size-7 shrink-0 place-items-center rounded-lg sm:size-8 ${n.c === "success" ? "bg-success/15 text-success" : "bg-primary/15 text-primary"}`}
                    >
                      <Icon className="size-3.5 sm:size-4" />
                    </span>
                    <div className="hidden sm:block">
                      <p className="text-[11px] font-semibold leading-tight">{n.label}</p>
                      <p className="text-[9px] text-muted-foreground">{n.sub}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* moving pulse */}
            <span
              className="absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]"
              style={{ left: "52%", top: "50%", animation: "pulse-soft 2s ease-in-out infinite" }}
            />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5 text-xs text-muted-foreground">
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-success" /> Live edge: agent reasoning
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary" /> Policy-bound action
              </span>
            </div>
            <span>Avg run · 1.2s · 99.99% success</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AgentArchitecture() {
  const layers = [
    {
      tag: "Interface",
      title: "Operators · Apps · APIs",
      body: "Chat, copilots, embedded UI, and SDKs in every language your team writes in.",
      icon: MessageSquareText,
    },
    {
      tag: "Orchestration",
      title: "Planner · Router · Memory",
      body: "Dynamic model routing, persistent memory, and reasoning loops with full observability.",
      icon: Workflow,
    },
    {
      tag: "Agents",
      title: "Role-aware workforce",
      body: "Composable agents with skills, tools, and policy — production-grade by default.",
      icon: Bot,
    },
    {
      tag: "Tools & Data",
      title: "Connectors · Retrieval · Code",
      body: "200+ integrations, hybrid retrieval, sandboxed code, and your private knowledge.",
      icon: Database,
    },
    {
      tag: "Trust Layer",
      title: "Guardrails · Audit · Eval",
      body: "Policy enforcement, evals, redaction, and a complete forensic trail on every action.",
      icon: ShieldCheck,
    },
  ];
  return (
    <section className="relative px-5 py-16 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[.3em] text-primary">
            Agent architecture
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-.035em] sm:text-6xl">
            One platform. <span className="text-gradient">Five enterprise-grade layers.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Most enterprises stitch together a dozen tools and hire a platform team to manage them. Nexora ships the complete reference
            architecture — from the interfaces your teams use to the audit trail your CISO requires.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-[1.05fr_.95fr]">
          <div className="space-y-3">
            {layers.map((l, i) => {
              const Icon = l.icon;
              return (
                <div
                  key={l.tag}
                  className="glass-panel group relative flex gap-5 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="grid size-11 place-items-center rounded-xl border border-border bg-background/40 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-display text-[10px] font-bold tracking-widest text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[.2em] text-primary">
                      {l.tag}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-semibold">{l.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{l.body}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="glass-panel relative grid place-items-center overflow-hidden rounded-3xl p-8">
            <div className="grid-fade absolute inset-0 opacity-40" />
            <div className="relative grid w-full max-w-xs gap-3">
              {layers.map((l, i) => (
                <div
                  key={l.tag}
                  className="rounded-2xl border border-border bg-surface-strong/70 p-4 backdrop-blur"
                  style={{
                    transform: `translateX(${(i - 2) * 14}px)`,
                  }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    {l.tag}
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold">{l.title}</p>
                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: 12 }).map((_, j) => (
                      <span
                        key={j}
                        className={`h-1 flex-1 rounded-full ${j <= i * 2 + 3 ? "bg-primary" : "bg-secondary"}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-x-10 top-0 h-32 bg-primary/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessTimeline() {
  const steps = [
    { d: "00", t: "Connect", b: "Plug Nexora into your data, identity, and tools in minutes." },
    { d: "01", t: "Compose", b: "Drag agents, models, and tools into a governed workflow." },
    { d: "02", t: "Simulate", b: "Run side-by-side evals on historical traffic before any rollout." },
    { d: "03", t: "Deploy", b: "Ship to staging or prod with one click and a full audit trail." },
    { d: "04", t: "Optimize", b: "Self-improving loops tune cost, latency, and quality nightly." },
  ];
  return (
    <section className="relative px-5 py-16 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <SectionTitle
            eyebrow="From signal to system"
            title="Five steps. Production from day one."
            body="A structured deployment process your engineering, security, and operations teams can all approve and audit."
          />
          <p className="text-sm text-muted-foreground lg:text-right">
            Median first agent in production:{" "}
            <span className="font-display text-lg text-foreground">6 days</span>
          </p>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          <ol className="grid gap-4 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.d} className="relative">
                <div className="mb-5 hidden justify-center lg:flex">
                  <span className="premium-gradient grid size-7 place-items-center rounded-full text-[10px] font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
                    {i + 1}
                  </span>
                </div>
                <div className="glass-panel rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
                  <p className="font-display text-3xl font-semibold text-gradient">{s.d}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{s.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function EnterpriseTrust() {
  const certs = [
    "SOC 2 Type II",
    "ISO 27001",
    "ISO 42001",
    "HIPAA",
    "GDPR",
    "FedRAMP Moderate",
    "PCI DSS",
    "CCPA",
  ];
  return (
    <section className="relative px-5 py-16 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div
            className="pointer-events-none absolute -right-32 top-1/2 size-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          />
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[.3em] text-primary">
                Enterprise-grade trust
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-.035em] sm:text-5xl">
                Built for the teams who <span className="text-gradient">can't fail.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                Region-locked data, customer-managed encryption keys, zero-retention model routes, and a
                governance layer your CISO, legal team, and auditors will all sign off on.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  ["99.99%", "Uptime SLA"],
                  ["0", "Customer data retained by models"],
                  ["24/7", "Security operations"],
                ].map(([n, l]) => (
                  <div key={l} className="border-l-2 border-primary/40 pl-3">
                    <p className="font-display text-2xl font-semibold sm:text-3xl">{n}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {l}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {certs.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur"
                  >
                    <ShieldCheck className="size-3 text-success" />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {[
                {
                  t: "Customer-managed encryption",
                  b: "BYOK with HSM-backed rotation across every region.",
                  i: ShieldCheck,
                },
                {
                  t: "Private model routing",
                  b: "Pin agents to private deployments or your own VPC endpoints.",
                  i: Network,
                },
                {
                  t: "Immutable audit log",
                  b: "Every prompt, tool call, and decision — cryptographically chained.",
                  i: Layers3,
                },
                {
                  t: "Policy engine",
                  b: "Author guardrails as code. Block, redact, or escalate at runtime.",
                  i: Braces,
                },
              ].map((c) => {
                const Icon = c.i;
                return (
                  <div
                    key={c.t}
                    className="flex gap-4 rounded-2xl border border-border bg-background/40 p-4 backdrop-blur"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">{c.t}</p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">{c.b}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HOME V2 — Editorial split hero · enterprise narrative
   ============================================================ */

export function HomeV2Page() {
  return (
    <SiteShell>
      <main>
        {/* ============================================================
            V2 HERO — Brutalist Editorial · Terminal + News-grid
            No image, no orb. Newspaper masthead, mono terminal mock.
           ============================================================ */}
        <section className="relative border-b-2 border-foreground/90 bg-background pt-24 sm:pt-28 lg:pt-32">
          {/* masthead row */}
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 border-b border-border px-5 pb-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground lg:px-10">
            <span>Vol. IV · Issue 26</span>
            <span className="hidden md:inline">The Agentic Enterprise Quarterly</span>
            <span>Saturday · June 2026</span>
          </div>

          {/* gigantic headline */}
          <div className="mx-auto max-w-[1400px] px-5 pt-10 lg:px-10 lg:pt-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
              ▍ Filed under — Platform / Release notes
            </p>
            <h1 className="mt-5 font-display text-[2.6rem] font-semibold leading-[0.9] tracking-[-0.055em] sm:text-[5rem] lg:text-[9rem]">
              Every model.<br />
              <span className="italic text-gradient">Every team.</span><br />
              One platform.
            </h1>

            {/* lede + CTAs in 3-col editorial layout */}
            <div className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  By the Nexora Editors
                </p>
                <p className="mt-3 text-sm leading-6 text-foreground/80">
                  A unified platform for enterprise AI operations — from initial deployment to governed fleet orchestration, with full observability and no model lock-in.
                </p>
              </div>
              <div className="md:col-span-5 md:border-l md:border-border md:pl-8">
                <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                  Nexora consolidates model access, enterprise data, and workflow orchestration into a single governed platform. Connect your stack, enforce your policies, and deploy to production behind your existing SSO — without platform engineering delays.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button size="lg" variant="premium" asChild>
                    <Link to="/sign-up">Evaluate · deploy · scale <ArrowRight /></Link>
                  </Button>
                  <Button size="lg" variant="glass" asChild>
                    <Link to="/dashboard-overview"><Play /> 90-sec film</Link>
                  </Button>
                </div>
              </div>
              <div className="md:col-span-4 md:border-l md:border-border md:pl-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Inside this issue
                </p>
                <ul className="mt-3 space-y-3 text-sm">
                  {[
                    ["01", "The model router that pays for itself"],
                    ["02", "Why governance is now a primitive"],
                    ["03", "Field notes: 6 days to first production agent"],
                    ["04", "Benchmarks vs. the leading 4 stacks"],
                  ].map(([n, t]) => (
                    <li key={n} className="flex gap-3 border-b border-dashed border-border pb-2 last:border-0">
                      <span className="font-mono text-[11px] text-primary">{n}</span>
                      <span className="leading-5 text-foreground/80">{t}</span>
                      <ArrowRight className="ml-auto size-3.5 text-muted-foreground" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Terminal-style hero "image" replacement */}
          <div className="mx-auto mt-16 max-w-[1400px] px-5 pb-20 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              {/* Terminal pane */}
              <div className="overflow-hidden rounded-2xl border border-border bg-card/80 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-2.5">
                  <span className="size-2.5 rounded-full bg-destructive/70" />
                  <span className="size-2.5 rounded-full bg-[oklch(0.78_0.16_85)]" />
                  <span className="size-2.5 rounded-full bg-success/70" />
                  <span className="ml-3 font-mono text-[11px] text-muted-foreground">
                    nexora · ~/revenue-ops · main
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-success">● connected</span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 text-foreground/90">
{`$ nexora deploy revenue-agent --env prod
✓ Routing 14 capabilities through gpt-router/v4
✓ Verifying 5 policies · SOC2 · HIPAA · GDPR
✓ Provisioning agent · attaching CRM + Snowflake
✓ Smoke-testing pipeline (84 cases)

`}<span className="text-primary">→ Live</span>{`  agent.revenue.nexora.app
   p50 latency  ·  412ms
   eval score   ·  0.974 (▲ 0.06 vs baseline)
   first action ·  "Found 18 expansion accounts"
                +$284K projected ARR · 2s ago`}
                </pre>
              </div>

              {/* Stacked spec cards */}
              <div className="grid gap-4">
                {[
                  { k: "01 · Router", v: "Pick the cheapest model that hits the eval bar.", n: "−61% spend" },
                  { k: "02 · Governance", v: "Policy primitives compile to runtime guards.", n: "0 incidents" },
                  { k: "03 · Memory", v: "Per-agent, per-tenant, with full audit replay.", n: "100% traced" },
                ].map((c) => (
                  <div key={c.k} className="group rounded-2xl border border-border bg-background/60 p-5 transition hover:border-primary/40">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">{c.k}</p>
                    <p className="mt-2 text-base font-semibold leading-snug">{c.v}</p>
                    <p className="mt-3 font-display text-2xl font-semibold text-gradient">{c.n}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* numerical ribbon */}
            <div className="mt-10 grid grid-cols-2 divide-x divide-border border-y border-border md:grid-cols-4">
              {[
                ["2.4B+", "Tasks shipped"],
                ["98.7%", "Eval accuracy"],
                ["73%", "Faster resolution"],
                ["12×", "Year-one ROI"],
              ].map(([n, l]) => (
                <div key={l} className="px-5 py-6">
                  <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{n}</p>
                  <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EditorialDispatch />
        {/* V2 EXCLUSIVE: Editorial Intelligence Feed */}
        <EditorialIntelligenceFeed />
        <DashboardShowcase />
        <AIEcosystemShowcase variant="editorial" />
        <WorkflowVisualization />
        <BentoFeatures />
        <EnterpriseDataFlowMatrix />
        <EnterpriseTrust />
        <Testimonials />
        <PremiumCTA />
      </main>
    </SiteShell>
  );
}

/* ============================================================
   HOME V3 — Centered cinematic · agentic workforce
   ============================================================ */

export function HomeV3Page() {
  return (
    <SiteShell>
      <main>
        {/* ============================================================
            V3 HERO — Dark cinematic console · asymmetric split
            No orb. Live multi-agent conversation + node graph SVG.
           ============================================================ */}
        <section className="relative overflow-hidden bg-[oklch(0.12_0.03_265)] pt-24 sm:pt-28 text-foreground lg:pt-32">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[60%]" style={{ background: "radial-gradient(60% 60% at 20% 0%, color-mix(in oklab, var(--primary) 35%, transparent), transparent 60%), radial-gradient(50% 50% at 90% 10%, color-mix(in oklab, var(--primary) 25%, transparent), transparent 60%)" }} />
          <div className="grid-fade pointer-events-none absolute inset-0 opacity-20" />

          <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 pb-16 sm:pb-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-10 lg:pb-32">
            <div className="relative pt-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary backdrop-blur">
                <Sparkles className="size-3.5" /> G2 Leader · Enterprise AI · Spring 2026
              </div>

              <h1 className="mt-6 font-display text-[3rem] font-semibold leading-[0.92] tracking-[-0.05em] sm:text-[5rem] lg:text-[6.4rem]">
                Hire the<br />
                <span className="relative inline-block">
                  <span className="text-gradient">workforce</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 300 14" fill="none" preserveAspectRatio="none">
                    <path d="M2 9 C 60 2, 140 14, 298 5" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                </span><br />
                that never<br />
                <span className="italic text-muted-foreground">sleeps.</span>
              </h1>

              <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground sm:text-lg">
                Purpose-built for enterprise operations — governed agents that reason in parallel, share memory, and deliver auditable outcomes across the systems your business depends on.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" variant="premium" asChild>
                  <Link to="/sign-up">Deploy first agent <ArrowRight /></Link>
                </Button>
                <Button size="lg" variant="glass" asChild>
                  <Link to="/contact">Talk to architects</Link>
                </Button>
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60">
                {[
                  ["38", "agents shipped / wk"],
                  ["4.2m", "tasks / day"],
                  ["$11.4M", "ARR unlocked"],
                ].map(([n, l]) => (
                  <div key={l} className="bg-[oklch(0.14_0.03_265)] p-4">
                    <dt className="font-display text-2xl font-semibold text-gradient">{n}</dt>
                    <dd className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <svg viewBox="0 0 400 400" className="absolute inset-0 size-full opacity-40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="ln" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="currentColor" stopOpacity="0.05" />
                    <stop offset="0.5" stopColor="currentColor" stopOpacity="0.6" />
                    <stop offset="1" stopColor="currentColor" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                <g stroke="url(#ln)" className="text-primary" strokeWidth="1" fill="none">
                  <path d="M40 60 L 200 200 L 360 80" />
                  <path d="M60 340 L 200 200 L 350 320" />
                  <path d="M40 60 L 60 340" />
                  <path d="M360 80 L 350 320" />
                  <path d="M40 60 L 360 80" />
                  <path d="M60 340 L 350 320" />
                </g>
                {[[40,60],[360,80],[60,340],[350,320],[200,200]].map(([x,y],i)=>(
                  <circle key={i} cx={x} cy={y} r="4" className="fill-primary" />
                ))}
              </svg>

              <div className="glass-panel relative rounded-[1.75rem] border border-border/70 bg-[oklch(0.14_0.03_265)]/85 p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="grid size-7 place-items-center rounded-lg bg-primary/20 text-primary">
                      <Network className="size-3.5" />
                    </span>
                    <p className="text-xs font-semibold">Mission Control · Q3 Revenue Pod</p>
                  </div>
                  <span className="font-mono text-[10px] text-success">● 6 agents live</span>
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    { who: "Atlas", role: "Strategy", icon: Braces, msg: "Hand-off → drafted Q3 plan against 14-week trend.", tone: "primary" },
                    { who: "Mira", role: "Revenue", icon: BarChart3, msg: "Found 18 expansion accounts · projected +$284K ARR.", tone: "success" },
                    { who: "Vega", role: "Support", icon: MessageSquareText, msg: "Resolved 412 tickets · CSAT 4.91 / 5.", tone: "primary" },
                    { who: "Onyx", role: "Security", icon: ShieldCheck, msg: "Policy lint passed · 0 PII leaks this run.", tone: "muted" },
                  ].map((a) => {
                    const Icon = a.icon;
                    return (
                      <div key={a.who} className="flex gap-3 rounded-2xl border border-border/60 bg-background/40 p-3">
                        <span className={`grid size-9 shrink-0 place-items-center rounded-xl ${a.tone === "success" ? "bg-success/15 text-success" : a.tone === "muted" ? "bg-muted text-muted-foreground" : "bg-primary/15 text-primary"}`}>
                          <Icon className="size-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-baseline gap-2">
                            <p className="text-xs font-semibold">{a.who}</p>
                            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{a.role} agent</p>
                          </div>
                          <p className="mt-1 text-[12.5px] leading-5 text-foreground/85">{a.msg}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-2xl border border-border/60 bg-background/40 p-2.5">
                  <span className="grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground">
                    <Zap className="size-3.5" />
                  </span>
                  <p className="flex-1 text-xs text-muted-foreground">
                    Ask the pod to <span className="text-foreground">close the books on Q2…</span>
                  </p>
                  <span className="font-mono text-[10px] text-muted-foreground">⌘ K</span>
                </div>
              </div>

              <div className="glass-panel absolute -left-4 -top-6 hidden w-56 rounded-2xl border border-border/60 bg-[oklch(0.14_0.03_265)]/90 p-3 shadow-[var(--shadow-glow)] sm:block">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Eval score</p>
                <p className="mt-1 font-display text-2xl font-semibold text-gradient">0.974</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
                  <div className="h-full w-[94%] rounded-full bg-primary" />
                </div>
              </div>
              <div className="glass-panel absolute -bottom-6 -right-3 hidden w-60 rounded-2xl border border-border/60 bg-[oklch(0.14_0.03_265)]/90 p-3 shadow-[var(--shadow-glow)] sm:block">
                <div className="flex items-center gap-2">
                  <Gauge className="size-4 text-primary" />
                  <p className="text-xs font-semibold">Cost / 1k tasks</p>
                  <span className="ml-auto text-xs font-semibold text-success">−61%</span>
                </div>
                <p className="mt-2 font-mono text-[10px] text-muted-foreground">router auto-picked claude-haiku · gpt-mini · llama-70b</p>
              </div>
            </div>
          </div>
        </section>

        <CinematicReel />
        {/* V3 EXCLUSIVE: Cinematic Agent Stream */}
        <CinematicAgentStream />
        <AgentArchitecture />
        <AIEcosystemShowcase variant="cinematic" />
        <WorkflowVisualization />
        <DashboardShowcase />
        <EnterpriseDataFlowMatrix />
        <EnterpriseTrust />
        <Testimonials />
        <PremiumCTA />
      </main>
    </SiteShell>
  );
}

/* ============================================================
   AI ECOSYSTEM SHOWCASE — high-impact WOW section (between Hero & Features on V1)
   Premium orbital ecosystem illustration: central neural core,
   3 animated rotating orbits with capability satellites, perimeter
   integration rail, live telemetry side rail.
   ============================================================ */

/* ============================================================
   NEXORA DESIGN SYSTEM — 6 Reusable Identity Components
   Recurring elements that form the Nexora visual language.
   Reused across V1 (ops center), V2 (editorial), V3 (cinematic).
   ============================================================ */

/* 1 ── SystemPulseIndicator ─────────────────────────────────── */
export function SystemPulseIndicator({
  label = "All systems nominal",
  compact = false,
  status = "nominal",
}: {
  label?: string;
  compact?: boolean;
  status?: "nominal" | "warning" | "critical";
}) {
  const color =
    status === "critical"
      ? "bg-destructive"
      : status === "warning"
        ? "bg-[oklch(0.78_0.18_75)]"
        : "bg-success";
  const ringColor =
    status === "critical"
      ? "border-destructive/40"
      : status === "warning"
        ? "border-[oklch(0.78_0.18_75)/40]"
        : "border-success/40";
  const pulseColor =
    status === "critical"
      ? "bg-destructive/30"
      : status === "warning"
        ? "bg-[oklch(0.78_0.18_75)/30]"
        : "bg-success/30";

  if (compact) {
    return (
      <span className="inline-flex items-center gap-2">
        <span className="relative flex size-2">
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${pulseColor} opacity-75`} />
          <span className={`relative inline-flex size-2 rounded-full ${color}`} />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
      </span>
    );
  }

  return (
    <div className="relative inline-flex flex-col items-center gap-3">
      <div className="relative flex items-center justify-center">
        {/* Outer pulse ring */}
        <div className={`absolute size-20 animate-ping rounded-full border ${ringColor} opacity-30`} style={{ animationDuration: "2.5s" }} />
        {/* Mid ring */}
        <div className={`absolute size-14 rounded-full border ${ringColor} opacity-60`} />
        {/* Inner ring */}
        <div className={`absolute size-9 rounded-full border ${ringColor}`} />
        {/* Core dot */}
        <div className={`relative size-4 rounded-full ${color} shadow-[0_0_12px_4px_currentColor] text-current`} />
      </div>
      {label && (
        <p className="font-mono text-[10px] uppercase tracking-[.22em] text-muted-foreground">{label}</p>
      )}
    </div>
  );
}

/* 2 ── AgentCapsule ─────────────────────────────────────────── */
export function AgentCapsule({
  name,
  role,
  status = "active",
  metric,
  icon: Icon,
  action,
}: {
  name: string;
  role: string;
  status?: "active" | "queued" | "idle" | "error";
  metric?: string;
  icon: typeof Bot;
  action?: string;
}) {
  const bg =
    status === "active"
      ? "bg-primary/15 text-primary"
      : status === "error"
        ? "bg-destructive/15 text-destructive"
        : status === "idle"
          ? "bg-muted text-muted-foreground"
          : "bg-border text-muted-foreground";
  const dot =
    status === "active"
      ? "bg-success animate-pulse"
      : status === "error"
        ? "bg-destructive animate-pulse"
        : status === "idle"
          ? "bg-muted-foreground/40"
          : "bg-primary/60";

  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-border/70 bg-background/60 px-3 py-2.5 backdrop-blur transition hover:border-primary/40">
      <span className={`grid size-8 shrink-0 place-items-center rounded-xl ${bg}`}>
        <Icon className="size-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-semibold leading-tight">{name}</p>
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{role}</p>
      </div>
      {metric && (
        <span className="font-mono text-[10px] font-semibold text-primary">{metric}</span>
      )}
      {action && (
        <span className="hidden truncate max-w-[120px] text-[10px] text-muted-foreground group-hover:text-foreground/70 sm:block">{action}</span>
      )}
      <span className={`size-2 shrink-0 rounded-full ${dot}`} />
    </div>
  );
}

/* 3 ── OrbitMetric ──────────────────────────────────────────── */
export function OrbitMetric({
  value,
  label,
  arc = 0.75,
  size = "md",
}: {
  value: string;
  label: string;
  arc?: number;
  size?: "sm" | "md" | "lg";
}) {
  const dim = size === "sm" ? 72 : size === "lg" ? 140 : 104;
  const cx = dim / 2;
  const cy = dim / 2;
  const r = dim / 2 - 8;
  const circumference = 2 * Math.PI * r;
  const dash = circumference * arc;
  const gap = circumference - dash;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: dim, height: dim }}>
        <svg width={dim} height={dim} viewBox={`0 0 ${dim} ${dim}`} className="-rotate-90">
          {/* Track */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-border"
          />
          {/* Fill arc */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={`${dash} ${gap}`}
            strokeLinecap="round"
            className="text-primary transition-all duration-700"
            style={{ filter: "drop-shadow(0 0 6px oklch(0.72 0.16 222 / 80%))" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className={`font-display font-semibold text-gradient leading-none ${size === "sm" ? "text-sm" : size === "lg" ? "text-2xl" : "text-lg"}`}>
            {value}
          </p>
        </div>
      </div>
      <p className={`text-center font-mono uppercase tracking-wider text-muted-foreground ${size === "sm" ? "text-[9px]" : "text-[10px]"}`}>
        {label}
      </p>
    </div>
  );
}

/* 4 ── SignalFlowCard ───────────────────────────────────────── */
export function SignalFlowCard({
  from,
  to,
  value,
  latency,
  live = true,
}: {
  from: string;
  to: string;
  value: string;
  latency: string;
  live?: boolean;
}) {
  return (
    <div className="glass-panel relative overflow-hidden rounded-2xl border border-border/70 p-4 backdrop-blur">
      {/* Animated signal line */}
      <svg className="absolute inset-x-0 top-1/2 h-px w-full" aria-hidden>
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="text-primary/40"
        />
        <circle r="3" cy="0" className="fill-primary" style={{ animation: "nx-signal 2s linear infinite" }}>
          <animateMotion dur="2s" repeatCount="indefinite" path="M0,0 L300,0" />
        </circle>
      </svg>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">From</p>
          <p className="mt-0.5 text-xs font-semibold">{from}</p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2 py-1">
          {live && <span className="size-1.5 rounded-full bg-success animate-pulse" />}
          <span className="font-mono text-[9px] text-primary">{latency}</span>
        </div>
        <div className="text-right">
          <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">To</p>
          <p className="mt-0.5 text-xs font-semibold">{to}</p>
        </div>
      </div>
      <div className="mt-3 border-t border-border/50 pt-3">
        <p className="font-display text-xl font-semibold text-gradient">{value}</p>
      </div>

      <style>{`
        @keyframes nx-signal {
          from { transform: translateX(-20px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          to { transform: translateX(320px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* 5 ── IntelligenceTimeline ─────────────────────────────────── */
export function IntelligenceTimeline({
  events,
  variant = "default",
}: {
  events: Array<{ time: string; event: string; agent: string; value?: string; icon?: typeof Activity }>;
  variant?: "default" | "editorial";
}) {
  if (variant === "editorial") {
    return (
      <div className="space-y-0">
        {events.map((e, i) => {
          const Icon = e.icon ?? Activity;
          return (
            <div key={i} className="grid grid-cols-[80px_auto] gap-4 border-b border-dashed border-border pb-3 pt-3 first:pt-0 last:border-0">
              <p className="font-mono text-[10px] text-muted-foreground pt-0.5">{e.time}</p>
              <div>
                <div className="flex items-center gap-2">
                  <Icon className="size-3 text-primary shrink-0" />
                  <p className="text-xs font-semibold leading-tight">{e.event}</p>
                  {e.value && <span className="ml-auto font-mono text-[10px] font-semibold text-primary">{e.value}</span>}
                </div>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{e.agent}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="relative pl-4">
      {/* vertical line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
      <div className="space-y-6">
        {events.map((e, i) => {
          const Icon = e.icon ?? Activity;
          return (
            <div key={i} className="relative flex gap-4">
              <div className="absolute -left-4 top-0.5 size-2 rounded-full border border-primary bg-background" />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Icon className="size-3.5 text-primary" />
                  <p className="text-sm font-semibold">{e.event}</p>
                  {e.value && <span className="ml-auto font-mono text-xs font-semibold text-gradient">{e.value}</span>}
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{e.agent}</p>
                  <span className="text-border">·</span>
                  <p className="font-mono text-[10px] text-muted-foreground">{e.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* 6 ── NeuralOrbitVisualization ─────────────────────────────── */
export function NeuralOrbitVisualization() {
  const satellites = [
    { icon: Brain, label: "Reasoning", angle: 0 },
    { icon: Database, label: "Memory", angle: 60 },
    { icon: ShieldCheck, label: "Governance", angle: 120 },
    { icon: Workflow, label: "Orchestration", angle: 180 },
    { icon: Radar, label: "Observability", angle: 240 },
    { icon: Plug, label: "Connectors", angle: 300 },
  ];

  return (
    <div className="relative mx-auto" style={{ width: 340, height: 340 }}>
      {/* Outer orbit ring */}
      <svg className="absolute inset-0 size-full" viewBox="0 0 340 340" aria-hidden>
        <defs>
          <linearGradient id="orbit-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--primary)" stopOpacity="0.6" />
            <stop offset="0.5" stopColor="var(--primary)" stopOpacity="0.15" />
            <stop offset="1" stopColor="var(--primary)" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        {/* Orbit rings */}
        <circle cx="170" cy="170" r="148" fill="none" stroke="url(#orbit-ring)" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="170" cy="170" r="100" fill="none" stroke="var(--primary)" strokeOpacity="0.12" strokeWidth="1" />
        <circle cx="170" cy="170" r="52" fill="none" stroke="var(--primary)" strokeOpacity="0.25" strokeWidth="1" />
        {/* Center core */}
        <circle cx="170" cy="170" r="30" fill="var(--primary)" fillOpacity="0.15" />
        <circle cx="170" cy="170" r="18" fill="var(--primary)" fillOpacity="0.8" />
        {/* Animated sweep */}
        <path
          d="M170,170 L170,22"
          stroke="var(--primary)"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          style={{ transformOrigin: "170px 170px", animation: "nx-orbit-sweep 8s linear infinite" }}
        />
      </svg>
      {/* Satellite nodes */}
      {satellites.map((s) => {
        const rad = (s.angle * Math.PI) / 180;
        const x = 170 + 148 * Math.sin(rad) - 20;
        const y = 170 - 148 * Math.cos(rad) - 20;
        const Icon = s.icon;
        return (
          <div
            key={s.label}
            className="absolute grid size-10 place-items-center rounded-2xl border border-border bg-surface-strong text-primary shadow-[var(--shadow-glow)]"
            style={{ left: x, top: y }}
            title={s.label}
          >
            <Icon className="size-4" />
          </div>
        );
      })}
      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="mx-auto size-5 text-primary-foreground" />
          <p className="mt-1 font-display text-[10px] font-bold text-primary-foreground">NEXORA</p>
        </div>
      </div>
      <style>{`
        @keyframes nx-orbit-sweep { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

/* ============================================================
   AGENT LIFECYCLE TIMELINE — Nexora Flagship Feature
   Visualizes the complete lifecycle of an autonomous agent,
   from spawn to archive — a signature Nexora-only experience.
   ============================================================ */
export function AgentLifecycleTimeline() {
  const stages = [
    {
      id: "01",
      phase: "Spawn",
      label: "Agent Birth",
      detail: "Role defined, policy mesh compiled, resource budget allocated.",
      metric: "82ms",
      metricLabel: "boot time",
      icon: Zap,
      status: "complete",
    },
    {
      id: "02",
      phase: "Context",
      label: "Memory Load",
      detail: "90-day thread replayed. Customer records, prior decisions, and domain knowledge indexed.",
      metric: "220ms",
      metricLabel: "recall latency",
      icon: Database,
      status: "complete",
    },
    {
      id: "03",
      phase: "Tools",
      label: "Capability Discovery",
      detail: "14 tools registered: CRM, Snowflake, email, calendar, code exec, web search.",
      metric: "14",
      metricLabel: "tools wired",
      icon: Plug,
      status: "complete",
    },
    {
      id: "04",
      phase: "Mission",
      label: "Goal Assignment",
      detail: "Orchestrator hands off: find 10 expansion accounts + draft outreach by 17:00.",
      metric: "Q3 Rev",
      metricLabel: "mission pod",
      icon: Brain,
      status: "complete",
    },
    {
      id: "05",
      phase: "Execute",
      label: "Reasoning Loop",
      detail: "Iterating: plan → act → observe. Router picks cheapest model that clears eval bar each step.",
      metric: "412ms",
      metricLabel: "p50 per step",
      icon: Activity,
      status: "active",
    },
    {
      id: "06",
      phase: "Eval",
      label: "Quality Gate",
      detail: "84 automated test cases run. Eval score 0.974 — above 0.92 threshold. Cleared.",
      metric: "0.974",
      metricLabel: "eval score",
      icon: Eye,
      status: "pending",
    },
    {
      id: "07",
      phase: "Outcome",
      label: "Delivery",
      detail: "18 expansion accounts surfaced. Outreach drafted. $284K ARR projected. Operator notified.",
      metric: "+$284K",
      metricLabel: "ARR found",
      icon: TrendingUp,
      status: "pending",
    },
    {
      id: "08",
      phase: "Archive",
      label: "Memory Commit",
      detail: "Run committed to long-term memory. Audit trail sealed. Agent deprovisioned cleanly.",
      metric: "100%",
      metricLabel: "steps traced",
      icon: Clock,
      status: "pending",
    },
  ];

  return (
    <section className="relative overflow-hidden px-5 py-16 sm:py-28 lg:px-8">
      {/* atmospheric bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(55% 40% at 50% 60%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)" }}
      />
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-15" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.2em] text-primary">
              <Sparkles className="size-3" /> Nexora Signature Feature
            </div>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-.03em] sm:text-5xl">
              The Agent Lifecycle.<br />
              <span className="text-gradient">Every step. Fully traced.</span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
              From spawn to archive — every decision, every tool call, every policy check. No black boxes.
              The complete graph of what your agents did and why.
            </p>
          </div>
          <div className="shrink-0">
            <SystemPulseIndicator label="Revenue pod · live" status="nominal" />
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-14 overflow-x-auto pb-4">
          <div className="min-w-[900px]">
            {/* Stage nodes row */}
            <div className="relative grid grid-cols-8 gap-2">
              {/* connector line */}
              <div className="absolute left-[6.25%] right-[6.25%] top-6 h-px bg-gradient-to-r from-primary/80 via-primary/40 to-border/60" />

              {stages.map((s, i) => {
                const Icon = s.icon;
                const isActive = s.status === "active";
                const isComplete = s.status === "complete";
                return (
                  <div key={s.id} className="relative flex flex-col items-center">
                    {/* Node */}
                    <div
                      className={`relative z-10 grid size-12 place-items-center rounded-2xl border transition-all ${
                        isActive
                          ? "border-primary bg-primary/20 text-primary shadow-[var(--shadow-glow)]"
                          : isComplete
                            ? "border-success/50 bg-success/10 text-success"
                            : "border-border bg-background/40 text-muted-foreground"
                      }`}
                    >
                      <Icon className="size-5" />
                      {isActive && (
                        <span className="absolute -right-1 -top-1 size-3 rounded-full border-2 border-background bg-primary animate-pulse" />
                      )}
                    </div>
                    {/* Phase label */}
                    <p className={`mt-2 font-mono text-[9px] uppercase tracking-[.18em] ${isActive ? "text-primary" : isComplete ? "text-success" : "text-muted-foreground"}`}>
                      {s.phase}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Detail cards row */}
            <div className="mt-6 grid grid-cols-8 gap-2">
              {stages.map((s) => {
                const isActive = s.status === "active";
                const isComplete = s.status === "complete";
                return (
                  <div
                    key={s.id}
                    className={`rounded-2xl border p-3 transition-all ${
                      isActive
                        ? "border-primary/50 bg-primary/5 shadow-[var(--shadow-glow)]"
                        : isComplete
                          ? "border-success/20 bg-success/5"
                          : "border-border/50 bg-background/30"
                    }`}
                  >
                    <p className={`font-mono text-[8px] uppercase tracking-[.15em] ${isActive ? "text-primary" : isComplete ? "text-success" : "text-muted-foreground"}`}>
                      {s.id}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold leading-tight">{s.label}</p>
                    <p className="mt-2 text-[10px] leading-[1.4] text-muted-foreground">{s.detail}</p>
                    <div className="mt-3 border-t border-border/50 pt-2">
                      <p className={`font-display text-base font-semibold ${isActive ? "text-gradient" : isComplete ? "text-success" : "text-muted-foreground/60"}`}>
                        {s.metric}
                      </p>
                      <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{s.metricLabel}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom telemetry strip */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {[
            ["412ms", "Avg step latency"],
            ["0.974", "Eval gate score"],
            ["100%", "Steps in audit log"],
            ["+$284K", "ARR surfaced · this run"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background/70 px-5 py-4">
              <p className="font-display text-2xl font-semibold tracking-tight text-gradient">{n}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[.18em] text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            Every run produces a cryptographically signed audit trail. Replay any step. Export to SIEM.
          </p>
          <button className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition hover:border-primary/40 hover:text-foreground">
            Explore lifecycle docs <ChevronRight className="size-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   V1 SIGNATURE — Operations Center
   Enterprise ops-center: orbital metrics, system pulse,
   and live agent capsule grid. Only on Home V1.
   ============================================================ */
function OperationsCenter() {
  const agents = [
    { name: "Atlas", role: "Strategy Agent", status: "active" as const, metric: "97%", icon: Brain, action: "Analyzing Q3 plan" },
    { name: "Mira", role: "Revenue Agent", status: "active" as const, metric: "+$284K", icon: TrendingUp, action: "Pipeline scan complete" },
    { name: "Vega", role: "Support Agent", status: "active" as const, metric: "4.91★", icon: MessageSquareText, action: "412 tickets resolved" },
    { name: "Onyx", role: "Security Agent", status: "active" as const, metric: "0 flags", icon: ShieldCheck, action: "Policy lint passed" },
    { name: "Flux", role: "Data Agent", status: "active" as const, metric: "14 src", icon: Database, action: "Syncing Snowflake" },
    { name: "Orion", role: "Research Agent", status: "queued" as const, metric: "ETA 4m", icon: Radar, action: "Queued for market brief" },
  ];

  return (
    <section className="relative overflow-hidden px-5 py-14 sm:py-24 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(50% 40% at 30% 50%, color-mix(in oklab, var(--primary) 10%, transparent), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-14 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[.28em] text-primary">▍ Enterprise Operations Center</p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-.03em] sm:text-5xl">
              Your entire AI workforce.<br />
              <span className="text-gradient">Visible in one view.</span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              One command center for every agent, every pipeline, every outcome. Real telemetry.
              Real governance. No dashboards from five different vendors.
            </p>
          </div>
          <SystemPulseIndicator label="6 agents · nominal" status="nominal" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Left: orbit metrics + agent grid */}
          <div>
            {/* Orbit metrics row */}
            <div className="glass-panel mb-6 flex flex-wrap items-center justify-around gap-6 rounded-3xl p-6">
              <OrbitMetric value="2.4B" label="Tasks / yr" arc={0.92} size="lg" />
              <OrbitMetric value="98.7%" label="Accuracy" arc={0.987} size="lg" />
              <OrbitMetric value="412ms" label="P50 latency" arc={0.72} size="lg" />
              <OrbitMetric value="12×" label="Avg ROI" arc={0.85} size="lg" />
              <OrbitMetric value="99.99%" label="Uptime" arc={0.9999} size="lg" />
            </div>

            {/* Agent capsules grid */}
            <div className="grid gap-2 sm:grid-cols-2">
              {agents.map((a) => (
                <AgentCapsule key={a.name} {...a} />
              ))}
            </div>
          </div>

          {/* Right: Neural orbit visualization */}
          <div className="glass-panel hidden items-center justify-center rounded-3xl p-6 lg:flex">
            <NeuralOrbitVisualization />
          </div>
        </div>

        {/* Signal flow row */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <SignalFlowCard from="Salesforce" to="Atlas" value="+18.4% pipeline" latency="p50 38ms" live />
          <SignalFlowCard from="Snowflake" to="Mira" value="147K rows scanned" latency="p50 84ms" live />
          <SignalFlowCard from="Zendesk" to="Vega" value="412 resolved today" latency="p50 22ms" live />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   V2 SIGNATURE — Editorial Intelligence Feed
   Newspaper-column chronological intelligence timeline.
   Only on Home V2.
   ============================================================ */
function EditorialIntelligenceFeed() {
  const events = [
    { time: "09:14", event: "Revenue pipeline updated — 18 expansion accounts flagged", agent: "Mira · Revenue Agent", value: "+$284K", icon: TrendingUp },
    { time: "09:31", event: "Policy lint complete — 47 controls verified, 0 violations", agent: "Onyx · Security Agent", value: "0 flags", icon: ShieldCheck },
    { time: "10:02", event: "Q3 strategy brief delivered — 14-week trend synthesis", agent: "Atlas · Strategy Agent", value: "97% conf.", icon: Brain },
    { time: "10:47", event: "Support backlog cleared — 412 tickets, CSAT 4.91/5", agent: "Vega · Support Agent", value: "4.91★", icon: MessageSquareText },
    { time: "11:18", event: "Data pipeline reconciled — Snowflake × Salesforce synced", agent: "Flux · Data Agent", value: "14 sources", icon: Database },
    { time: "12:00", event: "Daily eval report sealed — eval score 0.974 vs 0.92 threshold", agent: "Nexora Eval Gate", value: "0.974", icon: Eye },
  ];

  return (
    <section className="relative border-y-2 border-foreground/90 bg-background px-5 py-20 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12">
        {/* Left: masthead */}
        <aside className="lg:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-[.3em] text-primary">▍ Live intelligence feed</p>
          <h3 className="mt-4 font-display text-3xl font-semibold leading-[.95] tracking-[-.03em] sm:text-4xl">
            What your agents<br />shipped today.
          </h3>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Every action. Every outcome. Filed in real time from production. No summary reports —
            the raw intelligence signal, operator-grade.
          </p>
          <div className="mt-8 space-y-3">
            <SignalFlowCard from="CRM" to="Revenue Agent" value="+$284K ARR" latency="p50 38ms" live />
            <SignalFlowCard from="Zendesk" to="Support Agent" value="412 resolved" latency="p50 22ms" live />
          </div>
          <div className="mt-6 inline-flex items-center gap-2 border-t-2 border-foreground/90 pt-3 font-mono text-[10px] uppercase tracking-[.2em] text-foreground">
            View full audit log <ArrowRight className="size-3" />
          </div>
        </aside>

        {/* Center: Intelligence Timeline */}
        <div className="border-t border-border pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <div className="mb-4 flex items-center gap-2">
            <Activity className="size-3.5 text-primary" />
            <p className="font-mono text-[10px] uppercase tracking-[.25em] text-muted-foreground">
              Today · {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </p>
            <span className="ml-auto flex items-center gap-1 text-[10px] text-success">
              <span className="size-1.5 rounded-full bg-success animate-pulse" /> Live
            </span>
          </div>
          <IntelligenceTimeline events={events} variant="editorial" />
        </div>

        {/* Right: system metrics */}
        <div className="lg:col-span-3 lg:border-l lg:border-border lg:pl-8">
          <p className="font-mono text-[10px] uppercase tracking-[.25em] text-muted-foreground">System · now</p>
          <div className="mt-4 flex flex-wrap items-center gap-6 lg:flex-col lg:items-start lg:gap-8">
            <OrbitMetric value="98.7%" label="Eval accuracy" arc={0.987} size="md" />
            <OrbitMetric value="412ms" label="P50 latency" arc={0.72} size="md" />
            <OrbitMetric value="99.99%" label="Uptime" arc={0.9999} size="md" />
          </div>
          <div className="mt-6 rounded-2xl border border-foreground/90 bg-card p-4">
            <p className="font-mono text-[9px] uppercase tracking-wider text-primary">Nexora Pulse</p>
            <p className="mt-2 font-display text-2xl font-semibold">All systems<br />nominal.</p>
            <SystemPulseIndicator label="6 agents live" compact status="nominal" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   V3 SIGNATURE — Cinematic Agent Stream
   Full-bleed dark section with streaming agent activity.
   Only on Home V3.
   ============================================================ */
function CinematicAgentStream() {
  const stream = [
    { agent: "Atlas", role: "Strategy", icon: Brain, msg: "Synthesized 14-week revenue trend → Q3 plan drafted in 4h.", stat: "4.2s", tone: "primary" },
    { agent: "Mira", role: "Revenue", icon: TrendingUp, msg: "Surfaced 18 expansion accounts · projected +$284K ARR.", stat: "+$284K", tone: "success" },
    { agent: "Vega", role: "Support", icon: MessageSquareText, msg: "Cleared 412 tickets · CSAT 4.91/5 · escalated 3 edge cases.", stat: "4.91★", tone: "primary" },
    { agent: "Onyx", role: "Security", icon: ShieldCheck, msg: "Ran 47-control policy lint · 0 violations · SOC2 clean.", stat: "0 flags", tone: "muted" },
    { agent: "Flux", role: "Data", icon: Database, msg: "Reconciled Snowflake × Salesforce across 14 live sources.", stat: "14 src", tone: "primary" },
  ];

  return (
    <section className="relative overflow-hidden bg-[oklch(0.10_0.025_265)] py-16 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(50% 40% at 70% 50%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 65%)" }}
      />
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-10" />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: title + metrics */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.3em] text-primary">▍ Mission Control · Real Time</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[.95] tracking-[-.04em] sm:text-6xl">
              Six agents.<br />
              One mission.<br />
              <span className="italic text-gradient">Zero downtime.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
              Each agent in the pod reasons independently, shares memory, and routes decisions
              through the policy mesh — in parallel, not in sequence.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60">
              {[["38", "agents/wk"], ["4.2m", "tasks/day"], ["$11.4M", "ARR found"]].map(([n, l]) => (
                <div key={l} className="bg-[oklch(0.12_0.025_265)] p-4">
                  <p className="font-display text-2xl font-semibold text-gradient">{n}</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <SystemPulseIndicator label="Revenue pod · all agents nominal" status="nominal" />
            </div>
          </div>

          {/* Right: agent capsule stream */}
          <div className="space-y-3">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[.25em] text-muted-foreground">Pod activity stream</p>
              <span className="flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-[10px] font-semibold text-success">
                <span className="size-1.5 rounded-full bg-success animate-pulse" />
                {stream.length} agents live
              </span>
            </div>
            {stream.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.agent}
                  className={`relative overflow-hidden rounded-2xl border bg-[oklch(0.13_0.025_265)] p-4 transition ${
                    a.tone === "success"
                      ? "border-success/30"
                      : a.tone === "muted"
                        ? "border-border/40"
                        : "border-primary/30"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-1 rounded-r"
                    style={{
                      background: a.tone === "success"
                        ? "var(--success)"
                        : a.tone === "muted"
                          ? "var(--border)"
                          : "var(--primary)",
                    }}
                  />
                  <div className="flex items-start gap-3 pl-3">
                    <span className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl ${
                      a.tone === "success"
                        ? "bg-success/15 text-success"
                        : a.tone === "muted"
                          ? "bg-muted text-muted-foreground"
                          : "bg-primary/15 text-primary"
                    }`}>
                      <Icon className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2">
                        <p className="text-sm font-semibold">{a.agent}</p>
                        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{a.role} agent</p>
                      </div>
                      <p className="mt-1 text-[12.5px] leading-5 text-foreground/80">{a.msg}</p>
                    </div>
                    <span className={`shrink-0 font-mono text-xs font-semibold ${a.tone === "success" ? "text-success" : a.tone === "muted" ? "text-muted-foreground" : "text-primary"}`}>
                      {a.stat}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Input bar */}
            <div className="flex items-center gap-2 rounded-2xl border border-border/60 bg-[oklch(0.13_0.025_265)] p-2.5">
              <span className="grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="size-3.5" />
              </span>
              <p className="flex-1 text-xs text-muted-foreground">
                Assign new mission to the pod — <span className="text-foreground">"prepare board deck for Q3 review"</span>
              </p>
              <span className="font-mono text-[10px] text-muted-foreground">⌘ K</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIEcosystemShowcase({ variant = "default" }: { variant?: "default" | "editorial" | "cinematic" }) {
  const satellites = [
    { icon: Brain, label: "Reasoning" },
    { icon: Database, label: "Knowledge" },
    { icon: Workflow, label: "Workflows" },
    { icon: ShieldCheck, label: "Guardrails" },
    { icon: Plug, label: "Connectors" },
    { icon: Radar, label: "Observability" },
    { icon: GitBranch, label: "Evals" },
    { icon: Cloud, label: "Deploy" },
  ];
  const rails = [
    { i: Cpu, t: "Model router", v: "auto · −61% spend" },
    { i: Lock, t: "Policy mesh", v: "SOC2 · HIPAA · GDPR" },
    { i: Globe, t: "Edge runtime", v: "12 regions · p50 412ms" },
    { i: Terminal, t: "SDK + API", v: "ts · py · go · rust" },
  ];

  const sectionTone =
    variant === "cinematic"
      ? "bg-[oklch(0.12_0.03_265)]"
      : variant === "editorial"
        ? "bg-background border-y-2 border-foreground/90"
        : "bg-background";

  return (
    <section className={`relative overflow-hidden px-5 py-16 sm:py-28 lg:px-8 ${sectionTone}`}>
      {/* atmospheric layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 50% at 50% 30%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 65%)",
        }}
      />
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary">
            <Sparkles className="size-3.5" />
            The Nexora Ecosystem
          </div>
          <h2 className="font-display text-4xl font-semibold leading-[.98] tracking-[-.04em] sm:text-6xl">
            One intelligent core. <span className="text-gradient">An entire orbit of capability.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Models, memory, tools, governance, and observability — wired into a single living system that
            adapts in real time to every signal your business sends.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_1.2fr_1fr]">
          {/* left rail — integration chips */}
          <div className="space-y-3">
            {rails.slice(0, 2).map(({ i: Icon, t, v }) => (
              <div key={t} className="glass-panel flex items-center gap-3 rounded-2xl border border-border/70 p-4 backdrop-blur">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold">{t}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{v}</p>
                </div>
                <span className="ml-auto size-1.5 rounded-full bg-success" />
              </div>
            ))}
            <div className="rounded-2xl border border-dashed border-border p-4">
              <p className="font-mono text-[10px] uppercase tracking-[.22em] text-muted-foreground">Live signal</p>
              <p className="mt-2 font-display text-2xl font-semibold text-gradient">2.4B+ tasks</p>
              <div className="mt-2 flex items-end gap-1 h-10">
                {[40, 62, 48, 78, 56, 84, 70, 92, 66, 88, 74, 96].map((h, i) => (
                  <span key={i} className="flex-1 rounded-sm bg-primary/70" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>

          {/* central orbital ecosystem */}
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            {/* concentric rings */}
            <svg viewBox="0 0 520 520" className="absolute inset-0 size-full" aria-hidden>
              <defs>
                <radialGradient id="eco-core" cx="50%" cy="50%" r="50%">
                  <stop offset="0" stopColor="var(--primary)" stopOpacity="0.9" />
                  <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="eco-ring" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="var(--primary)" stopOpacity="0.05" />
                  <stop offset="0.5" stopColor="var(--primary)" stopOpacity="0.6" />
                  <stop offset="1" stopColor="var(--primary)" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              {[110, 170, 235].map((r, i) => (
                <circle
                  key={r}
                  cx="260"
                  cy="260"
                  r={r}
                  fill="none"
                  stroke="url(#eco-ring)"
                  strokeWidth={i === 1 ? 1.2 : 0.8}
                  strokeDasharray={i === 2 ? "3 6" : undefined}
                />
              ))}
              {/* core glow */}
              <circle cx="260" cy="260" r="90" fill="url(#eco-core)" opacity="0.55" />
              <circle cx="260" cy="260" r="34" className="fill-primary" />
              <circle cx="260" cy="260" r="50" fill="none" stroke="var(--primary)" strokeOpacity="0.6" strokeWidth="1" />
              <circle cx="260" cy="260" r="70" fill="none" stroke="var(--primary)" strokeOpacity="0.3" strokeWidth="1" />
              {/* radial spokes */}
              {Array.from({ length: 12 }).map((_, i) => {
                const a = (i * Math.PI) / 6;
                const x1 = 260 + Math.cos(a) * 100;
                const y1 = 260 + Math.sin(a) * 100;
                const x2 = 260 + Math.cos(a) * 235;
                const y2 = 260 + Math.sin(a) * 235;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="var(--primary)"
                    strokeOpacity="0.12"
                    strokeWidth="0.8"
                  />
                );
              })}
              {/* pulsing core */}
              <circle cx="260" cy="260" r="34" fill="none" stroke="var(--primary)" strokeOpacity="0.5" strokeWidth="2">
                <animate attributeName="r" values="34;90;34" dur="3.6s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="3.6s" repeatCount="indefinite" />
              </circle>
            </svg>

            {/* core glyph */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="grid size-16 place-items-center rounded-2xl bg-background/80 text-primary shadow-[var(--shadow-glow,0_20px_60px_-20px_color-mix(in_oklab,var(--primary)_50%,transparent))] backdrop-blur">
                <Brain className="size-7" />
              </div>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[.25em] text-muted-foreground">core</p>
            </div>

            {/* orbiting satellites — outer */}
            <div
              className="absolute inset-0"
              style={{ animation: "nx-orbit 26s linear infinite" }}
            >
              {satellites.map(({ icon: Icon, label }, i) => {
                const a = (i / satellites.length) * 2 * Math.PI - Math.PI / 2;
                const x = 50 + (235 / 520) * 100 * Math.cos(a);
                const y = 50 + (235 / 520) * 100 * Math.sin(a);
                return (
                  <div
                    key={label}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                      animation: "nx-orbit-counter 26s linear infinite",
                    }}
                  >
                    <div className="group flex items-center gap-2 rounded-xl border border-border/70 bg-background/80 px-2.5 py-1.5 shadow-sm backdrop-blur transition hover:border-primary/50">
                      <span className="grid size-6 place-items-center rounded-md bg-primary/15 text-primary">
                        <Icon className="size-3.5" />
                      </span>
                      <span className="text-[10px] font-semibold">{label}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* inner ring rotating opposite */}
            <div
              className="absolute inset-0"
              style={{ animation: "nx-orbit-counter 18s linear infinite" }}
            >
              {[Bot, MessageSquareText, BarChart3, Zap].map((Icon, i) => {
                const a = (i / 4) * 2 * Math.PI;
                const x = 50 + (170 / 520) * 100 * Math.cos(a);
                const y = 50 + (170 / 520) * 100 * Math.sin(a);
                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                      animation: "nx-orbit 18s linear infinite",
                    }}
                  >
                    <span className="grid size-8 place-items-center rounded-full border border-primary/40 bg-card text-primary shadow-[0_0_24px_-4px_color-mix(in_oklab,var(--primary)_50%,transparent)]">
                      <Icon className="size-3.5" />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* right rail */}
          <div className="space-y-3">
            {rails.slice(2).map(({ i: Icon, t, v }) => (
              <div key={t} className="glass-panel flex items-center gap-3 rounded-2xl border border-border/70 p-4 backdrop-blur">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold">{t}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{v}</p>
                </div>
                <span className="ml-auto size-1.5 rounded-full bg-success" />
              </div>
            ))}
            <div className="overflow-hidden rounded-2xl border border-border bg-card/60 p-4 backdrop-blur">
              <div className="flex items-center gap-2">
                <Gauge className="size-4 text-primary" />
                <p className="text-xs font-semibold">Eval score (live)</p>
                <span className="ml-auto text-xs font-semibold text-success">0.974</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[94%] rounded-full bg-primary" />
              </div>
              <p className="mt-3 font-mono text-[10px] text-muted-foreground">
                router · gpt-mini → claude-haiku · 412ms p50
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes nx-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes nx-orbit-counter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   ENTERPRISE DATA-FLOW MATRIX — animated architecture showcase
   5 horizontal layers with packets traveling along SVG paths.
   ============================================================ */
export function EnterpriseDataFlowMatrix() {
  const layers = [
    { tag: "Edge", icon: Globe, body: "SDKs · APIs · embedded UI" },
    { tag: "Orchestration", icon: Workflow, body: "Planner · router · memory" },
    { tag: "Reasoning", icon: Brain, body: "Multi-model · parallel agents" },
    { tag: "Data", icon: Database, body: "Retrieval · connectors · code" },
    { tag: "Trust", icon: ShieldCheck, body: "Policy · evals · audit trail" },
  ];

  return (
    <section className="relative overflow-hidden px-5 py-16 sm:py-28 lg:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 110%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-end gap-8 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.3em] text-primary">
              Enterprise architecture · live
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-.035em] sm:text-5xl">
              Watch a request travel <span className="text-gradient">the entire stack.</span>
            </h2>
          </div>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            From a single user prompt, Nexora plans, routes, retrieves, reasons, and ships an outcome —
            with policy enforcement and audit logs attached to every hop, in under a second.
          </p>
        </div>

        <div className="glass-panel mt-12 overflow-hidden rounded-3xl border border-border/70 p-6 lg:p-10">
          <div className="relative">
            {/* animated SVG packet flow behind layers */}
            <svg
              viewBox="0 0 1000 520"
              className="absolute inset-0 size-full"
              preserveAspectRatio="none"
              aria-hidden
            >
              <defs>
                <linearGradient id="flow-g" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="var(--primary)" stopOpacity="0" />
                  <stop offset="0.5" stopColor="var(--primary)" stopOpacity="0.8" />
                  <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* horizontal connectors between layers */}
              {[80, 180, 280, 380, 480].map((y, i) => (
                <g key={y}>
                  <line
                    x1="40"
                    y1={y}
                    x2="960"
                    y2={y}
                    stroke="var(--primary)"
                    strokeOpacity="0.08"
                    strokeWidth="1"
                  />
                  <line
                    x1="40"
                    y1={y}
                    x2="960"
                    y2={y}
                    stroke="url(#flow-g)"
                    strokeWidth="1.5"
                    strokeDasharray="6 12"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="-180"
                      dur={`${4 + i * 0.6}s`}
                      repeatCount="indefinite"
                    />
                  </line>
                </g>
              ))}
              {/* vertical drop column showing request flow */}
              <line x1="500" y1="40" x2="500" y2="500" stroke="var(--primary)" strokeOpacity="0.18" strokeWidth="1" />
              {[80, 180, 280, 380, 480].map((y, i) => (
                <circle key={`p${y}`} cx="500" cy={y} r="6" className="fill-primary">
                  <animate attributeName="r" values="6;14;6" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0.2;1" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                </circle>
              ))}
              {/* traveling packet */}
              <circle r="5" className="fill-primary">
                <animateMotion dur="5s" repeatCount="indefinite" path="M 500 40 L 500 500" />
              </circle>
              <circle r="5" fill="none" stroke="var(--primary)" strokeOpacity="0.6">
                <animateMotion dur="5s" repeatCount="indefinite" begin="1s" path="M 500 40 L 500 500" />
                <animate attributeName="r" values="5;18;5" dur="1.6s" repeatCount="indefinite" />
              </circle>
            </svg>

            <div className="relative grid gap-3">
              {layers.map((l, i) => {
                const Icon = l.icon;
                return (
                  <div
                    key={l.tag}
                    className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-border/70 bg-background/70 px-4 py-4 backdrop-blur sm:px-6"
                    style={{
                      transform: `translateX(${(i % 2 === 0 ? -1 : 1) * 12}px)`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[.22em] text-primary">
                          Layer 0{i + 1}
                        </p>
                        <p className="font-display text-base font-semibold">{l.tag}</p>
                      </div>
                    </div>
                    <p className="hidden text-xs text-muted-foreground sm:block">{l.body}</p>
                    <div className="flex items-center gap-2">
                      <span className="hidden font-mono text-[10px] uppercase tracking-wider text-muted-foreground md:inline">
                        {["p50 38ms", "p50 84ms", "p50 220ms", "p50 70ms", "p50 12ms"][i]}
                      </span>
                      <span className="size-1.5 rounded-full bg-success" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {[
              ["412ms", "End-to-end p50"],
              ["0", "Policy violations"],
              ["100%", "Steps traced"],
              ["99.99%", "Uptime · 12mo"],
            ].map(([n, l]) => (
              <div key={l} className="bg-background/70 p-5">
                <p className="font-display text-2xl font-semibold tracking-tight">{n}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[.22em] text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   EDITORIAL DISPATCH — V2 signature section (newspaper feel)
   Asymmetric three-column "field dispatch" mosaic with pull quote.
   ============================================================ */
export function EditorialDispatch() {
  return (
    <section className="relative border-y-2 border-foreground/90 bg-background px-5 py-20 lg:px-10">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <p className="font-mono text-[10px] uppercase tracking-[.3em] text-primary">▍ Field dispatch</p>
          <h3 className="mt-4 font-display text-3xl font-semibold leading-[.95] tracking-[-.03em] sm:text-4xl">
            Notes from the eight-week deploy.
          </h3>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Three operators, three industries, one platform — filed from production this quarter.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 border-t-2 border-foreground/90 pt-3 font-mono text-[10px] uppercase tracking-[.2em] text-foreground">
            Continue reading <ArrowRight className="size-3" />
          </div>
        </aside>

        <blockquote className="relative flex flex-col justify-between border-l-2 border-foreground/90 pl-6 lg:col-span-5">
          <p className="font-display text-2xl font-medium leading-[1.2] tracking-[-.02em] sm:text-3xl">
            “We retired four internal tools the week after shipping Nexora. The router alone paid for the
            platform in 38 days.”
          </p>
          <footer className="mt-6 flex items-center gap-3 border-t border-dashed border-border pt-4">
            <span className="grid size-10 place-items-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary">
              JR
            </span>
            <div>
              <p className="text-sm font-semibold">Jordan Reyes</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                VP Platform · Helios
              </p>
            </div>
            <span className="ml-auto font-mono text-[10px] uppercase tracking-[.2em] text-primary">−61% spend</span>
          </footer>
        </blockquote>

        <div className="grid gap-4 lg:col-span-4">
          {[
            { k: "01 / Vertex", body: "Migrated 14 prompt apps · cut latency by 73% in one sprint.", n: "8 wk → prod" },
            { k: "02 / Quantic", body: "Wired Snowflake + Salesforce · agents shipped same week.", n: "+$11.4M ARR" },
            { k: "03 / Northstar", body: "SOC2 controls compiled to runtime · 0 audit findings.", n: "0 incidents" },
          ].map((c) => (
            <article
              key={c.k}
              className="group grid grid-cols-[1fr_auto] gap-3 border border-foreground/90 bg-card p-5 transition hover:bg-foreground/[0.04]"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[.25em] text-primary">{c.k}</p>
                <p className="mt-2 text-sm leading-5 text-foreground/85">{c.body}</p>
              </div>
              <p className="self-end font-display text-xl font-semibold text-gradient">{c.n}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CINEMATIC REEL — V3 signature section (full-bleed dark marquee)
   Scrolling outcome reel + cinematic frame strip.
   ============================================================ */
export function CinematicReel() {
  const reel = [
    "Closed Q2 books in 4 hours",
    "Resolved 12,408 tickets · CSAT 4.91",
    "Found 18 expansion accounts · +$284K ARR",
    "Routed 412k req/s under 500ms",
    "Compiled 47 policies · 0 violations",
    "Shipped 38 agents this week",
    "Cut model spend −61%",
    "Onboarded 9 enterprises this month",
  ];
  const frames = [
    { k: "EXT · MISSION CONTROL", body: "Pod of 6 agents reasoning in parallel.", t: "00:00:12" },
    { k: "INT · ROUTER", body: "Auto-picked claude-haiku · gpt-mini · llama-70b.", t: "00:00:38" },
    { k: "INT · MEMORY", body: "Replayed 90-day customer thread in 220ms.", t: "00:01:04" },
    { k: "EXT · OUTCOME", body: "Pipeline executed · +$284K projected ARR.", t: "00:01:47" },
  ];
  return (
    <section className="relative overflow-hidden bg-[oklch(0.12_0.03_265)] py-14 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* marquee */}
      <div className="relative overflow-hidden border-y border-border/40 py-5">
        <div className="flex gap-12 whitespace-nowrap" style={{ animation: "nx-marquee 38s linear infinite" }}>
          {[...reel, ...reel, ...reel].map((r, i) => (
            <span key={i} className="flex items-center gap-3 font-display text-2xl font-semibold tracking-tight text-foreground/90 sm:text-3xl">
              <span className="size-2 rounded-full bg-primary" />
              {r}
              <span className="font-mono text-xs uppercase tracking-[.3em] text-muted-foreground">· live</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-[1400px] px-5 lg:px-10">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.3em] text-primary">▍ Reel · cut 04 · 2026</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[.95] tracking-[-.035em] sm:text-6xl">
              Outcomes, <span className="italic text-gradient">in motion.</span>
            </h2>
          </div>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            Four frames from a single week of production. No edits. No reshoots. Every clip is a real run, with
            a real audit trail attached.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {frames.map((f, i) => (
            <figure
              key={f.k}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-[oklch(0.14_0.03_265)] p-5"
              style={{ transform: `translateY(${(i % 2) * 16}px)` }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-50" style={{ background: "radial-gradient(60% 40% at 50% 0%, color-mix(in oklab, var(--primary) 30%, transparent), transparent 70%)" }} />
              <div className="relative flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[.25em] text-primary">{f.k}</p>
                <p className="font-mono text-[10px] tracking-wider text-muted-foreground">{f.t}</p>
              </div>
              {/* mini frame */}
              <div className="relative mt-4 aspect-video overflow-hidden rounded-lg border border-border/60 bg-background/40">
                <svg viewBox="0 0 200 120" className="absolute inset-0 size-full" aria-hidden>
                  <defs>
                    <linearGradient id={`f-${i}`} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="var(--primary)" stopOpacity="0.5" />
                      <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <rect x="0" y="0" width="200" height="120" fill={`url(#f-${i})`} />
                  <g stroke="var(--primary)" strokeOpacity="0.6" fill="none" strokeWidth="1">
                    <path d={`M 10 ${90 - i * 10} Q 60 ${30 + i * 10} 100 ${60 - i * 5} T 190 ${40 + i * 8}`} />
                  </g>
                  <circle cx="100" cy="60" r="5" className="fill-primary">
                    <animate attributeName="r" values="5;12;5" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
              <figcaption className="relative mt-4 text-sm leading-5 text-foreground/85">{f.body}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes nx-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
