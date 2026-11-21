"use client";

import { useEffect, useRef } from "react";
import { relatedTours } from "@/data/tours";
import OptimizedImage from "@/components/OptimizedImage";

export default function RelatedToursCarousel({ current, language = "es", labels, titles }) {
  const trackRef = useRef(null);
  const tours = relatedTours.filter(([slug]) => slug !== current);
  const move = (direction) => trackRef.current?.scrollBy({ left: direction * trackRef.current.clientWidth * 0.78, behavior: "smooth" });

  useEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const carousel = window.setInterval(() => {
      const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 8;
      track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + track.clientWidth / 3 + 16, behavior: "smooth" });
    }, 4500);

    return () => window.clearInterval(carousel);
  }, []);

  return <section className="tour-related">
    <div className="tour-related-heading"><div><p className="eyebrow dark">{labels.eyebrow}</p><h2>{labels.title}</h2></div><div className="tour-related-actions"><button type="button" aria-label="Ver experiencias anteriores" onClick={() => move(-1)}>←</button><button type="button" aria-label="Ver más experiencias" onClick={() => move(1)}>→</button></div></div>
    <div className="tour-related-track" ref={trackRef}>{tours.map(([slug, title, image]) => <a className="tour-related-card" href={`/${language}/tours/${slug}/`} key={slug}><OptimizedImage src={image} alt="" loading="lazy" /><span>{titles?.[slug] || title}</span><b aria-hidden="true">↗</b></a>)}</div>
  </section>;
}
