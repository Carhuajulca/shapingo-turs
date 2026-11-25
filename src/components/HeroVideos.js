"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
  "/img/hero-tambopata-optimized.mp4",
  "/img/hero-tambopata-safari.mp4",
  "/img/hero-navegacion-hero.mp4",
];

export default function HeroVideos() {
  const refs = [useRef(null), useRef(null), useRef(null)];
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    refs[0].current?.play().catch(() => {});
  }, []);

  function playNextVideo(index) {
    const nextVideo = refs[index].current;
    if (!nextVideo) return;

    nextVideo.currentTime = 0;
    setActiveVideo(index);
    nextVideo.load();
    nextVideo.play().catch(() => {});
  }

  return (
    <>
      {videos.map((video, index) => (
        <video
          key={video}
          ref={refs[index]}
          className={`hero-video${activeVideo === index ? " is-active" : ""}`}
          muted
          autoPlay={index === 0}
          playsInline
          preload={index === 0 ? "metadata" : "none"}
          poster="/img/hero-tambopata-poster.webp"
          aria-hidden="true"
          onEnded={() => playNextVideo((index + 1) % videos.length)}
        >
          <source src={video} type="video/mp4" />
        </video>
      ))}
    </>
  );
}
