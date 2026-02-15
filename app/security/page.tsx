import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";
import { whitepaper } from "@/lib/whitepaper";

export const metadata = buildPageMetadata({
  title: "Security",
  description:
    "Security and risk transparency hub: audit artifacts, threat modeling references, and coordinated vulnerability reporting.",
  path: "/security"
});

const auditTrack = [
  {
    title: "Core Protocol Contracts Audit",
    status: "Planned",
    note: "Scope definition for Vault, Reserve, and settlement-critical contracts."
  },
  {
    title: "Autonomous Allocation Agent Controls Review",
    status: "Planned",
    note: "Model guardrails, policy boundaries, and override constraints."
  },
  {
    title: "Continuity Engine Failover Review",
    status: "In Design",
    note: "Substitution logic, evacuation sequencing, and recovery-state validation."
  }
] as const;

const bountyScopes = [
  "Critical flaws that could violate principal-protection invariants.",
  "Settlement-order manipulation or reserve accounting inconsistencies.",
  "Execution-boundary bypasses affecting Escrow isolation.",
  "Governance or continuity-mode abuse paths with high-impact outcomes."
];

export default function SecurityPage() {
  return (
    <div>
      <PageHero
        eyebrow="Security"
        title="Security and risk transparency"
        description="Capital resilience needs verifiable controls. This page tracks audit posture, threat modeling references, and vulnerability disclosure paths."
      />

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {auditTrack.map((item) => (
            <GlowPanel key={item.title} className="h-full">
              <p className="nexus-label">{item.status}</p>
              <h2 className="mt-4 font-[var(--font-display)] text-xl font-semibold text-slate-50">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{item.note}</p>
            </GlowPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <GlowPanel>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">
              Threat modeling summary
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              High-risk scenarios are mapped to deterministic response doctrine. Current matrix highlights:
            </p>
            <ul className="mt-4 space-y-2">
              {whitepaper.threatMatrix.map((item) => (
                <li key={item.scenario} className="nexus-subitem px-4 py-3">
                  <p className="font-[var(--font-display)] text-sm font-semibold text-slate-100">{item.scenario}</p>
                  <p className="mt-1 text-xs text-slate-300">{item.response}</p>
                </li>
              ))}
            </ul>
            <Link href="/docs/failure-threat-matrix" className="nexus-button-ghost mt-5 inline-flex px-4 py-2 text-sm">
              Read full threat chapter
            </Link>
          </GlowPanel>
          <GlowPanel>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">
              Bug bounty and disclosure
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Coordinated disclosure path for researchers and integrators.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {bountyScopes.map((scope) => (
                <li key={scope} className="nexus-subitem px-4 py-3">
                  {scope}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={`mailto:${siteConfig.contact.email}?subject=Security%20Disclosure`}
                className="nexus-button-primary px-4 py-2 text-sm"
              >
                Submit vulnerability report
              </Link>
              <Link href="/docs/system-invariants" className="nexus-button-ghost px-4 py-2 text-sm">
                Review invariants
              </Link>
            </div>
          </GlowPanel>
        </div>
      </section>

      <CtaBanner
        title="Need an architecture risk review?"
        description="Sagitta Labs can run protocol-level threat reviews across custody, reserve, execution, and continuity layers."
        ctaLabel="Contact security team"
        ctaHref={`mailto:${siteConfig.contact.email}?subject=Security%20Review%20Request`}
      />
    </div>
  );
}
