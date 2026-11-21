import OptimizedImage from "@/components/OptimizedImage";

const copy = {
  es: { eyebrow: "Aves amazónicas", loros: "El primer encuentro ocurre con los loros y pericos: llamados, vuelos breves y una selva que comienza a despertar.", guacamayos: "Más adelante, los guacamayos llenan el paisaje de color y movimiento. La observación se realiza sin invadir su espacio.", videoEyebrow: "La experiencia en movimiento", videoTitle: "Una mañana entre aves.", videoCopy: "Un único video para acercarte al ambiente de la colpa.", fallback: "Tu navegador no admite video." },
  en: { eyebrow: "Amazonian birds", loros: "The first encounter is with parrots and parakeets: calls, brief flights and a forest beginning to wake.", guacamayos: "Later, macaws fill the landscape with color and movement. Observation takes place without entering their space.", videoEyebrow: "The experience in motion", videoTitle: "A morning among birds.", videoCopy: "One video bringing you closer to the atmosphere of the clay lick.", fallback: "Your browser does not support video." },
  it: { eyebrow: "Uccelli amazzonici", loros: "Il primo incontro è con pappagalli e parrocchetti: richiami, voli brevi e una foresta che si risveglia.", guacamayos: "Poi gli ara riempiono il paesaggio di colori e movimento. L’osservazione avviene senza invadere il loro spazio.", videoEyebrow: "L’esperienza in movimento", videoTitle: "Una mattina tra gli uccelli.", videoCopy: "Un unico video per avvicinarti all’atmosfera della colpa.", fallback: "Il tuo browser non supporta il video." },
  fr: { eyebrow: "Oiseaux amazoniens", loros: "La première rencontre se fait avec perroquets et perruches : appels, vols brefs et forêt qui s’éveille.", guacamayos: "Puis les aras remplissent le paysage de couleurs et de mouvement. L’observation respecte leur espace.", videoEyebrow: "L’expérience en mouvement", videoTitle: "Un matin parmi les oiseaux.", videoCopy: "Une seule vidéo pour découvrir l’atmosphère de la colpa.", fallback: "Votre navigateur ne prend pas en charge la vidéo." },
  "zh-cn": { eyebrow: "亚马逊鸟类", loros: "首先迎来鹦鹉和小型鹦鹉：听见鸣叫与短暂飞行，看雨林逐渐苏醒。", guacamayos: "随后金刚鹦鹉以色彩和飞行点亮景色，在不打扰鸟群的距离观察。", videoEyebrow: "动态体验", videoTitle: "与鸟类共度清晨。", videoCopy: "用一个视频感受鸟类聚集地的氛围。", fallback: "您的浏览器不支持视频。" },
};
const images = [["/img/animales/aves-amazonicas-01.jpg", "/img/animales/aves-amazonicas-02.jpg", "/img/animales/aves-amazonicas-03.jpg"], ["/img/animales/guacamayo.jpg", "/img/animales/aves-amazonicas-04.jpg", "/img/animales/aves-amazonicas-05.jpg"]];

export function ColpaGallery({ language = "es" }) {
  const text = copy[language] || copy.es;
  const sections = [{ title: "Colpa de Loros", copy: text.loros }, { title: "Colpa de Guacamayos", copy: text.guacamayos }];
  return <div className="colpa-story">
    {sections.map((section, index) => <section className="colpa-story-section" key={section.title} aria-labelledby={section.title.replaceAll(" ", "-").toLowerCase()}>
      <div className="colpa-story-heading"><p className="eyebrow dark">{text.eyebrow}</p><h2 id={section.title.replaceAll(" ", "-").toLowerCase()}>{section.title}</h2><p>{section.copy}</p></div>
      <div className="colpa-story-gallery">{images[index].map((image) => <OptimizedImage src={image} alt={section.title} loading="lazy" key={image} width="900" height="675" />)}</div>
    </section>)}
  </div>;
}

export function ColpaVideo({ language = "es" }) {
  const text = copy[language] || copy.es;
  return <section className="colpa-story-video" aria-labelledby="colpa-video-title"><div className="colpa-story-heading"><p className="eyebrow">{text.videoEyebrow}</p><h2 id="colpa-video-title">{text.videoTitle}</h2><p>{text.videoCopy}</p></div><video controls preload="metadata" poster="/img/animales/guacamayo.jpg"><source src="/img/hero-navegacion.mp4" type="video/mp4" />{text.fallback}</video></section>;
}

export default ColpaGallery;
