import { MediaSpace } from "@/components/EncounterStory";
import OptimizedImage from "@/components/OptimizedImage";

const gallery = [
  ["Colores entre las ramas", "El plumaje azul, verde y rojo resalta entre el follaje del bosque.", "Ave de plumaje azul y rojo entre la vegetación", "/img/animales/aves-amazonicas-01.jpg"],
  ["Vida entre las copas", "En lo alto, cada rama puede guardar una nueva silueta, un canto o un movimiento.", "Ave de cabeza roja en una rama", "/img/animales/aves-amazonicas-02.jpg"],
  ["Atención en movimiento", "Una pausa silenciosa permite observar a las aves sin interrumpir su propio ritmo.", "Ave rapaz sobre una roca", "/img/animales/aves-amazonicas-03.jpg"],
  ["Pequeños habitantes", "Mirar a distintas alturas revela aves que se mueven cerca del suelo y entre las hojas.", "Ave entre hojas y suelo del bosque", "/img/animales/aves-amazonicas-04.jpg"],
  ["Entre la vegetación", "El follaje funciona como refugio y escenario para una gran diversidad de especies.", "Ave entre ramas y hojas", "/img/animales/aves-amazonicas-05.jpg"],
  ["Un momento de quietud", "Cuando el bosque se aquieta, la observación se convierte en una oportunidad para registrar cada detalle.", "Ave rapaz posada en una rama", "/img/animales/aves-amazonicas-06.jpg"],
];

const stories = [
  ["Escuchar", "El bosque se descubre también con los oídos.", "El guía ayuda a reconocer cantos, llamados y otros sonidos que orientan la mirada hacia las distintas capas del bosque. La escucha atenta suele ser el primer paso antes de un avistamiento.", "El inicio del recorrido y la escucha del bosque", "/img/encounter/mono.jpg"],
  ["Observar", "Una pausa puede revelar algo inesperado.", "Entre hojas, ramas y claros, el recorrido invita a caminar sin prisa. Cada parada permite buscar movimientos y colores sin acercarse ni perturbar a los animales.", "Un momento de observación de fauna a distancia", "/img/encounter/mariposa.jpg"],
  ["Comprender", "Cada encuentro tiene una historia detrás.", "Más allá de una fotografía, la experiencia permite entender la relación entre los animales y su hábitat. El guía comparte contexto sobre el bosque y la importancia de observarlo con respeto.", "El guía compartiendo información sobre el ecosistema", "/img/encounter/guacamayo.jpg"],
];

export default function WildlifeStory() {
  return <div className="encounter-story wildlife-story">
    <section className="encounter-gallery" aria-labelledby="wildlife-gallery-title">
      <div className="encounter-section-heading"><div><p className="eyebrow dark">Una mirada a la vida silvestre</p><h2 id="wildlife-gallery-title">El bosque está lleno<br />de pequeñas historias.</h2></div><p>Colores, sonidos y movimientos. Una galería para acercarte a la experiencia de observar la Amazonía con atención.</p></div>
      <div className="encounter-gallery-grid">{gallery.map(([title, caption, detail, image], index) => <figure key={title}>
        {image ? <OptimizedImage className="encounter-gallery-image" src={image} alt={detail} loading="lazy" /> : <MediaSpace label={`Aquí irá una imagen · ${String(index + 1).padStart(2, "0")}`} detail={detail} />}
        <figcaption><strong>{title}</strong><span>{caption}</span></figcaption>
      </figure>)}</div>
      <p className="wildlife-sighting-note">Cada salida es diferente. Los animales viven en libertad y los avistamientos dependen de la temporada, el clima y su comportamiento natural.</p>
    </section>
    <section className="encounter-narrative" aria-labelledby="wildlife-story-title">
      <div className="encounter-section-heading"><div><p className="eyebrow dark">Así se vive</p><h2 id="wildlife-story-title">Escuchar. Observar.<br />Asombrarse.</h2></div><p>Una forma de explorar el bosque más allá de una lista de especies: con tiempo, guía local y atención a cada señal del entorno.</p></div>
      {stories.map(([eyebrow, title, copy, detail, image], index) => <article className="encounter-story-row" key={title}>
        <OptimizedImage className="encounter-story-image" src={image} alt={detail} loading="lazy" />
        <div className="encounter-story-copy"><p className="eyebrow dark">0{index + 1} / {eyebrow}</p><h3>{title}</h3><p>{copy}</p></div>
      </article>)}
    </section>
    <section className="encounter-video" aria-labelledby="wildlife-video-title">
      <div className="encounter-section-heading"><div><p className="eyebrow">El bosque en movimiento</p><h2 id="wildlife-video-title">Un instante para ver.<br />Y escuchar.</h2></div><p>Una ventana al ambiente del bosque, sus sonidos y los momentos de observación responsable durante el recorrido.</p></div>
      <div className="encounter-video-frame">
        <iframe
          src="https://www.youtube.com/embed/4GYWlYv02g4"
          title="Video de fauna y aves amazónicas"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
    <section className="wildlife-observation" aria-labelledby="wildlife-observation-title">
      <p className="eyebrow dark">Una mirada respetuosa</p><h2 id="wildlife-observation-title">Observar dejando espacio a la naturaleza.</h2>
      <div className="wildlife-observation-grid">
        <article><span>01</span><h3>Mantener la distancia</h3><p>Observar sin acercarse demasiado, perseguir ni bloquear el paso de los animales.</p></article>
        <article><span>02</span><h3>Escuchar al guía</h3><p>Seguir las indicaciones del recorrido y mantener un tono de voz bajo durante la observación.</p></article>
        <article><span>03</span><h3>Respetar su entorno</h3><p>No tocar ni alimentar a la fauna. Disfrutar de los encuentros sin alterar su comportamiento.</p></article>
      </div>
    </section>
  </div>;
}
