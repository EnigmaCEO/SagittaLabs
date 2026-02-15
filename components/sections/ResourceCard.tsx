import Link from "next/link";
import { GlowPanel } from "@/components/ui/GlowPanel";

type ResourceCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ResourceCard({ title, description, href }: ResourceCardProps) {
  return (
    <GlowPanel>
      <h3 className="font-[var(--font-display)] text-xl font-semibold text-slate-50">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
      <Link
        href={href}
        download
        className="nexus-button-ghost mt-5 inline-flex px-4 py-2 text-sm"
      >
        Download
      </Link>
    </GlowPanel>
  );
}
