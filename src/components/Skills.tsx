import { Eyebrow } from "@/components/ui";

const groups = [
  {
    title: "Workflow Automation",
    skills: ["n8n", "GoHighLevel", "Zapier", "Make.com", "Lovable", "Base44"],
  },
  {
    title: "AI & Agents",
    skills: [
      "LLM Agents",
      "Multi-Agent Systems",
      "Prompt Engineering",
      "RAG / Vector Stores",
      "Structured Outputs",
      "Chatbots",
    ],
  },
  {
    title: "AI Development Tools",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
  },
  {
    title: "Data & Integration",
    skills: [
      "REST / GraphQL",
      "OAuth / JWT",
      "Webhooks",
      "ETL Pipelines",
      "Web Scraping",
      "Quickbase / Airtable",
    ],
  },
  {
    title: "Platforms & Stores",
    skills: ["Supabase", "Postgres", "Google Workspace", "ClickUp", "PDF.co", "Zoho"],
  },
  {
    title: "DevOps & Tools",
    skills: ["GitHub", "Vercel", "Fly.io", "CI/CD", "Claude Code", "Python / Bash"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 pt-14">
      <Eyebrow>Toolbox</Eyebrow>
      <h2 className="display text-3xl font-extrabold tracking-tight sm:text-4xl">
        Skills &amp; Technologies
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        The stack I run on, from no-code automation platforms to full-stack
        development and AI tooling.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-4xl border border-line-card bg-card p-6 shadow-card"
          >
            <h3 className="mb-4 text-base font-bold text-ink">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-line-card bg-sand px-3 py-1.5 text-sm text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
