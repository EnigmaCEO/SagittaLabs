export type ProductDefinition = {
  id: "aaa" | "continuity-engine";
  slug: string;
  aliases?: string[];
  name: string;
  shortDescription: string;
  longDescription: string;
  logoSrc: string;
  splashSrc: string;
  internalHref: string;
  externalHref?: string;
  highlights: string[];
};

export const productCatalog: ProductDefinition[] = [
  {
    id: "aaa",
    slug: "aaa",
    name: "Sagitta Autonomous Allocation Agent",
    shortDescription: "Quantitative intelligence layer for allocation policy and risk control.",
    longDescription:
      "The Autonomous Allocation Agent is the protocol's quantitative decision layer, generating risk-aware target allocations from market, reserve, and system-health telemetry.",
    logoSrc: "/AAA/logo.png",
    splashSrc: "/AAA/splash.png",
    internalHref: "/products/aaa",
    externalHref: "https://aaa.sagitta.systems/",
    highlights: [
      "Periodic policy cycle for deterministic allocation updates.",
      "Regime-aware risk posture using protocol and market telemetry.",
      "Continuity-first constraints that throttle risk under stress.",
      "Outputs consumable by Treasury and settlement workflows."
    ]
  },
  {
    id: "continuity-engine",
    slug: "continuity-engine",
    aliases: ["spc", "sce"],
    name: "Sagitta Continuity Engine",
    shortDescription: "Survival governance and substitution authority for failure conditions.",
    longDescription:
      "The Continuity Engine enforces survival doctrine during instability, coordinating protective mode transitions, emergency evacuation paths, and staged recovery across protocol subsystems.",
    logoSrc: "/SCE/logo.png",
    splashSrc: "/SCE/splash.png",
    internalHref: "/products/continuity-engine",
    highlights: [
      "Failure-scenario detection and continuity mode switching.",
      "Evacuation orchestration when risk exceeds protocol thresholds.",
      "Substitution and fallback sequencing across execution paths.",
      "Recovery-state coordination after stress event stabilization."
    ]
  }
];

const slugToProduct = new Map<string, ProductDefinition>();

for (const product of productCatalog) {
  slugToProduct.set(product.slug, product);
  for (const alias of product.aliases ?? []) {
    slugToProduct.set(alias, product);
  }
}

export function getProductBySlug(slug: string) {
  if (!slug) {
    return undefined;
  }
  return slugToProduct.get(slug.toLowerCase());
}

export const allProductRouteSlugs = productCatalog.map((product) => product.slug);
