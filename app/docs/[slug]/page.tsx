import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHero } from "@/components/sections/PageHero";
import { GlowPanel } from "@/components/ui/GlowPanel";
import { buildPageMetadata } from "@/lib/metadata";
import {
  allWhitepaperChapterSlugs,
  getWhitepaperChapterBySlug,
  whitepaper
} from "@/lib/whitepaper";

type WhitepaperChapterPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return allWhitepaperChapterSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: WhitepaperChapterPageProps) {
  const { slug } = await params;
  const chapter = getWhitepaperChapterBySlug(slug);

  if (!chapter) {
    return buildPageMetadata({
      title: "Whitepaper chapter",
      description: "Sagitta whitepaper chapter details.",
      path: `/docs/${slug}`
    });
  }

  return buildPageMetadata({
    title: chapter.title,
    description: chapter.summary,
    path: `/docs/${chapter.slug}`
  });
}

export default async function WhitepaperChapterPage({ params }: WhitepaperChapterPageProps) {
  const { slug } = await params;
  const chapter = getWhitepaperChapterBySlug(slug);

  if (!chapter) {
    notFound();
  }

  return (
    <div>
      <PageHero eyebrow="Whitepaper Chapter" title={chapter.title} description={chapter.summary} />

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <GlowPanel>
          <p className="text-base text-slate-200">{chapter.introduction}</p>
          {chapter.illustration ? (
            <figure className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-3">
              {/* Using img here to allow direct rendering of GitBook-hosted chapter images. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={chapter.illustration.src}
                alt={chapter.illustration.alt}
                className="mx-auto h-auto w-full max-w-3xl rounded-xl"
                loading="lazy"
              />
              {chapter.illustration.caption ? (
                <figcaption className="mt-3 text-center text-xs text-slate-400">
                  {chapter.illustration.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={chapter.href}
              target="_blank"
              rel="noreferrer"
              className="nexus-button-primary px-4 py-2 text-sm"
            >
              View chapter on GitBook
            </Link>
            <Link href={whitepaper.url} target="_blank" rel="noreferrer" className="nexus-button-ghost px-4 py-2 text-sm">
              Open full whitepaper
            </Link>
            <Link href="/docs" className="nexus-button-ghost px-4 py-2 text-sm">
              Back to Docs
            </Link>
          </div>
        </GlowPanel>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {chapter.sections.map((section) => (
            <GlowPanel key={section.heading}>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-slate-50">{section.heading}</h2>
              {section.content ? (
                <p className="mt-3 text-sm text-slate-300">{section.content}</p>
              ) : null}
              {section.paragraphs?.length ? (
                <div className="mt-3 space-y-3 text-sm text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}
              {section.bullets?.length ? (
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {section.bullets.map((item) => (
                    <li key={item} className="nexus-subitem px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </GlowPanel>
          ))}
        </div>
      </section>

      {slug === "capital-flow-diagram" ? (
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <GlowPanel className="p-4 sm:p-6">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 sm:p-3">
              <Image
                src="/capital-flow-diagram.jpg"
                alt="Sagitta Protocol capital flow diagram"
                width={768}
                height={1152}
                className="mx-auto h-auto w-full max-w-2xl rounded-xl"
              />
            </div>
          </GlowPanel>
        </section>
      ) : null}

      <CtaBanner
        title="Need implementation support?"
        description="Use these chapter pages for local review, then contact Sagitta Labs for architecture and deployment guidance."
        ctaLabel="Contact Sagitta Labs"
        ctaHref="/contact"
      />
    </div>
  );
}
