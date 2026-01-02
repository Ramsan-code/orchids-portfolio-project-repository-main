'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-indigo-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-indigo-500/20">
              <Image
                src="/profile.jpg"
                alt="Ramsan"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold text-xl text-white group-hover:text-indigo-400 transition-colors tracking-tight">
              Ramsan
            </span>
          </Link>

          <nav className="hidden md:flex gap-1 items-center bg-white/5 backdrop-blur-md rounded-full px-1.5 py-1.5 border border-white/10 shadow-inner">
            {[
              { href: '#me', label: 'About' },
              { href: '#education', label: 'Education' },
              { href: '#projects', label: 'Projects' },
              { href: '#skills', label: 'Skills' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-5 py-2 text-zinc-300 hover:text-white transition-all duration-300 font-medium text-sm group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-indigo-500 rounded-full group-hover:w-4 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:flex btn-primary px-6 py-2.5 rounded-full text-white font-semibold text-sm hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 border border-white/10"
          >
            <span>Get in Touch</span>
          </a>

          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/5 animate-fade-in-up">
            <nav className="flex flex-col gap-2">
              {[
                { href: '#me', label: 'About' },
                { href: '#education', label: 'Education' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-zinc-400 hover:text-white hover:bg-white/5 transition-all font-medium py-3 px-4 rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
// initial full project commit
