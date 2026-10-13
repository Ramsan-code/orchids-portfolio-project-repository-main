"use client";

import Image from "next/image";
import { Github, Linkedin, MapPin, RotateCw, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

export function IdCard() {
  const [flipped, setFlipped] = useState(false);
  const userFlipped = useRef(false);
  const frontButton = useRef<HTMLButtonElement>(null);
  const backButton = useRef<HTMLButtonElement>(null);

  // The face being turned away becomes inert, so hand focus to the newly visible flip button.
  useEffect(() => {
    if (!userFlipped.current) return;
    (flipped ? backButton : frontButton).current?.focus({ preventScroll: true });
  }, [flipped]);

  const flip = () => { userFlipped.current = true; setFlipped((current) => !current); };

  return <div className="id-card-wrap">
    <div className={`id-card${flipped ? " flipped" : ""}`}>
      <div className="id-face id-front" inert={flipped} aria-hidden={flipped}>
        <div className="id-top"><span className="id-chip">{profile.initials}</span><span className="id-label">Developer ID</span></div>
        <div className="id-photo"><Image src={profile.portrait} alt={profile.name} fill sizes="(max-width: 700px) 80vw, 300px" /></div>
        <div className="id-body">
          <h3>{profile.name}</h3>
          <p>{profile.role}</p>
          <p className="id-meta"><MapPin aria-hidden /> {profile.location}</p>
        </div>
        <button ref={frontButton} type="button" className="id-flip" onClick={flip} aria-label="Flip card to see stack and links"><RotateCw aria-hidden /> Flip</button>
      </div>
      <div className="id-face id-back" inert={!flipped} aria-hidden={!flipped}>
        <div className="id-top"><span className="id-chip">{profile.initials}</span><span className="id-label">Spec sheet</span></div>
        <div className="id-section"><span className="id-label">Core stack</span><ul>{profile.coreStack.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div className="id-section"><span className="id-label">Focus</span><p>{profile.focus}</p></div>
        <div className="id-section"><span className="id-label">Education</span><p>{profile.education}</p></div>
        <div className="id-links">
          <a href={socials.github} target="_blank" rel="noopener noreferrer"><Github aria-hidden /> GitHub</a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden /> LinkedIn</a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer"><FileText aria-hidden /> Resume</a>
        </div>
        <button ref={backButton} type="button" className="id-flip" onClick={flip} aria-label="Flip card back to the front"><RotateCw aria-hidden /> Flip back</button>
      </div>
    </div>
  </div>;
}
