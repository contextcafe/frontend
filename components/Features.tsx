"use client";

import { useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  {
    num: "01 — Library",
    title: "Bare Act Library",
    body: "A comprehensive, structured repository of Indian bare acts — searchable, cross-referenced, and annotated for instant comprehension without a law dictionary.",
    tag: "Database",
    illustration: "§",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="28" height="36" rx="3" stroke="#7DBEEE" strokeWidth="1.5"/>
        <rect x="12" y="6" width="28" height="36" rx="3" stroke="#7DBEEE" strokeWidth="1.5" opacity="0.4"/>
        <line x1="14" y1="16" x2="30" y2="16" stroke="#7DBEEE" strokeWidth="1.5"/>
        <line x1="14" y1="22" x2="30" y2="22" stroke="#7DBEEE" strokeWidth="1.5"/>
        <line x1="14" y1="28" x2="22" y2="28" stroke="#7DBEEE" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: "02 — Intelligence",
    title: "AI-Assisted Case Tracking",
    body: "Track hearings, judgements, and case timelines with AI that surfaces key precedents, flags critical deadlines, and connects related case law — automatically.",
    tag: "AI-Powered",
    illustration: "⚖",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" stroke="#7DBEEE" strokeWidth="1.5"/>
        <path d="M24 14v10l6 4" stroke="#7DBEEE" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="36" cy="12" r="4" fill="#3d6cff" opacity="0.8"/>
        <circle cx="36" cy="12" r="2" fill="#3d6cff"/>
      </svg>
    ),
  },
  {
    num: "03 — Assistant",
    title: "Smart Legal Chatbot",
    body: "An intelligent assistant trained on Indian law — serving law students, advocates, and researchers with contextual answers, citations, and learning pathways.",
    tag: "For Everyone",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="32" height="22" rx="4" stroke="#7DBEEE" strokeWidth="1.5"/>
        <path d="M16 38l4-6h8l4 6" stroke="#7DBEEE" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="18" cy="21" r="2" fill="#7DBEEE"/>
        <circle cx="24" cy="21" r="2" fill="#7DBEEE"/>
        <circle cx="30" cy="21" r="2" fill="#7DBEEE"/>
      </svg>
    ),
  },
  {
    num: "04 — Reading OS",
    title: "Smart Reading OS",
    body: "AI-powered document handling that reads, annotates, and summarizes legal documents — turning dense legal text into navigable, comprehensible knowledge.",
    tag: "AI-Powered",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="36" height="32" rx="4" stroke="#7DBEEE" strokeWidth="1.5"/>
        <path d="M14 16h20M14 22h16M14 28h12" stroke="#7DBEEE" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M30 30l8 8" stroke="#4499D3" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="30" cy="30" r="5" stroke="#4499D3" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: "05 — Drafting",
    title: "Legal Drafting Tools",
    body: "Generate contracts, agreements, and legal notices with intelligent templates — AI-guided clause selection, language refinement, and jurisdiction-aware formatting.",
    tag: "Drafting Suite",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 36l4-4 18-18 4 4-18 18-8 4z" stroke="#7DBEEE" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M32 10l4 4" stroke="#7DBEEE" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="36" x2="12" y2="40" stroke="#7DBEEE" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Features() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".feat-card");
    const handler = (card: HTMLElement) => (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width * 100).toFixed(1);
      const y = ((e.clientY - r.top) / r.height * 100).toFixed(1);
      card.style.setProperty("--mx", x + "%");
      card.style.setProperty("--my", y + "%");
    };
    const handlers: Array<[HTMLElement, (e: MouseEvent) => void]> = [];
    cards.forEach((card) => {
      const fn = handler(card);
      card.addEventListener("mousemove", fn);
      handlers.push([card, fn]);
    });
    return () => {
      handlers.forEach(([card, fn]) => card.removeEventListener("mousemove", fn));
    };
  }, []);

  return (
    <section className="features" id="features">
      <ScrollReveal>
        <div className="features-header">
          <div>
            <div className="section-label">Core Capabilities</div>
            <h2 className="features-title">
              Five pillars of a<br />
              <em>legal OS</em>
            </h2>
          </div>
          <p className="features-desc">
            Every feature in ContextCafe is engineered for one goal: making legal
            knowledge contextual, interactive, and truly useful — for students,
            professionals, and advocates alike.
          </p>
        </div>
      </ScrollReveal>

      <div className="features-grid">
        {FEATURES.map((f, i) => (
          <ScrollReveal key={i} className="feat-card" delay={0.1 + i * 0.05}>
            <div className="feat-number">{f.num}</div>
            <div className="feat-icon">{f.icon}</div>
            <div className="feat-title">{f.title}</div>
            <p className="feat-body">{f.body}</p>
            <div className="feat-tag">{f.tag}</div>
            {f.illustration && (
              <div className="feat-illustration">{f.illustration}</div>
            )}
            <div className="feat-accent-bar" />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
