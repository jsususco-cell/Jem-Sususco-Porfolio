import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-4xl border border-line-card bg-card shadow-card ${className}`}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  action,
  id,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  action?: ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className="mb-6 flex items-end justify-between gap-4 scroll-mt-24">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {sub && <p className="mt-2 max-w-xl text-sm text-muted">{sub}</p>}
      </div>
      {action}
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line-card bg-sand px-2.5 py-1 text-xs font-medium text-ink-soft">
      {children}
    </span>
  );
}
