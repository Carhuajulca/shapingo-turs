import OptimizedImage from "@/components/OptimizedImage";
import { nightWalkExtended } from "@/data/extendedTourLocales";

const galleryImages = ["/img/night-walk/ultima-luz.webp", "/img/night-walk/recorrido-noche.webp", "/img/night-walk/pequenos-detalles-03.webp", "/img/night-walk/vida-nocturna.webp", "/img/night-walk/entre-hojas-sombras.webp", "/img/night-walk/pausa-para-escuchar.webp"];
const storyImages = ["/img/night-walk/prepararse.webp", "/img/night-walk/explorar.webp", "/img/night-walk/descubrir.webp"];

export default function NightWalkStory({ language = "es" }) {
  const text = nightWalkExtended[language] || nightWalkExtended.es;
  return <div className="encounter-story night-walk-story">
    <section className="encounter-gallery" aria-labelledby="night-gallery-title">
      <div className="encounter-section-heading"><div><p className="eyebrow dark">{text.galleryEyebrow}</p><h2 id="night-gallery-title">{text.galleryTitle}</h2></div><p>{text.galleryIntro}</p></div>
      <div className="encounter-gallery-grid">{text.gallery.map(([title, caption, detail], index) => <figure key={title}>
        <OptimizedImage className="encounter-gallery-image" src={galleryImages[index]} alt={detail} loading="lazy" />
        <figcaption><strong>{title}</strong><span>{caption}</span></figcaption>
      </figure>)}</div>
      <p className="wildlife-sighting-note">{text.sightingNote}</p>
    </section>
    <section className="encounter-narrative" aria-labelledby="night-story-title">
      <div className="encounter-section-heading"><div><p className="eyebrow dark">{text.storyEyebrow}</p><h2 id="night-story-title">{text.storyTitle}</h2></div><p>{text.storyIntro}</p></div>
      {text.stories.map(([eyebrow, title, copy, detail], index) => <article className="encounter-story-row" key={title}>
        <OptimizedImage className="encounter-story-image" src={storyImages[index]} alt={detail} loading="lazy" />
        <div className="encounter-story-copy"><p className="eyebrow dark">0{index + 1} / {eyebrow}</p><h3>{title}</h3><p>{copy}</p></div>
      </article>)}
    </section>
    <section className="encounter-video" aria-labelledby="night-video-title">
      <div className="encounter-section-heading"><div><p className="eyebrow">{text.videoEyebrow}</p><h2 id="night-video-title">{text.videoTitle}</h2></div><p>{text.videoIntro}</p></div>
      <div className="encounter-video-frame">
        <iframe
          src="https://www.youtube.com/embed/t36y9SSUqqA"
          title={text.videoAlt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
    <section className="wildlife-observation" aria-labelledby="night-preparation-title">
      <p className="eyebrow dark">{text.prepEyebrow}</p><h2 id="night-preparation-title">{text.prepTitle}</h2>
      <div className="wildlife-observation-grid">
        {text.prep.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>
  </div>;
}
