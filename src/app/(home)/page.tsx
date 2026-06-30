import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  FolderGit2,
  Trophy,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  MapPin,
  Calendar,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────────────────────
   EDIT YOUR CONTENT HERE
   Update the objects below with your own details. The page renders from them.
   ────────────────────────────────────────────────────────────────────────── */

const profile = {
  name: 'Ravichandra Kandregula',
  role: 'Senior Technical Writer',
  tagline:
    'I build reliable web platforms and developer tools — turning complex problems into clean, maintainable products.',
  location: 'India',
  email: 'rkandregula@corespan.ai',
  github: 'https://github.com/ravichandra15091988',
  linkedin: 'www.linkedin.com/in/ravichandra-k',
};

const skills = [
  'Technical Writing',
  'Content Strategy',
  'DITA',
  'Markdown',
  'API Documentation',
  'REST APIs',
];

const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Corespan',
    period: '2023 — Present',
    location: 'Remote',
    points: [
      'Led development of the core documentation and API platform used across the organization.',
      'Designed and shipped integrations consuming third-party REST APIs at scale.',
      'Mentored engineers and established code-review and testing standards.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Previous Company',
    period: '2020 — 2023',
    location: 'Hyderabad, India',
    points: [
      'Built and maintained customer-facing web applications with React and Node.js.',
      'Improved page performance and reduced load times by optimizing data fetching.',
    ],
  },
];

const projects = [
  {
    title: 'NASA APOD Integration',
    description:
      "A space-themed card that consumes NASA's APOD API to fetch the Astronomy Picture of the Day, with full request/response documentation.",
    href: '/docs/index',
  },
  {
    title: 'Akshaya Patra Platform',
    description:
      'A documented service handling data workflows, request validation, and response previews.',
    href: '/docs/akshaya_patra',
  },
  {
    title: 'Outbound Policies',
    description:
      'An integration-action-policy-lookup-service-used-to-simplify-application-data-exchange-by-enforcing-standardized-security-and-compliance-protocols.',
    href: '/docs/outbound',
  },
];

const achievements = [
  {
    title: 'Launched Company Documentation Platform',
    year: '2025',
    description:
      'Designed and delivered the end-to-end documentation experience now used company-wide.',
  },
  {
    title: 'Performance Optimization Initiative',
    year: '2024',
    description:
      'Reduced application load times significantly through systematic profiling and caching.',
  },
  {
    title: 'Open Source Contributions',
    year: '2023',
    description:
      'Contributed fixes and improvements to community projects and internal tooling.',
  },
];

/* ────────────────────────────────────────────────────────────────────────── */

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
    <div className="flex items-start gap-4 mb-8">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      className="inline-flex items-center gap-2 rounded-lg border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all hover:bg-accent hover:shadow-md"
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-background via-accent/30 to-background">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,hsl(var(--primary)/0.12),transparent)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <MapPin className="h-3 w-3" /> {profile.location}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-semibold text-primary">{profile.role}</p>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            {profile.tagline}
          </p>

          {/* Skills */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Social links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <SocialLink href={`mailto:${profile.email}`} icon={Mail} label="Email" />
            <SocialLink href={profile.github} icon={Github} label="GitHub" />
            <SocialLink href={profile.linkedin} icon={Linkedin} label="LinkedIn" />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl px-6 py-16 space-y-20">
        {/* ── Experience ───────────────────────────────────────────── */}
        <section>
          <SectionHeader
            icon={Briefcase}
            title="Experience"
            description="Roles I've held and the impact I delivered."
            color="bg-blue-500/10 text-blue-600 dark:text-blue-400"
          />
          <div className="relative space-y-8 border-l border-border pl-8 dark:border-white/10">
            {experience.map((job) => (
              <div key={job.role + job.company} className="relative">
                <span className="absolute -left-[2.35rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold">
                    {job.role} ·{' '}
                    <span className="text-primary">{job.company}</span>
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {job.period}
                    <span className="text-border">•</span>
                    {job.location}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {job.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Projects ─────────────────────────────────────────────── */}
        <section>
          <SectionHeader
            icon={FolderGit2}
            title="Projects"
            description="Selected work I've designed and built."
            color="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 dark:border-white/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-base transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 shrink-0 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </div>
                <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

              </Link>
            ))}
          </div>
        </section>

        {/* ── Achievements ─────────────────────────────────────────── */}
        <section>
          <SectionHeader
            icon={Trophy}
            title="Achievements"
            description="Milestones and recognition along the way."
            color="bg-amber-500/10 text-amber-600 dark:text-amber-400"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm dark:border-white/10"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Trophy className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-semibold text-sm">{achievement.title}</h3>
                    <span className="text-xs font-medium text-muted-foreground">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── Footer strip ─────────────────────────────────────────── */}
      <div className="border-t bg-muted/30">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <span>Interested in working together?</span>
          <Link
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
          >
            Get in touch <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </main>
  );
}
