import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { buildPageMetadata } from "@/lib/metadata";
import { whitepaper } from "@/lib/whitepaper";

export const metadata = buildPageMetadata({
  title: "Protocol",
  description:
    "Whitepaper-aligned protocol architecture including Vault, Treasury, Reserve, Escrow, Autonomous Allocation Agent, and Continuity Engine.",
  path: "/protocol"
});

export default function ProtocolPage() {
  return (
    <div>
      <PageHero
        eyebrow="Protocol"
        title="Sagitta Protocol Whitepaper"
        description="A fiduciary-grade protocol doctrine for autonomous capital continuity, reserve-backed protection, and deterministic settlement."
      />

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <GlowPanel>
          <h2 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">
            Identity, scope, and fiduciary posture
          </h2>
          <p className="mt-3 text-slate-300">
            Sagitta Protocol is defined as autonomous capital infrastructure with hard protection constraints.
            The whitepaper frames this as protocol law with deterministic behavior rather than discretionary finance.
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

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
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

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
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
