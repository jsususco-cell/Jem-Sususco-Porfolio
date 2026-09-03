import { Eyebrow } from "@/components/ui";
import { Layers, Sparkles, Wrench, Folder, Chat, Award } from "@/components/icons";

const services = [
  {
    Icon: Wrench,
    title: "Automation Engineering",
    blurb:
      "End-to-end n8n, Make, Zapier and GoHighLevel workflows with logging, error handling and clear AI/deterministic handoffs.",
  },
  {
    Icon: Sparkles,
    title: "AI Development",
    blurb:
      "Multi-agent systems, RAG chatbots and structured-output agents built with Claude Code and modern LLM tooling.",
  },
  {
    Icon: Layers,
    title: "Quickbase Systems",
    blurb:
      "Custom apps, Code Pages, dashboards and platforms — from expense tracking to full business-development capture.",
  },
  {
    Icon: Folder,
    title: "Web Apps",
    blurb:
      "Full-stack Next.js apps deployed to Vercel and Fly.io, with auth, third-party APIs and clean, responsive UIs.",
  },
  {
    Icon: Chat,
    title: "System Integration",
    blurb:
      "REST/GraphQL, OAuth, JWT and webhooks tying SaaS platforms, databases and internal tools into one flow.",
  },
  {
    Icon: Award,
    title: "Data Tools",
    blurb:
      "OCR + AI document extraction, web scraping and ETL pipelines that turn messy inputs into structured data.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 pt-14">
      <Eyebrow>Services</Eyebrow>
      <h2 className="display text-3xl font-extrabold tracking-tight sm:text-4xl">
        What I build for teams
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        From a single follow-up workflow to a company-wide AI system — designed
        to be reliable, documented and easy to adopt.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ Icon, title, blurb }) => (
          <div
            key={title}
            className="rounded-4xl border border-line-card bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-soft text-brand">
              <Icon width={22} height={22} />
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
            <p className="mt-1.5 text-sm text-muted">{blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
