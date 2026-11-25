import { sandovalExtended } from "@/data/extendedTourLocales";

export default function SandovalGuide({ language = "es" }) {
  const text = sandovalExtended[language] || sandovalExtended.es;
  return (
    <section className="sandoval-guide" aria-labelledby="sandoval-guide-title">
      <div className="sandoval-guide-intro">
        <p className="eyebrow dark">{text.guideEyebrow}</p>
        <h2 id="sandoval-guide-title">{text.guideTitle}</h2>
        {text.guideParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="sandoval-guide-facts">
        <p className="sandoval-guide-label">{text.factsLabel}</p>
        <dl>
          {text.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}
