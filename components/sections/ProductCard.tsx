import Link from "next/link";
import { GlowPanel } from "@/components/ui/GlowPanel";

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ProductCard({ title, description, href }: ProductCardProps) {
  return (
    <GlowPanel className="h-full">
      <h3 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">{title}</h3>
      <p className="mt-3 text-sm text-slate-300">{description}</p>
      <Link
        href={href}
        className="nexus-button-ghost mt-6 inline-flex px-4 py-2 text-sm"
      >
        Learn more
      </Link>
    </GlowPanel>
  );
}
