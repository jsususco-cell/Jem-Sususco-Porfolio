import {
  Folder,
  Sparkles,
  Wrench,
  Layers,
  Award,
  ArrowUpRight,
} from "@/components/icons";

const cards = [
  {
    href: "#projects",
    Icon: Folder,
    title: "Projects",
    blurb: "27 shipped builds across AI agents, automation, Quickbase and web.",
  },
  {
    href: "#demo",
    Icon: Sparkles,
    title: "AI Builds",
    blurb: "Byrdie chatbot, multi-agent RFP systems and RAG assistants.",
  },
  {
    href: "#services",
    Icon: Wrench,
    title: "Services",
    blurb: "Automation, AI development, integrations and web apps for teams.",
  },
  {
    href: "#skills",
    Icon: Layers,
    title: "Toolbox",
    blurb: "n8n, Quickbase, Next.js, Supabase, OpenAI and the rest of the stack.",
  },
  {
    href: "#about",
    Icon: Award,
    title: "Credentials",
    blurb: "B.S. Information Technology — Leadership Awardee, ICCT Colleges.",
  },
];

export default function Hub() {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map(({ href, Icon, title, blurb }) => (
        <a
          key={title}
          href={href}
          className="group flex flex-col rounded-4xl border border-line-card bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-soft text-brand">
              <Icon width={22} height={22} />
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-sand text-ink-soft transition-colors group-hover:bg-brand group-hover:text-white">
              <ArrowUpRight width={17} height={17} />
            </span>
          </div>
          <h3 className="text-lg font-bold text-ink">{title}</h3>
          <p className="mt-1.5 text-sm text-muted">{blurb}</p>
        </a>
      ))}
    </div>
  );
}
