"use client";

import Image from "next/image";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type VideoSource = { src: string; type: string };
type HeroMediaProps = { portrait: string; alt: string; sources?: readonly VideoSource[] | null; poster?: string; hasSound?: boolean };

export function HeroMedia({ portrait, alt, sources, poster, hasSound = false }: HeroMediaProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const showVideo = Boolean(sources?.length) && !videoFailed;

  useEffect(() => {
    const video = videoRef.current;
    const frame = frameRef.current;
    if (!showVideo || !video || !frame) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const play = () => video.play().catch(() => {});

    // Browsers only allow muted autoplay; visitors opt into sound with the toggle.
    video.muted = true;
    if (!reduceMotion) play();

    // Pause while the hero is mostly off screen so the video doesn't burn CPU/battery.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio < 0.25 && !video.paused) {
        video.pause();
      } else if (entry.intersectionRatio >= 0.35 && video.paused && !reduceMotion) {
        play();
      }
    }, { threshold: [0, 0.25, 0.35, 0.6, 1] });
    observer.observe(frame);
    return () => observer.disconnect();
  }, [showVideo]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted && video.paused) video.play().catch(() => {});
  };

  return <div ref={frameRef} className={`portrait-frame${showVideo ? " has-video" : ""}`}>
    {showVideo ? <>
      <video
        ref={videoRef}
        className="portrait"
        poster={poster ?? portrait}
        playsInline
        loop
        muted={muted}
        preload="metadata"
        aria-label={`Introduction video: ${alt}`}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setVideoFailed(true)}
      >
        {/* Only the last source failing means no format worked, so fall back to the photo then. */}
        {sources!.map((source, index) => <source key={source.src} src={source.src} type={source.type} onError={index === sources!.length - 1 ? () => setVideoFailed(true) : undefined} />)}
      </video>
      <div className="video-controls">
        <div className="video-buttons">
          <button type="button" onClick={togglePlay} aria-label={playing ? "Pause introduction video" : "Play introduction video"}>
            {playing ? <Pause aria-hidden /> : <Play aria-hidden />}
          </button>
          {hasSound && <button type="button" className="sound" onClick={toggleSound} aria-pressed={!muted} aria-label={muted ? "Turn sound on" : "Turn sound off"}>
            {muted ? <VolumeX aria-hidden /> : <Volume2 aria-hidden />}<span>{muted ? "Sound off" : "Sound on"}</span>
          </button>}
        </div>
      </div>
    </> : <Image src={portrait} alt={alt} fill priority sizes="(max-width: 900px) 72vw, 36vw" className="portrait" />}
  </div>;
}
