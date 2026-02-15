import Link from "next/link";

type CtaBannerProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export function CtaBanner({ title, description, ctaLabel, ctaHref }: CtaBannerProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      {/* Template mapping: this wide gradient callout follows the same "Join community" banner style in the image. */}
      <div className="nexus-shell relative overflow-hidden px-6 py-12 sm:px-10">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#3651B5]/50 via-[#1A266A]/32 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 -top-14 h-56 w-56 rounded-full border border-white/25"
          aria-hidden
        />
        <h2 className="max-w-2xl font-[var(--font-display)] text-2xl font-semibold text-slate-50 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-xl text-slate-300">{description}</p>
        <Link
          href={ctaHref}
          className="nexus-button-primary mt-6 inline-flex px-5 py-2.5 text-sm"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
