import { Eyebrow, Chip } from "@/components/ui";
import { ArrowUpRight } from "@/components/icons";

const points = [
  "Reads and verifies receipts and invoices, then confirms before pushing structured records to Quickbase",
  "One assistant across Gmail, Drive, Calendar, Zoho People, QuickBooks and Quickbase",
  "Self-learning memory so answers keep improving over time",
];

const stack = ["n8n", "Google Chat", "OpenAI", "Quickbase", "Zoho People", "QuickBooks"];

export default function Highlight() {
  return (
    <section id="demo" className="scroll-mt-24 pt-14">
      <div className="overflow-hidden rounded-4xl border border-line-card bg-card shadow-card">
        <div className="grid items-center gap-8 p-6 sm:p-9 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Text */}
          <div>
            <Eyebrow>Featured Demo</Eyebrow>
            <h2 className="display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Byrdie 2.0 — <span className="gradient-text">AI Chatbot</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-ink-soft">
              Byrdie is the company&apos;s Google Chat AI assistant. Staff ask it
              questions in plain language and it answers from across the business
              — then takes action, from reading a receipt to filing a Quickbase
              record. This 60-second demo shows it in action.
            </p>

            <ul className="mt-5 space-y-2.5">
              {points.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-ink-soft">
                  <span className="mt-1 text-brand">▸</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>

            <a
              href="#projects"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
            >
              See the project
              <ArrowUpRight width={16} height={16} />
            </a>
          </div>

          {/* Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[240px] rounded-[1.8rem] border border-line-card bg-sand p-2 shadow-card sm:w-[280px]">
              <video
                className="aspect-[9/16] w-full rounded-[1.3rem] bg-black"
                controls
                playsInline
                preload="metadata"
                poster="/byrdie-2.0-poster.jpg"
                aria-label="Byrdie 2.0 AI chatbot demo video"
              >
                <source src="/byrdie-2.0-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
