export type WhitepaperLink = {
  title: string;
  href: string;
  summary: string;
};

export type WhitepaperSubsystem = {
  name: string;
  role: string;
  keyFunctions: string[];
};

export const whitepaper = {
  title: "Sagitta Whitepaper",
  url: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper",
  summary:
    "An autonomous, fiduciary-grade capital system focused on principal protection, reserve-backed discipline, and continuity under failure.",
  principles: [
    {
      title: "Insurance before optimization",
      description:
        "Risk-taking is constrained by insured capacity so safety and solvency are prerequisites for growth."
    },
    {
      title: "Protocol-level loss accountability",
      description:
        "Loss handling is absorbed by protocol capital ordering instead of passing downside directly to participants."
    },
    {
      title: "Survivability by design",
      description:
        "Continuity doctrine governs stress events through predefined fallback, substitution, and recovery actions."
    }
  ],
  scopeClarifications: [
    "Sagitta is protocol infrastructure, not a bank, trust company, or discretionary custody operator.",
    "Capital behavior is governed by deterministic protocol law and invariants, not operator judgment.",
    "References to insurance describe internal reserve mechanics, not external insurance contracts."
  ],
  fiduciaryPillars: [
    "Principal protection is enforced as a first-order invariant.",
    "Loss absorption follows predefined settlement ordering.",
    "Performance is evaluated relative to reserve protection.",
    "Growth is bounded by reserve coverage and earned solvency.",
    "Authority is separated across custody, policy, insurance, and continuity."
  ],
  subsystems: [
    {
      name: "Vault",
      role: "Protocol custody and accounting authority.",
      keyFunctions: [
        "Records contributions and ownership state.",
        "Maintains deterministic availability for protocol accounting.",
        "Separates user capital records from allocation decisioning."
      ]
    },
    {
      name: "Treasury",
      role: "Monetary coordination and settlement authority.",
      keyFunctions: [
        "Forms allocation liquidity from protocol inflows.",
        "Applies policy constraints before execution.",
        "Reconciles outcomes with reserve-aware settlement logic."
      ]
    },
    {
      name: "Reserve",
      role: "Capitalized insurance and shock-absorption layer.",
      keyFunctions: [
        "Buffers volatility between vault obligations and allocation outcomes.",
        "Absorbs losses through defined drawdown priorities.",
        "Operates passive, active, and emergency stabilization modes."
      ]
    },
    {
      name: "Escrow",
      role: "Execution boundary and directional safety valve.",
      keyFunctions: [
        "Isolates external allocation exposure from core accounting layers.",
        "Captures a defined share of positive outcome flow.",
        "Releases value under doctrine thresholds and continuity checks."
      ]
    },
    {
      name: "Autonomous Allocation Agent",
      role: "Quantitative risk and allocation intelligence layer.",
      keyFunctions: [
        "Runs periodic policy cycles using market and protocol telemetry.",
        "Produces target allocation weights and risk posture outputs.",
        "Feeds continuity-aware constraints back into treasury execution."
      ]
    },
    {
      name: "Continuity Engine",
      role: "Survival governance and failure-response authority.",
      keyFunctions: [
        "Tracks stress signals and system health regimes.",
        "Triggers protective mode transitions during failure events.",
        "Coordinates evacuation, substitution, and staged recovery."
      ]
    }
  ] as WhitepaperSubsystem[],
  capitalFlow: [
    "Vault records and protects contributed capital state.",
    "Treasury forms deployable liquidity under policy and reserve constraints.",
    "Autonomous Allocation Agent computes risk-aware allocation targets.",
    "Escrow executes isolated market interactions and returns outcomes.",
    "Reserve absorbs stress and continuity doctrine enforces survival behavior.",
    "Settlement closes each cycle with deterministic accounting."
  ],
  invariants: [
    "Participant principal remains protected as a system constant.",
    "Reserve floors and insurance constraints are binding limits.",
    "Escrow disbursement is gated by doctrine thresholds and health state.",
    "Risky allocation authority is reduced when system health degrades.",
    "Sustained drawdown conditions force continuity-biased behavior.",
    "Settlement remains deterministic across normal and stressed regimes."
  ],
  threatMatrix: [
    {
      scenario: "Slow drawdown",
      response: "Reserve dampening with gradual de-risking."
    },
    {
      scenario: "Flash volatility spike",
      response: "Continuity mode with strict risk reduction."
    },
    {
      scenario: "Vault outflow surge",
      response: "Priority routing and tighter liquidity controls."
    },
    {
      scenario: "Reserve depletion pressure",
      response: "Automatic protective posture and allocation contraction."
    },
    {
      scenario: "Escrow imbalance",
      response: "Rebalance doctrine and delayed release conditions."
    },
    {
      scenario: "Allocation drift",
      response: "Deterministic corrective weighting by policy cycle."
    }
  ],
  links: [
    {
      title: "Executive Summary",
      href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper",
      summary: "Protocol intent, design posture, and high-level guarantees."
    },
    {
      title: "Sagitta Protocol",
      href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/readme",
      summary: "Identity, layered authority model, and survivability posture."
    },
    {
      title: "Scope & Non-Banking Clarification",
      href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/scope-and-non-banking-clarification",
      summary: "Protocol boundaries and legal posture framing."
    },
    {
      title: "Fiduciary Alignment",
      href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/fiduciary-alignment",
      summary: "How protection, accountability, and growth discipline are enforced."
    },
    {
      title: "Vault",
      href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/vault",
      summary: "Custody and accounting authority in the protocol stack."
    },
    {
      title: "Treasury",
      href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/treasury",
      summary: "Liquidity formation, settlement authority, and policy gates."
    },
    {
      title: "Reserve",
      href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/reserve",
      summary: "Insurance capital, stress absorption, and liquidity buffering."
    },
    {
      title: "Escrow",
      href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/escrow",
      summary: "Directional execution boundary and gated release logic."
    },
    {
      title: "Autonomous Allocation Agent",
      href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/autonomous-allocation-agent",
      summary: "Periodic quantitative policy loop for risk-aware allocations."
    },
    {
      title: "Continuity Engine",
      href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/continuity-engine",
      summary: "Failure doctrine, mode switching, and recovery orchestration."
    },
    {
      title: "System Invariants",
      href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/system-invariants",
      summary: "Core constraints that bind protocol behavior."
    },
    {
      title: "Failure / Threat Matrix",
      href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/failure-threat-matrix",
      summary: "Scenario-to-response map for operational stress events."
    },
    {
      title: "Capital Flow Diagram",
      href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/capital-flow-diagram",
      summary: "Lifecycle sequencing for capital movement and settlement."
    }
  ] as WhitepaperLink[]
} as const;

