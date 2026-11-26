import OptimizedImage from "@/components/OptimizedImage";
import { wildlifeExtended } from "@/data/extendedTourLocales";

const galleryImages = ["/img/animales/aves-amazonicas-01.webp", "/img/animales/aves-amazonicas-02.webp", "/img/animales/aves-amazonicas-03.webp", "/img/animales/aves-amazonicas-04.webp", "/img/animales/aves-amazonicas-05.webp", "/img/animales/aves-amazonicas-06.webp"];
const storyImages = ["/img/encounter/mono.webp", "/img/encounter/mariposa.webp", "/img/encounter/guacamayo.webp"];

export default function WildlifeStory({ language = "es" }) {
  const text = wildlifeExtended[language] || wildlifeExtended.es;
  return <div className="encounter-story wildlife-story">
    <section className="encounter-gallery" aria-labelledby="wildlife-gallery-title">
      <div className="encounter-section-heading"><div><p className="eyebrow dark">{text.galleryEyebrow}</p><h2 id="wildlife-gallery-title">{text.galleryTitle}</h2></div><p>{text.galleryIntro}</p></div>
      <div className="encounter-gallery-grid">{text.gallery.map(([title, caption, detail], index) => <figure key={title}>
        <OptimizedImage className="encounter-gallery-image" src={galleryImages[index]} alt={detail} loading="lazy" />
        <figcaption><strong>{title}</strong><span>{caption}</span></figcaption>
      </figure>)}</div>
      <p className="wildlife-sighting-note">{text.sightingNote}</p>
    </section>
    <section className="encounter-narrative" aria-labelledby="wildlife-story-title">
      <div className="encounter-section-heading"><div><p className="eyebrow dark">{text.storyEyebrow}</p><h2 id="wildlife-story-title">{text.storyTitle}</h2></div><p>{text.storyIntro}</p></div>
      {text.stories.map(([eyebrow, title, copy, detail], index) => <article className="encounter-story-row" key={title}>
        <OptimizedImage className="encounter-story-image" src={storyImages[index]} alt={detail} loading="lazy" />
        <div className="encounter-story-copy"><p className="eyebrow dark">0{index + 1} / {eyebrow}</p><h3>{title}</h3><p>{copy}</p></div>
      </article>)}
    </section>
    <section className="encounter-video" aria-labelledby="wildlife-video-title">
      <div className="encounter-section-heading"><div><p className="eyebrow">{text.videoEyebrow}</p><h2 id="wildlife-video-title">{text.videoTitle}</h2></div><p>{text.videoIntro}</p></div>
      <div className="encounter-video-frame">
        <iframe
          src="https://www.youtube.com/embed/4GYWlYv02g4"
          title={text.videoAlt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
    <section className="wildlife-observation" aria-labelledby="wildlife-observation-title">
      <p className="eyebrow dark">{text.observationEyebrow}</p><h2 id="wildlife-observation-title">{text.observationTitle}</h2>
      <div className="wildlife-observation-grid">
        {text.observation.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>
  </div>;
}
