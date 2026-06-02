import { projects } from "@/data/projects";

export default function Hero() {
  const totalNodes = projects.reduce((sum, p) => sum + p.nodes, 0);

  const stats = [
    { value: `${projects.length}+`, label: "Production Workflows" },
    { value: `${totalNodes}+`, label: "Automation Nodes" },
    { value: "3+ yrs", label: "Automation & Dev" },
  ];

  return (
    <section
      id="top"
      className="bg-grid relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted animate-fadeUp">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent2" />
            Available for automation & full-stack roles
          </p>

          <h1
            className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl animate-fadeUp"
            style={{ animationDelay: "0.05s", opacity: 0 }}
          >
            Hi, I&apos;m Jemuel.
            <br />
            I build <span className="gradient-text">AI automations</span> that
            run the business.
          </h1>

          <p
            className="mb-8 max-w-2xl text-lg text-muted animate-fadeUp"
            style={{ animationDelay: "0.1s", opacity: 0 }}
          >
            AI-powered automation specialist and full-stack developer. I design
            end-to-end workflow systems with n8n, build multi-agent AI tools,
            and ship full-stack apps to GitHub, Vercel and Fly.io.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fadeUp"
            style={{ animationDelay: "0.15s", opacity: 0 }}
          >
            <a
              href="#projects"
              className="rounded-lg bg-accent px-6 py-3 font-medium text-white transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-border bg-card px-6 py-3 font-medium text-white transition-colors hover:border-accent"
            >
              Get in Touch
            </a>
          </div>

          <div
            className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8 animate-fadeUp"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold gradient-text">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
