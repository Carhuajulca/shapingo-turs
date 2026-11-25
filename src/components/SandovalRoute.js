import { sandovalExtended } from "@/data/extendedTourLocales";

export default function SandovalRoute({ language = "es" }) {
  const text = sandovalExtended[language] || sandovalExtended.es;
  return <section className="sandoval-route" aria-labelledby="sandoval-route-title">
    <div className="sandoval-route-heading"><p className="eyebrow dark">{text.routeEyebrow}</p><h2 id="sandoval-route-title">{text.routeTitle}</h2><p>{text.routeIntro}</p></div>
    <ol className="sandoval-route-steps">{text.routeSteps.map(([number, title, copy]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
    <p className="sandoval-route-note">{text.routeNote}</p>
  </section>;
}
