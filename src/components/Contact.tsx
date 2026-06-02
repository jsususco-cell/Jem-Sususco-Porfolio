const contacts = [
  {
    label: "Email",
    value: "jemz291994@gmail.com",
    href: "mailto:jemz291994@gmail.com",
  },
  {
    label: "Phone",
    value: "+63 956 406 0687",
    href: "tel:+639564060687",
  },
  {
    label: "Location",
    value: "Antipolo City, Rizal, Philippines",
    href: null,
  },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-grid border-t border-border px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 text-sm font-mono uppercase tracking-widest text-accent2">
          Contact
        </div>
        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s build something automated.
        </h2>
        <p className="mb-10 max-w-2xl text-muted">
          Open to automation engineering, full-stack development and AI systems
          roles. The fastest way to reach me is email — I usually reply within a
          day.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {contacts.map((c) => {
            const inner = (
              <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
                <div className="mb-1 text-xs font-mono uppercase tracking-widest text-muted">
                  {c.label}
                </div>
                <div className="font-medium text-white">{c.value}</div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href}>
                {inner}
              </a>
            ) : (
              <div key={c.label}>{inner}</div>
            );
          })}
        </div>

        <div className="mt-10">
          <a
            href="mailto:jemz291994@gmail.com"
            className="inline-block rounded-lg bg-accent px-6 py-3 font-medium text-white transition-transform hover:scale-105"
          >
            Email Me
          </a>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-sm text-muted">
          © {new Date().getFullYear()} Jemuel Sususco · Built with Next.js &
          Tailwind CSS · Deployed on Vercel
        </div>
      </div>
    </footer>
  );
}
