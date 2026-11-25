import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import LandingPage from "@/components/LandingPage";
import landing from "@/data/landing.json";
import {
  faqJsonLd,
  homeKeywords,
  languageTags,
  languages,
  localizedAlternates,
  organizationJsonLd,
  websiteJsonLd,
} from "@/data/seo";

const titles = {
  es: "Shapingo Turs | Experiencias en Tambopata",
  en: "Shapingo Turs | Tambopata tours and Amazon experiences",
  it: "Shapingo Turs | Esperienze a Tambopata",
  fr: "Shapingo Turs | Expériences à Tambopata",
  "zh-cn": "Shapingo Turs | 坦博帕塔亚马逊体验",
};

export const dynamicParams = false;
export function generateStaticParams() { return languages.map((lang) => ({ lang })); }

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const content = landing[lang];
  if (!content) return {};
  return {
    title: titles[lang],
    description: content.hero.copy,
    keywords: homeKeywords[lang],
    alternates: { canonical: `/${lang}/`, languages: localizedAlternates("/") },
    robots: { index: true, follow: true },
    openGraph: {
      title: titles[lang],
      description: content.hero.copy,
      url: `/${lang}/`,
      siteName: "Shapingo Turs",
      type: "website",
      locale: languageTags[lang],
      alternateLocale: Object.values(languageTags).filter((locale) => locale !== languageTags[lang]),
      images: [{ url: "/img/hero-tambopata-poster.webp", width: 1280, height: 720, alt: content.hero.title.text || content.hero.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[lang],
      description: content.hero.copy,
      images: ["/img/hero-tambopata-poster.webp"],
    },
  };
}

export default async function LanguagePage({ params }) {
  const { lang } = await params;
  if (!landing[lang]) notFound();
  const content = landing[lang];
  const schemas = [
    organizationJsonLd(lang),
    websiteJsonLd(lang, titles[lang], content.hero.copy),
    faqJsonLd(lang, content.faq.items),
  ];
  return <><JsonLd data={schemas} /><LandingPage language={lang} content={content} /></>;
}
