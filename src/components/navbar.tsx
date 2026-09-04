"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["Work", "/#projects"],
  ["Experience", "/#experience"],
  ["Community", "/#community"],
  ["Skills", "/#skills"],
  ["About", "/#about"],
  ["Contact", "/#contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("nav-open");

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link href="/" className="wordmark" aria-label="Thaventhiran Ramsan, home" onClick={() => setOpen(false)}>
          <span>TR</span> Ramsan
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <a className="nav-cta" href="mailto:ramsandota@gmail.com">
          Let&apos;s talk <span aria-hidden>↗</span>
        </a>
        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
