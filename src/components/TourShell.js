import Header from "@/components/Header";
import Footer from "@/components/Footer";
import landing from "@/data/landing.json";
import { relatedTours } from "@/data/tours";

export function TourHeader({ language = "es", currentPath = "/" }) { return <Header language={language} nav={landing[language].nav} currentPath={currentPath} />; }
export function TourFooter({ language = "es" }) { return <Footer language={language} content={landing[language].footer} />; }

export function RelatedTours({ current, language = "es", labels = { eyebrow: "También puedes explorar", title: "Otras experiencias en Tambopata." }, titles }) {
  return <section className="tour-related"><p className="eyebrow dark">{labels.eyebrow}</p><h2>{labels.title}</h2><div className="tour-related-grid">{relatedTours.filter(([slug]) => slug !== current).slice(0, 3).map(([slug, title, image]) => <a className="tour-related-card" href={`/${language}/tours/${slug}/`} key={slug}><img src={image} alt="" loading="lazy" /><span>{titles?.[slug] || title}</span><b>↗</b></a>)}</div></section>;
}
