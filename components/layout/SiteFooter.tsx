import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { whitepaper } from "@/lib/whitepaper";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#040812]/92">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <Image
                src={siteConfig.logo.primary}
                alt={`${siteConfig.name} logo`}
                width={18}
                height={18}
                className="h-[18px] w-[18px] rounded-full border border-white/15 bg-black/35 p-[1px]"
              />
              <p className="font-[var(--font-display)] text-lg text-slate-100">
                {siteConfig.name}
              </p>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Autonomous continuity and capital systems for resilient infrastructure.
            </p>
            <div className="mt-4 space-y-1 text-xs text-slate-400">
              <p>
                Contact:{" "}
                <Link href={`mailto:${siteConfig.contact.email}`} className="text-slate-300 hover:text-white">
                  {siteConfig.contact.email}
                </Link>
              </p>
              <p>
                Press:{" "}
                <Link href={`mailto:${siteConfig.contact.pressEmail}`} className="text-slate-300 hover:text-white">
                  {siteConfig.contact.pressEmail}
                </Link>
              </p>
            </div>
            <Link
              href={whitepaper.url}
              target="_blank"
              rel="noreferrer"
              className="nexus-button-ghost mt-5 inline-flex px-4 py-2 text-xs"
            >
              Open Whitepaper
            </Link>
          </div>
          <div className="md:col-span-7">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-xs tracking-[0.18em] text-slate-500 uppercase">Navigate</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {siteConfig.nav.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="transition hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs tracking-[0.18em] text-slate-500 uppercase">Protocol</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>
                    <Link href="/protocol" className="transition hover:text-white">
                      Architecture
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs" className="transition hover:text-white">
                      Invariants
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs" className="transition hover:text-white">
                      Threat Matrix
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs tracking-[0.18em] text-slate-500 uppercase">Resources</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>
                    <Link href="/media" className="transition hover:text-white">
                      Media & Press Kit
                    </Link>
                  </li>
                  <li>
                    <Link href="/downloads/sagitta-protocol-whitepaper.pdf" className="transition hover:text-white">
                      Whitepaper PDF
                    </Link>
                  </li>
                  <li>
                    <Link href="/downloads/sagitta-research-notes.txt" className="transition hover:text-white">
                      Research Notes
                    </Link>
                  </li>
                  <li>
                    <Link href="/downloads/sagitta-implementation-sketches.txt" className="transition hover:text-white">
                      Implementation Sketches
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-5 text-xs text-slate-500">
          Copyright (c) {new Date().getFullYear()} Sagitta Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
