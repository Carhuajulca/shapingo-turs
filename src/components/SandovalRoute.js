const steps = [
  ["01", "Puerto Maldonado", "Salida desde un embarcadero turístico de la ciudad de Puerto Maldonado."],
  ["02", "Río Madre de Dios", "Navegación en bote motorizado durante aproximadamente 30 a 45 minutos."],
  ["03", "Ingreso al Lago Sandoval", "Desembarque y caminata de aproximadamente 3 kilómetros por la selva."],
  ["04", "Lago Sandoval", "Recorrido en canoa para observar flora, aves, caimanes y, con suerte, lobos de río."],
];

export default function SandovalRoute() {
  return <section className="sandoval-route" aria-labelledby="sandoval-route-title">
    <div className="sandoval-route-heading"><p className="eyebrow dark">El camino hasta el lago</p><h2 id="sandoval-route-title">Del río al corazón de la selva.</h2><p>El recorrido hacia Lago Sandoval comienza generalmente en Puerto Maldonado y combina navegación, caminata y canoa.</p></div>
    <ol className="sandoval-route-steps">{steps.map(([number, title, copy]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
    <p className="sandoval-route-note">Los tiempos y el recorrido exacto se confirman previamente según las condiciones del río, el clima y la operación del día.</p>
  </section>;
}
