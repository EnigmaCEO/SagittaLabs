import { cn } from "@/lib/utils";

type GlowPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlowPanel({ children, className }: GlowPanelProps) {
  return (
    <div
      className={cn(
        "nexus-panel relative overflow-hidden p-6",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(81,105,255,0.32),transparent_68%)]"
        aria-hidden
      />
      {children}
    </div>
  );
}
