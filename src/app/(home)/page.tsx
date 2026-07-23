'use client';

import { useState } from 'react';

/* ──────────────────────────────────────────────────────────────────────────
   EDIT YOUR CONTENT HERE
   Update the objects below with your own details. The page renders from them.
   ────────────────────────────────────────────────────────────────────────── */

const profile = {
  brand: 'Ravichandra K',
  role: 'Senior Technical Writer',
  headline: 'Docs people\nactually read.',
  tagline:
    'A seasoned technical writer with 6+ years in software documentation and 14+ years across software and manufacturing. An engineering background sits behind every doc — turning complex products into clear, accurate technical content teams can trust.',
  email: 'ravi.metrockz@gmail.com',
  phone: '+91 83097 61339',
  location: 'Hyderabad, India',
  timezone: 'GMT+5:30',
  writingSamplesUrl: '/docs',
};

const facts = [
  { label: 'Location', value: 'Hyderabad, India · GMT+5:30' },
  { label: 'Focus', value: 'API & product docs' },
  { label: 'Availability', value: 'Open to roles', accent: true },
  { label: 'Experience', value: '6+ yrs writing' },
];

const stats = [
  { value: '14+', label: 'years total experience' },
  { value: '+60%', label: 'user satisfaction, Google project' },
  { value: '+90%', label: 'document accuracy via peer review' },
  { value: '+25%', label: 'engagement on Wisely docs' },
];

const experience = [
  {
    role: 'Technical Writer III',
    company: 'Tanla Platforms',
    period: '2024–Now',
    description:
      'Owns Wisely messaging-platform docs in Document360; built API docs in Postman + Azure DevOps; +25% engagement via analytics.',
  },
  {
    role: 'Senior Technical Writer',
    company: 'Netenrich',
    period: '2021–24',
    description:
      'Documented Resolution Intelligence Cloud (cybersecurity) in Zendesk — help, release notes, UX microcopy, FAQs and SEO.',
  },
  {
    role: 'Senior Technical Writer',
    company: 'Blaize',
    period: '2021',
    description:
      'AI Studio docs in Adobe RoboHelp; SDK/eSDK docs for Picasso cards via AsciiDoc + GitHub; install & getting-started guides.',
  },
  {
    role: 'Technical Writer',
    company: 'Rahi Systems',
    companyNote: '(Client: Google)',
    period: '2019–21',
    description:
      'Networking user manuals in Cider + Markdown — +60% user satisfaction, +90% doc accuracy; Rackdoc architecture diagrams.',
  },
  {
    role: 'Process Engineer',
    company: 'Cyient',
    period: '2013–19',
    description: 'Authored SOPs and statements of work for client Pratt & Whitney.',
  },
  {
    role: 'Process Engineer',
    company: 'Larsen & Toubro',
    period: '2010–12',
    description:
      'SOPs and SoWs for plant technicians; Associate of the Year for winning a new project assignment.',
  },
];

const skillGroups = [
  { label: 'Authoring & markup', value: 'Markdown · HTML · CSS · AsciiDoc · DITA XML · OpenAPI Spec' },
  { label: 'Docs platforms', value: 'Document360 · Zendesk · Adobe RoboHelp · mkdocs · Postman' },
  { label: 'Programming & data', value: 'Python (NumPy, Pandas) · SQL' },
  { label: 'Diagrams & capture', value: 'MS Visio · Lucidchart · OmniGraffle · Snagit' },
  {
    label: 'Collaboration & VCS',
    value: 'GitHub · Bitbucket · Azure DevOps · Atlassian Jira · SharePoint · Agile Scrum',
  },
];

const awards = [
  {
    title: 'STC India Chapter Competition',
    description: 'Won two prizes for technical writing.',
    period: '2020',
  },
  {
    title: 'Big Data Analytics & Optimization',
    description: 'Certificate program at INSOFE.',
    period: '2016–17',
  },
  {
    title: 'Associate of the Year · Larsen & Toubro',
    description: 'For a plan that won a new project assignment from an existing client.',
    period: '2011',
  },
];

const education = {
  degree: 'B.Tech, Metallurgy',
  school: 'JNTU Hyderabad · 2010 · 68.7%',
  note: {
    title: 'An engineer who writes',
    body: 'Years as a process engineer before technical writing — so docs come from real understanding, not just the ticket.',
  },
};

const companies = [
  'Tanla Platforms',
  'Netenrich',
  'Blaize',
  'Rahi Systems · Google',
  'Cyient',
  'Larsen & Toubro',
];

