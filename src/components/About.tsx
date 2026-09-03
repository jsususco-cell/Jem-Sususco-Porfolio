import { Eyebrow } from "@/components/ui";
import { Award, Pin } from "@/components/icons";

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
    role: "AI Development Engineer (Claude Code)",
    company: "Independent Projects",
    period: "2024 — Present",
    points: [
      "Built AI-driven web apps with React, Next.js and Tailwind, backed by Node.js/Express REST APIs.",
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
    <section id="about" className="scroll-mt-24 pt-14">
      <Eyebrow>About</Eyebrow>
      <h2 className="display text-3xl font-extrabold tracking-tight sm:text-4xl">
        Who I am and how I work
      </h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Bio + credentials */}
        <div className="space-y-4">
          <div className="rounded-4xl border border-line-card bg-card p-6 shadow-card">
            <p className="text-sm leading-relaxed text-ink-soft">
              I&apos;m an AI-powered automation specialist and AI development
              engineer with 3+ years designing end-to-end workflow systems and
              web applications. I work fluently across no-code/low-code platforms
              — n8n, GoHighLevel, Zapier, Make — and modern AI development tools.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              My background in IT support and systems administration means I
              build for the real world: workflows with logging, error handling
              and intelligent fallbacks, documented with SOPs so teams can
              actually adopt them.
            </p>
          </div>

          <div className="rounded-4xl border border-line-card bg-card p-6 shadow-card">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-soft text-brand">
                <Award width={20} height={20} />
              </span>
              <h3 className="text-base font-bold text-ink">Credentials</h3>
            </div>
            <div className="mt-4 space-y-1">
              <div className="text-sm font-semibold text-ink">
                B.S. in Information Technology
              </div>
              <div className="text-sm text-muted">
                ICCT Colleges Foundation, Inc. · December 2017
              </div>
              <div className="text-sm text-brand">
                Graduated with Leadership Awardee distinction
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-line-card pt-4 text-sm text-muted">
              <Pin width={16} height={16} className="text-brand" />
              Antipolo City, Rizal, Philippines
            </div>
          </div>
        </div>

        {/* Experience timeline */}
        <div className="rounded-4xl border border-line-card bg-card p-6 shadow-card">
          <h3 className="mb-5 text-base font-bold text-ink">Experience</h3>
          <ol className="relative space-y-7 border-l border-line-card pl-6">
            {experience.map((e) => (
              <li key={e.role} className="relative">
                <span className="absolute -left-[29px] top-1 h-3.5 w-3.5 rounded-full border-2 border-brand bg-card" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-semibold text-ink">{e.role}</h4>
                  <span className="font-mono text-xs text-muted">{e.period}</span>
                </div>
                <div className="mb-2 text-sm font-medium text-brand">
                  {e.company}
                </div>
                <ul className="space-y-1.5">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-ink-soft">
                      <span className="mt-1 text-brand">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
