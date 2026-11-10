import "../../globals.css";
import { notFound } from "next/navigation";

const languages = ["es", "en", "it", "fr", "zh-cn"];

export const metadata = {
  metadataBase: new URL("https://shapingoturs.com"),
  icons: { icon: "/icon-512.png" },
  manifest: "/site.webmanifest",
};

export default async function LocalizedLayout({ children, params }) {
  const { lang } = await params;
  if (!languages.includes(lang)) notFound();
  const htmlLanguage = lang === "zh-cn" ? "zh-CN" : lang;
  return <html lang={htmlLanguage}><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,400;9..144,500&display=swap" rel="stylesheet" /></head><body>{children}</body></html>;
}
