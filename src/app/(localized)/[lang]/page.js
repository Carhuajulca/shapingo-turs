import { notFound } from "next/navigation";
import LandingPage from "@/components/LandingPage";
import landing from "@/data/landing.json";

const languages = ["es", "en", "it", "fr", "zh-cn"];
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
    alternates: { canonical: `/${lang}/`, languages: { es: "/es/", en: "/en/", it: "/it/", fr: "/fr/", "zh-CN": "/zh-cn/", "x-default": "/en/" } },
    openGraph: { title: titles[lang], description: content.hero.copy, url: `/${lang}/`, siteName: "Shapingo Turs", type: "website", images: [{ url: "/img/lago-sandoval.webp", width: 1200, height: 630 }] },
  };
}

export default async function LanguagePage({ params }) {
  const { lang } = await params;
  if (!landing[lang]) notFound();
  const organization = { "@context": "https://schema.org", "@type": "TouristInformationCenter", name: "Shapingo Turs", legalName: "SHAPINGO TURS S.A.C.", taxID: "20607382345", url: "https://shapingoturs.com", telephone: "+51926284415", address: { "@type": "PostalAddress", addressRegion: "Madre de Dios", addressCountry: "PE" }, areaServed: "Tambopata" };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /><LandingPage language={lang} content={landing[lang]} /></>;
}
