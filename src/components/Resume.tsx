export default function Resume() {
  return (
    <section
      id="resume"
      className="border-t border-border bg-surface px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 text-sm font-mono uppercase tracking-widest text-accent2">
          Resume
        </div>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My Resume
          </h2>
          <div className="flex gap-3">
            <a
              href="/Resume_Jem_Sususco.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent"
            >
              Open in new tab
            </a>
            <a
              href="/Resume_Jem_Sususco.pdf"
              download
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              Download PDF
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <object
            data="/Resume_Jem_Sususco.pdf"
            type="application/pdf"
            className="h-[80vh] w-full"
          >
            <div className="p-10 text-center text-muted">
              Your browser can&apos;t display the embedded PDF.{" "}
              <a
                href="/Resume_Jem_Sususco.pdf"
                className="text-accent2 underline"
              >
                Download it here
              </a>
              .
            </div>
          </object>
        </div>
      </div>
    </section>
  );
}
