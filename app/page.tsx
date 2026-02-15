import Link from "next/link";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { buildPageMetadata } from "@/lib/metadata";
import { whitepaper } from "@/lib/whitepaper";

export const metadata = buildPageMetadata({
  title: "Home",
  description: "Sagitta Labs - Autonomous Capital Systems",
  path: "/"
});

const projects = [
  {
    title: "Sagitta Protocol",
    role: "Autonomous continuity and capital doctrine for resilient infrastructure.",
    href: "/protocol"
  },
  {
    title: "Sagitta Autonomous Allocation Agent",
    role: "Autonomous allocation and risk policy engine.",
    href: "/products"
  },
  {
    title: "Sagitta Continuity Engine",
    role: "Survival governance and failure-response authority.",
    href: "/protocol"
  }
];

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="nexus-section-head">
          <p className="nexus-label nexus-label-center">
            Core Projects
          </p>
          <h2 className="nexus-section-title">
            Capital systems designed for continuity
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <GlowPanel key={project.title} className="h-full">
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{project.role}</p>
              <Link
                href={project.href}
                className="nexus-button-ghost mt-6 inline-flex px-4 py-2 text-sm"
              >
                Learn more
              </Link>
            </GlowPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        {/* Template mapping: staggered feature cards mirror the dense card block below hero in the reference homepage. */}
        <div className="grid gap-5 md:grid-cols-2">
          <GlowPanel className="md:row-span-2">
            <h3 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">
              Sagitta Protocol whitepaper doctrine
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              {whitepaper.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="nexus-button-primary inline-flex px-4 py-2 text-sm"
              >
                View whitepaper resources
              </Link>
              <Link
                href={whitepaper.url}
                target="_blank"
                rel="noreferrer"
                className="nexus-button-ghost inline-flex px-4 py-2 text-sm"
              >
                Open full GitBook
              </Link>
            </div>
          </GlowPanel>
          {whitepaper.principles.map((item) => (
            <GlowPanel key={item.title}>
              <p className="font-[var(--font-display)] text-base font-semibold text-slate-100">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </GlowPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="nexus-section-head">
          <p className="nexus-label nexus-label-center">
            Protocol Architecture
          </p>
          <h2 className="nexus-section-title">
            Full system stack from custody to continuity
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whitepaper.subsystems.map((item) => (
            <GlowPanel key={item.name}>
              <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{item.role}</p>
            </GlowPanel>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Build with Sagitta Labs"
        description="Partner on autonomous capital infrastructure aligned with whitepaper invariants, reserve discipline, and continuity doctrine."
        ctaLabel="Contact Us"
        ctaHref="/contact"
      />
    </div>
  );
}
