import Header from "@/components/Header";
import Footer from "@/components/Footer";
import landing from "@/data/landing.json";
import RelatedToursCarousel from "@/components/RelatedToursCarousel";

export function TourHeader({ language = "es", currentPath = "/" }) { return <Header language={language} nav={landing[language].nav} currentPath={currentPath} contactLabel={landing[language].hero.primary} contactHref="https://wa.me/51917906162" />; }
export function TourFooter({ language = "es" }) { return <Footer language={language} content={landing[language].footer} />; }

export function RelatedTours({ current, language = "es", labels = { eyebrow: "También puedes explorar", title: "Otras experiencias en Tambopata." }, titles }) {
  return <RelatedToursCarousel current={current} language={language} labels={labels} titles={titles} />;
}
