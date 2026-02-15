type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 lg:px-8">
      {/* Template mapping: each interior page starts with the same centered heading block used across the template screens. */}
      <div className="nexus-shell relative overflow-hidden px-6 py-14 text-center sm:px-10">
        <div
          className="pointer-events-none absolute -left-20 -top-14 h-48 w-48 rounded-full bg-electric/25 blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 -bottom-16 h-60 w-60 rounded-full border border-white/20"
          aria-hidden
        />
        <p className="nexus-label">
          {eyebrow}
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl font-[var(--font-display)] text-3xl font-semibold text-slate-50 sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-300">{description}</p>
      </div>
    </section>
  );
}
