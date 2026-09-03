import { Eyebrow } from "@/components/ui";
import { Mail, Phone, Pin, Github, Download, ArrowUpRight } from "@/components/icons";

const contacts = [
  {
    label: "Email",
    value: "jemz291994@gmail.com",
    href: "mailto:jemz291994@gmail.com",
    Icon: Mail,
  },
  {
    label: "Phone",
    value: "+63 956 406 0687",
    href: "tel:+639564060687",
    Icon: Phone,
  },
  {
    label: "GitHub",
    value: "jsususco-cell",
    href: "https://github.com/jsususco-cell",
    Icon: Github,
  },
  {
    label: "Location",
    value: "Antipolo City, Rizal, PH",
    href: null,
    Icon: Pin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pb-6 pt-14">
      <div className="overflow-hidden rounded-4xl border border-line-card bg-card p-8 shadow-card sm:p-10">
        <Eyebrow>Contact</Eyebrow>
        <h2 className="display max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Let&apos;s build something that runs itself.
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Open to automation engineering, AI development and systems integration
          roles. The fastest way to reach me is email — I usually reply within a
          day.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map(({ label, value, href, Icon }) => {
            const inner = (
              <div className="flex h-full items-start gap-3 rounded-2xl border border-line-card bg-sand p-4 transition-colors hover:border-brand/50">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-card text-brand">
                  <Icon width={18} height={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wide text-muted">
                    {label}
                  </span>
                  <span className="block truncate text-sm font-semibold text-ink">
                    {value}
                  </span>
                </span>
              </div>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="mailto:jemz291994@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Email me
            <ArrowUpRight width={16} height={16} />
          </a>
          <a
            href="/Resume_Jem_Sususco.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line-card bg-card px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand/50"
          >
            <Download width={16} height={16} />
            Download CV
          </a>
        </div>
      </div>

      <footer className="mt-8 flex flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Jemuel Sususco</span>
        <span>Built with Next.js &amp; Tailwind CSS · Deployed on Vercel</span>
      </footer>
    </section>
  );
}
