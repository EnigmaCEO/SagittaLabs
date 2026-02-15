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
            <Link
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-2 inline-flex text-sm text-cyanflare underline-offset-4 hover:underline"
            >
              {siteConfig.contact.email}
            </Link>
          </GlowPanel>
          <GlowPanel>
            <h2 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">Press Email</h2>
            <Link
              href={`mailto:${siteConfig.contact.pressEmail}`}
              className="mt-2 inline-flex text-sm text-cyanflare underline-offset-4 hover:underline"
            >
              {siteConfig.contact.pressEmail}
            </Link>
          </GlowPanel>
        </div>
      </section>
      <ContactForm />
    </div>
  );
}
