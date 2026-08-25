const points = [
  "Reads and verifies receipts and invoices, then confirms before pushing structured records to Quickbase",
  "One assistant across Gmail, Drive, Calendar, Zoho People, QuickBooks and Quickbase",
  "Self-learning memory so answers keep improving over time",
];

const stack = ["n8n", "Google Chat", "OpenAI", "Quickbase", "Zoho People", "QuickBooks"];

export default function Highlight() {
  return (
    <section
      id="demo"
      className="border-t border-border bg-surface px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text column */}
        <div className="order-2 lg:order-1">
          <div className="mb-3 text-sm font-mono uppercase tracking-widest text-accent2">
            Featured Demo
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Byrdie 2.0 — <span className="gradient-text">AI Chatbot</span>
          </h2>
          <p className="mb-6 max-w-xl text-muted">
            Byrdie is the company&apos;s Google Chat AI assistant. Staff ask it
            questions in plain language and it answers from across the business —
            then takes action, from reading a receipt to filing a Quickbase
            record. This 60-second demo shows it in action.
          </p>

          <ul className="mb-8 space-y-2.5">
            {points.map((p) => (
              <li key={p} className="flex gap-2 text-sm text-gray-300">
                <span className="mt-1 text-accent2">▸</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mb-8 flex flex-wrap gap-2">
            {stack.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-card px-2.5 py-1 text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent2 transition-colors hover:bg-accent/20"
          >
            See the project
            <span aria-hidden>↓</span>
          </a>
        </div>

        {/* Video column */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent/30 to-accent2/30 blur-2xl" />
            <div className="relative w-[260px] rounded-[2rem] border border-border bg-card p-2 shadow-2xl shadow-accent/10 sm:w-[300px]">
              <video
                className="aspect-[9/16] w-full rounded-[1.5rem] bg-black"
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
