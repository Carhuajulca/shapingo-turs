import OptimizedImage from "@/components/OptimizedImage";

const images = ["/img/lago-yacumama-navegacion.webp", "/img/lago-yacumama-pesca.webp", "/img/lago-yacumama-paisaje.webp"];

const copy = {
  de: { eyebrow: "Das Erlebnis am See", title: "Ruhig fahren. Zum Angeln anhalten.", intro: "Entdecken Sie den Yacumama-See vom Wasser aus: zwischen Palmen, Wasserpflanzen und Spiegelungen.", scenes: [["01", "Die Landschaft erkunden", "Steigen Sie ins Boot und fahren Sie mit dem Guide durch die Kanäle. Palmen, Seerosen und das Leben am Wasser werden sichtbar.", "Gäste im Boot auf dem Yacumama-See"], ["02", "Angelpause", "Versuchen Sie sich an einem geeigneten Ort im Freizeitangeln. Ob ein Fang gelingt, hängt von den Bedingungen ab.", "Gast mit einem Fisch am Yacumama-See"], ["03", "Den See erneut betrachten", "Nach dem Angeln geht die Fahrt zwischen Seerosen und Palmen weiter. Genießen Sie die Landschaft und ihre Geräusche.", "Seerosen und Palmen am Yacumama-See"]], closing: "Nach der Angelpause bleibt Zeit, die Landschaft und die Pflanzenwelt in Ruhe zu erleben." },
  es: {
    eyebrow: "La experiencia en el lago",
    title: "Navegar despacio. Detenerse a pescar.",
    intro: "Lago Yacumama se descubre desde el agua: un recorrido entre palmeras, plantas acuáticas y reflejos que invita a bajar el ritmo y mirar con atención.",
    scenes: [
      ["01", "Entrar en el paisaje", "Sube al bote y avanza por los canales del lago. Mientras el guía conduce el recorrido, aparecen los aguajales, los nenúfares y las distintas formas de vida que rodean el agua.", "Visitantes navegando en bote por Lago Yacumama"],
      ["02", "Una pausa para pescar", "En un lugar adecuado, llega el momento de intentar la pesca recreativa y disfrutar de la calma del lago. La actividad se coordina según las condiciones del día; la captura no está garantizada.", "Visitante mostrando un pez durante la pesca en Lago Yacumama"],
      ["03", "Volver a mirar el lago", "Después de la pesca, el paseo continúa entre reflejos, nenúfares y palmeras. Hay tiempo para contemplar el paisaje y escuchar la vida que lo rodea.", "Nenúfares y palmeras en Lago Yacumama"],
    ],
    closing: "Después de la pesca, el paseo continúa entre reflejos y vegetación. Cada visita tiene su propio ritmo y deja tiempo para observar el paisaje sin prisa.",
  },
  en: {
    eyebrow: "The lake experience", title: "Cruise slowly. Pause to fish.",
    intro: "Yacumama Lake is discovered from the water: a journey among palms, aquatic plants and reflections that invites you to slow down and look closely.",
    scenes: [["01", "Enter the landscape", "Board the boat and travel along the lake’s channels. As your guide leads the way, palms, water lilies and the life around the water come into view.", "Visitors boating on Yacumama Lake"], ["02", "Pause for fishing", "At a suitable spot, try recreational fishing and enjoy the lake’s calm. The activity depends on the day’s conditions; a catch is not guaranteed.", "Visitor holding a fish during the Yacumama Lake outing"], ["03", "Look across the lake again", "After fishing, continue among reflections, water lilies and palms, with time to take in the landscape and its sounds.", "Water lilies and palms at Yacumama Lake"]],
    closing: "After fishing, the journey continues among reflections and vegetation, with time to enjoy the landscape at an unhurried pace.",
  },
  it: {
    eyebrow: "L’esperienza sul lago", title: "Navigare piano. Fermarsi a pescare.",
    intro: "Il Lago Yacumama si scopre dall’acqua, tra palme, piante acquatiche e riflessi che invitano a rallentare e osservare.",
    scenes: [["01", "Entrare nel paesaggio", "Sali in barca e percorri i canali del lago. Con la guida, scopri palme, ninfee e la vita che circonda l’acqua.", "Visitatori in barca sul Lago Yacumama"], ["02", "Una pausa per pescare", "In un luogo adatto puoi provare la pesca ricreativa e goderti la calma del lago. L’attività dipende dalle condizioni del giorno; la cattura non è garantita.", "Visitatore con un pesce durante l’uscita al Lago Yacumama"], ["03", "Guardare di nuovo il lago", "Dopo la pesca, prosegui tra riflessi, ninfee e palme, con tempo per ammirare il paesaggio e ascoltarne i suoni.", "Ninfee e palme al Lago Yacumama"]],
    closing: "Dopo la pesca, il percorso continua tra riflessi e vegetazione, con tempo per osservare il paesaggio senza fretta.",
  },
  fr: {
    eyebrow: "L’expérience sur le lac", title: "Naviguer doucement. S’arrêter pour pêcher.",
    intro: "Le lac Yacumama se découvre depuis l’eau, parmi les palmiers, les plantes aquatiques et les reflets qui invitent à ralentir et observer.",
    scenes: [["01", "Entrer dans le paysage", "Montez à bord et parcourez les chenaux du lac. Avec le guide, découvrez les palmiers, les nénuphars et la vie qui entoure l’eau.", "Visiteurs en bateau sur le lac Yacumama"], ["02", "Une pause pour pêcher", "À un endroit adapté, essayez la pêche de loisir et profitez du calme du lac. L’activité dépend des conditions du jour ; une prise n’est pas garantie.", "Visiteur tenant un poisson pendant la sortie au lac Yacumama"], ["03", "Regarder à nouveau le lac", "Après la pêche, poursuivez entre reflets, nénuphars et palmiers, avec le temps d’admirer le paysage et d’écouter ses sons.", "Nénuphars et palmiers du lac Yacumama"]],
    closing: "Après la pêche, la promenade continue entre reflets et végétation, avec le temps d’admirer le paysage sans se presser.",
  },
  "zh-cn": {
    eyebrow: "湖上体验", title: "慢慢行船，停下来体验垂钓。",
    intro: "从水上探访亚库玛玛湖，在棕榈树、水生植物与倒影之间放慢脚步，细看湖边风景。",
    scenes: [["01", "驶入湖光之中", "乘船穿行于湖上水道，在向导带领下欣赏棕榈树、睡莲和水边的自然景象。", "游客乘船游览亚库玛玛湖"], ["02", "停船体验垂钓", "在适合的地点尝试休闲垂钓，享受湖上的宁静。活动视当天条件安排，不能保证钓到鱼。", "游客在亚库玛玛湖展示钓到的鱼"], ["03", "再次欣赏湖景", "垂钓之后，继续穿行于倒影、睡莲和棕榈树之间，放慢脚步欣赏湖上风景。", "亚库玛玛湖的睡莲与棕榈树"]],
    closing: "垂钓之后，继续穿行于倒影与绿意之间，悠闲地欣赏湖上景色。",
  },
};

export default function YacumamaStory({ language = "es" }) {
  const text = copy[language] || copy.es;
  return <section className="collpa-loros-story yacumama-story" aria-labelledby="yacumama-story-title">
    <div className="collpa-loros-heading"><p className="eyebrow dark">{text.eyebrow}</p><h2 id="yacumama-story-title">{text.title}</h2><p>{text.intro}</p></div>
    <div className="yacumama-scenes">{text.scenes.map(([number, title, detail, alt], index) => <article className="encounter-story-row" key={number}>
      <div className="yacumama-photo"><OptimizedImage src={images[index]} alt={alt} loading="lazy" width={index === 1 ? "1200" : "1600"} height={index === 1 ? "1600" : "1200"} /></div>
      <div className="encounter-story-copy"><p className="eyebrow dark">{number} / {text.eyebrow}</p><h3>{title}</h3><p>{detail}</p></div>
    </article>)}</div>
    <p className="yacumama-closing">{text.closing}</p>
  </section>;
}
