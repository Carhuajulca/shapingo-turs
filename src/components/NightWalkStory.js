import { MediaSpace } from "@/components/EncounterStory";

const gallery = [
  ["La última luz", "El río queda en calma mientras los últimos colores del día dan paso a la noche.", "Atardecer sobre el río amazónico", "/img/night-walk/ultima-luz.jpg"],
  ["El recorrido de noche", "Con linternas y acompañamiento local, el grupo avanza despacio para escuchar y observar el bosque.", "Caminata nocturna guiada", "/img/night-walk/recorrido-noche.jpg"],
  ["Un brillo entre la corteza", "La luz revela pequeños habitantes y texturas que durante el día suelen pasar desapercibidos.", "Pequeño habitante del bosque iluminado sobre la corteza", "/img/night-walk/pequenos-detalles-03.jpg"],
  ["Vida nocturna", "Un pequeño mamífero descansa entre las ramas; los encuentros dependen siempre del ritmo natural de la fauna.", "Pequeño mamífero nocturno entre las ramas", "/img/night-walk/vida-nocturna.jpg"],
  ["Una serpiente entre las sombras", "La fauna se observa a distancia y con la guía adecuada, sin alterar el entorno ni su comportamiento.", "Serpiente amazónica observada durante una caminata nocturna", "/img/night-walk/entre-hojas-sombras.jpg"],
  ["Flores que despiertan de noche", "Incluso en la oscuridad, las flores y hojas del bosque revelan formas y colores inesperados.", "Flor tropical iluminada durante el recorrido nocturno", "/img/night-walk/pausa-para-escuchar.jpg"],
];

const stories = [
  ["Prepararse", "La aventura empieza antes del primer paso.", "Antes de ingresar al bosque, el guía presenta la ruta, revisa el equipo y comparte las indicaciones para caminar con seguridad. Linterna, cámara y atención a los detalles: todo queda listo para comenzar.", "Viajero equipado con linterna y cámara antes de la caminata nocturna", "/img/night-walk/prepararse.png"],
  ["Explorar", "La noche cambia la forma de mirar.", "Con la luz del guía, el grupo avanza con calma entre grandes árboles y raíces. Cada tramo revela nuevos sonidos, texturas y señales de un bosque que despierta cuando cae el sol.", "Viajero y guía durante una caminata nocturna junto a un árbol amazónico", "/img/night-walk/explorar.jpg"],
  ["Descubrir", "Detenerse también es parte del viaje.", "Una pausa y una luz bien dirigida pueden revelar la vida que se mueve entre las hojas. El guía ayuda a observar sin invadir el entorno, dejando que cada encuentro ocurra a su propio ritmo.", "Pequeño mamífero nocturno observado entre la vegetación", "/img/night-walk/descubrir.png"],
];

export default function NightWalkStory() {
  return <div className="encounter-story night-walk-story">
    <section className="encounter-gallery" aria-labelledby="night-gallery-title">
      <div className="encounter-section-heading"><div><p className="eyebrow dark">Cuando cae la noche</p><h2 id="night-gallery-title">El mismo bosque.<br />Otra forma de descubrirlo.</h2></div><p>Sombras, sonidos y pequeños detalles. Un primer vistazo a la caminata nocturna por la Amazonía, a pie o desde el agua.</p></div>
      <div className="encounter-gallery-grid">{gallery.map(([title, caption, detail, image], index) => <figure key={title}>
        {image ? <img className="encounter-gallery-image" src={image} alt={detail} loading="lazy" /> : <MediaSpace label={`Aquí irá una imagen · ${String(index + 1).padStart(2, "0")}`} detail={detail} />}
        <figcaption><strong>{title}</strong><span>{caption}</span></figcaption>
      </figure>)}</div>
      <p className="wildlife-sighting-note">Cada noche es diferente. La ruta depende del clima y del estado del sendero. Los animales viven en libertad y los avistamientos no están garantizados.</p>
    </section>
    <section className="encounter-narrative" aria-labelledby="night-story-title">
      <div className="encounter-section-heading"><div><p className="eyebrow dark">Así se vive</p><h2 id="night-story-title">Buscar. Escuchar.<br />Descubrir.</h2></div><p>Una propuesta de relato para imaginar el safari: desde la preparación hasta las pausas para observar el entorno.</p></div>
      {stories.map(([eyebrow, title, copy, detail, image], index) => <article className="encounter-story-row" key={title}>
        {image ? <img className="encounter-story-image" src={image} alt={detail} loading="lazy" /> : <MediaSpace label="Aquí irá una imagen" detail={detail} />}
        <div className="encounter-story-copy"><p className="eyebrow dark">0{index + 1} / {eyebrow}</p><h3>{title}</h3><p>{copy}</p></div>
      </article>)}
    </section>
    <section className="encounter-video" aria-labelledby="night-video-title">
      <div className="encounter-section-heading"><div><p className="eyebrow">La noche en movimiento</p><h2 id="night-video-title">Una ventana a los<br />sonidos de la selva.</h2></div><p>Aquí irá un video del recorrido nocturno, con imágenes del sendero y sonidos del lugar para acercarte al ambiente de la experiencia.</p></div>
      <div className="encounter-video-frame">
        <iframe
          src="https://www.youtube.com/embed/t36y9SSUqqA"
          title="Video de la caminata nocturna en la Amazonía"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
    <section className="wildlife-observation" aria-labelledby="night-preparation-title">
      <p className="eyebrow dark">Antes de vivirla</p><h2 id="night-preparation-title">Prepararse para disfrutar cada paso.</h2>
      <div className="wildlife-observation-grid">
        <article><span>01</span><h3>Ropa y calzado</h3><p>Usa ropa adecuada para el bosque y calzado cerrado. Confirma con el equipo las recomendaciones según las condiciones del sendero.</p></article>
        <article><span>02</span><h3>Luz y acompañamiento</h3><p>Consulta qué iluminación debes llevar y si está incluida. Durante el safari, permanece con el grupo o en el bote y sigue las indicaciones del guía.</p></article>
        <article><span>03</span><h3>Una visita respetuosa</h3><p>Observa a distancia, sin tocar ni alimentar animales. Sigue las indicaciones del guía sobre el uso de la luz y la fotografía.</p></article>
      </div>
    </section>
  </div>;
}
