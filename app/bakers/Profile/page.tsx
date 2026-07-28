"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Shield, Lock, FileText, CheckCircle2, Award, Database } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BakerProfilePage() {
  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border-indigo-200 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center">
            <Image src="/logo.svg" alt="ContextCafe Logo" width={40} height={40} className="h-10 w-auto" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-slate-900">ContextCafe Ingestion Admin</h1>
              <Badge variant="secondary" className="gap-1">
                <Lock className="h-3.5 w-3.5 text-indigo-600" />
                Internal Baker Role
              </Badge>
            </div>
            <p className="text-xs text-slate-500 mt-1">Admin ID: #BAKER-ADMIN-01 · Internal Ingestion Operations</p>
          </div>
        </div>

        <Link href="/bakers/acts-index">
          <Button variant="accent" className="gap-2">
            <FileText className="h-4 w-4" /> Manage Bare Acts Index
          </Button>
        </Link>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Ingested Bare Acts</CardDescription>
            <CardTitle className="text-3xl text-indigo-600">1,250 Acts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-slate-500">Central & State Legal Database</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Parsed Sections</CardDescription>
            <CardTitle className="text-3xl text-blue-600">45,890 Sections</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-slate-500">Indexed with AI Embeddings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>System Status</CardDescription>
            <CardTitle className="text-3xl text-emerald-600">Healthy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-slate-500">Supabase DB Syncing Cleanly</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
