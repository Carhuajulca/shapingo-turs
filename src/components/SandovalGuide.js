const facts = [
  ["Ubicación", "Tambopata, Madre de Dios, Perú"],
  ["Área protegida", "Reserva Nacional Tambopata"],
  ["Ciudad de acceso", "Puerto Maldonado"],
  ["Ecosistema", "Bosque húmedo tropical amazónico"],
  ["Origen", "Lago de meandro abandonado del río Madre de Dios"],
  ["Actividades", "Paseos en canoa, observación de fauna y fotografía"],
  ["Clima", "Tropical, cálido y húmedo"],
];

export default function SandovalGuide() {
  return (
    <section className="sandoval-guide" aria-labelledby="sandoval-guide-title">
      <div className="sandoval-guide-intro">
        <p className="eyebrow dark">Conoce el lugar</p>
        <h2 id="sandoval-guide-title">Lago Sandoval, una joya de la Amazonía peruana.</h2>
        <p>El Lago Sandoval es uno de los atractivos naturales más impresionantes de la Amazonía peruana. Está ubicado en Madre de Dios, cerca de Puerto Maldonado, dentro de la Reserva Nacional Tambopata.</p>
        <p>Sus aguas tranquilas, vegetación tropical y extraordinaria biodiversidad lo convierten en un destino ideal para amantes de la naturaleza, la fotografía y el ecoturismo.</p>
      </div>
      <div className="sandoval-guide-facts">
        <p className="sandoval-guide-label">Datos generales</p>
        <dl>
          {facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}
