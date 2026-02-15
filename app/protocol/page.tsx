import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { buildPageMetadata } from "@/lib/metadata";
import { getWhitepaperChapterBySlug, whitepaper } from "@/lib/whitepaper";

export const metadata = buildPageMetadata({
  title: "Protocol",
  description:
    "Whitepaper-aligned protocol architecture including Vault, Treasury, Reserve, Escrow, Autonomous Allocation Agent, and Continuity Engine.",
  path: "/protocol"
});

export default function ProtocolPage() {
  const executiveSummary = getWhitepaperChapterBySlug("executive-summary");

  return (
    <div>
      <PageHero
        eyebrow="Protocol"
        title="Sagitta Protocol"
        description="A fiduciary-grade protocol doctrine for autonomous capital continuity, reserve-backed protection, and deterministic settlement."
      />

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <GlowPanel>
          <h2 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">
            Identity, scope, and fiduciary posture
          </h2>
          <p className="mt-3 text-slate-300">
            {executiveSummary?.introduction ??
              "Sagitta Protocol is defined as autonomous capital infrastructure with hard protection constraints. The whitepaper frames this as protocol law with deterministic behavior rather than discretionary finance."}
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs tracking-[0.2em] text-slate-400 uppercase">Scope Clarifications</p>
              <ul className="space-y-2 text-sm text-slate-200">
                {whitepaper.scopeClarifications.map((item) => (
                  <li key={item} className="nexus-subitem px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs tracking-[0.2em] text-slate-400 uppercase">Fiduciary Alignment</p>
              <ul className="space-y-2 text-sm text-slate-200">
                {whitepaper.fiduciaryPillars.map((item) => (
                  <li key={item} className="nexus-subitem px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={whitepaper.url}
              target="_blank"
              rel="noreferrer"
              className="nexus-button-primary inline-flex px-4 py-2 text-sm"
            >
              Open full whitepaper
            </Link>
            <Link
              href="/docs"
              className="nexus-button-ghost inline-flex px-4 py-2 text-sm"
            >
              Browse docs page
            </Link>
          </div>
        </GlowPanel>
      </section>

      <section id="executive-summary" className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="nexus-section-head">
          <p className="nexus-label nexus-label-center">Executive Summary</p>
          <h2 className="nexus-section-title">Whitepaper text integrated into protocol sections</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {executiveSummary?.sections.slice(0, 4).map((section) => (
            <GlowPanel key={section.heading}>
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">
                {section.heading}
              </h3>
              {section.content ? <p className="mt-3 text-sm text-slate-300">{section.content}</p> : null}
              {section.paragraphs?.length ? (
                <div className="mt-3 space-y-3 text-sm text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {section.bullets?.length ? (
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {section.bullets.map((item) => (
                    <li key={item} className="nexus-subitem rounded-lg px-3 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </GlowPanel>
          ))}
        </div>
      </section>

      <section id="architecture-stack" className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="nexus-section-head">
          <p className="nexus-label nexus-label-center">
            Architecture Stack
          </p>
          <h2 className="nexus-section-title">
            Layered authorities inside Sagitta Protocol
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {whitepaper.subsystems.map((item) => (
            <GlowPanel key={item.name}>
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{item.role}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {item.keyFunctions.map((feature) => (
                  <li key={feature} className="nexus-subitem rounded-lg px-3 py-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </GlowPanel>
          ))}
        </div>
      </section>

      <section id="protocol-diagram" className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <GlowPanel>
            <h3 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">
              System invariants
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {whitepaper.invariants.map((item) => (
                <li key={item} className="nexus-subitem px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </GlowPanel>
          <GlowPanel>
            <h3 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">
              Capital flow lifecycle
            </h3>
            <ol className="mt-4 space-y-2 text-sm text-slate-200">
              {whitepaper.capitalFlow.map((item, index) => (
                <li key={item} className="nexus-subitem px-4 py-3">
                  {index + 1}. {item}
                </li>
              ))}
            </ol>
          </GlowPanel>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="nexus-section-head">
          <p className="nexus-label nexus-label-center">Protocol Diagram</p>
          <h2 className="mt-4 font-[var(--font-body)] text-5xl font-medium leading-[0.96] tracking-[-0.025em] text-[#bcc6d3] sm:text-6xl lg:text-7xl">
            Capital Flow Diagram
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base text-slate-300 sm:text-lg">
            Custody, reserve insurance, allocation execution, settlement, and continuity controls in one operating map.
          </p>
        </div>
        <div className="mt-8">
          <GlowPanel className="p-4 sm:p-6">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 sm:p-3">
              <Image
                src="/capital-flow-diagram.jpg"
                alt="Sagitta Protocol capital flow diagram"
                width={768}
                height={1152}
                className="mx-auto h-auto w-full max-w-2xl rounded-xl"
              />
            </div>
            <div className="mt-5 flex justify-center">
              <Link
                href="/capital-flow-diagram.jpg"
                target="_blank"
                rel="noreferrer"
                className="nexus-button-ghost px-4 py-2 text-sm"
              >
                Open full-size diagram
              </Link>
            </div>
          </GlowPanel>
        </div>
      </section>

      <section id="threat-matrix" className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <GlowPanel>
          <h3 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">
            Failure and threat matrix
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            The whitepaper defines explicit scenario-to-response logic to keep the protocol inside survivable operating bounds.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {whitepaper.threatMatrix.map((item) => (
              <div key={item.scenario} className="nexus-subitem p-4">
                <p className="font-[var(--font-display)] text-base font-semibold text-slate-100">
                  {item.scenario}
                </p>
                <p className="mt-2 text-sm text-slate-300">{item.response}</p>
              </div>
            ))}
          </div>
        </GlowPanel>
      </section>

      <CtaBanner
        title="Need protocol implementation guidance?"
        description="Use the docs page for full chapter references, then contact Sagitta Labs for architecture review and deployment support."
        ctaLabel="Go to Docs"
        ctaHref="/docs"
      />
    </div>
  );
}
