import { RelatedTours, TourFooter, TourHeader } from "@/components/TourShell";
import { tourUi } from "@/data/tourLocales";
import EncounterStory from "@/components/EncounterStory";
import WildlifeStory from "@/components/WildlifeStory";
import NightWalkStory from "@/components/NightWalkStory";
import RiverStory from "@/components/RiverStory";
import CollpaGuacamayosStory from "@/components/ColpaStory";
import YacumamaStory from "@/components/YacumamaStory";
import CollpaLorosStory from "@/components/CollpaLorosStory";
import KayakStory from "@/components/KayakStory";
import CommunityFlavorsStory from "@/components/CommunityFlavorsStory";
import SandovalGuide from "@/components/SandovalGuide";
import SandovalRoute from "@/components/SandovalRoute";
import ExperienceImpression from "@/components/ExperienceImpression";
import { optimizedImageSrc } from "@/components/OptimizedImage";

export default function TourPage({ tour, slug, language = "es" }) {
  const ui = tourUi[language];
  const path = `/tours/${slug}/`;
  const heroImage = optimizedImageSrc(tour.image);
  const contactHref = `https://wa.me/51917906162?text=${encodeURIComponent(`${ui.consult}: ${tour.title}`)}`;
  return <div className="tour-page">
    <link rel="preload" as="image" href={heroImage} fetchPriority="high" />
    <TourHeader language={language} currentPath={path} />
    <header className={`tour-hero tour-hero-${slug}`} style={{ backgroundImage: `url(${heroImage})` }}><div className="tour-hero-content"><a className="tour-breadcrumb" href={`/${language}/#experiencias`}>← {ui.back}</a><p className="eyebrow">{tour.eyebrow}</p><h1>{tour.title}</h1><p className="tour-hero-copy">{tour.intro}</p><div className="tour-hero-actions"><a className="button button-primary" href={contactHref} target="_blank" rel="noopener noreferrer">{ui.consult} <span>↗</span></a><a className="button button-quiet" href="#recorrido">{ui.route}</a></div></div></header>
    <main>
      <section className="tour-overview"><div className="tour-overview-copy"><p className="eyebrow dark">{ui.experience}</p><h2>{tour.overviewTitle}</h2>{tour.overview.map((p) => <p key={p}>{p}</p>)}</div><dl className="tour-facts">{tour.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>
      <ExperienceImpression tour={tour} slug={slug} language={language} />
      {slug === "lago-yacumama" && <YacumamaStory language={language} />}
      {slug === "lago-sandoval" && <SandovalGuide language={language} />}
      {slug === "lago-sandoval" && <SandovalRoute language={language} />}
      {slug === "encuentro-amazonico" && <EncounterStory language={language} />}
      {slug === "fauna-aves" && <WildlifeStory language={language} />}
      {slug === "caminata-nocturna" && <NightWalkStory language={language} />}
      {slug === "rio-tambopata" && <RiverStory language={language} />}
      {slug === "colpa" && <CollpaGuacamayosStory language={language} />}
      {slug === "collpa-loros" && <CollpaLorosStory language={language} />}
      {slug === "paseo-kayak" && <KayakStory language={language} />}
      {slug === "sabores-comunidad" && <CommunityFlavorsStory language={language} />}
      <section className="tour-note"><h2>{tour.notesTitle}</h2><ul className="tour-note-list">{tour.notes.map((note) => <li key={note}>{note}</li>)}</ul></section>
      <RelatedTours current={slug} language={language} labels={{ eyebrow: ui.relatedEyebrow, title: ui.relatedTitle }} titles={ui.titles} />
      <section className="tour-cta" id="consultar"><h2>{tour.cta}</h2><p>{tour.ctaCopy}</p><a className="button button-primary" href={contactHref} target="_blank" rel="noopener noreferrer">{ui.whatsapp} <span>↗</span></a></section>
    </main><TourFooter language={language} />
  </div>;
}
