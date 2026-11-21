import { optimizedImageSrc } from "@/components/OptimizedImage";

const copy = {
  es: { eyebrow: "Un momento para recordar", title: "Así se siente la experiencia.", moments: "Tres momentos que hacen único el recorrido." },
  en: { eyebrow: "A moment to remember", title: "How the experience feels.", moments: "Three moments that make the journey unique." },
  it: { eyebrow: "Un momento da ricordare", title: "Così si vive l’esperienza.", moments: "Tre momenti che rendono unico il percorso." },
  fr: { eyebrow: "Un moment à retenir", title: "Voici ce que l’on ressent.", moments: "Trois moments qui rendent le parcours unique." },
  "zh-cn": { eyebrow: "值得记住的时刻", title: "这就是体验的感受。", moments: "让这段旅程独特的三个瞬间。" },
};

export default function ExperienceImpression({ tour, slug, language }) {
  const text = copy[language] || copy.es;
  return (
    <section className={`experience-impression experience-impression-${slug}`} id="recorrido" aria-labelledby={`impression-${slug}`}>
      <div className="experience-impression-intro" style={{ backgroundImage: `url(${optimizedImageSrc(tour.image)})` }}>
        <div className="experience-impression-shade" />
        <div className="experience-impression-copy">
          <p className="eyebrow">{text.eyebrow}</p>
          <h2 id={`impression-${slug}`}>{text.title}</h2>
          <p>{tour.intro}</p>
        </div>
      </div>
      <div className="experience-impression-moments">
        <p className="experience-impression-label">{text.moments}</p>
        <div className="experience-impression-grid">
          {tour.steps.map(([number, title, detail]) => <article key={number}>
            <span>{number}</span><h3>{title}</h3><p>{detail}</p>
          </article>)}
        </div>
      </div>
    </section>
  );
}
