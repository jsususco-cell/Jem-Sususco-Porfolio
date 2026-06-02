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
    title: "Full-Stack Dev",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
    ],
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
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 text-sm font-mono uppercase tracking-widest text-accent2">
          Toolbox
        </div>
        <h2 className="mb-10 text-4xl font-bold tracking-tight sm:text-5xl">
          Skills &amp; Technologies
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="mb-4 text-lg font-semibold">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
