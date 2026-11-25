import LandingPage from "@/components/LandingPage";
import landing from "@/data/landing.json";

export const metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: "/es/", languages: { es: "/es/", en: "/en/", it: "/it/", fr: "/fr/", "zh-CN": "/zh-cn/", de: "/de/", "x-default": "/en/" } },
};
export default function Home() { return <LandingPage language="es" content={landing.es} />; }
