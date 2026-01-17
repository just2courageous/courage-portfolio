"use client";

import Link from "next/link";
import { useState } from "react";

const skills = [
  "AWS (Amazon Web Services)",
  "Terraform (Infrastructure as Code)",
  "Kubernetes (Container Orchestration) — EKS (Elastic Kubernetes Service)",
  "Docker (Containerization)",
  "GitHub Actions (CI/CD — Continuous Integration/Continuous Delivery)",
  "GitOps (Git Operations) — Argo CD (Continuous Delivery)",
  "Argo Rollouts (Progressive Delivery) + HPA (Horizontal Pod Autoscaler)",
  "Fluent Bit (Log Shipper) → CloudWatch Logs (Amazon CloudWatch Logs)",
  "Prometheus (Metrics) + Grafana (Dashboards)",
  "Linux (Operating System) + Bash (Shell) + Python (Programming Language)",
  "IAM (Identity and Access Management) — least-privilege + IRSA (IAM Roles for Service Accounts)",
  "Runbooks (Operational Guides) + incident response",
];

const projects = [
  {
    tag: "End-to-end",
    title: "green-guard",
    result: "GitOps delivery demo",
    stack: "FastAPI · Docker · GitHub Actions · Argo CD · Kubernetes (EKS)",
    description:
      "End-to-end release flow: build + containerize → publish image → GitOps sync → progressive rollout on Kubernetes.",
    repoUrl: "https://github.com/just2courageous/green-guard",
    archImage: "/projects/green-guard/green-guard-arch.png",
    screenshots: [
      "/projects/green-guard/02-actions-green.png",
      "/projects/green-guard/07-argocd-synced.png",
      "/projects/green-guard/05-rollout-success.png",
    ],
  },
  {
    tag: "Progressive delivery",
    title: "gg-rollouts-hpa",
    result: "Canary + autoscaling",
    stack: "Argo Rollouts · HPA · Prometheus/Grafana · Kubernetes (EKS)",
    description:
      "Canary releases with Argo Rollouts and autoscaling with HPA, backed by observability and rollout proofs.",
    repoUrl: "https://github.com/just2courageous/gg-rollouts-hpa",
    archImage: "/projects/gg-rollouts-hpa/gg-rollouts-hpa-arch.png",
    screenshots: [
      "/projects/gg-rollouts-hpa/p10-rollout-created.png",
      "/projects/gg-rollouts-hpa/p10-hpa-success.png",
      "/projects/gg-rollouts-hpa/p10-final-stable.png",
    ],
  },
  {
    tag: "Logging",
    title: "gg-logging-cloudwatch",
    result: "No static AWS keys",
    stack: "Fluent Bit · CloudWatch Logs · IRSA (OIDC) · Kubernetes (EKS)",
    description:
      "Centralized cluster logging on EKS: Fluent Bit ships pod logs into CloudWatch Logs using IRSA (OIDC) authentication.",
    repoUrl: "https://github.com/just2courageous/gg-logging-cloudwatch",
    archImage: "/projects/gg-logging-cloudwatch/gg-logging-cloudwatch-arch.png",
    screenshots: [
      "/projects/gg-logging-cloudwatch/p11-pods-running.png",
      "/projects/gg-logging-cloudwatch/p11-cloudwatch-log-streams.png",
      "/projects/gg-logging-cloudwatch/p11-irsa-role.png",
    ],
  },
  {
    tag: "IaC",
    title: "gg-eks-terraform",
    result: "Repeatable cluster builds",
    stack: "Terraform · VPC · IAM · EKS (Elastic Kubernetes Service)",
    description:
      "Terraform IaC for a production-style EKS baseline: networking, cluster, nodegroup, and IAM roles with clean teardown.",
    repoUrl: "https://github.com/just2courageous/gg-eks-terraform",
    archImage: "/projects/gg-eks-terraform/gg-eks-terraform-arch.png",
    screenshots: [
      "/projects/gg-eks-terraform/terraform-apply-complete.png",
      "/projects/gg-eks-terraform/kubectl-get-nodes.png",
      "/projects/gg-eks-terraform/kube-system-pods.png",
    ],
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  // ✅ Bigger avatar with safe fallback
  const [avatarOk, setAvatarOk] = useState(true);

  // ✅ Consistent hover: nothing is “pre-highlighted”
  const btn =
    "inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/55 px-4 py-2 font-medium text-slate-100 transition hover:border-emerald-300 hover:bg-emerald-400 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60";
  const btnSm =
    "inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/55 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-emerald-300 hover:bg-emerald-400 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60";

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.18),transparent_60%)]" />

      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-10 pt-6 md:px-6 md:pb-16 md:pt-10">
        {/* ✅ HEADER (only area changed): bigger avatar + name/title side-by-side */}
        <header className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* BIG AVATAR */}
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-emerald-400/45 bg-slate-950/60 shadow-xl shadow-emerald-900/25 md:h-40 md:w-40">
              {avatarOk ? (
                <img
                  src="/headshot.jpg"
                  alt="Courage Erhabor"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={() => setAvatarOk(false)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-emerald-200">
                  CE
                </div>
              )}
            </div>

            {/* NAME + TITLE PILL (side-by-side like your sketch) */}
            <div className="rounded-full border border-slate-800/80 bg-slate-900/70 px-5 py-3">
              <div className="flex items-baseline gap-4 leading-none">
                <span className="text-[18px] font-semibold tracking-tight text-slate-100 md:text-[20px]">
                  Courage Erhabor
                </span>
                <span className="text-[13px] font-medium text-emerald-300/85 md:text-[14px]">
                  DevOps Engineer
                </span>
              </div>
            </div>
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
              Now open to DevOps roles
            </p>

            <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.6rem]">
              Building reliable cloud systems with{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
                AWS, Terraform, and Kubernetes
              </span>
              .
            </h1>

            <p className="mb-3 text-sm text-slate-300 md:text-[15px]">
              I design and automate cloud infrastructure on AWS using Terraform,
              CI/CD, and Kubernetes (EKS) so teams can ship faster with less
              downtime. Focus: smooth releases, observability, and
              least-privilege security.
            </p>

            <p className="mb-6 text-xs text-slate-400">
              Dean&apos;s Honour List (2×) · Computer Systems Technician at George
              Brown College.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href="https://github.com/just2courageous"
                target="_blank"
                rel="noreferrer"
                className={btn}
              >
                View GitHub
              </Link>

              <Link
                href="https://linkedin.com/in/courageerhabor"
                target="_blank"
                rel="noreferrer"
                className={btn}
              >
                Connect on LinkedIn
              </Link>

              <a href="mailto:erhacour@gmail.com" className={btnSm}>
                Email me
              </a>

              <a href="/resume/courage-erhabor-resume.pdf" className={btnSm}>
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
                <p className="text-[11px] text-slate-400">Cloud &amp; Infra</p>
                <p className="text-sm font-semibold text-slate-50">
                  AWS · Terraform · EKS (Elastic Kubernetes Service)
                </p>
              </div>

              <div className="rounded-2xl bg-slate-950/60 p-3">
                <p className="text-[11px] text-slate-400">Delivery</p>
                <p className="text-sm font-semibold text-slate-50">
                  GitHub Actions (CI/CD — Continuous Integration/Continuous
                  Delivery)
                </p>
              </div>

              <div className="rounded-2xl bg-slate-950/60 p-3">
                <p className="text-[11px] text-slate-400">
                  Scaling &amp; resilience
                </p>
                <p className="text-sm font-semibold text-slate-50">
                  HPA (Horizontal Pod Autoscaler), health checks, rollback
                </p>
              </div>

              <div className="rounded-2xl bg-slate-950/60 p-3">
                <p className="text-[11px] text-slate-400">Observability</p>
                <p className="text-sm font-semibold text-slate-50">
                  CloudWatch (Amazon CloudWatch) · Grafana (Dashboards) · Fluent
                  Bit (Log Shipper)
                </p>
              </div>
            </div>

            <p className="text-[11px] text-slate-400">
              I like infrastructure that heals itself, pipelines that always run,
              and dashboards that tell the truth.
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
              Skills that match DevOps roles
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

          <div className="grid gap-4 md:grid-cols-2">
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
                <p className="mb-2 text-[11px] text-slate-400">{project.stack}</p>
                <p className="mb-3 text-xs text-slate-300">{project.description}</p>

                <div className="mb-3 grid gap-2">
                  <a
                    href={project.archImage}
                    target="_blank"
                    rel="noreferrer"
                    className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 p-2"
                  >
                    <img
                      src={project.archImage}
                      alt={`${project.title} architecture diagram`}
                      className="h-44 w-full object-contain transition group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </a>

                  <div className="grid grid-cols-3 gap-2">
                    {project.screenshots.map((src) => (
                      <a
                        key={src}
                        href={src}
                        target="_blank"
                        rel="noreferrer"
                        className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60"
                      >
                        <img
                          src={src}
                          alt={`${project.title} screenshot`}
                          className="h-20 w-full object-cover"
                          loading="lazy"
                        />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-1">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-semibold text-slate-300 transition hover:text-emerald-200 focus:outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-emerald-400/60"
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
              <div className="text-[11px] text-slate-400">2024 – Present</div>
            </div>

            <ul className="space-y-2">
              <li>
                • Built AWS environments with Terraform and deployed containerized
                workloads on EKS behind proper networking and health checks.
              </li>
              <li>
                • Implemented CI/CD pipelines with GitHub Actions to automate
                build, test, and deployment.
              </li>
              <li>
                • Added CloudWatch and Grafana dashboards plus runbooks so failures
                are visible and recovery steps are repeatable.
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
              · George Brown College – Recognized twice for academic excellence in
              the Computer Systems Technician program.
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
                Let&apos;s talk about DevOps roles, projects, or internships.
              </p>
              <p className="text-xs text-slate-400">
                Based in Canada, open to remote-friendly teams. Email or LinkedIn are
                usually the fastest ways to reach me.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              <a href="mailto:erhacour@gmail.com" className={btnSm}>
                Email Courage
              </a>

              <Link
                href="https://linkedin.com/in/courageerhabor"
                target="_blank"
                rel="noreferrer"
                className={btnSm}
              >
                View LinkedIn
              </Link>

              <Link
                href="https://github.com/just2courageous"
                target="_blank"
                rel="noreferrer"
                className={btnSm}
              >
                GitHub profile
              </Link>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 md:flex-row">
            {/* Formspree */}
            <form
              action="https://formspree.io/f/xnnljnzb"
              method="POST"
              className="flex-1 space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4 text-xs text-slate-200"
            >
              <p className="text-sm font-semibold text-slate-50">Quick message</p>
              <p className="text-[11px] text-slate-400">
                This form sends directly to my inbox.
              </p>

              <div className="space-y-1">
                <label className="block text-[11px] text-slate-400">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none focus:border-emerald-400"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] text-slate-400">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none focus:border-emerald-400"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[11px] text-slate-400">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none focus:border-emerald-400"
                  placeholder="How can I help?"
                />
              </div>

              <input
                type="hidden"
                name="_subject"
                value="New message from courageerhabor.com"
              />

              <button type="submit" className={btnSm}>
                Send message
              </button>
            </form>

            {/* LinkedIn badge */}
            <div className="flex-1 rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4 text-xs text-slate-200">
              <p className="mb-2 text-sm font-semibold text-slate-50">LinkedIn</p>
              <p className="mb-3 text-[11px] text-slate-400">
                You can also connect with me directly on LinkedIn.
              </p>

              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="medium"
                data-theme="dark"
                data-type="HORIZONTAL"
                data-vanity="courageerhabor"
                data-version="v1"
              >
                <a
                  className="badge-base__link LI-simple-link"
                  href="https://www.linkedin.com/in/courageerhabor?trk=profile-badge"
                  target="_blank"
                  rel="noreferrer"
                >
                  Courage Erhabor
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-slate-800/80 pt-4 text-[11px] text-slate-500 md:flex-row md:items-center">
            <span>© {year} Courage Erhabor. Built with Next.js &amp; Tailwind.</span>
            <span className="text-slate-500">
              Hosting on Vercel · Domain: courageerhabor.com · Last updated: January 2026
            </span>
          </footer>
        </section>
      </div>
    </main>
  );
}
