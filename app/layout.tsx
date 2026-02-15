import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { RevealProvider } from "@/components/ui/RevealProvider";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Autonomous Capital Systems`,
  description:
    "Sagitta Labs builds autonomous continuity and capital systems for resilient infrastructure.",
  icons: {
    icon: [
      {
        url: siteConfig.logo.primary,
        sizes: "64x64",
        type: "image/png"
      },
      {
        url: siteConfig.logo.large,
        sizes: "192x192",
        type: "image/png"
      }
    ],
    shortcut: [siteConfig.logo.primary],
    apple: [siteConfig.logo.large]
  },
  openGraph: {
    title: `${siteConfig.name} | Autonomous Capital Systems`,
    description:
      "Explore the Sagitta Protocol, Sagitta Autonomous Allocation Agent, and Sagitta SPC ecosystem.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Sagitta Labs open graph image placeholder"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Autonomous Capital Systems`,
    description:
      "Autonomous continuity and capital doctrine for resilient infrastructure.",
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} font-[var(--font-body)] antialiased`}
      >
        <RevealProvider />
        <div className="relative min-h-screen">
          <div className="site-canvas pointer-events-none absolute inset-0 -z-20" aria-hidden />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
