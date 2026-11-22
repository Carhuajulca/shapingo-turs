import OptimizedImage from "@/components/OptimizedImage";

const stories = [
  ["Embarcar", "La experiencia comienza junto al río.", "Antes de iniciar, el guía comparte las indicaciones de seguridad y presenta la ruta. Es el momento de acomodarse, preparar la cámara y observar cómo el paisaje empieza a abrirse frente al grupo.", "Viajeros durante el embarque en el río Tambopata", "/img/rio-tambopata/embarcar.jpg"],
  ["Navegar", "El bosque se descubre desde el agua.", "Durante el trayecto, las orillas, las playas y el dosel muestran distintas caras de la Amazonía. La velocidad y las pausas se adaptan a las condiciones del río y a lo que aparece en el camino.", "Viajeros navegando al atardecer por el río Tambopata", "/img/rio-tambopata/navegar.png"],
  ["Contemplar", "Cada cambio de luz crea un paisaje diferente.", "El recorrido también invita a guardar silencio y mirar con calma. Los reflejos, el sonido del agua y la amplitud del río convierten la navegación en una experiencia para recordar.", "Atardecer contemplado desde la embarcación", "/img/hero_atardecer_16-9.jpg"],
  ["Observar", "La noche revela otra Amazonía.", "Durante las salidas nocturnas, la luz permite descubrir la vida que se mueve junto a las orillas. Cada avistamiento se realiza con respeto por el entorno y siguiendo las indicaciones del guía.", "Caimán observado en la orilla del río Tambopata durante una salida nocturna", "/img/rio-tambopata/caiman-nocturno.webp"],
  ["Encontrar", "La orilla cobra vida al anochecer.", "Con paciencia y una luz dirigida, es posible observar distintos animales reunidos junto al agua. Los avistamientos dependen de las condiciones de la noche y del ritmo natural de la fauna.", "Fauna nocturna reunida en la orilla del río Tambopata", "/img/rio-tambopata/fauna-nocturna-orilla.webp", "center 61%"],
];

export default function RiverStory() {
  return <div className="encounter-story river-story">
    <section className="encounter-narrative" aria-labelledby="river-story-title">
      <div className="encounter-section-heading"><div><p className="eyebrow dark">Así se vive</p><h2 id="river-story-title">Embarcar. Navegar.<br />Observar.</h2></div><p>Un recorrido visual desde los preparativos hasta esos momentos en los que el río invita a detenerse y observar.</p></div>
      <div className="river-story-grid">
        {stories.map(([eyebrow, title, copy, detail, image, objectPosition], index) => <article className="river-story-card" key={title}>
          <OptimizedImage className="river-story-card-image" src={image} alt={detail} loading="lazy" style={objectPosition ? { objectPosition } : undefined} />
          <div className="river-story-card-copy"><p className="eyebrow dark">0{index + 1} / {eyebrow}</p><h3>{title}</h3><p>{copy}</p></div>
        </article>)}
      </div>
    </section>

    <section className="encounter-video" aria-labelledby="river-video-title">
      <div className="encounter-section-heading"><div><p className="eyebrow">El río en movimiento</p><h2 id="river-video-title">Una travesía para ver.<br />Y escuchar.</h2></div><p>Un vistazo a la navegación, el movimiento del agua y el paisaje que acompaña el recorrido por el río Tambopata.</p></div>
      <div className="encounter-video-list">
        <div className="encounter-video-frame">
          <iframe
            src="https://www.youtube.com/embed/RQLuNMgj_rY"
            title="Video del recorrido por el río Tambopata"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="encounter-video-frame">
          <iframe
            src="https://www.youtube.com/embed/lrFzS3W0vdg"
            title="Segundo video del Safari por el río Tambopata"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>

    <section className="wildlife-observation" aria-labelledby="river-preparation-title">
      <p className="eyebrow dark">Antes de navegar</p><h2 id="river-preparation-title">Prepararse para disfrutar el recorrido.</h2>
      <div className="wildlife-observation-grid">
        <article><span>01</span><h3>Protección personal</h3><p>Lleva protección solar, repelente, sombrero y una prenda ligera para la lluvia según la temporada.</p></article>
        <article><span>02</span><h3>Seguridad a bordo</h3><p>Usa el equipo indicado y sigue las instrucciones del guía durante el embarque y toda la navegación.</p></article>
        <article><span>03</span><h3>Cuidar el río</h3><p>Evita arrojar residuos y disfruta del paisaje sin alterar las orillas ni la vida silvestre.</p></article>
      </div>
    </section>
  </div>;
}
