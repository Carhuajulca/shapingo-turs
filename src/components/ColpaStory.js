import OptimizedImage from "@/components/OptimizedImage";

const images = ["/img/collpa-guacamayos-01.webp", "/img/collpa-guacamayos-02.webp"];
const copy = {
  de: { eyebrow: "Das Erlebnis Schritt für Schritt", title: "Ein Morgen voller Farben und Flugbewegungen.", intro: "Der Besuch der Ara-Lehmlecke beginnt vor Sonnenaufgang. Am Beobachtungsplatz warten Sie auf die ersten Rufe der Vögel.", moments: [["01", "Vor Sonnenaufgang aufbrechen", "Die frühe Abfahrt ermöglicht die Ankunft vor der Hauptaktivität der Vögel. Die genaue Uhrzeit hängt von der Route ab."], ["02", "Zur Lehmlecke fahren", "Der Weg kann Bootsfahrt und Landweg verbinden. Ihr Guide erklärt die Umgebung und die Regeln für die Beobachtung."], ["03", "Leise warten", "Die Gruppe bleibt in geeignetem Abstand. Oft hört man die Aras, bevor sie über dem Wald erscheinen."], ["04", "Die Begegnung genießen", "Aras kommen einzeln, paarweise oder in Gruppen und füllen die Landschaft mit Farben und Rufen."]], noteTitle: "Die Natur bestimmt den Ablauf.", note: "Zahl und Aufenthaltsdauer der Aras hängen von Jahreszeit, Wetter und Nahrung ab. Sichtungen sind nicht garantiert.", alts: ["Aras an der Lehmwand", "Aras am Morgen an der Lehmlecke"] },
  es: {
    eyebrow: "La experiencia, paso a paso", title: "Una mañana marcada por el vuelo y el color.",
    intro: "Visitar la Collpa de Guacamayos es comenzar el día antes del amanecer, avanzar hacia el punto de observación y esperar a que los primeros llamados anuncien uno de los encuentros más intensos de la Amazonía.",
    moments: [["01", "Salir antes del amanecer", "La jornada comienza de madrugada para llegar antes del momento de mayor actividad. El horario exacto se coordina según la ruta y las condiciones del día."], ["02", "Recorrer el camino hacia la collpa", "El traslado puede combinar navegación y recorrido terrestre. Durante el trayecto, el guía presenta el entorno y las indicaciones para una observación responsable."], ["03", "Esperar en silencio", "Desde una distancia adecuada, el grupo se instala y permanece atento. Los llamados suelen escucharse antes de que los guacamayos aparezcan sobre el bosque."], ["04", "Contemplar el encuentro", "Los guacamayos llegan en parejas o grupos, vuelan alrededor de la pared de arcilla y llenan el paisaje de sonido y color mientras el guía explica su comportamiento."]],
    noteTitle: "La naturaleza decide el ritmo de cada visita.", note: "La cantidad de guacamayos y el tiempo que permanecen en la collpa varían según la temporada, el clima y la disponibilidad natural de alimento. Los avistamientos nunca pueden garantizarse.",
    alts: ["Guacamayos reunidos en la pared de arcilla de la collpa", "Grupo de guacamayos durante la actividad matutina en la collpa"],
  },
  en: {
    eyebrow: "The experience, step by step", title: "A morning shaped by flight and color.",
    intro: "Visiting the Macaw Clay Lick means beginning before sunrise, traveling to the observation point and waiting for the first calls to announce one of the Amazon’s most vivid encounters.",
    moments: [["01", "Leave before sunrise", "The day begins early to arrive before the period of greatest activity. The exact time is arranged according to the route and current conditions."], ["02", "Travel toward the clay lick", "The journey may combine navigation and an overland route. Your guide introduces the environment and explains responsible observation."], ["03", "Wait in silence", "The group settles at a suitable distance and watches attentively. Calls are often heard before the macaws appear above the forest."], ["04", "Take in the encounter", "Macaws arrive in pairs or groups, circle the clay wall and fill the landscape with sound and color while your guide explains their behavior."]],
    noteTitle: "Nature sets the pace of every visit.", note: "The number of macaws and the time they remain at the clay lick vary with season, weather and natural food availability. Sightings can never be guaranteed.",
    alts: ["Macaws gathered on the clay wall", "Group of macaws during morning activity at the clay lick"],
  },
  it: {
    eyebrow: "L’esperienza, passo dopo passo", title: "Una mattina segnata dal volo e dal colore.",
    intro: "Visitare la Collpa degli Ara significa partire prima dell’alba, raggiungere il punto di osservazione e attendere che i primi richiami annuncino uno degli incontri più vivi dell’Amazzonia.",
    moments: [["01", "Partire prima dell’alba", "La giornata inizia molto presto per arrivare prima del momento di maggiore attività. L’orario dipende dal percorso e dalle condizioni."], ["02", "Raggiungere la collpa", "Il trasferimento può combinare navigazione e percorso terrestre. La guida presenta l’ambiente e le regole per un’osservazione responsabile."], ["03", "Attendere in silenzio", "Il gruppo si sistema a una distanza adeguata. Spesso i richiami si sentono prima che gli ara appaiano sopra la foresta."], ["04", "Contemplare l’incontro", "Gli ara arrivano in coppia o in gruppo, volano intorno alla parete d’argilla e riempiono il paesaggio di suoni e colori."]],
    noteTitle: "La natura decide il ritmo di ogni visita.", note: "Il numero di ara e il tempo trascorso alla collpa cambiano secondo stagione, clima e disponibilità naturale di cibo. Gli avvistamenti non sono garantiti.",
    alts: ["Ara riunite sulla parete d’argilla", "Gruppo di ara durante l’attività mattutina alla collpa"],
  },
  fr: {
    eyebrow: "L’expérience, étape par étape", title: "Une matinée rythmée par le vol et les couleurs.",
    intro: "Visiter la Collpa des Aras, c’est partir avant l’aube, rejoindre le point d’observation et attendre que les premiers cris annoncent l’une des rencontres les plus vivantes d’Amazonie.",
    moments: [["01", "Partir avant le lever du soleil", "La journée commence très tôt afin d’arriver avant le pic d’activité. L’horaire dépend du parcours et des conditions."], ["02", "Rejoindre la collpa", "Le trajet peut combiner navigation et parcours terrestre. Le guide présente le milieu et les règles d’une observation responsable."], ["03", "Attendre en silence", "Le groupe s’installe à bonne distance. Les cris se font souvent entendre avant que les aras apparaissent au-dessus de la forêt."], ["04", "Contempler la rencontre", "Les aras arrivent en couple ou en groupe, survolent la paroi d’argile et remplissent le paysage de sons et de couleurs."]],
    noteTitle: "La nature détermine le rythme de chaque visite.", note: "Le nombre d’aras et leur temps de présence varient selon la saison, la météo et les ressources alimentaires naturelles. Les observations ne sont jamais garanties.",
    alts: ["Aras réunis sur la paroi d’argile", "Groupe d’aras pendant l’activité matinale à la collpa"],
  },
  "zh-cn": {
    eyebrow: "体验流程", title: "一个被飞翔与色彩点亮的清晨。",
    intro: "探访金刚鹦鹉盐碱地，需要在日出前出发、前往观察地点，并等待第一声鸣叫宣告亚马逊最鲜活的自然相遇之一。",
    moments: [["01", "日出前出发", "清晨很早启程，以便在鸟类活动最频繁之前抵达。具体时间会根据路线与当天条件确认。"], ["02", "前往盐碱地", "行程可能结合水上航行与陆路移动。向导会介绍环境，并说明负责任观察的注意事项。"], ["03", "安静等待", "团队会在合适距离安顿下来。通常先听到鸣叫，随后才看到金刚鹦鹉飞越森林。"], ["04", "感受鸟群相遇", "金刚鹦鹉成对或成群出现，在黏土崖壁周围飞翔，以声音与色彩点亮整个景观。"]],
    noteTitle: "每次探访的节奏都由自然决定。", note: "金刚鹦鹉的数量和停留时间会随季节、天气与自然食物供应变化，无法保证每次都能观察到鸟群。",
    alts: ["聚集在黏土崖壁上的金刚鹦鹉", "清晨在盐碱地活动的金刚鹦鹉群"],
  },
};

export default function CollpaGuacamayosStory({ language = "es" }) {
  const text = copy[language] || copy.es;
  return <section className="collpa-loros-story collpa-guacamayos-story" aria-labelledby="collpa-guacamayos-story-title">
    <div className="collpa-loros-heading"><p className="eyebrow dark">{text.eyebrow}</p><h2 id="collpa-guacamayos-story-title">{text.title}</h2><p>{text.intro}</p></div>
    <div className="collpa-loros-moments">{text.moments.slice(0, 2).map(([number, title, detail]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
    <div className="collpa-guacamayos-scenes">{images.map((image, index) => {
      const [number, title, detail] = text.moments[index + 2];
      return <article className="encounter-story-row" key={image}>
        <div className="collpa-guacamayos-photo"><OptimizedImage src={image} alt={text.alts[index]} loading="lazy" width="1200" height="1600" /></div>
        <div className="encounter-story-copy"><p className="eyebrow dark">{number} / {text.eyebrow}</p><h3>{title}</h3><p>{detail}</p></div>
      </article>;
    })}</div>
    <aside className="collpa-loros-note"><h3>{text.noteTitle}</h3><p>{text.note}</p></aside>
  </section>;
}
