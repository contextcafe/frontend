"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Scale,
  Shield,
  BookOpen,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Zap,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-600 selection:text-white relative overflow-hidden text-base">
      {/* Background Subtle Radial Orbs */}
      <div className="glow-orb-primary top-[-100px] left-[20%] opacity-50 pointer-events-none" />
      <div className="glow-orb-secondary top-[400px] right-[-100px] opacity-40 pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      {/* Header Bar */}
      <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <nav className="glass-panel rounded-xl px-6 py-3.5 flex items-center justify-between shadow-xs border border-slate-200/80 bg-white/90 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="ContextCafe Logo"
              width={36}
              height={36}
              className="h-9 w-auto"
              priority
            />
            <div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">
                ContextCafe
              </span>
              <p className="text-xs text-slate-500 hidden sm:block font-medium">
                Legal Intelligence Operating System
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <Link href="/advocates" className="hover:text-blue-600 transition-colors">Advocates</Link>
            <Link href="/bare-acts" className="hover:text-blue-600 transition-colors">Bare Acts</Link>
            <a href="#tools" className="hover:text-blue-600 transition-colors">Tools</a>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/advocates">
              <Button variant="glow" size="sm" className="gap-2 text-sm">
                <span>Advocates Portal</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight mb-6">
          Legal Intelligence, <span className="text-gradient-accent">Reimagined for Indian Law</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
          Instant statutory lookup, BNS vs IPC conversion, and precedent analysis — designed with clean precision for advocates, researchers, and legal professionals.
        </p>

        <div className="flex items-center justify-center mb-14">
          <Link href="/advocates">
            <Button size="lg" variant="glow" className="gap-2.5 text-base h-12 px-7 font-bold">
              <BookOpen className="h-5 w-5" />
              <span>Explore Advocates Portal</span>
            </Button>
          </Link>
        </div>

        {/* Clean Interactive Demo Card */}
        <div id="lookup" className="relative max-w-3xl mx-auto">
          <div className="glass-panel rounded-xl p-6 sm:p-8 border border-slate-200/90 shadow-xl text-left bg-white relative overflow-hidden">
            {/* Top Black Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950" />
            {/* Ambient Corner Glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-slate-900/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
              <div className="flex items-center gap-2.5">
                <Image src="/logo.svg" alt="ContextCafe" width={24} height={24} className="h-6 w-auto" />
                <span className="text-sm font-bold text-slate-900">Bare Act & Section Research Engine</span>
              </div>
              <Badge variant="default" className="text-xs">
                Active Legal Index
              </Badge>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  readOnly
                  value="BNS Section 103 — Punishment for Murder (Equivalent: IPC Section 302)"
                  className="w-full h-11 pl-10 pr-4 rounded-lg glass-input text-sm text-slate-900 font-medium bg-slate-50 border border-slate-200"
                />
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/90 space-y-1.5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-blue-600" /> Statutory Provision Summary
                  </span>
                  <span className="text-[11px] font-mono text-slate-700 font-semibold">Bharatiya Nyaya Sanhita 2023</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                  Whoever commits murder shall be punished with death or imprisonment for life, and shall also be liable to fine. Where a group of 5 or more persons acts in concert on grounds of race, caste, or community, each member shall be punished with death or life imprisonment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-200">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-2.5 text-xs">Core Platform</Badge>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Platform Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Capability 1: Legal Converter (Warm Amber/Bronze) */}
          <div className="glass-panel p-6 rounded-xl border border-slate-200/90 bg-white shadow-md hover:border-slate-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
            {/* Top Black Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Ambient Glow */}
            <div className="absolute -top-14 -right-14 w-32 h-32 bg-slate-900/5 rounded-full blur-2xl pointer-events-none group-hover:bg-slate-900/10 transition-colors" />
            
            <div>
              <div className="h-11 w-11 rounded-lg bg-amber-500 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Scale className="h-5.5 w-5.5 stroke-[2.2]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5 tracking-tight">BNS vs IPC Converter</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Instant mapping between new criminal codes (BNS, BSA, BNSS) and legacy provisions.
              </p>
            </div>
          </div>

          {/* Capability 2: Structured Bare Acts (Forest Emerald) */}
          <div className="glass-panel p-6 rounded-xl border border-slate-200/90 bg-white shadow-md hover:border-slate-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
            {/* Top Black Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Ambient Glow */}
            <div className="absolute -top-14 -right-14 w-32 h-32 bg-slate-900/5 rounded-full blur-2xl pointer-events-none group-hover:bg-slate-900/10 transition-colors" />

            <div>
              <div className="h-11 w-11 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <BookOpen className="h-5.5 w-5.5 stroke-[2.2]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5 tracking-tight">Structured Bare Acts</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Browse central and state acts with section provisions, bailability tags, and court jurisdiction.
              </p>
            </div>
          </div>

          {/* Capability 3: Advocate Workspace (Executive Charcoal/Slate) */}
          <div className="glass-panel p-6 rounded-xl border border-slate-200/90 bg-white shadow-md hover:border-slate-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
            {/* Top Black Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Ambient Glow */}
            <div className="absolute -top-14 -right-14 w-32 h-32 bg-slate-900/5 rounded-full blur-2xl pointer-events-none group-hover:bg-slate-900/10 transition-colors" />

            <div>
              <div className="h-11 w-11 rounded-lg bg-slate-900 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Shield className="h-5.5 w-5.5 stroke-[2.2]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1.5 tracking-tight">Advocate Workspace</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Save section briefs, compile argument outlines, and copy formatted court citations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advocates Workspace Section */}
      <section id="workspace" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-200">
        <div className="glass-panel p-7 sm:p-9 rounded-xl border border-slate-200/90 bg-white shadow-xl relative overflow-hidden">
          {/* Top Black Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950" />
          {/* Ambient Corner Glow */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-slate-900/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <Badge variant="default" className="mb-3 text-xs">Advocates Portal</Badge>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Designed for Daily Court Practice</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Fast, reliable access to Indian bare acts and legal provisions without clunky PDFs or distracting ads.
              </p>
              <ul className="space-y-2.5 mb-6">
                <li className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" /> One-click legal citation copy
                </li>
                <li className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" /> Cross-referencing between BNS, BSA, and BNSS
                </li>
                <li className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" /> Mobile & desktop responsive legal library
                </li>
              </ul>
              <Link href="/advocates">
                <Button variant="glow" className="gap-2 text-sm h-11 px-6">
                  <span>Open Advocates Portal</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="ContextCafe Logo" width={32} height={32} className="h-8 w-auto rounded-md" />
                <div>
                  <div className="text-xs font-bold text-slate-900">ContextCafe Advocates Engine</div>
                  <div className="text-[11px] text-slate-500">Legal Intelligence Platform</div>
                </div>
              </div>
              <div className="p-3.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 space-y-1.5">
                <div className="font-semibold text-blue-700 text-sm">Section 63 (BSA 2023)</div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Admissibility of electronic records — replaces Section 65B of the Indian Evidence Act 1872.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Index Section */}
      <section id="tools" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-slate-200">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-2.5 text-xs border-blue-200 text-blue-800 bg-blue-50/60">
            Tool Directory
          </Badge>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Legal & Document Tools Index
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2">
            Modular, fast, and purpose-built utilities for legal drafting, court filings, and research.
          </p>
        </div>

        {/* Modular Tool Cards Index Grid with rich solid backgrounds and top black gradient */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: PDFWorks (Featured Premier Tool) */}
          <div className="glass-panel p-6 sm:p-7 rounded-xl border border-slate-200/90 bg-white shadow-md hover:border-slate-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden">
            {/* Top Black Gradient Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Ambient Background Glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-slate-900/5 rounded-full blur-2xl pointer-events-none group-hover:bg-slate-900/10 transition-colors" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="h-11 w-11 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <FileText className="h-5.5 w-5.5 stroke-[2.2]" />
                </div>
                <Badge variant="glow" className="text-[10px] py-0.5 px-2.5 font-semibold">
                  100% Client-Side
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">
                PDFWorks Suite
              </h3>
              <p className="text-xs font-medium text-slate-500 mb-3">
                Local-First Legal PDF Workspace
              </p>
              <p className="text-slate-600 text-xs leading-relaxed mb-5">
                Compress court petitions under portal limits, merge trial exhibits, extract order pages, and convert photos into clean A4 PDFs with zero server uploads.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["Compress", "Merge", "Split", "Image to PDF", "Organize"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700 group-hover:bg-slate-200/80 group-hover:text-slate-900 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <Link href="/tools/pdf">
                <Button variant="glow" className="w-full gap-2 text-xs h-9.5 font-bold group-hover:bg-blue-700 transition-colors">
                  <span>Launch PDFWorks</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: BNS vs IPC Converter Tool */}
          <div className="glass-panel p-6 sm:p-7 rounded-xl border border-slate-200/90 bg-white shadow-md hover:border-slate-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden">
            {/* Top Black Gradient Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Ambient Background Glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-slate-900/5 rounded-full blur-2xl pointer-events-none group-hover:bg-slate-900/10 transition-colors" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="h-11 w-11 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <Scale className="h-5.5 w-5.5 stroke-[2.2]" />
                </div>
                <Badge variant="outline" className="text-[10px] py-0.5 px-2.5 font-semibold text-indigo-700 bg-indigo-50/60 border-indigo-200/80">
                  Legal Engine
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">
                BNS ⇄ IPC Converter
              </h3>
              <p className="text-xs font-medium text-slate-500 mb-3">
                Criminal Law Section Cross-Mapping
              </p>
              <p className="text-slate-600 text-xs leading-relaxed mb-5">
                Instantly map new Bharatiya Nyaya Sanhita (BNS 2023) provisions against Indian Penal Code (IPC 1860) sections with punishment and bailability data.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["BNS 2023", "IPC 1860", "BNSS / CrPC", "BSA 2023"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700 group-hover:bg-slate-200/80 group-hover:text-slate-900 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <Link href="/advocates">
                <Button variant="outline" className="w-full gap-2 text-xs h-9.5 font-bold border-slate-200 text-slate-800 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-colors">
                  <span>Open Converter</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 3: Bare Act & Section Lookup */}
          <div className="glass-panel p-6 sm:p-7 rounded-xl border border-slate-200/90 bg-white shadow-md hover:border-slate-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden">
            {/* Top Black Gradient Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Ambient Background Glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-slate-900/5 rounded-full blur-2xl pointer-events-none group-hover:bg-slate-900/10 transition-colors" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="h-11 w-11 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <BookOpen className="h-5.5 w-5.5 stroke-[2.2]" />
                </div>
                <Badge variant="outline" className="text-[10px] py-0.5 px-2.5 font-semibold text-emerald-700 bg-emerald-50/60 border-emerald-200/80">
                  Search & Index
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">
                Bare Acts Ingestion
              </h3>
              <p className="text-xs font-medium text-slate-500 mb-3">
                1,200+ Central & State Statutes
              </p>
              <p className="text-slate-600 text-xs leading-relaxed mb-5">
                Clean digital repository of Indian legislation with instantaneous keyword lookup, section provisions, and one-click citation copying for advocates.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["Central Acts", "State Statutes", "One-Click Copy", "Live Stream"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700 group-hover:bg-slate-200/80 group-hover:text-slate-900 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <Link href="/bare-acts">
                <Button variant="outline" className="w-full gap-2 text-xs h-9.5 font-bold border-slate-200 text-slate-800 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-colors">
                  <span>View Ingested Acts</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="relative z-10 border-t border-slate-200 bg-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="ContextCafe Logo" width={28} height={28} className="h-7 w-auto" />
            <span className="font-bold text-slate-900">ContextCafe</span>
            <span>• Legal Intelligence Platform</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/advocates" className="hover:text-slate-900">Advocates Portal</Link>
            <Link href="/bare-acts" className="hover:text-slate-900">Bare Acts</Link>
            <Link href="/tools/pdf" className="text-blue-600 font-semibold">PDF Tools</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
