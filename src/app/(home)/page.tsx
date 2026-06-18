import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Search,
  MessageSquare,
  Shield,
  Wrench,
  Users,
  Settings,
  Code2,
  Plug,
  BarChart3,
  FileText,
  Layers,
  Terminal,
  Key,
  Zap,
} from 'lucide-react';

function HeroButton({
  href,
  variant,
  children,
}: {
  href: string;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={
        variant === 'primary'
          ? 'inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md'
          : 'inline-flex items-center gap-2 rounded-lg border bg-background px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-accent hover:shadow-md'
      }
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function FeaturedCard({
  tag,
  title,
  description,
  href,
}: {
  tag: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-xl border border-border dark:border-white/10 bg-card p-6 text-card-foreground shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
    >
      <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
        {tag}
      </span>
      <div className="flex-1">
        <h3 className="mb-1 font-semibold text-base group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center gap-1 text-xs font-medium text-primary mt-auto">
        Read more{' '}
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

function DocCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-2.5 rounded-xl border border-border dark:border-white/10 bg-card p-5 text-card-foreground shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
          <Icon className="h-4.5 w-4.5" />
        </div>
        <h3 className="font-semibold text-sm leading-snug">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </Link>
  );
}

function SectionHeader({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-background via-accent/30 to-background">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,hsl(var(--primary)/0.12),transparent)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Welcome to Documentation
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Everything you need to deploy, configure, and get the most out of Corespan
            Systems — from quick-start guides to deep technical references.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <HeroButton href="/docs" variant="primary">
              Get Started
            </HeroButton>
            <HeroButton href="/docs/admin-guide" variant="secondary">
              Admin Setup
            </HeroButton>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 py-14 space-y-16">
        {/* ── New & Popular ────────────────────────────────────────── */}
        <section>
          <h2 className="mb-6 text-xl font-bold tracking-tight">New &amp; Popular</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeaturedCard
              tag="New"
              title="Getting Started with Corespan"
              description="A step-by-step walkthrough to set up your workspace and connect your first data source in minutes."
              href="/docs"
            />
            <FeaturedCard
              tag="Popular"
              title="Connector Setup Guide"
              description="Learn how to integrate Corespan with your existing tools — Google Workspace, Slack, Confluence, and more."
              href="/docs"
            />
            <FeaturedCard
              tag="Updated"
              title="Release Notes — v3.3"
              description="See what's new: improved AI answer accuracy, new admin controls, and expanded connector support."
              href="/docs/release-notes"
            />
          </div>
        </section>

        {/* ── For Users ────────────────────────────────────────────── */}
        <section>
          <SectionHeader
            icon={Users}
            title="For Users"
            description="Guides and resources to help you work smarter with Corespan every day."
            color="bg-blue-500/10 text-blue-600 dark:text-blue-400"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <DocCard
              icon={Search}
              title="Search"
              href="/docs"
              description="Find anything across all your connected apps with natural-language search."
            />
            <DocCard
              icon={MessageSquare}
              title="AI Assistant"
              href="/docs"
              description="Get instant answers, summaries, and drafts through a conversational AI interface."
            />
            <DocCard
              icon={BookOpen}
              title="Knowledge Base"
              href="/docs"
              description="Explore curated articles, how-tos, and best-practice guides for daily users."
            />
            <DocCard
              icon={Layers}
              title="Integrations"
              href="/docs"
              description="Use Corespan inside the tools you already love — browser extension, Slack, and more."
            />
          </div>
        </section>

        {/* ── For Administrators ───────────────────────────────────── */}
        <section>
          <SectionHeader
            icon={Settings}
            title="For Administrators"
            description="Everything you need to deploy, configure, secure, and manage Corespan for your organization."
            color="bg-violet-500/10 text-violet-600 dark:text-violet-400"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <DocCard
              icon={Wrench}
              title="Setup &amp; Configuration"
              href="/docs"
              description="Initial deployment, workspace settings, SSO configuration, and onboarding flows."
            />
            <DocCard
              icon={Plug}
              title="Connectors"
              href="/docs"
              description="Connect and sync data from 100+ sources — Google Drive, Jira, Confluence, Salesforce, and more."
            />
            <DocCard
              icon={Shield}
              title="Security &amp; Permissions"
              href="/docs"
              description="Role-based access control, data governance, audit logs, and compliance settings."
            />
            <DocCard
              icon={BarChart3}
              title="Admin Console"
              href="/docs"
              description="Monitor usage analytics, manage users, and fine-tune AI behavior from a central dashboard."
            />
            <DocCard
              icon={FileText}
              title="Troubleshooting"
              href="/docs"
              description="Diagnose sync issues, connector errors, and common configuration problems."
            />
            <DocCard
              icon={Zap}
              title="Release Notes"
              href="/docs/release-notes"
              description="Stay current with the latest features, improvements, and fixes across all Corespan products."
            />
          </div>
        </section>

        {/* ── For Developers ───────────────────────────────────────── */}
        <section>
          <SectionHeader
            icon={Code2}
            title="For Developers"
            description="APIs, SDKs, and technical references to extend and integrate Corespan programmatically."
            color="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <DocCard
              icon={Terminal}
              title="API Reference"
              href="/docs"
              description="Full REST API documentation — endpoints, request/response schemas, and pagination details."
            />
            <DocCard
              icon={Code2}
              title="SDKs &amp; Libraries"
              href="/docs"
              description="Official SDKs for Node.js, Python, and more to integrate Corespan into your applications."
            />
            <DocCard
              icon={Key}
              title="Authentication"
              href="/docs"
              description="API keys, OAuth 2.0 flows, service accounts, and token management best practices."
            />
          </div>
        </section>
      </div>

      {/* ── Footer strip ─────────────────────────────────────────── */}
      <div className="border-t bg-muted/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <span>Can&apos;t find what you&apos;re looking for?</span>
          <Link
            href="/docs"
            className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
          >
            Browse all documentation <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
