import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
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

const clarityNarrative = [
  {
    title: "Problem",
    text: "Capital systems often optimize for growth during normal conditions and expose participants when stress arrives."
  },
  {
    title: "Failure Mode",
    text: "During depegs, chain outages, governance compromise, or execution failure, discretionary controls break first."
  },
  {
    title: "Sagitta Response",
    text: "Sagitta enforces continuity-first allocation, reserve-backed loss ordering, and deterministic settlement by protocol doctrine."
  }
] as const;

const currentDevelopmentFocus = [
  "Autonomous Allocation Agent (AAA).",
  "Protocol dashboard and testnet deployment.",
  "Sagitta Continuity Engine (SCE)."
] as const;

const audiencePathways = [
  {
    title: "For Ecosystems & Grant Programs",
    description:
      "See why continuity-first capital systems matter for public infrastructure and resilient ecosystem design.",
    href: "/use-cases",
    cta: "Explore ecosystem pathways"
  },
  {
    title: "For Developers",
    description:
      "Go straight to whitepaper chapters, architecture references, and implementation-oriented documentation.",
    href: "/docs",
    cta: "Open developer docs"
  },
  {
    title: "For Protocol Teams",
    description:
      "Review systems and authority boundaries for treasury, allocation, and continuity integration.",
    href: "/systems",
    cta: "See systems"
  },
  {
    title: "For Research & Architecture",
    description:
      "Inspect protocol doctrine, invariants, and failure-mode response architecture in one place.",
    href: "/protocol#architecture-stack",
    cta: "Review architecture"
  }
] as const;

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <section className="section-divider mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
        <div className="nexus-section-head">
          <p className="nexus-label nexus-label-center">Explore Sagitta</p>
          <h2 className="nexus-section-title">Choose your path</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {audiencePathways.map((pathway) => (
            <GlowPanel key={pathway.title} className="h-full" interactive>
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">
                {pathway.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{pathway.description}</p>
              <Link href={pathway.href} className="nexus-button-primary mt-6 inline-flex px-4 py-2 text-sm">
                {pathway.cta}
              </Link>
            </GlowPanel>
          ))}
        </div>
      </section>

      <section className="section-divider mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
        <GlowPanel>
          <p className="nexus-label">Plain-Language Orientation</p>
          <h2 className="mt-4 font-[var(--font-display)] text-2xl font-semibold text-slate-50">
            Why Sagitta exists
          </h2>
          <p className="mt-3 max-w-4xl text-sm text-slate-300">
            Sagitta builds autonomous capital infrastructure designed to protect reserves, allocate assets under risk constraints, and maintain operational continuity during market stress.
          </p>
          <p className="mt-3 max-w-4xl text-sm text-slate-300">
            It exists for operators who cannot rely on discretionary intervention when conditions degrade.
          </p>
          <p className="mt-3 text-xs tracking-[0.05em] text-slate-400">
            Built by systems architects focused on resilient capital infrastructure.
          </p>
        </GlowPanel>
      </section>

      <section className="section-divider mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
        <div className="nexus-section-head">
          <p className="nexus-label nexus-label-center">Problem Context</p>
          <h2 className="nexus-section-title">Problem, failure mode, and protocol response</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {clarityNarrative.map((item) => (
            <GlowPanel key={item.title} className="h-full">
              <p className="text-xs tracking-[0.16em] text-slate-400 uppercase">{item.title}</p>
              <p className="mt-3 text-base text-slate-200">{item.text}</p>
            </GlowPanel>
          ))}
        </div>
      </section>

      <section className="section-divider mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
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
            <GlowPanel key={project.title} className="h-full" interactive>
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

      <section className="section-divider mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
        <GlowPanel>
          <p className="nexus-label">Current Development Focus</p>
          <h2 className="mt-4 font-[var(--font-display)] text-2xl font-semibold text-slate-50">
            What Sagitta is actively building now
          </h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-3">
            {currentDevelopmentFocus.map((item) => (
              <li key={item} className="nexus-subitem px-4 py-3 text-sm text-slate-200">
                {item}
              </li>
            ))}
          </ul>
        </GlowPanel>
      </section>

      <section className="section-divider mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
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

      <section className="section-divider mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
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

      <section className="section-divider mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
        <div className="nexus-section-head">
          <p className="nexus-label nexus-label-center">Scenario Coverage</p>
          <h2 className="nexus-section-title">Applied use cases for continuity infrastructure</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-300">
            These scenarios map exactly where conventional protocols break and where continuity doctrine must take over.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <GlowPanel className="h-full" interactive>
            <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">
              Stablecoin collapse continuity
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Reserve and continuity doctrine enforce protected routing when settlement assets degrade.
            </p>
          </GlowPanel>
          <GlowPanel className="h-full" interactive>
            <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">
              Treasury continuity automation
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Allocation cycles remain bounded by policy and insurance constraints under volatile conditions.
            </p>
          </GlowPanel>
          <GlowPanel className="h-full" interactive>
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

      <section className="section-divider mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
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

      <section className="section-divider mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
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

      <section className="section-divider mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
        <div className="nexus-section-head">
          <p className="nexus-label nexus-label-center">Partnership Paths</p>
          <h2 className="nexus-section-title">Direct next steps for collaborators and reviewers</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <GlowPanel className="h-full" interactive>
            <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">Partner with Sagitta</h3>
            <p className="mt-3 text-sm text-slate-300">
              For treasury, protocol, or infrastructure partnerships where continuity is a hard requirement.
            </p>
            <Link
              href={`mailto:${siteConfig.contact.partnershipsEmail}?subject=Partnership%20Inquiry`}
              className="nexus-button-primary mt-6 inline-flex px-4 py-2 text-sm"
            >
              {siteConfig.contact.partnershipsEmail}
            </Link>
          </GlowPanel>
          <GlowPanel className="h-full" interactive>
            <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">Apply for Research Collaboration</h3>
            <p className="mt-3 text-sm text-slate-300">
              For continuity modeling, doctrine testing, and failure-simulation collaboration.
            </p>
            <Link
              href={`mailto:${siteConfig.contact.researchEmail}?subject=Research%20Collaboration`}
              className="nexus-button-primary mt-6 inline-flex px-4 py-2 text-sm"
            >
              {siteConfig.contact.researchEmail}
            </Link>
          </GlowPanel>
          <GlowPanel className="h-full" interactive>
            <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">Explore Integration</h3>
            <p className="mt-3 text-sm text-slate-300">
              For integration into allocator, treasury, and protocol stacks that cannot accept discretionary failure response.
            </p>
            <Link
              href={`mailto:${siteConfig.contact.partnershipsEmail}?subject=Integration%20Inquiry`}
              className="nexus-button-primary mt-6 inline-flex px-4 py-2 text-sm"
            >
              Start integration discussion
            </Link>
          </GlowPanel>
        </div>
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
