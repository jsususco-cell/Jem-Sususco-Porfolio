# Jemuel Sususco — Portfolio

Personal portfolio of **Jemuel Sususco**, AI-powered automation specialist and AI development engineer. Showcases 16+ production n8n workflows (AI agents, document automation, data scraping, data pipelines, ops & finance) and an embedded, downloadable resume.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Deployed on **Vercel**.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Local Development

> Requires Node.js 18.18+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project Structure

```
src/
  app/
    layout.tsx        # root layout, metadata, fonts
    page.tsx          # composes all sections
    globals.css       # Tailwind + global styles
  components/
    Nav.tsx           # sticky nav with mobile menu
    Hero.tsx          # intro + headline stats
    Projects.tsx      # filterable project grid
    About.tsx         # bio + experience timeline
    Skills.tsx        # grouped skill tags
    Resume.tsx        # embedded PDF + download
    Contact.tsx       # contact cards + footer
  data/
    projects.ts       # all project content (edit here)
public/
  Resume_Jem_Sususco.pdf
```

## Editing Content

- **Projects:** edit `src/data/projects.ts`.
- **Experience / bio:** edit `src/components/About.tsx`.
- **Skills:** edit `src/components/Skills.tsx`.
- **Resume:** replace `public/Resume_Jem_Sususco.pdf` (keep the same filename).

## Deployment

Connected to Vercel — every push to `main` triggers an automatic production deploy.
