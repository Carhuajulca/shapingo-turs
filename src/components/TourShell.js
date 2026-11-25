import Header from "@/components/Header";
import Footer from "@/components/Footer";
import landing from "@/data/landing.json";
import { germanLanding } from "@/data/germanLanding";
import RelatedToursCarousel from "@/components/RelatedToursCarousel";

export function TourHeader({ language = "es", currentPath = "/" }) { const content = language === "de" ? germanLanding : landing[language]; return <Header language={language} nav={content.nav} currentPath={currentPath} contactLabel={content.hero.primary} contactHref="https://wa.me/51917906162" />; }
export function TourFooter({ language = "es" }) { return <Footer language={language} content={language === "de" ? germanLanding.footer : landing[language].footer} />; }

export function RelatedTours({ current, language = "es", labels = { eyebrow: "También puedes explorar", title: "Otras experiencias en Tambopata." }, titles }) {
  return <RelatedToursCarousel current={current} language={language} labels={labels} titles={titles} />;
}
