import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
      {/* Template mapping: large right-side luminous sphere recreates the dominant hero orb from the reference. */}
      <div
        className="hero-glow pointer-events-none absolute right-6 top-8 hidden h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(102,124,255,0.75)_0%,rgba(33,53,156,0.45)_40%,transparent_70%)] blur-[2px] md:block lg:h-96 lg:w-96"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-24 top-24 z-20 hidden h-52 w-52 rounded-full border border-white/45 md:block"
        aria-hidden
      >
        <div className="hero-pulse flex h-full w-full items-center justify-center">
          {/* Template mapping: hero logo is placed inside the outlined orb from the reference layout. */}
          <Image
            src={siteConfig.logo.hero}
            alt={`${siteConfig.name} logo`}
            width={120}
            height={120}
            className="hero-float h-[120px] w-[120px] rounded-full object-contain opacity-100 drop-shadow-[0_0_22px_rgba(79,104,255,0.45)]"
            priority
          />
        </div>
        <div className="absolute inset-[12%] rounded-full border border-white/35" aria-hidden />
        <div
          className="absolute inset-[-8%] [transform:rotate(18deg)_scaleY(.82)]"
          aria-hidden
        >
          <div className="hero-orbit h-full w-full rounded-full border border-white/15 border-r-white/45 border-t-white/70" />
        </div>
      </div>
      <div className="relative z-10 overflow-hidden rounded-[30px] border border-transparent bg-[radial-gradient(circle_at_84%_16%,rgba(88,104,255,0.28),transparent_34%),linear-gradient(180deg,rgba(9,22,49,0.82),rgba(5,10,24,0.9))] px-6 py-14 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_70px_rgba(1,4,13,0.5)] sm:px-10 lg:px-14">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[44%] bg-gradient-to-l from-[#2A3A88]/55 via-[#111A45]/35 to-transparent"
          aria-hidden
        />
        <div className="max-w-2xl">
          <p className="nexus-label">
            Sagitta Labs
          </p>
          <h1 className="mt-4 font-[var(--font-body)] text-5xl font-medium leading-[0.98] tracking-[-0.025em] text-[#bcc6d3] sm:text-6xl lg:text-7xl">
            Resilient capital infrastructure for systems that cannot fail
          </h1>
          <p className="mt-6 max-w-xl text-[1.04rem] leading-relaxed text-[#6f86a7] sm:text-[1.12rem]">
            Sagitta builds autonomous capital infrastructure that protects reserves, allocates assets under risk constraints, and maintains continuity during market stress.
          </p>
          <p className="mt-4 max-w-xl text-sm font-medium text-slate-200">
            When stablecoins depeg, chains halt, or governance fails, Sagitta enforces continuity without discretionary human intervention.
          </p>
          <p className="mt-3 max-w-xl text-xs tracking-[0.05em] text-slate-400">
            Built by systems architects focused on resilient capital infrastructure.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="nexus-subitem rounded-xl px-3 py-2.5">
              <p className="text-[11px] tracking-[0.16em] text-slate-400 uppercase">Who Benefits</p>
              <p className="mt-1.5 text-xs text-slate-200">DAOs, treasuries, and critical infrastructure operators.</p>
            </div>
            <div className="nexus-subitem rounded-xl px-3 py-2.5">
              <p className="text-[11px] tracking-[0.16em] text-slate-400 uppercase">How</p>
              <p className="mt-1.5 text-xs text-slate-200">Vault, Reserve, AAA, and Continuity Engine enforce policy by design.</p>
            </div>
            <div className="nexus-subitem rounded-xl px-3 py-2.5">
              <p className="text-[11px] tracking-[0.16em] text-slate-400 uppercase">Why Better</p>
              <p className="mt-1.5 text-xs text-slate-200">Safety constraints are structural, not dependent on operator discretion.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/protocol"
              className="nexus-button-primary px-6 py-3 text-sm"
            >
              Explore the Protocol
            </Link>
            <Link
              href="/use-cases"
              className="nexus-button-ghost px-6 py-3 text-sm"
            >
              View Use Cases
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
