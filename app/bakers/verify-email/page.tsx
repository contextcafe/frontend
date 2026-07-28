"use client";

import { motion } from "framer-motion";
import { MailOpen, ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "your email address";

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50">
      {/* Ambient Orbs */}
      <div className="glow-orb-secondary -top-40 -left-40 opacity-70" />
      <div className="glow-orb-primary top-40 -right-20 opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
        className="w-full max-w-md p-10 glass-panel rounded-3xl relative z-10 mx-4 text-center"
      >
        <div className="flex justify-center mb-6">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
            className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center border-4 border-white shadow-xl"
          >
            <MailOpen className="w-10 h-10 text-indigo-600" />
          </motion.div>
        </div>

        <h1 className="text-3xl font-bold text-slate-800 mb-4 font-display">
          Check your inbox
        </h1>
        
        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          We just sent a confirmation link to <br/>
          <span className="font-semibold text-slate-800">{email}</span>
        </p>

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-8 text-sm text-slate-500 text-left">
          <p className="mb-2 flex items-center">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
            Click the link in the email to verify your account.
          </p>
          <p className="flex items-center">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
            If you don't see it, check your spam folder.
          </p>
        </div>

        <Link href="/bakers/login" className="w-full">
          <Button className="w-full h-12 text-base bg-indigo-600 hover:bg-indigo-700">
            Back to Sign In <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50"><div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div></div>}>
      <VerifyEmailContent />
    </Suspense>
  );
}
