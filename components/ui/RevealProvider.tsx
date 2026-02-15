"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = "[data-reveal]";

export function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js-motion");

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    if (!revealItems.length) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    revealItems.forEach((item, index) => {
      const delay = Math.min(index % 8, 7) * 45;
      item.style.setProperty("--reveal-delay", `${delay}ms`);
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
