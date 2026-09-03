import { Eyebrow } from "@/components/ui";
import { Quote } from "@/components/icons";

/**
 * Placeholder testimonials. Replace `items` with real, attributable quotes
 * (with the person's consent) — the `placeholder` flag just renders the
 * "Sample" tag and muted quote so nothing reads as a real endorsement yet.
 */
type Item = {
  quote: string;
  name: string;
  role: string;
  tags: string[];
  placeholder?: boolean;
};

const items: Item[] = [
  {
    quote: "Your client's quote about the build goes here.",
    name: "Client name",
    role: "Role · Company",
    tags: ["n8n", "Automation"],
    placeholder: true,
  },
  {
    quote: "A short line on the impact — time saved, revenue, reliability.",
    name: "Client name",
    role: "Role · Company",
    tags: ["Quickbase", "Integration"],
    placeholder: true,
  },
  {
    quote: "What it was like to work together, in their words.",
    name: "Client name",
    role: "Role · Company",
    tags: ["AI", "Web App"],
    placeholder: true,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 pt-14">
      <Eyebrow>Testimonials</Eyebrow>
      <h2 className="display text-3xl font-extrabold tracking-tight sm:text-4xl">
        What clients say
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        What the people I build for say about the work.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <figure
            key={i}
            className="flex flex-col rounded-4xl border border-line-card bg-card p-6 shadow-card"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-soft text-brand">
                <Quote width={20} height={20} />
              </span>
              {t.placeholder && (
                <span className="rounded-full border border-line-card bg-sand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted">
                  Sample
                </span>
              )}
            </div>
            <blockquote
              className={`text-sm leading-relaxed ${
                t.placeholder ? "italic text-muted" : "text-ink-soft"
              }`}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3 border-t border-line-card pt-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-sand text-sm font-bold text-ink-soft">
                {t.name.charAt(0)}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-ink">
                  {t.name}
                </span>
                <span className="block truncate text-xs text-muted">{t.role}</span>
              </span>
            </figcaption>
            <div className="mt-4 flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-sand px-2 py-1 text-xs text-ink-soft"
                >
                  {tag}
                </span>
              ))}
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
