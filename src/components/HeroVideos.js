"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
  "/img/hero-tambopata-optimized.mp4",
  "/img/hero-rio.mp4",
  "/img/hero-navegacion.mp4",
];

export default function HeroVideos() {
  const refs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const current = refs.current[active];
    current?.play().catch(() => {});
    const timer = window.setTimeout(() => {
      current?.pause();
      setActive((value) => (value + 1) % videos.length);
    }, 9000);
    return () => window.clearTimeout(timer);
  }, [active]);

  return videos.map((src, index) => (
    <video
      key={src}
      ref={(element) => { refs.current[index] = element; }}
      className={`hero-video${active === index ? " is-active" : ""}`}
      muted
      playsInline
      preload={index === 0 ? "metadata" : "none"}
      poster={index === 0 ? "/img/hero-tambopata-poster.webp" : undefined}
      aria-hidden="true"
      onEnded={() => setActive((value) => (value + 1) % videos.length)}
    >
      <source src={src} type="video/mp4" />
    </video>
  ));
}
