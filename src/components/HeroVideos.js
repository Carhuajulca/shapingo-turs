"use client";

import { useEffect, useRef } from "react";

const video = "/img/hero-tambopata-optimized.mp4";

export default function HeroVideos() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video is-active"
      muted
      autoPlay
      loop
      playsInline
      preload="metadata"
      poster="/img/hero-tambopata-poster.webp"
      aria-hidden="true"
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}
