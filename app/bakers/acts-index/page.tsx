"use client";

import React, { useState } from "react";
import { Search, Database, Plus, Shield, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BakersActsIndexPage() {
  const [search, setSearch] = useState("");

  const internalActs = [
    {
      id: "1",
      title: "Bharatiya Nyaya Sanhita (BNS), 2023",
      sectionsCount: 531,
      status: "Active & Indexed",
      lastUpdated: "2026-07-20",
    },
    {
      id: "2",
      title: "Bharatiya Sakshya Adhiniyam (BSA), 2023",
      sectionsCount: 170,
      status: "Active & Indexed",
      lastUpdated: "2026-07-18",
    },
    {
      id: "3",
      title: "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023",
      sectionsCount: 531,
      status: "Active & Indexed",
      lastUpdated: "2026-07-15",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-2">Internal Administration</Badge>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Ingested Bare Acts Index</h1>
          <p className="text-slate-500 text-sm mt-1">
            Manage legal documents, parse section embeddings, and verify metadata for ContextCafe.
          </p>
        </div>

        <Button variant="accent" className="gap-2">
          <Plus className="h-4 w-4" /> Ingest New Bare Act
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
        <Input
          placeholder="Filter ingested acts by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {internalActs.map((act) => (
          <Card key={act.id} className="border-slate-200">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="success" className="text-[10px]">{act.status}</Badge>
                <span className="text-xs text-slate-400 font-mono">Updated: {act.lastUpdated}</span>
              </div>
              <CardTitle className="text-lg text-slate-900">{act.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-100">
                <span>{act.sectionsCount} Sections Parsed</span>
                <Button size="sm" variant="outline" className="text-xs">Edit Rules</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
