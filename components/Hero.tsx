"use client";

import { useEffect, useRef } from "react";

const TERMS = [
  "§ IPC", "Art. 21", "Habeas Corpus", "Mens Rea", "Ratio Decidendi",
  "Obiter Dicta", "§ CrPC", "Locus Standi", "Sub Judice", "Amicus Curiae",
  "Ex Parte", "Prima Facie", "Actus Reus", "§ IEA",
];

function Particles() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    TERMS.forEach((term, i) => {
      const el = document.createElement("div");
      el.className = "particle";
      el.textContent = term;
      el.style.left = (5 + Math.random() * 88) + "%";
      el.style.animationDelay = (i * 1.5) + "s";
      el.style.animationDuration = (16 + Math.random() * 12) + "s";
      container.appendChild(el);
    });
    return () => { container.innerHTML = ""; };
  }, []);

  return <div className="legal-particles" ref={ref} />;
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <Particles />

      <div className="hero-eyebrow">AI-Native Legal Intelligence Platform</div>

      <h1 className="hero-title">
        Where Law Meets<br />
        <em>Living Intelligence</em>
      </h1>

      <p className="hero-sub">
        We transform static legal documents into an intelligent legal operating
        system — structured, interactive, contextual, and built for the future
        of law.
      </p>

      <div className="hero-cta-group">
        <a href="#features" className="btn-primary" id="cta-explore">
          Explore Platform
        </a>
        <a
          href="https://blog.contextcafe.com"
          className="btn-ghost"
          id="cta-articles"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Articles →
        </a>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
