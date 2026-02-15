import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="relative z-30">
      <div className="mx-auto max-w-6xl px-4 pb-3 pt-5 sm:px-6 lg:px-8">
        {/* Template mapping: rounded translucent nav shell mirrors the capsule top bar in the reference image. */}
        <div className="rounded-full border border-transparent bg-[#070B1A]/86 px-4 py-3 shadow-[0_14px_34px_rgba(2,5,17,0.42)] backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={siteConfig.logo.primary}
                alt={`${siteConfig.name} logo`}
                width={20}
                height={20}
                className="h-5 w-5 rounded-full border border-white/15 bg-black/35 p-[1px]"
                priority
              />
              <span className="font-[var(--font-display)] text-sm font-semibold tracking-[0.2em] text-slate-100 uppercase">
                Sagitta Labs
              </span>
            </Link>
            <nav className="order-3 w-full md:order-2 md:w-auto">
              <ul className="flex flex-wrap justify-center gap-2 text-sm text-slate-300 md:gap-4">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-full px-3 py-1.5 text-slate-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="order-2 ml-auto flex items-center gap-2 md:order-3 md:ml-0">
              <button
                type="button"
                className="rounded-full border border-white/25 bg-white/[0.02] px-3 py-1.5 text-xs text-slate-200"
              >
                Log In
              </button>
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-electric to-cyanflare px-3 py-1.5 text-xs font-semibold text-white"
              >
                Start
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
