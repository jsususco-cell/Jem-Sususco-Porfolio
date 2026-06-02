"use client";

import { useState } from "react";
import { projects, categories, type Category } from "@/data/projects";

type Filter = "All" | Category;

const filters: Filter[] = ["All", ...categories];

const catColor: Record<Category, string> = {
  "AI Agents": "text-violet-300 border-violet-400/30 bg-violet-400/10",
  "Document Automation": "text-cyan-300 border-cyan-400/30 bg-cyan-400/10",
  "Data Scraping": "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
  "Data Pipelines": "text-amber-300 border-amber-400/30 bg-amber-400/10",
  "Ops & Finance": "text-rose-300 border-rose-400/30 bg-rose-400/10",
};

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const shown =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 text-sm font-mono uppercase tracking-widest text-accent2">
          Selected Work
        </div>
        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Automation Projects
        </h2>
        <p className="mb-10 max-w-2xl text-muted">
          A selection of production n8n workflows I&apos;ve designed and shipped —
          from multi-agent AI systems to document pipelines and large-scale data
          scrapers.
        </p>

        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                active === f
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-card text-muted hover:border-accent/50 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <article
              key={p.title}
              className={`group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 ${
                p.featured ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-4 flex items-center justify-between gap-2">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${catColor[p.category]}`}
                >
                  {p.category}
                </span>
                <span className="font-mono text-xs text-muted">
                  {p.nodes} nodes
                </span>
              </div>

              <h3 className="mb-1 text-xl font-semibold leading-snug group-hover:text-white">
                {p.title}
                {p.featured && (
                  <span className="ml-2 align-middle text-xs text-amber-300">
                    ★ Featured
                  </span>
                )}
              </h3>
              <p className="mb-3 text-sm font-medium text-accent2">
                {p.tagline}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {p.description}
              </p>

              <ul className="mb-5 space-y-1.5">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-sm text-gray-300"
                  >
                    <span className="mt-1 text-accent2">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-4">
                {p.integrations.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-surface px-2 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
