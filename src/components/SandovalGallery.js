const photos = [
  { name: "aguajal-canal", width: 1200, height: 1600 },
  { name: "canal-canoa", width: 1600, height: 1200 },
  { name: "salida-lago", width: 1600, height: 1200 },
  { name: "aves-orilla", width: 1200, height: 1600 },
  { name: "orilla-aguajales", width: 1600, height: 1200 },
  { name: "canoa-lago", width: 1600, height: 1200 },
];

const copy = {
  es: {
    eyebrow: "Lago Sandoval en imágenes",
    title: "Del canal estrecho a las aguas abiertas.",
    intro: "Una mirada a los aguajales, los canales y las orillas que acompañan el recorrido.",
    captions: ["Palmeras y agua marcan el comienzo del recorrido.", "La canoa avanza por un paso rodeado de bosque.", "La luz anuncia la llegada al lago.", "La fauna aparece entre la vegetación ribereña.", "Las palmeras se reflejan sobre el agua tranquila.", "La navegación invita a observar el paisaje sin prisa."],
    photos: [
      ["Entre aguajales", "Canal de agua junto a los aguajales en la ruta al Lago Sandoval"],
      ["Navegación por el canal", "Vista desde la proa de una canoa en un canal rodeado de bosque"],
      ["Hacia el lago", "Canoa con visitantes avanzando hacia la salida de un canal del bosque"],
      ["Vida en la orilla", "Ave blanca junto a la vegetación de la orilla del Lago Sandoval"],
      ["Bosque y reflejos", "Aguajales y árboles reflejados en las aguas del Lago Sandoval"],
      ["Un momento en el agua", "Canoa cerca del bosque en las aguas tranquilas del Lago Sandoval"],
    ],
  },
  en: {
    eyebrow: "Sandoval Lake in pictures",
    title: "From narrow channels to open water.",
    intro: "A look at the palm groves, waterways and lakeshore along the journey.",
    captions: ["Palms and water mark the start of the journey.", "The canoe moves through a forested passage.", "Light signals the approach to the lake.", "Wildlife appears along the leafy shore.", "Palm trees reflect on the calm water.", "A quiet ride offers time to take in the scenery."],
    photos: [
      ["Among the palms", "Waterway beside palm trees on the route to Sandoval Lake"],
      ["Through the channel", "View from a canoe bow in a waterway surrounded by rainforest"],
      ["Toward the lake", "Canoe with visitors heading toward the opening of a forest channel"],
      ["Life on the shore", "White waterbird beside vegetation on the shore of Sandoval Lake"],
      ["Forest and reflections", "Palm trees and forest reflected in the waters of Sandoval Lake"],
      ["A moment on the water", "Canoe near the forest on the calm waters of Sandoval Lake"],
    ],
  },
  it: {
    eyebrow: "Il Lago Sandoval in immagini",
    title: "Dai canali stretti alle acque aperte.",
    intro: "Uno sguardo ai palmeti, ai canali e alle rive lungo il percorso.",
    captions: ["Palme e acqua segnano l'inizio del percorso.", "La canoa attraversa un passaggio nel bosco.", "La luce annuncia l'arrivo al lago.", "La fauna appare tra la vegetazione della riva.", "Le palme si riflettono sull'acqua tranquilla.", "La navigazione invita a osservare il paesaggio con calma."],
    photos: [
      ["Tra le palme", "Canale d'acqua tra le palme lungo il percorso verso il Lago Sandoval"],
      ["Navigando nel canale", "Vista dalla prua di una canoa in un canale circondato dalla foresta"],
      ["Verso il lago", "Canoa con visitatori diretta verso l'uscita di un canale nel bosco"],
      ["Vita sulla riva", "Uccello bianco accanto alla vegetazione sulla riva del Lago Sandoval"],
      ["Foresta e riflessi", "Palme e foresta riflesse nelle acque del Lago Sandoval"],
      ["Un momento sull'acqua", "Canoa vicino alla foresta sulle acque calme del Lago Sandoval"],
    ],
  },
  fr: {
    eyebrow: "Le lac Sandoval en images",
    title: "Des canaux étroits aux eaux libres.",
    intro: "Un aperçu des palmiers, des canaux et des rives qui jalonnent le parcours.",
    captions: ["Palmiers et eau marquent le début du trajet.", "Le canoë avance dans un passage bordé de forêt.", "La lumière annonce l'arrivée au lac.", "La faune apparaît dans la végétation riveraine.", "Les palmiers se reflètent dans l'eau calme.", "La navigation invite à contempler le paysage."],
    photos: [
      ["Parmi les palmiers", "Canal bordé de palmiers sur le chemin du lac Sandoval"],
      ["Sur le canal", "Vue depuis la proue d'un canoë dans un canal entouré de forêt"],
      ["Vers le lac", "Canoë avec des visiteurs avançant vers la sortie d'un canal forestier"],
      ["La vie sur la rive", "Oiseau blanc près de la végétation sur la rive du lac Sandoval"],
      ["Forêt et reflets", "Palmiers et forêt reflétés dans les eaux du lac Sandoval"],
      ["Un instant sur l'eau", "Canoë près de la forêt sur les eaux calmes du lac Sandoval"],
    ],
  },
  "zh-cn": {
    eyebrow: "桑多瓦尔湖影像",
    title: "从林间水道到开阔湖面。",
    intro: "沿途的棕榈林、水道与湖岸风光。",
    captions: ["棕榈树与水道开启旅程。", "独木舟穿行于森林环绕的水道。", "前方的光线提示湖面将至。", "湖岸植被间可见野生动物。", "棕榈树倒映在平静的水面。", "放慢船速，欣赏沿途风景。"],
    photos: [
      ["棕榈林间", "通往桑多瓦尔湖的棕榈林水道"],
      ["穿过水道", "从独木舟船头望向雨林环绕的水道"],
      ["驶向湖面", "载着游客的独木舟驶向林间水道出口"],
      ["湖岸生机", "桑多瓦尔湖岸植被旁的白色水鸟"],
      ["森林倒影", "棕榈树与森林倒映在桑多瓦尔湖水中"],
      ["湖上片刻", "独木舟停靠在桑多瓦尔湖的林岸附近"],
    ],
  },
  de: {
    eyebrow: "Sandoval-See in Bildern",
    title: "Von schmalen Kanälen zum offenen See.",
    intro: "Ein Blick auf Palmenhaine, Wasserwege und Ufer entlang der Tour.",
    captions: ["Palmen und Wasser prägen den Beginn der Tour.", "Das Kanu gleitet durch einen bewaldeten Kanal.", "Das Licht kündigt die Ankunft am See an.", "Am grünen Ufer zeigt sich die Tierwelt.", "Palmen spiegeln sich im ruhigen Wasser.", "Die Fahrt lässt Zeit, die Landschaft zu genießen."],
    photos: [
      ["Zwischen den Palmen", "Wasserweg zwischen Palmen auf dem Weg zum Sandoval-See"],
      ["Durch den Kanal", "Blick vom Bug eines Kanus auf einen vom Regenwald umgebenen Kanal"],
      ["Zum See", "Kanu mit Gästen auf dem Weg zum Ausgang eines Waldkanals"],
      ["Leben am Ufer", "Weißer Wasservogel an der bewachsenen Uferzone des Sandoval-Sees"],
      ["Wald und Spiegelungen", "Palmen und Wald spiegeln sich im Wasser des Sandoval-Sees"],
      ["Ein Moment auf dem Wasser", "Kanu nahe dem Wald auf dem ruhigen Sandoval-See"],
    ],
  },
};

export default function SandovalGallery({ language = "es" }) {
  const text = copy[language] || copy.es;

  return (
    <section className="encounter-gallery sandoval-gallery" aria-labelledby="sandoval-gallery-title">
      <div className="encounter-section-heading">
        <div><p className="eyebrow dark">{text.eyebrow}</p><h2 id="sandoval-gallery-title">{text.title}</h2></div>
        <p>{text.intro}</p>
      </div>
      <div className="encounter-gallery-grid">
        {photos.map((photo, index) => {
          const [title, alt] = text.photos[index];
          return (
            <figure key={photo.name}>
              <img
                className="encounter-gallery-image"
                src={`/img/sandoval-gallery/${photo.name}.webp`}
                srcSet={`/img/sandoval-gallery/${photo.name}-small.webp ${Math.round(photo.width * 0.6)}w, /img/sandoval-gallery/${photo.name}.webp ${photo.width}w`}
                sizes="(max-width: 560px) calc(100vw - 40px), (max-width: 840px) 45vw, 30vw"
                alt={alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
              />
              <figcaption><strong>{title}</strong><span>{text.captions[index]}</span></figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
