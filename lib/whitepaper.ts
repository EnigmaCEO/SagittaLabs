export type WhitepaperLink = {
  slug: string;
  title: string;
  href: string;
  summary: string;
};

export type WhitepaperChapterSection = {
  heading: string;
  content?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type WhitepaperChapter = WhitepaperLink & {
  introduction: string;
  illustration?: {
    src: string;
    alt: string;
    caption?: string;
  };
  sections: WhitepaperChapterSection[];
};

export type WhitepaperSubsystem = {
  name: string;
  role: string;
  keyFunctions: string[];
};

const whitepaperLinks: WhitepaperLink[] = [
  {
    slug: "executive-summary",
    title: "Executive Summary",
    href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper",
    summary: "Protocol intent, design posture, and high-level guarantees."
  },
  {
    slug: "sagitta-protocol",
    title: "Sagitta Protocol",
    href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/readme",
    summary: "Identity, layered authority model, and survivability posture."
  },
  {
    slug: "scope-non-banking-clarification",
    title: "Scope & Non-Banking Clarification",
    href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/scope-and-non-banking-clarification",
    summary: "Protocol boundaries and legal posture framing."
  },
  {
    slug: "fiduciary-alignment",
    title: "Fiduciary Alignment",
    href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/fiduciary-alignment",
    summary: "How protection, accountability, and growth discipline are enforced."
  },
  {
    slug: "vault",
    title: "Vault",
    href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/vault",
    summary: "Custody and accounting authority in the protocol stack."
  },
  {
    slug: "treasury",
    title: "Treasury",
    href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/treasury",
    summary: "Liquidity formation, settlement authority, and policy gates."
  },
  {
    slug: "reserve",
    title: "Reserve",
    href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/reserve",
    summary: "Insurance capital, stress absorption, and liquidity buffering."
  },
  {
    slug: "escrow",
    title: "Escrow",
    href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/escrow",
    summary: "Directional execution boundary and gated release logic."
  },
  {
    slug: "autonomous-allocation-agent",
    title: "Autonomous Allocation Agent",
    href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/autonomous-allocation-agent",
    summary: "Periodic quantitative policy loop for risk-aware allocations."
  },
  {
    slug: "continuity-engine",
    title: "Sagitta Continuity Engine",
    href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/continuity-engine",
    summary: "Failure doctrine, mode switching, and recovery orchestration."
  },
  {
    slug: "system-invariants",
    title: "System Invariants",
    href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/system-invariants",
    summary: "Core constraints that bind protocol behavior."
  },
  {
    slug: "failure-threat-matrix",
    title: "Failure / Threat Matrix",
    href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/failure-threat-matrix",
    summary: "Scenario-to-response map for operational stress events."
  },
  {
    slug: "capital-flow-diagram",
    title: "Capital Flow Diagram",
    href: "https://sagitta-protocol.gitbook.io/sagitta-whitepaper/capital-flow-diagram",
    summary: "Lifecycle sequencing for capital movement and settlement."
  }
];

const chapterDetails: Record<string, Omit<WhitepaperChapter, "slug" | "title" | "href" | "summary">> = {
  "executive-summary": {
    introduction:
      "Sagitta Protocol is an autonomous, fiduciary-grade investment engine that enforces trustless capital management through continuity governance and gold-backed insurance.",
    sections: [
      {
        heading: "Problem Context",
        paragraphs: [
          "Modern capital allocation systems expose participants to layered risks without enforcing commensurate protection. Yield optimization, leverage, discretionary governance, and dependency on external infrastructure frequently transfer downside to users while insulating decision-makers.",
          "Sagitta addresses this problem by treating capital protection, loss accountability, and survivability as first-class system requirements, not secondary features."
        ]
      },
      {
        heading: "Protocol Overview",
        content:
          "Sagitta is composed of distinct, cooperating subsystems, each operating under defined authority boundaries:",
        bullets: [
          "Vault - protocol-level custody and accounting for contributed capital.",
          "Treasury - monetary authority governing liquidity formation, allocation batches, and settlement.",
          "Reserve - capitalized, gold-backed insurance layer protecting participant principal.",
          "Autonomous Allocation Agent - quantitative intelligence providing risk-aware allocation recommendations.",
          "Escrow - isolated execution boundary interfacing with external allocation venues.",
          "Sagitta Continuity Engine - survival authority governing evacuation, substitution, and reconstitution under failure.",
          "No single subsystem is indispensable. Authority is layered to prevent risk concentration."
        ]
      },
      {
        heading: "Capital Protection and Fiduciary Discipline",
        paragraphs: [
          "Sagitta enforces fiduciary alignment structurally.",
          "Participant principal is protected through reserve-backed insurance and deterministic settlement. Allocation underperformance is absorbed at the protocol level through ordered loss handling rather than passed to participants. Growth is constrained by insured capacity, ensuring solvency precedes expansion.",
          "Fiduciary behavior is enforced by protocol law rather than operator intent."
        ]
      },
      {
        heading: "Survivability and Continuity",
        content:
          "Sagitta is designed to operate under adverse conditions, including:",
        bullets: [
          "Allocation losses.",
          "Stablecoin depegs.",
          "Reserve asset volatility.",
          "Governance compromise.",
          "Execution or counterparty failure.",
          "Blockchain-level disruption.",
          "The Sagitta Continuity Engine governs response through predefined doctrine, ensuring depositor protection and system solvency persist during evacuation, substitution, and recovery.",
          "Survival is treated as a deterministic system function."
        ]
      },
      {
        heading: "Role-Based and Chain-Agnostic Design",
        paragraphs: [
          "All critical dependencies within Sagitta are defined by role rather than fixed implementation. Currencies, tokens, execution venues, governance mechanisms, and blockchain environments are replaceable without redesigning the protocol.",
          "This role-based design enables adaptability across market, infrastructure, and regulatory conditions while preserving core guarantees."
        ]
      },
      {
        heading: "System Invariants",
        content:
          "Sagitta operates under immutable system invariants, including:",
        bullets: [
          "Preservation of participant principal.",
          "Insurance-constrained growth.",
          "Protocol-level loss accountability.",
          "Reserve supremacy over optimization.",
          "Deterministic settlement.",
          "Continuity governance under failure.",
          "These invariants constrain all protocol behavior, upgrades, and governance actions."
        ]
      },
      {
        heading: "Protocol Intent",
        content:
          "Sagitta does not pursue yield maximization, leverage amplification, or market reflexivity. The protocol prioritizes:",
        bullets: [
          "Capital preservation.",
          "Solvency enforcement.",
          "Disciplined allocation.",
          "Long-term continuity.",
          "Sagitta is built to function when conditions deteriorate, not only when they are favorable."
        ]
      },
      {
        heading: "Summary",
        paragraphs: [
          "Sagitta Protocol defines a new class of financial infrastructure: reserve-backed, autonomous, and continuity-governed capital allocation.",
          "Fiduciary discipline is enforced directly through system architecture, protocol law, and capital reserves, transforming capital management from a trust-based activity into a survivable, self-regulating system.",
          "The protocol exists to ensure that capital remains protected, accountable, and continuous across all states of operation."
        ]
      },
      {
        heading: "Credits",
        bullets: [
          "Author: Alexander Demetrius Roth.",
          "Contributors: Orion Gray."
        ]
      }
    ]
  },
  "sagitta-protocol": {
    introduction:
      "Sagitta is a gold-backed, insurance-first capital allocation protocol designed to preserve depositor principal, discipline risk-taking, and maintain continuity under adverse conditions.",
    illustration: {
      src: "https://3138571314-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F16kpZzgBZ9QVWJAg9B7D%2Fuploads%2Fgit-blob-f2661c6d3a42c1fd9d99e86b2aa11405ece22531%2Fimage%20(1).png?alt=media",
      alt: "Sagitta Protocol diagram from the official whitepaper"
    },
    sections: [
      {
        heading: "1. Protocol Identity",
        paragraphs: [
          "The protocol coordinates custody, allocation, execution, insurance, intelligence, and survival through a layered system of authorities.",
          "Each authority operates within defined bounds, and no single component is indispensable to system survival.",
          "Sagitta is constructed as financial infrastructure, not a product."
        ]
      },
      {
        heading: "2. Problem Domain",
        paragraphs: [
          "Modern capital allocation systems expose participants to layered risks without enforcing commensurate protection. Yield optimization, leverage, governance discretion, and dependency fragility frequently transfer downside to users while insulating decision-makers.",
          "Sagitta addresses this problem class by restructuring capital flow around three core principles:"
        ],
        bullets: [
          "Insurance precedes optimization.",
          "Loss accountability resides at the protocol level.",
          "Survivability is designed, not assumed.",
          "These principles define Sagitta's role as a fiduciary-aligned system rather than a speculative mechanism."
        ]
      },
      {
        heading: "3. System Guarantees",
        content: "Sagitta enforces the following guarantees as protocol invariants:",
        bullets: [
          "Depositor principal protection through capitalized insurance.",
          "Reserve-constrained growth proportional to insured capacity.",
          "Explicit loss absorption and accountability.",
          "Deterministic settlement across allocation outcomes.",
          "Continuity under component, asset, or governance failure.",
          "These guarantees are enforced structurally through capital backing, rule-based settlement, and predefined authority boundaries."
        ]
      },
      {
        heading: "4. Layered Authority Model",
        content:
          "Sagitta operates through a layered authority architecture that separates concerns and prevents risk concentration.",
        bullets: [
          "Custody and accounting are isolated from allocation decisions.",
          "Allocation intelligence is isolated from capital movement.",
          "Execution is isolated from policy formation.",
          "Insurance is isolated from yield generation.",
          "Continuity overrides all subsystems during failure conditions.",
          "This separation ensures that no single layer can unilaterally expose depositors to risk."
        ]
      },
      {
        heading: "5. Capital Flow Overview",
        content: "Capital within Sagitta follows a deterministic lifecycle:",
        bullets: [
          "Deposits are recorded and protected through the Vault.",
          "Allocation liquidity is formed and governed by the Treasury.",
          "Allocation intelligence evaluates risk and opportunity.",
          "Execution is carried out through isolated Escrow contexts.",
          "Outcomes are settled and reconciled deterministically.",
          "Losses are absorbed and insurance enforced by the Reserve.",
          "Continuity actions govern evacuation, substitution, and recovery.",
          "Each stage operates under defined authority and bounded responsibility."
        ]
      },
      {
        heading: "6. Role-Based Design Doctrine",
        content:
          "Sagitta treats all critical dependencies as roles, not fixed implementations.",
        bullets: [
          "Stability Unit.",
          "Treasury Token.",
          "Reserve Asset.",
          "Allocation Intelligence.",
          "Execution Venue.",
          "Governance Authority.",
          "Each role has defined responsibilities, acceptable substitutions, and migration procedures. This design enables replacement without systemic redesign and ensures adaptability under stress."
        ]
      },
      {
        heading: "7. Fiduciary Alignment by Architecture",
        paragraphs: [
          "Sagitta aligns with fiduciary principles through system design rather than discretionary promise.",
          "Principal protection, loss absorption, reserve-relative performance evaluation, and constrained growth are enforced mechanically. Risk-taking is justified only when it outperforms protection, and underperformance results in protocol-level consequence.",
          "Fiduciary behavior emerges from structure and persists across market cycles."
        ]
      },
      {
        heading: "8. Survivability and Continuity",
        content: "Sagitta is designed to survive:",
        bullets: [
          "Asset impairment and currency depegs.",
          "Token market disruption.",
          "Governance compromise.",
          "Execution and counterparty failure.",
          "Infrastructure and oracle disruption.",
          "The Sagitta Continuity Engine governs evacuation, substitution, degradation, and reconstitution through predefined doctrine. Continuity actions preserve depositor protection and system solvency while restoring operational capacity.",
          "Survival is treated as a first-class system function."
        ]
      },
      {
        heading: "9. Modular and Standalone Architecture",
        content: "Each Sagitta subsystem is independently deployable and licensable:",
        bullets: [
          "Vault as a custody and accounting layer.",
          "Treasury as a monetary and allocation authority.",
          "Reserve as a decentralized insurance system.",
          "Autonomous Allocation Agent as a quantitative intelligence layer.",
          "Escrow as an execution and compliance boundary.",
          "Sagitta Continuity Engine as a survival and substitution framework.",
          "Together, these systems form a coherent protocol. Individually, they operate as infrastructure components suitable for external integration."
        ]
      },
      {
        heading: "10. Protocol Posture",
        content:
          "Sagitta does not pursue yield maximization, leverage amplification, or dependency concentration. The protocol prioritizes:",
        bullets: [
          "Capital preservation.",
          "Solvency enforcement.",
          "Disciplined allocation.",
          "Structural accountability.",
          "Long-term continuity.",
          "Growth is earned through retained performance and reinforced insurance capacity."
        ]
      },
      {
        heading: "11. Summary",
        paragraphs: [
          "Sagitta is a capital allocation protocol designed to endure.",
          "It insures deposits, disciplines risk, penalizes underperformance, and survives component failure through layered authority and reserve-backed guarantees.",
          "Sagitta does not assume favorable conditions. It is built to operate when conditions deteriorate.",
          "The protocol exists to ensure that capital remains protected, accountable, and continuous across all states of the system."
        ]
      },
      {
        heading: "Source",
        bullets: [
          "Synced from the official GitBook chapter: https://sagitta-protocol.gitbook.io/sagitta-whitepaper/readme"
        ]
      }
    ]
  },
  "scope-non-banking-clarification": {
    introduction:
      "Sagitta operates as protocol infrastructure for autonomous capital continuity and not as a bank, lender, or discretionary balance-sheet manager.",
    sections: [
      {
        heading: "1. Protocol Scope and Domain",
        paragraphs: [
          "Sagitta is a survivability-first capital allocation protocol for deterministic custody, reserve insurance, settlement discipline, and continuity governance.",
          "The system is framed as a role-governed infrastructure stack where each authority is constrained by protocol law."
        ]
      },
      {
        heading: "2. Non-Banking Classification",
        content: "Sagitta does not perform core banking functions:",
        bullets: [
          "No discretionary deposit intermediation.",
          "No leverage or maturity transformation mandate.",
          "No discretionary yield promises or ad hoc risk transfer to participants.",
          "No governance-defined balance-sheet speculation."
        ]
      },
      {
        heading: "3. Fiduciary Mechanism vs Banking Function",
        paragraphs: [
          "Depositor alignment is implemented through deterministic settlement ordering, reserve-backed protection, and continuity enforcement.",
          "The protocol behaves as a fiduciary-grade system by architecture rather than discretionary operator intent."
        ]
      },
      {
        heading: "4. Capitalized Insurance as Internal Reserve Function",
        paragraphs: [
          "Insurance in Sagitta refers to protocol-native reserve capital that absorbs losses and protects principal.",
          "This mechanism is internal to the protocol and should not be interpreted as an external insurance policy wrapper."
        ]
      },
      {
        heading: "5. Authority Boundaries",
        content: "Scope is enforced through explicit subsystem boundaries:",
        bullets: [
          "Vault governs custody and accounting truth.",
          "Treasury governs liquidity and settlement authority.",
          "Reserve governs capital protection and shock absorption.",
          "Autonomous Allocation Agent governs bounded risk intelligence.",
          "Escrow governs isolated execution.",
          "Sagitta Continuity Engine governs evacuation, substitution, and recovery."
        ]
      },
      {
        heading: "6. Role-Based Dependency Framework",
        paragraphs: [
          "Critical dependencies are defined as replaceable roles rather than fixed institutions, assets, or chains.",
          "This enables migration under stress without redesigning protocol doctrine."
        ]
      },
      {
        heading: "7. Integrator Implications",
        paragraphs: [
          "Institutions, sovereign systems, and infrastructure operators can integrate Sagitta as protocol infrastructure without converting it into a banking product.",
          "External integrations inherit deterministic constraints rather than discretionary custody behavior."
        ]
      },
      {
        heading: "8. Summary",
        paragraphs: [
          "Sagitta is a continuity-governed protocol stack, not a bank.",
          "Capital protection, accountability, and survivability are enforced through invariant architecture and bounded authorities."
        ]
      }
    ]
  },
  "fiduciary-alignment": {
    introduction:
      "Fiduciary alignment in Sagitta is structural and enforced by protocol law, reserve mechanics, and deterministic settlement discipline.",
    sections: [
      {
        heading: "1. Fiduciary Objective and Problem Class",
        paragraphs: [
          "Conventional capital systems often optimize yield while socializing risk. Sagitta inverts this model by enforcing depositor protection before optimization.",
          "The protocol treats principal safety, solvency, and continuity as first-order constraints."
        ]
      },
      {
        heading: "2. Structural Fiduciary Model",
        content: "Fiduciary behavior is enforced through bounded authorities and deterministic ordering:",
        bullets: [
          "Vault protects accounting and contribution state.",
          "Treasury governs liquidity and settlement by rule.",
          "Reserve absorbs loss before principal impairment.",
          "Escrow isolates external execution risk.",
          "Continuity doctrine overrides optimization under stress."
        ]
      },
      {
        heading: "3. Principal Protection as First-Order Constraint",
        paragraphs: [
          "Participant principal is protected through reserve-backed coverage and strict settlement hierarchy.",
          "Allocation expansion is limited by insured capacity instead of discretionary growth targets."
        ]
      },
      {
        heading: "4. Protocol-Level Loss Accountability",
        paragraphs: [
          "Adverse outcomes are absorbed and reconciled at the protocol level under explicit loss ordering.",
          "Downside is handled by architecture rather than passed directly to participants by discretionary decision."
        ]
      },
      {
        heading: "5. Reserve-Relative Performance Doctrine",
        paragraphs: [
          "Performance is evaluated relative to reserve health, coverage sufficiency, and continuity posture.",
          "Returns that weaken protection posture are treated as protocol deterioration rather than success."
        ]
      },
      {
        heading: "6. Insurance-Constrained Growth",
        paragraphs: [
          "Growth is allowed only when reserve capacity and systemic health support expansion.",
          "This creates solvency-first scaling and limits fragility during stress cycles."
        ]
      },
      {
        heading: "7. Governance as Continuity Duty",
        paragraphs: [
          "Governance authority is bounded by invariant doctrine and cannot override depositor protection constraints.",
          "Under failure conditions, continuity rules supersede growth preferences."
        ]
      },
      {
        heading: "8. System-Level Fiduciary Behavior",
        paragraphs: [
          "Fiduciary alignment emerges from architecture and persists across market cycles because protection rules are encoded into the protocol stack.",
          "The model is designed to remain protective when conditions deteriorate, not only when conditions are favorable."
        ]
      },
      {
        heading: "9. Summary",
        paragraphs: [
          "Sagitta's fiduciary posture is mechanical, not rhetorical.",
          "Protection, accountability, and continuity are enforced by structure, making fiduciary behavior durable and auditable."
        ]
      }
    ]
  },
  vault: {
    introduction:
      "Vault is the custody and accounting authority of Sagitta, preserving depositor principal state and protocol truth across all operating modes.",
    sections: [
      {
        heading: "1. Mandate",
        paragraphs: [
          "Vault provides deterministic capital recording, principal protection boundaries, and accounting continuity for the protocol.",
          "It is designed as fiduciary infrastructure rather than a discretionary wallet function."
        ]
      },
      {
        heading: "2. Position in the Architecture",
        content: "Vault anchors Sagitta's layered authority model by separating custody truth from execution and strategy layers.",
        bullets: [
          "Custody and accounting stay isolated from allocation policy decisions.",
          "Protocol settlement references vault records as canonical truth.",
          "Continuity actions cannot bypass principal accounting integrity."
        ]
      },
      {
        heading: "3. Core Functions",
        bullets: [
          "Deposit recording and ownership state tracking.",
          "Principal protection boundary enforcement.",
          "Deterministic reconciliation inputs for treasury settlement.",
          "Compatibility with continuity-mode migration and recovery."
        ]
      },
      {
        heading: "4. Enforced Invariants",
        bullets: [
          "Depositor principal cannot be silently diluted by external execution outcomes.",
          "Accounting truth remains deterministic under stress.",
          "Reserve-aware settlement ordering must be preserved.",
          "Authority boundaries prevent discretionary custody leakage."
        ]
      },
      {
        heading: "5. DAO-Configurable Role Instances",
        content: "Vault supports role-based configuration without changing doctrine:",
        bullets: [
          "Stability Unit role instance.",
          "Treasury Token role instance.",
          "Reserve Asset role instance.",
          "Settlement environment and chain role instance."
        ]
      },
      {
        heading: "6. Unit-Agnostic Accounting Doctrine",
        paragraphs: [
          "Vault accounting is role-defined and does not rely on a single hardcoded currency or chain implementation.",
          "This enables controlled substitution while preserving settlement and protection guarantees."
        ]
      },
      {
        heading: "7. Receipt and Settlement Integrity",
        paragraphs: [
          "Vault records depositor claims and supports deterministic closeout through ordered settlement flows.",
          "Accounting precedence is maintained even when liquidity posture contracts."
        ]
      },
      {
        heading: "8. Governance and Continuity Boundaries",
        bullets: [
          "Governance can tune parameters but cannot invalidate custody invariants.",
          "Continuity mode can alter routing and timing, not accounting truth.",
          "Vault remains canonical across evacuation and reconstitution states."
        ]
      },
      {
        heading: "9. Summary",
        paragraphs: [
          "Vault is the principal-protection and accounting anchor of Sagitta.",
          "Its deterministic role ensures capital truth survives market stress, subsystem failure, and operational migration."
        ]
      }
    ]
  },
  treasury: {
    introduction:
      "Treasury is Sagitta's monetary authority for liquidity formation, allocation batching, settlement routing, and reserve-aware growth control.",
    sections: [
      {
        heading: "1. Mandate",
        paragraphs: [
          "Treasury controls deployable liquidity under doctrine constraints and converts protocol inflows into bounded allocation capacity.",
          "It enforces reserve-aware monetary discipline and deterministic settlement ordering."
        ]
      },
      {
        heading: "2. Role in the Protocol Stack",
        bullets: [
          "Bridges custody state and execution pathways.",
          "Coordinates batch allocation cycles with policy guardrails.",
          "Reconciles outcomes into reserve and vault settlement flows."
        ]
      },
      {
        heading: "3. Role-Token Doctrine",
        content: "Treasury operates on role abstractions instead of fixed assets:",
        bullets: [
          "Treasury Token role.",
          "Stability Unit role.",
          "Reserve Asset role.",
          "Execution liquidity and settlement role mappings."
        ]
      },
      {
        heading: "4. Batch-Based Liquidity Formation",
        bullets: [
          "Forms allocation batches under risk and reserve constraints.",
          "Routes deployable liquidity to isolated escrow execution contexts.",
          "Limits growth when reserve coverage falls below doctrine thresholds."
        ]
      },
      {
        heading: "5. Settlement, Buyback, and Reserve Replenishment",
        paragraphs: [
          "Treasury governs deterministic settlement across positive and adverse outcomes.",
          "Outcome routing can include buyback, reserve replenishment, and depositor reconciliation in predefined order."
        ]
      },
      {
        heading: "6. Reserve-Ratio Enforcement",
        bullets: [
          "Risk posture scales with insured capacity.",
          "Treasury contracts exposure when reserve pressure rises.",
          "Monetary policy cannot override principal-protection constraints."
        ]
      },
      {
        heading: "7. Stress Behavior and Continuity Mode",
        paragraphs: [
          "Under stress, treasury shifts to protective posture with tighter release controls and reduced allocation authority.",
          "Continuity doctrine governs transition sequencing for stabilization and recovery."
        ]
      },
      {
        heading: "8. Token Lifecycle Phases",
        bullets: [
          "Formation and reserve-aware issuance logic.",
          "Allocation deployment and reconciliation cycles.",
          "Protective contraction and recovery expansion states."
        ]
      },
      {
        heading: "9. Summary",
        paragraphs: [
          "Treasury is the protocol's monetary and settlement control plane.",
          "It enables growth only when protection and solvency doctrine remain intact."
        ]
      }
    ]
  },
  reserve: {
    introduction:
      "Reserve is Sagitta's capitalized insurance layer that protects depositor principal and absorbs shocks before losses propagate through the system.",
    sections: [
      {
        heading: "1. Mandate",
        paragraphs: [
          "Reserve provides protocol-native insurance coverage and solvency buffering across market and execution stress conditions.",
          "Its role is protective first and growth-enabling only when coverage health supports expansion."
        ]
      },
      {
        heading: "2. Coverage Scope",
        bullets: [
          "Allocation underperformance and realized loss buffering.",
          "Liquidity and settlement stress absorption.",
          "Protection continuity during governance or infrastructure disruption."
        ]
      },
      {
        heading: "3. Composition and Capital Sources",
        content: "Reserve capital can be composed from doctrine-approved role assets and replenishment pathways:",
        bullets: [
          "Retained protocol performance flows.",
          "Designated reserve contributions.",
          "Recovery and replenishment routing from settlement outcomes."
        ]
      },
      {
        heading: "4. Reserve Ratio Doctrine",
        bullets: [
          "Coverage ratio thresholds gate allocation growth.",
          "Reserve health determines permissible risk posture.",
          "Reserve supremacy over optimization remains binding."
        ]
      },
      {
        heading: "5. Loss Absorption Ordering",
        paragraphs: [
          "Loss handling follows deterministic ordering so reserve capital absorbs protocol-level downside before depositor principal impairment.",
          "This is an explicit accountability path, not discretionary intervention."
        ]
      },
      {
        heading: "6. Replenishment and Recovery",
        bullets: [
          "Outcome-driven replenishment loops restore coverage over time.",
          "Protective posture remains active until recovery thresholds are met.",
          "Growth permissions reactivate only after solvency health is restored."
        ]
      },
      {
        heading: "7. Continuity Integration",
        paragraphs: [
          "Reserve behavior is coordinated with Sagitta Continuity Engine for evacuation, substitution, and staged reconstitution.",
          "Emergency states prioritize preservation and deterministic settlement integrity."
        ]
      },
      {
        heading: "8. Summary",
        paragraphs: [
          "Reserve is Sagitta's insurance constitution in capital form.",
          "It enforces solvency-first doctrine and keeps depositor protection ahead of optimization."
        ]
      }
    ]
  },
  escrow: {
    introduction:
      "Escrow is the isolated execution boundary that contains external market exposure and preserves clean separation from custody and core accounting.",
    sections: [
      {
        heading: "1. Mandate",
        paragraphs: [
          "Escrow executes bounded external allocations while preserving deterministic internal accounting and insurance hierarchy.",
          "Its design objective is containment, auditability, and reversible operational control under stress."
        ]
      },
      {
        heading: "2. Capital Isolation Doctrine",
        bullets: [
          "Execution capital is segmented from custody truth.",
          "Exposure boundaries are explicit and measurable.",
          "Failure containment prevents direct contamination of vault accounting state."
        ]
      },
      {
        heading: "3. Execution Scope and Limits",
        content: "Escrow supports controlled interaction with external venues under policy constraints:",
        bullets: [
          "Directionally bounded deployment from treasury-approved batches.",
          "Pre-trade and post-trade policy checks.",
          "Protocol-defined release and return paths."
        ]
      },
      {
        heading: "4. Settlement and Reporting",
        bullets: [
          "Returns execution outcomes into deterministic treasury reconciliation.",
          "Supports explicit accountability for wins, losses, and slippage states.",
          "Maintains auditable trails for doctrine enforcement."
        ]
      },
      {
        heading: "5. Failure Containment",
        paragraphs: [
          "Escrow failure or venue disruption triggers containment responses that isolate affected pathways while preserving protocol solvency controls.",
          "Continuity doctrine can suspend or reroute execution without breaking settlement integrity."
        ]
      },
      {
        heading: "6. Continuity Integration",
        bullets: [
          "Evacuation routing under severe stress.",
          "Substitution across venue or chain roles.",
          "Reconstitution sequence for controlled return to normal operation."
        ]
      },
      {
        heading: "7. Summary",
        paragraphs: [
          "Escrow is the protocol's execution firewall.",
          "It enables external allocation while preserving internal protection, accountability, and continuity doctrine."
        ]
      }
    ]
  },
  "autonomous-allocation-agent": {
    introduction:
      "The Autonomous Allocation Agent (AAA) is Sagitta's quantitative intelligence authority for risk-aware allocation policy under invariant and reserve constraints.",
    sections: [
      {
        heading: "1. Mandate",
        paragraphs: [
          "AAA evaluates risk, solvency posture, and opportunity context to produce bounded allocation targets.",
          "Its role is advisory-authoritative within doctrine limits, not discretionary override."
        ]
      },
      {
        heading: "2. Scope of Analysis",
        bullets: [
          "Market volatility and drawdown conditions.",
          "Reserve health and coverage metrics.",
          "Liquidity stress and execution quality signals.",
          "Continuity-state constraints and subsystem readiness."
        ]
      },
      {
        heading: "3. Quantitative Foundation",
        paragraphs: [
          "AAA runs periodic policy cycles with deterministic inputs, weighting logic, and bounded outputs.",
          "Models are constrained by protocol law so optimization cannot violate protection invariants."
        ]
      },
      {
        heading: "4. Policy Guardrails",
        bullets: [
          "Insurance-first exposure ceilings.",
          "Reserve-relative risk contraction triggers.",
          "Escrow-bound execution constraints.",
          "Continuity-mode override compatibility."
        ]
      },
      {
        heading: "5. Strategy Framework",
        bullets: [
          "Target allocation weighting by regime state.",
          "Adaptive posture shifts under stress.",
          "Deterministic corrective rebalance outputs."
        ]
      },
      {
        heading: "6. Reserve-Relative Intelligence",
        paragraphs: [
          "AAA performance evaluation is tied to reserve preservation and continuity health, not raw yield maximization.",
          "Risk-taking authority expands only with robust insurance coverage."
        ]
      },
      {
        heading: "7. Learning and Adaptation",
        paragraphs: [
          "AAA can adapt parameterization and response cadence across observed regime changes while remaining inside doctrinal boundaries.",
          "Adaptive behavior is constrained and auditable."
        ]
      },
      {
        heading: "8. Explainability and Auditability",
        bullets: [
          "Signal lineage is traceable.",
          "Decision rationale is reproducible from policy state.",
          "Allocation outputs can be verified against invariants."
        ]
      },
      {
        heading: "9. Continuity Behavior",
        paragraphs: [
          "In degraded states AAA shifts to defensive posture and reduced authority.",
          "Continuity engine directives can override expansionary signals."
        ]
      },
      {
        heading: "10. Output Interface",
        bullets: [
          "Bounded target weights for treasury execution planning.",
          "Risk posture scores and constraint envelopes.",
          "State signals for continuity and governance observability."
        ]
      },
      {
        heading: "11. Summary",
        paragraphs: [
          "AAA is a constrained quantitative policy engine, not a discretionary hedge-fund layer.",
          "It improves allocation discipline while preserving Sagitta's insurance-first fiduciary posture."
        ]
      }
    ]
  },
  "continuity-engine": {
    introduction:
      "Sagitta Continuity Engine is the survival authority governing evacuation, substitution, degradation control, and reconstitution under protocol stress or failure.",
    sections: [
      {
        heading: "1. Mandate",
        paragraphs: [
          "The continuity mandate is to preserve depositor protection, solvency discipline, and deterministic settlement across adverse conditions.",
          "Survival is treated as a first-class system function."
        ]
      },
      {
        heading: "2. Continuity Philosophy",
        paragraphs: [
          "Sagitta assumes component failure is possible and designs doctrine for controlled degradation instead of catastrophic breakage.",
          "Continuity decisions follow predefined sequencing, not emergency improvisation."
        ]
      },
      {
        heading: "3. Role Substitution Architecture",
        bullets: [
          "Critical dependencies are abstracted as roles with replacement procedures.",
          "Failure in one implementation can trigger substitution without systemic redesign.",
          "Authority boundaries remain intact during substitution."
        ]
      },
      {
        heading: "4. Chain and Infrastructure Agnosticism",
        paragraphs: [
          "Continuity doctrine supports migration across chains, assets, venues, and governance pathways when needed.",
          "Replaceability is constrained by invariant compliance and settlement integrity."
        ]
      },
      {
        heading: "5. Failure Classification and Triggers",
        bullets: [
          "Market and reserve stress thresholds.",
          "Execution/counterparty breakdown signals.",
          "Governance compromise indicators.",
          "Infrastructure and oracle disruption alerts."
        ]
      },
      {
        heading: "6. Continuity States",
        bullets: [
          "Normal operation.",
          "Protective contraction.",
          "Evacuation and substitution mode.",
          "Stabilization and staged reconstitution."
        ]
      },
      {
        heading: "7. Evacuation Doctrine",
        paragraphs: [
          "Evacuation routes capital and authority flows away from compromised components while protecting accounting truth.",
          "Emergency routing preserves reserve supremacy and settlement determinism."
        ]
      },
      {
        heading: "8. Substitution and Migration",
        bullets: [
          "Asset role substitution under impairment.",
          "Venue migration under execution failure.",
          "Chain and service substitution under infrastructure disruption."
        ]
      },
      {
        heading: "9. Degradation and Reconstitution",
        paragraphs: [
          "Continuity may intentionally reduce throughput and risk capacity to preserve solvency.",
          "Restoration occurs in stages once explicit recovery thresholds are met."
        ]
      },
      {
        heading: "10. Governance and Doctrine Integrity",
        bullets: [
          "Governance cannot bypass continuity invariants.",
          "Mode transitions are auditable and rule-bound.",
          "Recovery expansion remains subordinate to protection constraints."
        ]
      },
      {
        heading: "11. Summary",
        paragraphs: [
          "Sagitta Continuity Engine is the protocol survival framework.",
          "It ensures the system can absorb failure, preserve protection, and recover without abandoning fiduciary doctrine."
        ]
      }
    ]
  },
  "system-invariants": {
    introduction:
      "System invariants are immutable protocol laws that constrain all behavior, upgrades, and governance actions across Sagitta.",
    sections: [
      {
        heading: "1. Invariant Doctrine",
        paragraphs: [
          "Invariants define what Sagitta must preserve regardless of market conditions, subsystem changes, or governance preferences.",
          "They convert fiduciary principles into enforceable architectural constraints."
        ]
      },
      {
        heading: "2. Core Invariants",
        content: "The protocol enforces the following non-negotiable invariants:",
        bullets: [
          "Depositor principal protection is mandatory.",
          "Insurance-constrained growth is binding.",
          "Protocol-level loss accountability is enforced.",
          "Reserve supremacy over optimization is preserved.",
          "Deterministic settlement is required.",
          "Continuity governance under failure is mandatory.",
          "Role integrity and authority separation must hold.",
          "Execution isolation and bounded exposure are preserved.",
          "Replaceability of critical dependencies is maintained.",
          "Settlement order and accounting truth remain deterministic.",
          "Governance cannot disable protection invariants.",
          "System continuity takes precedence under stress states."
        ]
      },
      {
        heading: "3. Enforcement Logic",
        paragraphs: [
          "Invariants are enforced through subsystem constraints, reserve thresholds, settlement ordering, and continuity-mode transitions.",
          "Any policy path that violates invariants is invalid even if it increases short-term return."
        ]
      },
      {
        heading: "4. Upgrade and Governance Boundaries",
        paragraphs: [
          "Protocol upgrades are valid only when invariants remain intact.",
          "Governance can evolve parameters and implementations, but cannot remove protection, accountability, or continuity laws."
        ]
      },
      {
        heading: "5. Summary",
        paragraphs: [
          "Sagitta invariants are the constitutional layer of the protocol.",
          "They ensure the system remains protective, accountable, and survivable across all operational states."
        ]
      }
    ]
  },
  "failure-threat-matrix": {
    introduction:
      "The Failure and Threat Matrix defines deterministic response doctrine so stress events trigger architecture, not improvisation.",
    sections: [
      {
        heading: "1. Purpose and Scope",
        paragraphs: [
          "The matrix catalogs critical threat classes, impact domains, detection signals, and layered response paths across Sagitta subsystems.",
          "Its role is to preserve solvency and depositor protection during disruption."
        ]
      },
      {
        heading: "2. Matrix Entry Model",
        content: "Each threat entry maps a full response chain:",
        bullets: [
          "Threat Vector.",
          "Impact Domain.",
          "Detection Signals.",
          "Primary Response.",
          "Secondary Response.",
          "Fallback Response.",
          "Recovery Requirements."
        ]
      },
      {
        heading: "3. Threat Classes",
        content: "The whitepaper includes doctrine for classes such as:",
        bullets: [
          "Allocation underperformance.",
          "Reserve depletion pressure.",
          "Stablecoin or settlement asset impairment.",
          "Execution and counterparty failure.",
          "Governance compromise or malicious control attempts.",
          "Liquidity mismatch and withdrawal stress.",
          "Oracle or telemetry corruption.",
          "Infrastructure-level outages and chain disruption."
        ]
      },
      {
        heading: "4. Response Doctrine",
        paragraphs: [
          "Response sequencing is layered: containment first, then stabilization, then controlled restoration.",
          "The protocol narrows risk authority during uncertainty and expands only after recovery conditions are satisfied."
        ]
      },
      {
        heading: "5. Continuity Integration",
        paragraphs: [
          "The Sagitta Continuity Engine orchestrates evacuation, substitution, and reconstitution across matrix-defined failure states.",
          "Threat handling remains deterministic and role-bound even under severe degradation."
        ]
      },
      {
        heading: "6. Summary",
        paragraphs: [
          "The matrix operationalizes survivability doctrine across systemic risk conditions.",
          "It ensures protection and accountability persist when dependencies fail."
        ]
      }
    ]
  },
  "capital-flow-diagram": {
    introduction:
      "The capital flow diagram is the operational map for how Sagitta capital moves, where authority changes hands, and how protection is enforced.",
    sections: [
      {
        heading: "1. Purpose and Interpretation",
        paragraphs: [
          "The diagram is a doctrinal model, not a UI flow. It encodes custody, execution, insurance, and continuity relationships in one deterministic sequence.",
          "Each arrow represents bounded authority transfer and settlement responsibility."
        ]
      },
      {
        heading: "2. Core Flow Sequence",
        content: "Primary capital path:",
        bullets: [
          "Depositors -> Vault (capital origin and principal recording).",
          "Vault -> Treasury (liquidity formation and allocation control).",
          "Treasury -> Escrow (isolated execution boundary).",
          "Escrow -> External Allocation Venues (risk-bearing environment).",
          "External Venues -> Treasury (settlement and distribution logic).",
          "Treasury -> Vault (depositor settlement and accounting closure)."
        ]
      },
      {
        heading: "3. Supporting and Protective Flows",
        content: "Parallel safeguards shown in the diagram include:",
        bullets: [
          "Reserve insurance routes that absorb losses before depositor impact.",
          "Autonomous Allocation Agent signals feeding treasury policy cycles.",
          "Continuity-engine evacuation and substitution paths under stress."
        ]
      },
      {
        heading: "4. Diagram Semantics",
        bullets: [
          "Solid green arrows denote nominal operating flow.",
          "Dashed red/yellow lines denote emergency and substitution pathways.",
          "Subsystem grouping emphasizes layered, non-monolithic authority."
        ]
      },
      {
        heading: "5. Summary",
        paragraphs: [
          "The diagram demonstrates that Sagitta is a coordinated authority stack with deterministic protection logic.",
          "Capital flow is structured to preserve principal, enforce accountability, and maintain continuity during failure."
        ]
      }
    ]
  }
};

const whitepaperChapters: WhitepaperChapter[] = whitepaperLinks.map((link) => ({
  ...link,
  ...chapterDetails[link.slug]
}));

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
  links: whitepaperLinks,
  chapters: whitepaperChapters
} as const;

export const allWhitepaperChapterSlugs = whitepaperChapters.map((chapter) => chapter.slug);

export function getWhitepaperChapterBySlug(slug: string) {
  return whitepaperChapters.find((chapter) => chapter.slug === slug);
}