const faqs = [
  {
    q: 'What roles are you looking for?',
    a: 'Senior or lead technical-writing roles owning developer and product documentation — API references, SDK guides, and help content. Open to remote and hybrid.',
  },
  {
    q: "What's your toolkit?",
    a: 'Document360, Zendesk, Adobe RoboHelp, and mkdocs for authoring and publishing; Postman and OpenAPI for API docs; Markdown, AsciiDoc, and DITA XML for content; Git, Azure DevOps, and Jira for workflow — plus Python and SQL for data.',
  },
  {
    q: "What's your background?",
    a: 'A B.Tech in Metallurgy and years as a process engineer before technical writing, so I write from real engineering understanding rather than just the ticket.',
  },
  {
    q: 'Where are you based?',
    a: 'Hyderabad, India (GMT+5:30). Comfortable across global overlap hours and used to distributed, agile teams.',
  },
];

/* ────────────────────────────────────────────────────────────────────────── */

const navFont = { fontFamily: 'var(--font-archivo), system-ui, sans-serif' };

/* Muted-text and hairline-divider tones are derived from --rk-text via
   color-mix, so they invert automatically with the dark-mode override
   in global.css instead of needing a hardcoded shade per theme. */
const muted = (pct: number) =>
  `[color:color-mix(in_srgb,var(--rk-text)_${pct}%,transparent)]`;
const divider = '[border-color:color-mix(in_srgb,var(--rk-text)_40%,transparent)]';

