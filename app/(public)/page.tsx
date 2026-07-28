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
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-600 selection:text-white relative overflow-hidden text-base">
      {/* Background Subtle Radial Orbs */}
      <div className="glow-orb-primary top-[-100px] left-[20%] opacity-60 pointer-events-none" />
      <div className="glow-orb-secondary top-[400px] right-[-100px] opacity-50 pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />

      {/* Header Bar */}
      <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <nav className="glass-panel rounded-2xl px-7 py-4 flex items-center justify-between shadow-xs border border-slate-200/80 bg-white/90 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-3.5">
            <Image
              src="/logo.svg"
              alt="ContextCafe Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <div>
              <span className="font-bold text-xl text-slate-900 tracking-tight flex items-center gap-2.5">
                ContextCafe
                <Badge variant="glow" className="text-xs py-0.5 px-2.5">
                  v2.0.0
                </Badge>
              </span>
              <p className="text-xs text-slate-500 hidden sm:block font-medium">Legal Intelligence Operating System</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-9 text-base font-medium text-slate-700">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#workspace" className="hover:text-blue-600 transition-colors">Advocates Workspace</a>
            <a href="#lookup" className="hover:text-blue-600 transition-colors">Bare Acts Lookup</a>
          </div>

          <div className="flex items-center gap-3.5">
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
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 text-center">
        <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-800 text-sm font-semibold mb-8 shadow-xs">
          <Sparkles className="h-4 w-4 text-blue-600" />
          <span>ContextCafe v2.0.0 — AI Powered Legal Intelligence</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.12] mb-8">
          Legal Intelligence, <span className="text-gradient-accent">Reimagined for Indian Law</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12 font-normal">
          Instant section lookup, BNS vs IPC conversion, and precedent analysis — designed with clean precision for advocates, researchers, and legal professionals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
          <Link href="/advocates">
            <Button size="lg" variant="glow" className="w-full sm:w-auto gap-3 text-lg h-13 px-8">
              <BookOpen className="h-5.5 w-5.5" />
              <span>Explore Advocates Portal</span>
            </Button>
          </Link>
        </div>

        {/* Clean Interactive Demo Card */}
        <div id="lookup" className="relative max-w-4xl mx-auto">
          <div className="glass-panel rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xl text-left bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-7">
              <div className="flex items-center gap-3">
                <Image src="/logo.svg" alt="ContextCafe" width={28} height={28} className="h-7 w-auto" />
                <span className="text-base font-bold text-slate-900">Bare Act & Section Research Engine</span>
              </div>
              <Badge variant="default" className="text-sm">
                Active Legal Index
              </Badge>
            </div>

            <div className="space-y-5">
              <div className="relative">
                <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  readOnly
                  value="BNS Section 103 — Punishment for Murder (Equivalent: IPC Section 302)"
                  className="w-full h-13 pl-12 pr-4 rounded-xl glass-input text-base text-slate-900 font-medium bg-slate-50"
                />
              </div>

              <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-100 space-y-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-blue-900 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-blue-600" /> Statutory Provision Summary
                  </span>
                  <span className="text-xs font-mono text-blue-800 font-semibold">Bharatiya Nyaya Sanhita 2023</span>
                </div>
                <p className="text-base text-slate-800 leading-relaxed font-normal">
                  Whoever commits murder shall be punished with death or imprisonment for life, and shall also be liable to fine. Where a group of 5 or more persons acts in concert on grounds of race, caste, or community, each member shall be punished with death or life imprisonment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Features Section */}
      <section id="features" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 border-t border-slate-200">
        <div className="text-center mb-14">
          <Badge variant="outline" className="mb-3 text-sm">Minimal & Purpose-Built</Badge>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Core Platform Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <Card className="border-slate-200 shadow-xs hover:border-blue-300">
            <CardHeader>
              <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">BNS vs IPC Converter</CardTitle>
              <CardDescription className="text-base">
                Instant mapping between new criminal codes (BNS, BSA, BNSS) and legacy provisions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-slate-200 shadow-xs hover:border-blue-300">
            <CardHeader>
              <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Structured Bare Acts</CardTitle>
              <CardDescription className="text-base">
                Browse central and state acts with section provisions, bailability tags, and court jurisdiction.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-slate-200 shadow-xs hover:border-blue-300">
            <CardHeader>
              <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Advocate Workspace</CardTitle>
              <CardDescription className="text-base">
                Save section briefs, compile argument outlines, and copy formatted court citations.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Advocates Workspace Section */}
      <section id="workspace" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 border-t border-slate-200">
        <Card className="p-9 border-slate-200 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge variant="default" className="mb-4 text-sm">Advocates Portal</Badge>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Designed for Daily Court Practice</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Fast, reliable access to Indian bare acts and legal provisions without clunky PDFs or distracting ads.
              </p>
              <ul className="space-y-3.5 mb-8">
                <li className="flex items-center gap-3 text-base font-medium text-slate-800">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" /> One-click legal citation copy
                </li>
                <li className="flex items-center gap-3 text-base font-medium text-slate-800">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" /> Cross-referencing between BNS, BSA, and BNSS
                </li>
                <li className="flex items-center gap-3 text-base font-medium text-slate-800">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" /> Mobile & desktop responsive legal library
                </li>
              </ul>
              <Link href="/advocates">
                <Button variant="glow" className="gap-2.5 text-base h-12 px-7">
                  Open Advocates Workspace <ArrowRight className="h-4.5 w-4.5" />
                </Button>
              </Link>
            </div>

            <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-3.5 mb-5">
                <Image src="/logo.png" alt="ContextCafe Logo" width={36} height={36} className="h-9 w-auto rounded-lg" />
                <div>
                  <div className="text-sm font-bold text-slate-900">ContextCafe Advocates Engine</div>
                  <div className="text-xs text-slate-500">Legal Intelligence Platform</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 space-y-2.5">
                <div className="font-semibold text-blue-700 text-base">Section 63 (BSA 2023)</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Admissibility of electronic records — replaces Section 65B of the Indian Evidence Act 1872.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Minimal Footer */}
      <footer className="relative z-10 border-t border-slate-200 bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <Image src="/logo.svg" alt="ContextCafe Logo" width={32} height={32} className="h-8 w-auto" />
            <span className="font-bold text-slate-900 text-lg">ContextCafe</span>
            <span className="text-sm text-slate-400">© 2026</span>
          </div>

          <div className="flex items-center gap-8 text-base text-slate-600 font-medium">
            <Link href="/advocates" className="hover:text-blue-600">Advocates Portal</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
