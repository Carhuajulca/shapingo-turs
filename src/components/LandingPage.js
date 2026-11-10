import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroVideos from "@/components/HeroVideos";

function EmHeading({ heading }) {
  if (typeof heading === "string") return heading;
  const index = heading.text.lastIndexOf(heading.emphasis);
  if (index < 0 || !heading.emphasis) return heading.text;
  return <>{heading.text.slice(0, index)}<em>{heading.emphasis}</em>{heading.text.slice(index + heading.emphasis.length)}</>;
}

const whatsapp = "https://wa.me/51926284415";

export default function LandingPage({ language, content }) {
  const base = `/${language}/`;
  const contactHref = `${whatsapp}?text=${encodeURIComponent(content.hero.primary)}`;
  return <>
    <Header language={language} nav={content.nav} />
    <header className="hero" id="inicio">
      <HeroVideos />
      <div className="hero-content">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h1><EmHeading heading={content.hero.title} /></h1>
        <p className="hero-copy">{content.hero.copy}</p>
        <div className="hero-actions">
          <a className="button button-primary" href={contactHref} target="_blank" rel="noopener noreferrer">{content.hero.primary} <span aria-hidden="true">↗</span></a>
          <a className="button button-quiet" href="#experiencias">{content.hero.secondary}</a>
        </div>
        <div className="hero-trust">{content.hero.trust.map((item) => <span key={item}>{item}</span>)}</div>
      </div>
      <div className="hero-footer"><span className="scroll-hint"><i className="scroll-line" />{content.hero.scroll}</span><p className="hero-note">{content.hero.note}</p></div>
    </header>

    <main>
      <section className="experiences" id="experiencias">
        <div className="section-heading"><p className="eyebrow dark">{content.experiences.eyebrow}</p><h2>{content.experiences.title}</h2><p className="section-copy">{content.experiences.copy}</p></div>
        <div className="experience-grid">
          {content.experiences.cards.map((card) => <article className={`experience-card${card.featured ? " experience-card-featured" : ""}${card.wide ? " experience-card-wide" : ""}`} key={card.href}>
            <img src={card.image} alt={card.alt} loading="lazy" width="900" height="700" />
            <div className="card-overlay" />
            <div className="card-content"><p className="card-number">{card.number}</p><h3>{card.title}</h3><p className="experience-summary">{card.summary}</p>
              <div className="experience-facts">{card.facts.map((fact) => <span key={`${fact.label}-${fact.value}`}><small>{fact.label}</small><b>{fact.value}</b></span>)}</div>
              <a className="card-link" href={`/${language}${card.href}/`}>{card.link} <span aria-hidden="true">↗</span></a>
            </div>
          </article>)}
        </div>
        <div className="experience-planning">
          <div className="planning-intro"><p className="eyebrow dark">{content.experiences.planning.eyebrow}</p><h3>{content.experiences.planning.title}</h3><p className="planning-copy">{content.experiences.planning.copy}</p><a className="planning-link" href={contactHref} target="_blank" rel="noopener noreferrer">{content.experiences.planning.contact} <span>↗</span></a><a className="planning-link program-link" href={`/${language}/tours/programa-4-dias/`}>{content.experiences.planning.program} <span>↗</span></a></div>
          <dl className="planning-grid">{content.experiences.planning.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        </div>
      </section>

      <section className="international" aria-labelledby="international-title">
        <figure className="international-media">
          <img src="/img/international-travelers.webp" alt={content.international.imageAlt} loading="lazy" width="900" height="1200" />
          <figcaption>{content.international.imageCaption}</figcaption>
        </figure>
        <div className="international-content">
          <div className="international-copy"><p className="eyebrow">{content.international.eyebrow}</p><h2 id="international-title">{content.international.title}</h2><p>{content.international.copy}</p></div>
          <div className="international-highlights">{content.international.highlights.map((item) => <span key={item}>{item}</span>)}</div>
          <div className="international-points">{content.international.points.map((point) => <article key={point.number}><span>{point.number}</span><div><h3>{point.title}</h3><p>{point.copy}</p></div></article>)}</div>
          <div className="international-actions"><a className="button button-primary" href={contactHref} target="_blank" rel="noopener noreferrer">{content.international.link} <span>↗</span></a><a className="international-program-link" href={`/${language}/tours/programa-4-dias/`}>{content.international.programLink} <span>↗</span></a></div>
        </div>
      </section>

      <section className="wildlife" id="destino">
        <div className="wildlife-intro"><p className="eyebrow">{content.destination.eyebrow}</p><h2><EmHeading heading={content.destination.title} /></h2><p>{content.destination.copy}</p><div className="destination-highlights">{content.destination.highlights.map((item) => <span key={item.label}><small>{item.label}</small><b>{item.value}</b></span>)}</div><a className="wildlife-link" href={contactHref} target="_blank" rel="noopener noreferrer">{content.destination.link} <span>↗</span></a></div>
        <div className="wildlife-gallery">{content.destination.gallery.map((photo, index) => <figure className={`wildlife-photo ${["wildlife-photo-main", "wildlife-photo-toucan", "wildlife-photo-monkey", "wildlife-photo-flight"][index]}`} key={photo.image}><img src={photo.image} alt={photo.alt} loading="lazy" width="700" height="620" /><figcaption>{photo.caption}</figcaption></figure>)}</div>
        <div className="destination-guide"><div className="destination-guide-heading"><p className="eyebrow">{content.destination.guideEyebrow}</p><h3>{content.destination.guideTitle}</h3></div><div className="destination-guide-grid">{content.destination.points.map((point) => <article key={point.number}><span>{point.number}</span><h4>{point.title}</h4><p>{point.copy}</p></article>)}</div></div>
      </section>

      <section className="values" id="nosotros">
        <div className="values-heading"><p className="eyebrow">{content.values.eyebrow}</p><h2><EmHeading heading={content.values.title} /></h2><p className="values-intro">{content.values.copy}</p></div>
        <div className="values-grid">{content.values.points.map((point) => <article className="value-item" key={point.number}><span>{point.number}</span><h3>{point.title}</h3><p>{point.copy}</p></article>)}</div>
      </section>

      <section className="booking"><div className="booking-copy"><p className="eyebrow">{content.booking.eyebrow}</p><h2>{content.booking.title}</h2><p>{content.booking.copy}</p><a className="button button-primary" href={contactHref} target="_blank" rel="noopener noreferrer">{content.booking.button} <span>↗</span></a></div><div className="booking-steps">{content.booking.steps.map((step) => <div key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></div>)}</div></section>

      <section className="faq"><div><p className="eyebrow">{content.faq.eyebrow}</p><h2>{content.faq.title}</h2></div><div className="faq-list">{content.faq.items.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div></section>

      <section className="contact" id="contacto"><div className="contact-inner"><p className="eyebrow">{content.contact.eyebrow}</p><h2 id="contact-title">{content.contact.title}</h2><p>{content.contact.copy}</p><div className="contact-promises">{content.contact.promises.map((item) => <span key={item}>{item}</span>)}</div><ContactForm language={language} content={content.contact} /></div><div className="contact-details"><span>SHAPINGO TURS S.A.C.</span><span>RUC 20607382345</span><span>Madre de Dios · Perú</span></div></section>
    </main>
    <Footer language={language} content={content.footer} />
    <a className="mobile-contact" href={contactHref} target="_blank" rel="noopener noreferrer" aria-label={content.hero.primary}>WhatsApp</a>
  </>;
}