function Hero() {
  return (
    <div className="px-6 pt-14 sm:px-10 sm:pt-16 md:px-14">
      <span className="mb-5 block text-[13px] uppercase tracking-[0.08em] text-[var(--rk-accent-emphasis)]">
        Portfolio · {profile.role}
      </span>
      <h1
        className="mb-6 -ml-[0.04em] text-[42px] font-extrabold leading-[1.02] tracking-[-0.02em] whitespace-pre-line text-[var(--rk-text)] sm:text-[54px] md:text-[66px]"
        style={navFont}
      >
        {profile.headline}
      </h1>
      <p className={`mb-8 max-w-[60ch] text-lg leading-relaxed ${muted(80)}`}>
        {profile.tagline}
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-[#ec3013] px-3.5 py-2 text-sm font-extrabold text-[#f3f2f2] hover:bg-[#dd2b0f] active:bg-[#ae1800]"
          style={navFont}
        >
          Get in touch
        </a>
        <a
          href={profile.writingSamplesUrl}
          className={`inline-flex items-center justify-center border ${divider} px-3.5 py-2 text-sm font-extrabold text-[var(--rk-text)] hover:[background-color:color-mix(in_srgb,var(--rk-text)_7%,transparent)]`}
          style={navFont}
        >
          View writing samples
        </a>
      </div>
    </div>
  );
}

function FactTable() {
  return (
    <div className="px-6 pt-12 sm:px-10 md:px-14">
      <div className={`grid grid-cols-2 border-t-2 ${divider} sm:grid-cols-4`}>
        {facts.map((fact, i) => (
          <div
            key={fact.label}
            className={[
              'py-5',
              i % 2 === 0 ? `pr-3 border-r ${divider}` : 'pl-3',
              i < 2 ? `border-b ${divider} sm:border-b-0` : '',
              i < facts.length - 1 ? `sm:pr-5 sm:border-r ${divider}` : '',
              i % 2 !== 0 ? 'sm:pl-5' : '',
            ].join(' ')}
          >
            <div className={`mb-2 text-xs uppercase tracking-[0.08em] ${muted(60)}`}>
              {fact.label}
            </div>
            <div
              className={`text-base font-extrabold sm:text-[17px] ${
                fact.accent ? 'text-[var(--rk-accent-emphasis)]' : 'text-[var(--rk-text)]'
              }`}
              style={navFont}
            >
              {fact.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatRow() {
  return (
    <div className="px-6 py-12 sm:px-10 md:px-14">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div
              className="mb-3 text-4xl leading-none font-extrabold text-[#ec3013] tabular-nums"
              style={navFont}
            >
              {stat.value}
            </div>
            <div className={`text-[13px] tracking-[0.06em] uppercase ${muted(62)}`}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <hr
      className="mx-6 h-0.5 border-0 sm:mx-10 md:mx-14 [background-color:color-mix(in_srgb,var(--rk-text)_40%,transparent)]"
    />
  );
}

type CareerTab = 'experience' | 'skills' | 'awards';

function CareerSection() {
  const [tab, setTab] = useState<CareerTab>('experience');

  const tabClass = (active: boolean) =>
    `-mb-0.5 cursor-pointer border-b-2 pb-3.5 text-[15px] font-extrabold tracking-[0.02em] transition-colors ${
      active ? `border-[#ec3013] text-[var(--rk-text)]` : `border-transparent ${muted(52)}`
    }`;

  return (
    <div id="experience" className="scroll-mt-20 px-6 py-12 sm:px-10 md:px-14">
      <h2
        className="mb-7 text-[15px] uppercase tracking-[0.08em] text-[var(--rk-accent-emphasis)]"
        style={navFont}
      >
        Career
      </h2>
      <div className={`mb-2 flex gap-8 border-b-2 ${divider}`}>
        <button type="button" className={tabClass(tab === 'experience')} style={navFont} onClick={() => setTab('experience')}>
          Experience
        </button>
        <button type="button" className={tabClass(tab === 'skills')} style={navFont} onClick={() => setTab('skills')}>
          Skills &amp; tools
        </button>
        <button type="button" className={tabClass(tab === 'awards')} style={navFont} onClick={() => setTab('awards')}>
          Awards &amp; certs
        </button>
      </div>

      {tab === 'experience' && (
        <div>
          {experience.map((job) => (
            <div
              key={job.role + job.company}
              className="grid grid-cols-1 items-baseline gap-1.5 border-t [border-color:color-mix(in_srgb,var(--rk-text)_40%,transparent)] py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6"
            >
              <div>
                <div className="text-lg font-extrabold text-[var(--rk-text)]" style={navFont}>
                  {job.role} · {job.company}
                  {job.companyNote ? (
                    <span className="text-[var(--rk-accent-emphasis)]"> {job.companyNote}</span>
                  ) : null}
                </div>
                <div className="mt-1.5 text-sm [color:color-mix(in_srgb,var(--rk-text)_65%,transparent)]">{job.description}</div>
              </div>
              <div className="text-[13px] whitespace-nowrap [color:color-mix(in_srgb,var(--rk-text)_55%,transparent)] tabular-nums">
                {job.period}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'skills' && (
        <div>
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid grid-cols-1 items-baseline gap-3 border-t [border-color:color-mix(in_srgb,var(--rk-text)_40%,transparent)] py-5 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-8"
            >
              <div className="text-[17px] font-extrabold text-[var(--rk-text)]" style={navFont}>
                {group.label}
              </div>
              <div className="text-[15px] [color:color-mix(in_srgb,var(--rk-text)_72%,transparent)]">{group.value}</div>
            </div>
          ))}
        </div>
      )}

      {tab === 'awards' && (
        <div>
          {awards.map((award) => (
            <div
              key={award.title}
              className="grid grid-cols-1 items-baseline gap-1.5 border-t [border-color:color-mix(in_srgb,var(--rk-text)_40%,transparent)] py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6"
            >
              <div>
                <div className="text-lg font-extrabold text-[var(--rk-text)]" style={navFont}>
                  {award.title}
                </div>
                <div className="mt-1.5 text-sm [color:color-mix(in_srgb,var(--rk-text)_65%,transparent)]">{award.description}</div>
              </div>
              <div className="text-[13px] whitespace-nowrap [color:color-mix(in_srgb,var(--rk-text)_55%,transparent)] tabular-nums">
                {award.period}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function EducationSection() {
  return (
    <div id="education" className="scroll-mt-20 px-6 py-12 sm:px-10 md:px-14">
      <h2
        className="mb-7 text-[15px] uppercase tracking-[0.08em] text-[var(--rk-accent-emphasis)]"
        style={navFont}
      >
        Education &amp; background
      </h2>
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-10">
        <div className="border-t-2 [border-color:color-mix(in_srgb,var(--rk-text)_40%,transparent)] py-6">
          <p className="mb-2 text-xl leading-tight font-extrabold tracking-[-0.01em] text-[var(--rk-text)]" style={navFont}>
            {education.degree}
          </p>
          <p className="text-sm [color:color-mix(in_srgb,var(--rk-text)_62%,transparent)]">{education.school}</p>
        </div>
        <div className="border-t-2 [border-color:color-mix(in_srgb,var(--rk-text)_40%,transparent)] py-6">
          <p className="mb-2 text-xl leading-tight font-extrabold tracking-[-0.01em] text-[var(--rk-text)]" style={navFont}>
            {education.note.title}
          </p>
          <p className="text-sm [color:color-mix(in_srgb,var(--rk-text)_72%,transparent)]">{education.note.body}</p>
        </div>
      </div>
      <div className="mt-2 border-t-2 [border-color:color-mix(in_srgb,var(--rk-text)_40%,transparent)] pt-7">
        <div className="mb-4 text-xs uppercase tracking-[0.08em] [color:color-mix(in_srgb,var(--rk-text)_55%,transparent)]">
          Companies &amp; clients
        </div>
        <div className="flex flex-wrap gap-3.5">
          {companies.map((company) => (
            <span key={company} className="bg-[var(--rk-tag-bg)] px-2.5 py-1 text-[11px] text-[var(--rk-tag-text)]">
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faq" className="scroll-mt-20 px-6 py-12 sm:px-10 md:px-14">
      <h2
        className="mb-2 text-[15px] uppercase tracking-[0.08em] text-[var(--rk-accent-emphasis)]"
        style={navFont}
      >
        For recruiters
      </h2>
      {faqs.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q} className="border-t [border-color:color-mix(in_srgb,var(--rk-text)_40%,transparent)]">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-lg font-extrabold text-[var(--rk-text)]"
              style={navFont}
            >
              <span>{item.q}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ec3013"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 transition-transform duration-200"
                style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
            {open && (
              <p className="max-w-[64ch] pb-6 text-base leading-relaxed [color:color-mix(in_srgb,var(--rk-text)_78%,transparent)]">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <div id="contact" className="scroll-mt-20 px-6 py-12 sm:px-10 md:px-14 md:pb-16">
      <h2
        className="mb-5 text-[15px] uppercase tracking-[0.08em] text-[var(--rk-accent-emphasis)]"
        style={navFont}
      >
        Start a conversation
      </h2>
      <div className="mb-7 flex flex-wrap gap-x-7 gap-y-2 text-sm [color:color-mix(in_srgb,var(--rk-text)_72%,transparent)]">
        <span>{profile.email}</span>
        <span>{profile.phone}</span>
        <a
          href={profile.writingSamplesUrl}
          className="text-[var(--rk-accent-emphasis)] hover:text-[#ec3013]"
        >
          Writing samples
        </a>
      </div>

      {sent ? (
        <div className="border-t-2 border-[#ec3013] py-8">
          <p className="mb-2 text-2xl font-extrabold text-[var(--rk-text)]" style={navFont}>
            Thanks — message received.
          </p>
          <p className="text-base [color:color-mix(in_srgb,var(--rk-text)_70%,transparent)]">
            I reply to every recruiter within two business days.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="grid max-w-[720px] grid-cols-1 gap-5 sm:grid-cols-2"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="rk-name" className="text-xs [color:color-mix(in_srgb,var(--rk-text)_70%,transparent)]">
              Your name
            </label>
            <input
              id="rk-name"
              required
              className="min-h-9 border [border-color:color-mix(in_srgb,var(--rk-text)_40%,transparent)] bg-[var(--rk-surface)] px-2.5 py-1.5 text-sm text-[var(--rk-text)] outline-none focus-visible:border-[#ec3013]"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="rk-co" className="text-xs [color:color-mix(in_srgb,var(--rk-text)_70%,transparent)]">
              Company
            </label>
            <input
              id="rk-co"
              className="min-h-9 border [border-color:color-mix(in_srgb,var(--rk-text)_40%,transparent)] bg-[var(--rk-surface)] px-2.5 py-1.5 text-sm text-[var(--rk-text)] outline-none focus-visible:border-[#ec3013]"
            />
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="rk-email" className="text-xs [color:color-mix(in_srgb,var(--rk-text)_70%,transparent)]">
              Work email
            </label>
            <input
              id="rk-email"
              type="email"
              required
              className="min-h-9 border [border-color:color-mix(in_srgb,var(--rk-text)_40%,transparent)] bg-[var(--rk-surface)] px-2.5 py-1.5 text-sm text-[var(--rk-text)] outline-none focus-visible:border-[#ec3013]"
            />
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="rk-msg" className="text-xs [color:color-mix(in_srgb,var(--rk-text)_70%,transparent)]">
              The role
            </label>
            <textarea
              id="rk-msg"
              rows={3}
              placeholder="Team, level, and what you're hiring for."
              className="resize-y border [border-color:color-mix(in_srgb,var(--rk-text)_40%,transparent)] bg-[var(--rk-surface)] px-2.5 py-1.5 text-sm text-[var(--rk-text)] outline-none focus-visible:border-[#ec3013]"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-[#ec3013] px-3.5 py-2 text-sm font-extrabold text-[#f3f2f2] hover:bg-[#dd2b0f] active:bg-[#ae1800]"
              style={navFont}
            >
              Send message
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

function Footer() {
  return (
    <div className="px-6 py-7 text-[13px] [color:color-mix(in_srgb,var(--rk-text)_60%,transparent)] sm:px-10 md:px-14">
      © 2026 {profile.brand} · {profile.email} · {profile.location}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="rk-ledger w-full bg-[var(--rk-bg)]" style={navFont}>
      <div className="w-full">
        <Hero />
        <FactTable />
        <StatRow />
        <Divider />
        <CareerSection />
        <Divider />
        <EducationSection />
        <Divider />
        <FaqSection />
        <Divider />
        <ContactSection />
        <Divider />
        <Footer />
      </div>
    </main>
  );
}
