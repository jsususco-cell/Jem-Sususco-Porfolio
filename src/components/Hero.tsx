import { projects } from "@/data/projects";
import { ArrowUpRight, Download } from "@/components/icons";

export default function Hero() {
  const totalNodes = projects.reduce((s, p) => s + (p.nodes ?? 0), 0);
  const stats = [
    { value: `${projects.length}+`, label: "Production builds" },
    { value: `${totalNodes}+`, label: "Automation nodes" },
    { value: "3+ yrs", label: "Automation & dev" },
    { value: "GMT+8", label: "PH hours" },
  ];

  return (
    <section id="top" className="scroll-mt-24 pt-2">
      <div className="inline-flex items-center gap-2 rounded-full border border-line-card bg-card px-3.5 py-1.5 text-xs font-medium text-ink-soft shadow-card">
        <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
        Available for automation &amp; AI development roles
      </div>

      <h1 className="display mt-5 max-w-3xl text-[2.6rem] font-extrabold leading-[1.03] sm:text-6xl">
        Automate it once.{" "}
        <span className="gradient-text">Run it forever.</span>
      </h1>

      <p className="mt-5 max-w-2xl text-base text-ink-soft sm:text-lg">
        I&apos;m Jemuel — an AI-powered automation specialist and AI development
        engineer. I design end-to-end workflow systems with n8n, build
        multi-agent AI tools, and ship AI-driven apps and Quickbase platforms
        that run the business.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Get in touch
          <ArrowUpRight width={17} height={17} />
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full border border-line-card bg-card px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand/50"
        >
          View projects
        </a>
        <a
          href="/Resume_Jem_Sususco.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line-card bg-card px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand/50"
        >
          <Download width={16} height={16} />
          CV
        </a>
      </div>

      <div className="mt-9 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line-card bg-line-card shadow-card sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card px-5 py-4">
            <div className="text-2xl font-extrabold tracking-tight text-ink">
              {s.value}
            </div>
            <div className="mt-0.5 text-xs text-muted">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
