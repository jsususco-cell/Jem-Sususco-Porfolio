import { Eyebrow } from "@/components/ui";
import { Wrench, Layers, Chat, Sparkles, Folder, Award } from "@/components/icons";

// Quantified, defensible metrics: funnel lift and hours-saved are from Jemuel's
// own published resume; employee count and build count are factual.
const stats = [
  { value: "~30", unit: "hrs/wk", label: "Manual work eliminated" },
  { value: "90", unit: "%", label: "Funnel conversion lift" },
  { value: "180", unit: "+", label: "Employees on systems I run" },
  { value: "5", unit: "+ yrs", label: "In IT & automation" },
];

const autopilot = [
  "Weekly field-activity reports",
  "Receipt & expense capture → QuickBooks",
  "Payroll, leave & payslips",
  "Birthday & holiday reminders",
  "Bond-expiry alerts",
  "Permit & inspection packages",
  "Credit-card statement reconciliation",
  "Org-chart upkeep",
];

const items = [
  {
    Icon: Wrench,
    title: "Company-wide automation owner",
    body: "Primary automation architect for a US construction & restoration contractor — running production workflows across sales, operations and support in n8n, Make, Zapier and GoHighLevel.",
  },
  {
    Icon: Layers,
    title: "Migrated an entire HR system",
    body: "Moved HR off Zoho People into a custom Quickbase platform: 180+ employees, tens of thousands of attendance records, and automated leave, payroll and payslips.",
  },
  {
    Icon: Chat,
    title: "An AI assistant in daily use",
    body: "Byrdie, a Google Chat assistant wired into the company's tools, answers staff questions and takes action — reading receipts, filing records — backed by a self-learning memory.",
  },
  {
    Icon: Sparkles,
    title: "Replaced paid software in-house",
    body: "Built an e-signature platform (40+ templates, 19 forms) that replaced a commercial product, plus a custom ERP over Quickbase with QuickBooks kept as the ledger.",
  },
  {
    Icon: Folder,
    title: "Documents that file themselves",
    body: "Permit and inspection packages and OCR pipelines turn field photos and PDFs into structured records and signed documents, filed automatically to Drive and QuickBooks.",
  },
  {
    Icon: Award,
    title: "Reliable by design",
    body: "Every workflow ships with logging, error handling, idempotency and clear AI/deterministic handoffs — reporting into a central logging hub, with watchdogs and SOPs so staff can run them.",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="scroll-mt-24 pt-14">
      <Eyebrow>Business Impact</Eyebrow>
      <h2 className="display text-3xl font-extrabold tracking-tight sm:text-4xl">
        Automation that pays for itself
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Not demos — systems I&apos;ve shipped and run day to day, and the time
        and work they take off the table.
      </p>

      {/* Quantified impact band */}
      <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-4xl border border-line-card bg-line-card shadow-card lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card px-6 py-6">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
                {s.value}
              </span>
              <span className="text-lg font-bold text-brand">{s.unit}</span>
            </div>
            <div className="mt-1 text-sm text-muted">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tasks now on autopilot */}
      <div className="mt-4 rounded-4xl border border-line-card bg-card p-6 shadow-card">
        <h3 className="text-sm font-bold text-ink">
          Recurring tasks now on autopilot
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {autopilot.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 rounded-full border border-line-card bg-sand px-3 py-1.5 text-sm text-ink-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Narrative cards */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ Icon, title, body }) => (
          <div
            key={title}
            className="flex flex-col rounded-4xl border border-line-card bg-card p-6 shadow-card"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-soft text-brand">
              <Icon width={22} height={22} />
            </span>
            <h3 className="mt-4 text-base font-bold text-ink">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
