const tools = [
  "n8n",
  "Claude Code",
  "OpenAI",
  "Quickbase",
  "Next.js",
  "Supabase",
  "Zoho",
  "GoHighLevel",
  "Make.com",
  "Zapier",
  "Vercel",
  "Python",
  "Google Workspace",
  "ClickUp",
  "PDF.co",
  "Postgres",
];

export default function Marquee() {
  const row = [...tools, ...tools];
  return (
    <div className="mt-6 overflow-hidden rounded-4xl border border-line-card bg-card shadow-card">
      <div className="flex items-center gap-4 px-6 pt-5">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Daily Drivers
        </span>
        <span className="text-sm font-semibold text-ink">Tools I work with</span>
      </div>
      <div className="marquee-mask overflow-hidden py-5">
        <div className="animate-marquee flex w-max items-center gap-3 px-6">
          {row.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-line-card bg-sand px-4 py-2 text-sm font-medium text-ink-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
