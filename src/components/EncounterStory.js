const flowers = [
  ["/img/encounter-orchid-red.png", "Flor roja y mariposa entre la vegetación", "Color y vida", "Un encuentro delicado entre la flora y la fauna del entorno."],
  ["/img/encounter-orchid-yellow.png", "Racimo de flores amarillas en la selva", "Flores doradas", "Pequeños detalles que revelan la riqueza del bosque."],
  ["/img/encounter-orchid-pink.png", "Flor rosada entre hojas tropicales", "Entre las hojas", "La diversidad vegetal que acompaña cada recorrido."],
  ["/img/encounter-insects.png", "Insectos en el interior de una rama caída", "Vida en lo pequeño", "Un detalle del bosque que invita a observar con más atención."],
];

export function MediaSpace({ label, detail, video = false }) {
  return <div className={`encounter-placeholder${video ? " encounter-placeholder-video" : ""}`}>
    <span className="encounter-media-symbol" aria-hidden="true">{video ? "▷" : "▧"}</span>
    <strong>{label}</strong><span>{detail}</span>
  </div>;
}

export default function EncounterStory() {
  const videoId = "TA8qdMAbDoY";
  return <div className="encounter-story">
    <section className="encounter-gallery" aria-labelledby="encounter-gallery-title">
      <div className="encounter-section-heading"><div><p className="eyebrow dark">Una mirada al encuentro</p><h2 id="encounter-gallery-title">Detalles que hacen<br />vivo el bosque.</h2></div><p>Flores, colores y pequeños encuentros que acompañan esta experiencia en la Amazonía.</p></div>
      <div className="encounter-gallery-grid">{flowers.map(([image, alt, title, caption]) => <figure key={image}>
        <img className="encounter-gallery-image encounter-gallery-flower" src={image} alt={alt} loading="lazy" />
        <figcaption><strong>{title}</strong><span>{caption}</span></figcaption>
      </figure>)}</div>
    </section>
    <section className="encounter-narrative" aria-labelledby="encounter-story-title">
      <div className="encounter-section-heading"><div><p className="eyebrow dark">Así se vive</p><h2 id="encounter-story-title">Llegar. Compartir.<br />Conectar.</h2></div><p>Un encuentro cercano para escuchar, participar con respeto y descubrir formas de vida que dan identidad al territorio.</p></div>
      {[
        ["Llegar y conocer", "Todo comienza con una bienvenida.", "Una anfitriona comparte un instrumento tradicional y abre la conversación sobre los objetos, las historias y los saberes que forman parte de su vida cotidiana.", "La bienvenida y los anfitriones", "/img/encounter-welcome.png", "Anfitriona local compartiendo un instrumento tradicional"],
        ["Compartir y aprender", "Los detalles también cuentan historias.", "A través de gestos, accesorios y relatos, el encuentro invita a participar con curiosidad y respeto, entendiendo que cada detalle tiene un significado en su contexto.", "Una actividad de la experiencia", "/img/encounter-share-learn.png", "Visitante y anfitriona local compartiendo un momento cultural"],
        ["Conversar y conectar", "Un momento para escuchar y recordar.", "El intercambio se vuelve cercano al compartir tiempo, miradas y experiencias. Es una oportunidad para escuchar directamente a quienes conocen y habitan este territorio.", "Una conversación o momento compartido", "/img/encounter-connect.png", "Visitante compartiendo un momento cultural con una anfitriona local"],
      ].map(([eyebrow, title, copy, image, photo, photoAlt], index) => <article className="encounter-story-row" key={title}>
        {photo ? <img className="encounter-story-image encounter-story-connect" src={photo} alt={photoAlt} loading="lazy" /> : <MediaSpace label="Aquí irá una imagen" detail={image} />}
        <div className="encounter-story-copy"><p className="eyebrow dark">0{index + 1} / {eyebrow}</p><h3>{title}</h3><p>{copy}</p></div>
      </article>)}
    </section>
    <section className="encounter-video" aria-labelledby="encounter-video-title">
      <div className="encounter-section-heading"><div><p className="eyebrow">Más cerca de la experiencia</p><h2 id="encounter-video-title">Una pequeña ventana<br />al encuentro.</h2></div><p>Un espacio para ver los gestos, escuchar las voces y conocer el ambiente de esta vivencia.</p></div>
      <div className="encounter-video-frame"><iframe src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`} title="Video de la experiencia amazónica" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
      <p className="encounter-video-note">Una mirada cercana a los momentos y saberes que se comparten durante el encuentro.</p>
    </section>
  </div>;
}
