import OptimizedImage from "@/components/OptimizedImage";
import { encounterExtended } from "@/data/extendedTourLocales";

const flowerImages = ["/img/encounter-orchid-red.webp", "/img/encounter-orchid-yellow.webp", "/img/encounter-orchid-pink.webp", "/img/encounter-insects.webp"];
const storyImages = ["/img/encounter-welcome.webp", "/img/encounter-share-learn.webp", "/img/encounter-connect.webp"];

export default function EncounterStory({ language = "es" }) {
  const videoId = "TA8qdMAbDoY";
  const text = encounterExtended[language] || encounterExtended.es;
  return <div className="encounter-story">
    <section className="encounter-gallery" aria-labelledby="encounter-gallery-title">
      <div className="encounter-section-heading"><div><p className="eyebrow dark">{text.galleryEyebrow}</p><h2 id="encounter-gallery-title">{text.galleryTitle}</h2></div><p>{text.galleryIntro}</p></div>
      <div className="encounter-gallery-grid">{text.flowers.map(([alt, title, caption], index) => <figure key={flowerImages[index]}>
        <OptimizedImage className="encounter-gallery-image encounter-gallery-flower" src={flowerImages[index]} alt={alt} loading="lazy" />
        <figcaption><strong>{title}</strong><span>{caption}</span></figcaption>
      </figure>)}</div>
    </section>
    <section className="encounter-narrative" aria-labelledby="encounter-story-title">
      <div className="encounter-section-heading"><div><p className="eyebrow dark">{text.storyEyebrow}</p><h2 id="encounter-story-title">{text.storyTitle}</h2></div><p>{text.storyIntro}</p></div>
      {text.stories.map(([eyebrow, title, copy, photoAlt], index) => <article className="encounter-story-row" key={title}>
        <OptimizedImage className="encounter-story-image encounter-story-connect" src={storyImages[index]} alt={photoAlt} loading="lazy" />
        <div className="encounter-story-copy"><p className="eyebrow dark">0{index + 1} / {eyebrow}</p><h3>{title}</h3><p>{copy}</p></div>
      </article>)}
    </section>
    <section className="encounter-video" aria-labelledby="encounter-video-title">
      <div className="encounter-section-heading"><div><p className="eyebrow">{text.videoEyebrow}</p><h2 id="encounter-video-title">{text.videoTitle}</h2></div><p>{text.videoIntro}</p></div>
      <div className="encounter-video-frame"><iframe src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`} title={text.videoAlt} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
      <p className="encounter-video-note">{text.videoNote}</p>
    </section>
  </div>;
}
