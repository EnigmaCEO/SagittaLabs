import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { ResourceCard } from "@/components/sections/ResourceCard";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { buildPageMetadata } from "@/lib/metadata";
import { whitepaper } from "@/lib/whitepaper";

export const metadata = buildPageMetadata({
  title: "Docs",
  description: "Sagitta whitepaper chapters, architecture references, and downloadable support documents.",
  path: "/docs"
});

const resources = [
  {
    title: "Sagitta Protocol Whitepaper (PDF)",
    description:
      "Local placeholder for a downloadable PDF export of the whitepaper.",
    href: "/downloads/sagitta-protocol-whitepaper.pdf"
  },
  {
    title: "Research Notes - Continuity Models",
    description:
      "Supplementary notes outlining scenario assumptions and resilience model placeholders.",
    href: "/downloads/sagitta-research-notes.txt"
  },
  {
    title: "Implementation Sketches",
    description:
      "Early-stage structure notes describing protocol-to-product integration patterns.",
    href: "/downloads/sagitta-implementation-sketches.txt"
  }
];

export default function DocsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Docs"
        title="Sagitta whitepaper and protocol references"
        description="Read each whitepaper chapter directly on this site, with canonical GitBook links for source reference."
      />

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <GlowPanel>
          <h2 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">
            Whitepaper chapters in-site
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Each chapter has a local page for fast browsing plus a direct GitBook source link.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {whitepaper.links.map((item) => (
              <div key={item.slug} className="nexus-subitem p-4">
                <p className="font-[var(--font-display)] text-base font-semibold text-slate-100">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-slate-300">{item.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href={`/docs/${item.slug}`} className="nexus-button-primary px-3 py-1.5 text-xs">
                    Read
                  </Link>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="nexus-button-ghost px-3 py-1.5 text-xs"
                  >
                    Open GitBook
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </GlowPanel>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="nexus-section-head mb-5">
          <p className="nexus-label nexus-label-center">
            Offline Assets
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} {...resource} />
          ))}
        </div>
      </section>
      <CtaBanner
        title="Need guided whitepaper walkthroughs?"
        description="Contact Sagitta Labs for implementation sessions covering subsystem architecture, invariants, and failure doctrine."
        ctaLabel="Request details"
        ctaHref="/contact"
      />
    </div>
  );
}
