"use client";

import { useState } from "react";
import { projects, categories, type Category } from "@/data/projects";
import { Eyebrow } from "@/components/ui";

type Filter = "All" | Category;
const filters: Filter[] = ["All", ...categories];

const catDot: Record<Category, string> = {
  "AI Agents": "#8b5cf6",
  "Business Systems": "#d946ef",
  "Web Apps": "#3b82f6",
  "Document Automation": "#06b6d4",
  "Data Scraping": "#10b981",
  "Data Pipelines": "#f59e0b",
  "Ops & Finance": "#f43f5e",
};

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const shown =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="scroll-mt-24 pt-14">
      <Eyebrow>Selected Work</Eyebrow>
      <h2 className="display text-3xl font-extrabold tracking-tight sm:text-4xl">
        Projects &amp; Systems
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        A selection of production work I&apos;ve designed and shipped — n8n
        automation workflows, Quickbase business systems, web apps and
        AI-powered data tools.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === f
                ? "border-brand bg-brand text-white"
                : "border-line-card bg-card text-ink-soft hover:border-brand/50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <article
            key={p.title}
            className={`group flex flex-col rounded-4xl border border-line-card bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover ${
              p.featured ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="mb-4 flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-line-card bg-sand px-3 py-1 text-xs font-medium text-ink-soft">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: catDot[p.category] }}
                />
                {p.category}
              </span>
              <span className="font-mono text-xs text-muted">
                {p.nodes != null ? `${p.nodes} nodes` : p.metric}
              </span>
            </div>

            <h3 className="text-lg font-bold leading-snug text-ink">
              {p.title}
              {p.featured && (
                <span className="ml-2 align-middle text-xs font-semibold text-brand">
                  ★ Featured
                </span>
              )}
            </h3>
            <p className="mt-1 text-sm font-semibold text-brand">{p.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {p.description}
            </p>

            <ul className="mt-4 space-y-1.5">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-ink-soft">
                  <span className="mt-1 text-brand">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 border-t border-line-card pt-4">
              {p.integrations.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-sand px-2 py-1 text-xs text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
