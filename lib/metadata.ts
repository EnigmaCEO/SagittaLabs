import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type BuildMetadataArgs = {
  title: string;
  description: string;
  path?: string;
};

export function buildPageMetadata({
  title,
  description,
  path = "/"
}: BuildMetadataArgs): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} open graph image placeholder`
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage]
    }
  };
}

