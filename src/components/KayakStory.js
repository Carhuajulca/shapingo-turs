const videoId = "iQC06gOSKHc";
const copy = {
  es: { eyebrow: "Una mirada desde el agua", title: "Una aventura que se vive remando.", text: "Siente la energía de remar sobre el río, rodeado de selva, cielo abierto y la inmensidad de la Amazonía.", alt: "Paisaje amazónico durante un paseo en kayak" },
  en: { eyebrow: "A view from the water", title: "The river changes your perspective.", text: "Paddling slowly reveals a different way of seeing: reflections, living riverbanks and the forest beside you.", alt: "Amazonian landscape during a kayak outing" },
  it: { eyebrow: "Uno sguardo dall’acqua", title: "Il fiume cambia prospettiva.", text: "Remare con calma apre un modo diverso di guardare: riflessi, rive vive e la foresta che accompagna ogni tratto.", alt: "Paesaggio amazzonico durante un’escursione in kayak" },
  fr: { eyebrow: "Un regard depuis l’eau", title: "La rivière change la perspective.", text: "Pagayer lentement invite à regarder autrement : reflets, rives vivantes et la forêt qui accompagne chaque étape.", alt: "Paysage amazonien pendant une sortie en kayak" },
  "zh-cn": { eyebrow: "从水面看雨林", title: "河流改变观看的角度。", text: "缓缓划行，会看到不一样的景象：水面倒影、生机盎然的河岸与始终相伴的雨林。", alt: "皮划艇体验中的亚马逊景观" },
};

export default function KayakStory({ language = "es" }) {
  const text = copy[language] || copy.es;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&playsinline=1&controls=0&rel=0&modestbranding=1`;
  return <section className="kayak-story" aria-labelledby="kayak-story-title"><div className="kayak-story-heading"><p className="eyebrow dark">{text.eyebrow}</p><h2 id="kayak-story-title">{text.title}</h2><p>{text.text}</p></div><div className="kayak-story-video"><iframe src={embedUrl} title={text.alt} allow="autoplay; encrypted-media; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /><span aria-hidden="true">Agua · bosque · movimiento</span></div></section>;
}
