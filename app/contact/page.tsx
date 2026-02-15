import Link from "next/link";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Contact",
  description: "Contact Sagitta Labs for protocol, product, and research collaboration.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Contact Sagitta Labs"
        description="Use this if you operate capital systems where failure is unacceptable and need continuity-grade protocol infrastructure."
      />
      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <GlowPanel>
            <h2 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">General Email</h2>
            <p className="mt-2 text-sm text-slate-300">
              For partnerships, implementation questions, and technical inquiries.
            </p>
            <Link
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-4 inline-flex text-sm text-cyanflare underline-offset-4 hover:underline"
            >
              {siteConfig.contact.email}
            </Link>
          </GlowPanel>
          <GlowPanel>
            <h2 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">Press Email</h2>
            <p className="mt-2 text-sm text-slate-300">
              For media requests, interviews, and publication coordination.
            </p>
            <Link
              href={`mailto:${siteConfig.contact.pressEmail}`}
              className="mt-4 inline-flex text-sm text-cyanflare underline-offset-4 hover:underline"
            >
              {siteConfig.contact.pressEmail}
            </Link>
          </GlowPanel>
          <GlowPanel>
            <h2 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">Partnerships</h2>
            <p className="mt-2 text-sm text-slate-300">
              For institutional partnerships and protocol integration planning.
            </p>
            <Link
              href={`mailto:${siteConfig.contact.partnershipsEmail}`}
              className="mt-4 inline-flex text-sm text-cyanflare underline-offset-4 hover:underline"
            >
              {siteConfig.contact.partnershipsEmail}
            </Link>
          </GlowPanel>
          <GlowPanel>
            <h2 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">Research Collaboration</h2>
            <p className="mt-2 text-sm text-slate-300">
              For continuity modeling, simulations, and collaborative research workstreams.
            </p>
            <Link
              href={`mailto:${siteConfig.contact.researchEmail}`}
              className="mt-4 inline-flex text-sm text-cyanflare underline-offset-4 hover:underline"
            >
              {siteConfig.contact.researchEmail}
            </Link>
          </GlowPanel>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}
