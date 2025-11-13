import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-4 pb-12 pt-10 md:px-6 md:pt-14">
        <header className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
            Resume
          </p>
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Courage Erhabor · DevOps Engineer / SRE
          </h1>
          <p className="mt-2 text-xs text-slate-400">
            Latest resume PDF served from <code>/public/resume</code>.
            Replace the file there any time you update your CV.
          </p>
        </header>

        <div className="mb-4 flex flex-wrap gap-3 text-sm">
          <a
            href="/resume/courage-erhabor-resume.pdf"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 font-medium text-slate-950 shadow-sm shadow-emerald-400/40 transition hover:bg-emerald-300"
          >
            Download resume
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200"
          >
            ← Back to home
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60">
          <iframe
            src="/resume/courage-erhabor-resume.pdf"
            className="h-[70vh] w-full"
            title="Courage Erhabor resume"
          />
        </div>
      </div>
    </main>
  );
}
