import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { buildPageMetadata } from "@/lib/metadata";
import { allProductRouteSlugs, getProductBySlug } from "@/lib/products";
import { whitepaper } from "@/lib/whitepaper";

type ProductDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return allProductRouteSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return buildPageMetadata({
      title: "Product",
      description: "Sagitta Labs product details.",
      path: `/products/${params.slug}`
    });
  }

  return buildPageMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${product.slug}`
  });
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  if (params.slug !== product.slug) {
    redirect(product.internalHref);
  }

  return (
    <div>
      <PageHero eyebrow="Product" title={product.name} description={product.shortDescription} />

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <GlowPanel className="overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative min-h-[280px]">
              <Image
                src={product.splashSrc}
                alt={`${product.name} splash`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02060F] via-[#02060F]/35 to-transparent" />
            </div>
            <div className="p-6 sm:p-8">
              <Image src={product.logoSrc} alt={`${product.name} logo`} width={180} height={56} className="h-10 w-auto" />
              <p className="mt-5 text-sm text-slate-300">{product.longDescription}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="nexus-button-primary px-4 py-2 text-sm">
                  Contact product team
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
          </div>
        </GlowPanel>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <GlowPanel>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">Core capabilities</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {product.highlights.map((item) => (
                <li key={item} className="nexus-subitem px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </GlowPanel>
          <GlowPanel>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">
              Related protocol subsystems
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Product behavior remains constrained by protocol architecture and continuity doctrine.
            </p>
            <div className="mt-4 space-y-2">
              {whitepaper.subsystems.slice(0, 4).map((item) => (
                <div key={item.name} className="nexus-subitem px-4 py-3">
                  <p className="font-[var(--font-display)] text-sm font-semibold text-slate-100">{item.name}</p>
                  <p className="mt-1 text-xs text-slate-300">{item.role}</p>
                </div>
              ))}
            </div>
          </GlowPanel>
        </div>
      </section>

      <CtaBanner
        title={`Build with ${product.name}`}
        description="Get architecture and deployment support tailored to your infrastructure."
        ctaLabel="Talk to Sagitta Labs"
        ctaHref="/contact"
      />
    </div>
  );
}

