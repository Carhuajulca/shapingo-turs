import { RelatedTours, TourFooter, TourHeader } from "@/components/TourShell";
import { tourUi } from "@/data/tourLocales";

export default function TourPage({ tour, slug, language = "es" }) {
  const ui = tourUi[language];
  const path = `/tours/${slug}/`;
  const contactHref = `https://wa.me/51926284415?text=${encodeURIComponent(`${ui.consult}: ${tour.title}`)}`;
  return <div className="tour-page">
    <TourHeader language={language} currentPath={path} />
    <header className={`tour-hero tour-hero-${slug}`} style={{ backgroundImage: `url(${tour.image})` }}><div className="tour-hero-content"><a className="tour-breadcrumb" href={`/${language}/#experiencias`}>← {ui.back}</a><p className="eyebrow">{tour.eyebrow}</p><h1>{tour.title}</h1><p className="tour-hero-copy">{tour.intro}</p><div className="tour-hero-actions"><a className="button button-primary" href={contactHref} target="_blank" rel="noopener noreferrer">{ui.consult} <span>↗</span></a><a className="button button-quiet" href="#recorrido">{ui.route}</a></div></div></header>
    <main>
      <section className="tour-overview"><div className="tour-overview-copy"><p className="eyebrow dark">{ui.experience}</p><h2>{tour.overviewTitle}</h2>{tour.overview.map((p) => <p key={p}>{p}</p>)}</div><dl className="tour-facts">{tour.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>
      <section className="tour-journey" id="recorrido"><div className="tour-journey-heading"><h2>{tour.journeyTitle}</h2><p>{tour.journeyCopy}</p></div><div className="tour-steps">{tour.steps.map(([number, title, copy]) => <article className="tour-step" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <section className="tour-note"><h2>{tour.notesTitle}</h2><ul className="tour-note-list">{tour.notes.map((note) => <li key={note}>{note}</li>)}</ul></section>
      <RelatedTours current={slug} language={language} labels={{ eyebrow: ui.relatedEyebrow, title: ui.relatedTitle }} titles={ui.titles} />
      <section className="tour-cta" id="consultar"><h2>{tour.cta}</h2><p>{tour.ctaCopy}</p><a className="button button-primary" href={contactHref} target="_blank" rel="noopener noreferrer">{ui.whatsapp} <span>↗</span></a></section>
    </main><TourFooter language={language} />
  </div>;
}
