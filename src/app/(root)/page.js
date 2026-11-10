import LandingPage from "@/components/LandingPage";
import landing from "@/data/landing.json";

export const metadata = { alternates: { canonical: "/es/", languages: { es: "/es/", en: "/en/", it: "/it/", fr: "/fr/", "zh-CN": "/zh-cn/", "x-default": "/en/" } } };
export default function Home() { return <LandingPage language="es" content={landing.es} />; }
