import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { buildPageMetadata } from "@/lib/metadata";
import { productCatalog } from "@/lib/products";
import { whitepaper } from "@/lib/whitepaper";

export const metadata = buildPageMetadata({
  title: "Products",
  description:
    "Dedicated product pages for Sagitta Autonomous Allocation Agent and Sagitta Continuity Engine.",
  path: "/products"
});

export default function ProductsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Products"
        title="Sagitta product suite"
        description="Dedicated product sections and pages for the Autonomous Allocation Agent and Continuity Engine."
      />

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="nexus-section-head">
          <p className="nexus-label nexus-label-center">Product Profiles</p>
          <h2 className="nexus-section-title">Explore each product in detail</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {productCatalog.map((product) => (
            <GlowPanel key={product.id} className="overflow-hidden p-0">
              <div className="relative h-48">
                <Image
                  src={product.splashSrc}
                  alt={`${product.name} splash`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030813] via-[#030813]/45 to-transparent" />
                <div className="absolute left-4 top-4 rounded-xl bg-[#050b1f]/80 p-2 backdrop-blur">
                  <Image src={product.logoSrc} alt={`${product.name} logo`} width={124} height={40} className="h-8 w-auto" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm text-slate-300">{product.shortDescription}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={product.internalHref} className="nexus-button-primary px-4 py-2 text-sm">
                    View product page
                  </Link>
                  {product.externalHref ? (
                    <Link
                      href={product.externalHref}
                      target="_blank"
                      rel="noreferrer"
                      className="nexus-button-ghost px-4 py-2 text-sm"
                    >
                      Open production site
                    </Link>
                  ) : null}
                </div>
              </div>
            </GlowPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {productCatalog.map((product) => (
            <GlowPanel key={`${product.id}-highlights`}>
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">{product.name}</h3>
              <p className="mt-3 text-sm text-slate-300">{product.longDescription}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {product.highlights.map((item) => (
                  <li key={item} className="nexus-subitem px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </GlowPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <GlowPanel>
          <h2 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">
            Product-to-protocol mapping
          </h2>
          <p className="mt-3 text-slate-300">
            Both products inherit protocol constraints, reserve discipline, and continuity doctrine from the whitepaper
            architecture.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {whitepaper.subsystems.map((item) => (
              <div key={item.name} className="nexus-subitem p-4">
                <p className="font-[var(--font-display)] text-base font-semibold text-slate-100">{item.name}</p>
                <p className="mt-2 text-sm text-slate-300">{item.role}</p>
              </div>
            ))}
          </div>
        </GlowPanel>
      </section>

      <CtaBanner
        title="Need implementation guidance?"
        description="Review individual product pages and contact Sagitta Labs for deployment support."
        ctaLabel="Talk to Sagitta Labs"
        ctaHref="/contact"
      />
    </div>
  );
}

