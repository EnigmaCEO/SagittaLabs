import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { buildPageMetadata } from "@/lib/metadata";

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
        description="Use the form below to discuss whitepaper chapter implementation, Sagitta Autonomous Allocation Agent deployment, and Sagitta SPC integration."
      />
      <ContactForm />
    </div>
  );
}
