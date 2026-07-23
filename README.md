# Ravichandra K — Portfolio & Docs

Personal site for Ravichandra K, Senior Technical Writer. Built with
[Next.js](https://nextjs.org) and [Fumadocs](https://fumadocs.dev): a custom
portfolio homepage plus a documentation section for project write-ups.

## Structure

- `src/app/(home)` — the portfolio homepage: hero, career history, skills,
  education, FAQ, and contact form. Content lives in `src/app/(home)/page.tsx`
  as plain data objects near the top of the file — edit those to update the
  page.
- `src/app/docs` — the documentation layout and pages, rendered from
  `content/docs/*.mdx` via Fumadocs MDX.
- `src/app/api/search/route.ts` — the route handler for docs search.
- `src/lib/layout.shared.tsx` — shared nav/header options (brand, links,
  Résumé button) used by both the homepage and docs layouts.
- `src/lib/source.ts` — the Fumadocs content source adapter
  ([`loader()`](https://fumadocs.dev/docs/headless/source-api)).
- `content/docs/` — MDX project write-ups (NASA APOD API, Akshaya Patra,
  Outbound Policies).
- `public/resume.pdf` — résumé served from the header's "Résumé (PDF)" button.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 to see the homepage, or http://localhost:3000/docs
for the documentation section.

Other scripts:

```bash
npm run build        # production build
npm run start         # serve the production build
npm run lint           # eslint
npm run types:check   # regenerate Fumadocs MDX + Next types, then type-check
```

### Fumadocs MDX

`source.config.ts` configures the MDX content source (frontmatter schema,
etc.) — see the [Fumadocs MDX introduction](https://fumadocs.dev/docs/mdx)
for details.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Fumadocs](https://fumadocs.dev)
