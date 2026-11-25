import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import TourPage from "@/components/TourPage";
import ProgramTourPage from "@/components/ProgramTourPage";
import { getProgram } from "@/data/programLocales";
import { getTour } from "@/data/tourLocales";
import {
  languageTags,
  languages,
  localizedAlternates,
  optimizedImagePath,
  tourJsonLd,
  tourKeywords,
  tourSlugs,
  tourTitleSuffixes,
} from "@/data/seo";

export const dynamicParams=false;
export function generateStaticParams(){return languages.flatMap(lang=>tourSlugs.map(slug=>({lang,slug})))}

export async function generateMetadata({params}) {
  const { lang, slug } = await params;
  const item = slug === "programa-4-dias" ? getProgram(lang) : getTour(lang, slug);
  if (!item) return {};
  const path = `/${lang}/tours/${slug}/`;
  const title = `${item.title} — ${tourTitleSuffixes[lang]}`;
  const image = slug === "programa-4-dias" ? "/img/lago-sandoval.webp" : optimizedImagePath(item.image);
  return {
    title,
    description: item.intro,
    keywords: tourKeywords(lang, slug),
    alternates: { canonical: path, languages: localizedAlternates(`/tours/${slug}/`) },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description: item.intro,
      url: path,
      siteName: "Shapingo Turs",
      type: "website",
      locale: languageTags[lang],
      alternateLocale: Object.values(languageTags).filter((locale) => locale !== languageTags[lang]),
      images: [{ url: image, alt: item.title }],
    },
    twitter: { card: "summary_large_image", title, description: item.intro, images: [image] },
  };
}

export default async function Page({params}) {
  const { lang, slug } = await params;
  if (!languages.includes(lang) || !tourSlugs.includes(slug)) notFound();
  const isProgram = slug === "programa-4-dias";
  const tour = isProgram ? { ...getProgram(lang), image: "/img/lago-sandoval.webp" } : getTour(lang, slug);
  if (!tour) notFound();
  return <><JsonLd data={tourJsonLd({ language: lang, slug, tour })} />{isProgram ? <ProgramTourPage language={lang}/> : <TourPage tour={tour} slug={slug} language={lang}/>}</>;
}
