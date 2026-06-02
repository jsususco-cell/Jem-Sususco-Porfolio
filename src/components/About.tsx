const experience = [
  {
    role: "IT Automations Specialist",
    company: "Byrdson Services",
    period: "Jan 2024 — Present",
    points: [
      "Primary automation architect across multiple departments, managing the GoHighLevel platform company-wide.",
      "Built AI-powered chatbots and multi-system orchestrations in n8n, Make and Zapier with logging, error handling and clear AI/deterministic handoffs.",
      "Implemented data pipelines for lead scraping and transformed unstructured data into structured, actionable formats.",
    ],
  },
  {
    role: "Full-Stack Developer (Claude Code)",
    company: "Independent Projects",
    period: "2024 — Present",
    points: [
      "Built full-stack apps with React, Next.js and Tailwind, backed by Node.js/Express REST APIs.",
      "Deployed to Vercel (frontend), Fly.io (backend) and GitHub with CI/CD pipelines.",
      "Integrated third-party APIs, databases and OAuth/JWT authentication.",
    ],
  },
  {
    role: "Automation & Reporting",
    company: "NightOwl Consulting",
    period: "Dec 2022 — Oct 2023",
    points: [
      "Managed client billing systems in Airtable with automated workflows.",
      "Designed reporting dashboards for data-driven client decisions.",
    ],
  },
  {
    role: "IT Specialist",
    company: "ZZ Connect Inc.",
    period: "Apr 2020 — Nov 2022",
    points: [
      "Resolved hardware/software support tickets and maintained website uptime.",
      "Built ClickUp automations and handled WordPress maintenance.",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="mb-3 text-sm font-mono uppercase tracking-widest text-accent2">
              About
            </div>
            <h2 className="mb-6 text-4xl font-bold tracking-tight">
              Automation that&apos;s reliable, not just clever.
            </h2>
            <p className="mb-4 text-muted">
              I&apos;m an AI-powered automation specialist and full-stack
              developer with 3+ years designing end-to-end workflow systems and
              web applications. I work fluently across no-code/low-code
              platforms — n8n, GoHighLevel, Zapier, Make — and modern full-stack
              development.
            </p>
            <p className="mb-4 text-muted">
              My background in IT support and systems administration means I
              build for the real world: workflows with logging, error handling
              and intelligent fallbacks, documented with SOPs so teams can
              actually adopt them.
            </p>
            <p className="text-muted">
              Based in Antipolo City, Rizal, Philippines. B.S. in Information
              Technology (Leadership Awardee), ICCT Colleges Foundation.
            </p>
          </div>

          <div>
            <div className="mb-6 text-sm font-mono uppercase tracking-widest text-accent2">
              Experience
            </div>
            <ol className="relative space-y-8 border-l border-border pl-6">
              {experience.map((e) => (
                <li key={e.role} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{e.role}</h3>
                    <span className="font-mono text-xs text-muted">
                      {e.period}
                    </span>
                  </div>
                  <div className="mb-2 text-sm font-medium text-accent2">
                    {e.company}
                  </div>
                  <ul className="space-y-1.5">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-muted">
                        <span className="mt-1 text-accent2">▸</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
