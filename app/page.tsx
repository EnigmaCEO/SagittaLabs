import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { buildPageMetadata } from "@/lib/metadata";
import { whitepaper } from "@/lib/whitepaper";

export const metadata = buildPageMetadata({
  title: "Home",
  description: "Sagitta Labs - Autonomous Capital Systems",
  path: "/"
});

const projects = [
  {
    title: "Sagitta Protocol",
    role: "Autonomous continuity and capital doctrine for resilient infrastructure.",
    href: "/protocol"
  },
  {
    title: "Sagitta Autonomous Allocation Agent",
    role: "Autonomous allocation and risk policy engine.",
    href: "/systems"
  },
  {
    title: "Sagitta Continuity Engine",
    role: "Survival governance and failure-response authority.",
    href: "/protocol"
  }
];

const nonNegotiables = [
  "Depositors never absorb loss before protocol reserve ordering is exhausted.",
  "No discretionary human override during stress-mode continuity transitions.",
  "The system remains operational when any single pillar fails."
] as const;

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="nexus-section-head">
          <p className="nexus-label nexus-label-center">
            Core Projects
          </p>
          <h2 className="nexus-section-title">
            Capital systems designed for continuity
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-300">
            If stablecoins depeg, execution venues fail, or governance degrades, these are the layers that prevent uncontrolled downside transfer.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <GlowPanel key={project.title} className="h-full">
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{project.role}</p>
              <Link
                href={project.href}
                className="nexus-button-ghost mt-6 inline-flex px-4 py-2 text-sm"
              >
                Learn more
              </Link>
            </GlowPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        {/* Template mapping: staggered feature cards mirror the dense card block below hero in the reference homepage. */}
        <div className="grid gap-5 md:grid-cols-2">
          <GlowPanel className="md:row-span-2">
            <h3 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">
              Sagitta Protocol whitepaper doctrine
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              {whitepaper.summary}
            </p>
            <p className="mt-3 text-sm text-slate-200">
              Without these rules, loss handling defaults to discretion and participants inherit failure by surprise.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="nexus-button-primary inline-flex px-4 py-2 text-sm"
              >
                View whitepaper resources
              </Link>
              <Link
                href={whitepaper.url}
                target="_blank"
                rel="noreferrer"
                className="nexus-button-ghost inline-flex px-4 py-2 text-sm"
              >
                Open full GitBook
              </Link>
            </div>
          </GlowPanel>
          {whitepaper.principles.map((item) => (
            <GlowPanel key={item.title}>
              <p className="font-[var(--font-display)] text-base font-semibold text-slate-100">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </GlowPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="nexus-section-head">
          <p className="nexus-label nexus-label-center">
            Protocol Architecture
          </p>
          <h2 className="nexus-section-title">
            Full system stack from custody to continuity
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-300">
            If one authority fails, layered separation prevents custody, insurance, and execution risk from collapsing together.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whitepaper.subsystems.map((item) => (
            <GlowPanel key={item.name}>
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{item.role}</p>
            </GlowPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="nexus-section-head">
          <p className="nexus-label nexus-label-center">Scenario Coverage</p>
          <h2 className="nexus-section-title">Applied use cases for continuity infrastructure</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-300">
            These scenarios map exactly where conventional protocols break and where continuity doctrine must take over.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <GlowPanel className="h-full">
            <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">
              Stablecoin collapse continuity
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Reserve and continuity doctrine enforce protected routing when settlement assets degrade.
            </p>
          </GlowPanel>
          <GlowPanel className="h-full">
            <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">
              Treasury continuity automation
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Allocation cycles remain bounded by policy and insurance constraints under volatile conditions.
            </p>
          </GlowPanel>
          <GlowPanel className="h-full">
            <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">
              DeFi risk governance
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Governance actions stay inside invariant and threat-matrix guardrails during stress and recovery.
            </p>
          </GlowPanel>
        </div>
        <div className="mt-6 flex justify-center">
          <Link href="/use-cases" className="nexus-button-primary px-5 py-2.5 text-sm">
            View all use cases
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="nexus-section-head">
          <p className="nexus-label nexus-label-center">Protocol Hard Constraints</p>
          <h2 className="nexus-section-title">Non-negotiables in public view</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-300">
            Trust is not promised here. It is enforced by invariants, failure doctrine, and explicit constraints on what the system refuses to do.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {nonNegotiables.map((item) => (
            <GlowPanel key={item} className="h-full">
              <p className="text-xs tracking-[0.16em] text-slate-500 uppercase">System Constraint</p>
              <p className="mt-3 font-[var(--font-display)] text-xl font-semibold text-slate-50">{item}</p>
            </GlowPanel>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/docs/system-invariants" className="nexus-button-primary px-5 py-2.5 text-sm">
            Review invariants
          </Link>
          <Link href="/protocol#threat-matrix" className="nexus-button-ghost px-5 py-2.5 text-sm">
            Review threat doctrine
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <GlowPanel>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="nexus-label">Security and Risk Transparency</p>
              <h2 className="mt-3 font-[var(--font-display)] text-2xl font-semibold text-slate-50">
                Audit posture, threat modeling, and disclosure pathways
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-slate-300">
                Capital resilience depends on visible controls. Review audit status, failure scenarios, and vulnerability reporting paths.
              </p>
            </div>
            <Link href="/security" className="nexus-button-primary px-5 py-2.5 text-sm">
              Open Security Hub
            </Link>
          </div>
        </GlowPanel>
      </section>

      <CtaBanner
        title="Build with Sagitta Labs"
        description="Partner with Sagitta Labs if you run treasury, protocol, or allocator systems where failure is unacceptable."
        ctaLabel="Discuss integration"
        ctaHref="/contact"
      />
    </div>
  );
}
