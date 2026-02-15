import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Use Cases",
  description:
    "Operational scenarios showing how Sagitta Protocol enforces continuity, reserve discipline, and risk accountability.",
  path: "/use-cases"
});

const useCases = [
  {
    title: "Stablecoin Collapse Continuity",
    challenge:
      "Collateral and settlement assumptions degrade quickly while outflow pressure rises.",
    response:
      "Sagitta Continuity Engine contracts risk posture, reserve doctrine enforces protected settlement order, and role substitution routes around impaired assets.",
    outcome:
      "Capital preservation logic remains active while the system shifts into controlled recovery."
  },
  {
    title: "On-Chain Treasury Continuity Automation",
    challenge:
      "Treasury operators need risk controls and fallback behavior that do not rely on manual intervention.",
    response:
      "Treasury batching, Autonomous Allocation Agent policy outputs, and continuity mode transitions are executed under deterministic constraints.",
    outcome:
      "Treasury operations remain accountable, auditable, and resilient under stressed market states."
  },
  {
    title: "DeFi Risk Governance Scenarios",
    challenge:
      "Governance and execution risk can drift faster than discretionary controls can react.",
    response:
      "Protocol invariants, reserve supremacy, and explicit failure-threshold responses bound governance and execution authority.",
    outcome:
      "Risk is governed by protocol law with lower reliance on ad hoc governance discretion."
  },
  {
    title: "Chain Halt and Infrastructure Disruption",
    challenge:
      "A primary chain or service dependency degrades and settlement assumptions no longer hold.",
    response:
      "Continuity doctrine applies substitution routes and degraded-mode posture while preserving accounting and reserve constraints.",
    outcome:
      "Operational continuity persists without forcing immediate discretionary migration."
  },
  {
    title: "Allocator Failure and Reserve Drawdown",
    challenge:
      "Allocation quality deteriorates while reserve coverage trends toward protective thresholds.",
    response:
      "AAA authority contracts, Treasury deployment tightens, and Reserve-first ordering enforces solvency before growth.",
    outcome:
      "Protocol transitions to survival-first posture until recovery criteria are satisfied."
  }
] as const;

const scenarioPipeline = [
  "Detect degradation through reserve, volatility, and execution signals.",
  "Trigger protective contraction and isolate exposed execution pathways.",
  "Apply continuity substitution routes for impaired dependencies.",
  "Reconcile outcomes under deterministic settlement ordering.",
  "Re-expand only after recovery thresholds are satisfied."
];

export default function UseCasesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Use Cases"
        title="Scenario-driven proof of continuity posture"
        description="How Sagitta behaves during depegs, chain halts, governance capture attempts, allocator failure, and reserve drawdown."
      />

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item) => (
            <GlowPanel key={item.title} className="h-full">
              <h2 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">{item.title}</h2>
              <p className="mt-4 text-xs tracking-[0.16em] text-slate-500 uppercase">Challenge</p>
              <p className="mt-2 text-sm text-slate-300">{item.challenge}</p>
              <p className="mt-4 text-xs tracking-[0.16em] text-slate-500 uppercase">Sagitta Response</p>
              <p className="mt-2 text-sm text-slate-300">{item.response}</p>
              <p className="mt-4 text-xs tracking-[0.16em] text-slate-500 uppercase">Outcome</p>
              <p className="mt-2 text-sm text-slate-200">{item.outcome}</p>
            </GlowPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <GlowPanel>
          <h2 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">
            Standard response pipeline
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Scenario execution is a rule-bound pipeline, not discretionary crisis management.
          </p>
          <ol className="mt-5 grid gap-3 md:grid-cols-2">
            {scenarioPipeline.map((step, index) => (
              <li key={step} className="nexus-subitem px-4 py-3 text-sm text-slate-200">
                {index + 1}. {step}
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/protocol#threat-matrix" className="nexus-button-primary px-4 py-2 text-sm">
              Open threat matrix
            </Link>
            <Link href="/docs/failure-threat-matrix" className="nexus-button-ghost px-4 py-2 text-sm">
              Read matrix chapter
            </Link>
          </div>
        </GlowPanel>
      </section>

      <CtaBanner
        title="Need a custom continuity scenario?"
        description="Sagitta Labs can map your treasury or protocol constraints into specific doctrine-driven scenario playbooks."
        ctaLabel="Contact the team"
        ctaHref="/contact"
      />
    </div>
  );
}
