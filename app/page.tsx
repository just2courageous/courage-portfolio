import Link from "next/link";

const skills = [
  "AWS",
  "Terraform (IaC)",
  "CI/CD (GitHub Actions)",
  "Docker & Kubernetes (EKS)",
  "Observability (CloudWatch & Grafana)",
  "Scaling & HPA",
  "Least-privilege IAM",
  "Runbooks & incident response",
];

const projects = [
  {
    tag: "Self-healing",
    title: "Self-healing AWS web cluster",
    result: "Downtime reduced by ~90%",
    stack: "AWS · EKS · Helm · HPA · CloudWatch · Grafana",
    description:
      "EKS workload with health checks, horizontal pod autoscaling, and dashboards for latency, error rates, and saturation.",
  },
  {
    tag: "CI/CD",
    title: "GitHub Actions → EC2 pipeline",
    result: "Releases: 30 min → ~5 min",
    stack: "GitHub Actions · EC2 · Docker · Blue/Green",
    description:
      "Pipeline that builds, tests, creates Docker images, and deploys to EC2 with simple rollback when checks fail.",
  },
  {
    tag: "IaC",
    title: "Terraform AWS baseline",
    result: "Repeatable, secure-by-default foundation",
    stack: "Terraform · AWS · VPC · EKS · IAM",
    description:
      "VPC, subnets, EKS, and least-privilege IAM roles provisioned as code for consistent environments.",
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.18),transparent_60%)]" />

      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-10 pt-6 md:px-6 md:pb-16 md:pt-10">
        {/* header */}
        <header className="mb-8 flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-base">
              ⚙️
            </span>
            <span className="font-semibold tracking-tight">
              Courage Erhabor
            </span>
            <span className="ml-1 text-[11px] text-emerald-300/80">
              DevOps Engineer · SRE
            </span>
          </div>

          <nav className="hidden items-center gap-4 text-xs text-slate-300 md:flex">
            <a href="#skills" className="hover:text-emerald-300">
              Skills
            </a>
            <a href="#projects" className="hover:text-emerald-300">
              Projects
            </a>
            <a href="#experience" className="hover:text-emerald-300">
              Experience
            </a>
            <a href="#awards" className="hover:text-emerald-300">
              Awards
            </a>
            <a href="#contact" className="hover:text-emerald-300">
              Contact
            </a>
          </nav>
        </header>

        {/* hero */}
        <section className="mb-10 grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] md:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300/90">
              Now open to DevOps / SRE roles
            </p>
            <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.6rem]">
              Building reliable cloud systems with{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
                AWS, Terraform, and Kubernetes
              </span>
              .
            </h1>
            <p className="mb-3 text-sm text-slate-300 md:text-[15px]">
              I design and automate cloud infrastructure on AWS using
              Terraform, CI/CD, and Kubernetes (EKS) so teams can ship faster
              with less downtime. Focus: smooth releases, observability, and
              least-privilege security.
            </p>
            <p className="mb-6 text-xs text-slate-400">
              Dean&apos;s Honour List (2×) · Computer Systems Technician at
              George Brown College.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href="https://github.com/just2courageous"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 shadow-sm shadow-emerald-400/40 transition hover:bg-emerald-300"
              >
                View GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/courageerhabor"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/40 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-emerald-400/70 hover:text-emerald-200"
              >
                Connect on LinkedIn
              </Link>
              <a
                href="mailto:erhacour@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/40 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200"
              >
                Email me
              </a>
              <a
                href="/resume/courage-erhabor-resume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200"
              >
                Download resume
              </a>
            </div>
          </div>

          <div className="space-y-3 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-4 text-xs text-slate-300 shadow-[0_0_40px_rgba(15,23,42,0.8)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Snapshot
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-slate-950/60 p-3">
                <p className="text-[11px] text-slate-400">Cloud & Infra</p>
                <p className="text-sm font-semibold text-slate-50">
                  AWS · Terraform · EKS
                </p>
              </div>
              <div className="rounded-2xl bg-slate-950/60 p-3">
                <p className="text-[11px] text-slate-400">Delivery</p>
                <p className="text-sm font-semibold text-slate-50">
                  GitHub Actions CI/CD
                </p>
              </div>
              <div className="rounded-2xl bg-slate-950/60 p-3">
                <p className="text-[11px] text-slate-400">
                  Reliability focus
                </p>
                <p className="text-sm font-semibold text-slate-50">
                  Health checks, HPA, rollback
                </p>
              </div>
              <div className="rounded-2xl bg-slate-950/60 p-3">
                <p className="text-[11px] text-slate-400">Signals</p>
                <p className="text-sm font-semibold text-slate-50">
                  CloudWatch & Grafana dashboards
                </p>
              </div>
            </div>
            <p className="text-[11px] text-slate-400">
              I like infrastructure that heals itself, pipelines that always
              run, and dashboards that tell the truth.
            </p>
          </div>
        </section>

        {/* skills */}
        <section
          id="skills"
          className="mb-10 scroll-mt-24 rounded-3xl border border-slate-800/80 bg-slate-950/60 px-4 py-5"
        >
          <header className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-500/15 text-lg">
              🧰
            </div>
            <h2 className="text-base font-semibold tracking-tight md:text-lg">
              Skills that match DevOps / SRE roles
            </h2>
          </header>
          <ul className="flex flex-wrap gap-2 text-xs">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-slate-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* projects */}
        <section id="projects" className="mb-10 scroll-mt-24">
          <header className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-500/15 text-lg">
              📦
            </div>
            <h2 className="text-base font-semibold tracking-tight md:text-lg">
              Projects that show how I work
            </h2>
          </header>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4 text-xs text-slate-300 shadow-[0_0_24px_rgba(15,23,42,0.7)] transition hover:border-emerald-400/70 hover:shadow-[0_0_40px_rgba(52,211,153,0.35)]"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300/90">
                    {project.tag}
                  </span>
                  <span className="text-[10px] text-emerald-300/90">
                    {project.result}
                  </span>
                </div>
                <h3 className="mb-1 text-sm font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="mb-2 text-[11px] text-slate-400">
                  {project.stack}
                </p>
                <p className="mb-3 text-xs text-slate-300">
                  {project.description}
                </p>
                <div className="mt-auto pt-1">
                  <a
                    href="https://github.com/just2courageous"
                    target="_blank"
                    className="text-[11px] font-semibold text-emerald-300 hover:text-emerald-200"
                  >
                    View on GitHub →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* experience */}
        <section id="experience" className="mb-10 scroll-mt-24">
          <header className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-500/15 text-lg">
              📈
            </div>
            <h2 className="text-base font-semibold tracking-tight md:text-lg">
              Experience (self-directed DevOps work)
            </h2>
          </header>

          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4 text-xs text-slate-300">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <div className="font-semibold text-slate-50">
                Self-directed DevOps projects{" "}
                <span className="text-slate-400">· Personal portfolio</span>
              </div>
              <div className="text-[11px] text-slate-400">
                2024 – Present
              </div>
            </div>
            <ul className="space-y-2">
              <li>
                • Built AWS environments with Terraform and deployed
                containerized workloads on EKS behind proper networking and
                health checks.
              </li>
              <li>
                • Implemented CI/CD pipelines with GitHub Actions to automate
                build, test, and deployment to EC2 and Kubernetes.
              </li>
              <li>
                • Added CloudWatch and Grafana dashboards plus runbooks so
                failures are visible and recovery steps are repeatable.
              </li>
            </ul>
          </div>
        </section>

        {/* awards */}
        <section id="awards" className="mb-10 scroll-mt-24">
          <header className="mb-4 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-emerald-500/15 text-lg">
              🏅
            </div>
            <h2 className="text-base font-semibold tracking-tight md:text-lg">
              Awards
            </h2>
          </header>

          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4 text-xs text-slate-300">
            <p>
              <span className="font-semibold text-slate-50">
                Dean&apos;s Honour List
              </span>{" "}
              · George Brown College – Recognized twice for academic excellence
              in the Computer Systems Technician program.
            </p>
          </div>
        </section>

        {/* contact */}
        <section
          id="contact"
          className="mt-auto scroll-mt-24 border-t border-slate-800/80 pt-6"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Contact
              </p>
              <p className="text-sm font-semibold text-slate-50">
                Let&apos;s talk about DevOps / SRE roles, projects, or
                internships.
              </p>
              <p className="text-xs text-slate-400">
                Based in Canada, open to remote-friendly teams.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <a
                href="mailto:erhacour@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 font-medium text-slate-950 shadow-sm shadow-emerald-400/40 transition hover:bg-emerald-300"
              >
                Email Courage
              </a>
              <Link
                href="https://linkedin.com/in/courageerhabor"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 font-medium text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200"
              >
                View LinkedIn
              </Link>
              <Link
                href="https://github.com/just2courageous"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 font-medium text-slate-100 transition hover:border-emerald-300 hover:text-emerald-200"
              >
                GitHub profile
              </Link>
            </div>
          </div>

          <footer className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-slate-800/80 pt-4 text-[11px] text-slate-500 md:flex-row md:items-center">
            <span>© {year} Courage Erhabor. Built with Next.js & Tailwind.</span>
            <span className="text-slate-500">
              Hosting on Vercel · Domain: courageerhabor.com
            </span>
          </footer>
        </section>
      </div>
    </main>
  );
}
