import Image from "next/image";
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
      className="bg-grid relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        {/* Text column */}
        <div className="order-2 lg:order-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted animate-fadeUp">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent2" />
            Available for automation & AI development roles
          </p>

          <h1
            className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl animate-fadeUp"
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
            AI-powered automation specialist and AI development engineer. I design
            end-to-end workflow systems with n8n, build multi-agent AI tools,
            and ship AI-driven apps to GitHub, Vercel and Fly.io.
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

        {/* Photo column */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative animate-fadeUp" style={{ opacity: 0 }}>
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent/30 to-accent2/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-accent/10">
              <Image
                src="/jem.jpg"
                alt="Jemuel Sususco"
                width={1558}
                height={1729}
                priority
                sizes="(max-width: 1024px) 80vw, 380px"
                className="h-auto w-[280px] object-cover sm:w-[340px] lg:w-[380px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
