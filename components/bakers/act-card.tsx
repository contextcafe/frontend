"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { CheckCircle2, Circle, Edit2, Loader2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

type Act = {
  id: number;
  title: string;
  shortTitle: string | null;
  slug: string;
  isVerified: boolean;
};

export function ActCard({ act, onUpdate }: { act: Act; onUpdate: (act: Act) => void }) {
  const [isVerifying, setIsVerifying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(act.title);
  const [editShortTitle, setEditShortTitle] = useState(act.shortTitle || "");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const supabase = createClient();

  const handleToggleVerify = async () => {
    setIsVerifying(true);
    try {
      const { data, error } = await supabase
        .from("Act")
        .update({ isVerified: !act.isVerified })
        .eq("id", act.id)
        .select()
        .single();

      if (error) throw error;
      if (data) onUpdate(data as Act);
    } catch (error) {
      console.error("Error verifying act:", error);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleRename = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(true);
    try {
      // Create a slug from the new title if it was changed
      const slug = editTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      
      const { data, error } = await supabase
        .from("Act")
        .update({ 
          title: editTitle, 
          shortTitle: editShortTitle || null,
          slug: slug
        })
        .eq("id", act.id)
        .select()
        .single();

      if (error) throw error;
      if (data) {
        onUpdate(data as Act);
        setIsDialogOpen(false);
      }
    } catch (error) {
      console.error("Error renaming act:", error);
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-white border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 bg-indigo-50 p-2.5 rounded-xl text-indigo-500 shrink-0 hidden sm:block">
          <BookOpen className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-800 text-lg leading-tight">
            {act.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {act.shortTitle && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                {act.shortTitle}
              </span>
            )}
            <span className="text-xs text-slate-400 font-mono bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
              /{act.slug}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 self-end sm:self-auto shrink-0 mt-2 sm:mt-0">
        
        {/* Rename Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="h-9 rounded-xl border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50">
              <Edit2 className="w-4 h-4 mr-1.5" /> Rename
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] rounded-2xl">
            <DialogHeader>
              <DialogTitle>Edit Act Details</DialogTitle>
              <DialogDescription>
                Make changes to the act's title and short title here. The slug will be auto-updated.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleRename} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Full Title</Label>
                <Input 
                  id="title" 
                  value={editTitle} 
                  onChange={(e) => setEditTitle(e.target.value)} 
                  className="rounded-xl"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="shortTitle">Short Title (Optional)</Label>
                <Input 
                  id="shortTitle" 
                  value={editShortTitle} 
                  onChange={(e) => setEditShortTitle(e.target.value)} 
                  placeholder="e.g. IPC"
                  className="rounded-xl"
                />
              </div>
              <div className="pt-4 flex justify-end gap-2">
                <Button type="button" variant="ghost" onClick={() => setIsDialogOpen(false)} className="rounded-xl">
                  Cancel
                </Button>
                <Button type="submit" disabled={isEditing} className="bg-indigo-600 hover:bg-indigo-700 rounded-xl">
                  {isEditing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Save Changes
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Verify Toggle */}
        <Button
          variant={act.isVerified ? "default" : "outline"}
          size="sm"
          onClick={handleToggleVerify}
          disabled={isVerifying}
          className={`h-9 rounded-xl transition-all ${
            act.isVerified 
              ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20" 
              : "border-slate-200 text-slate-500 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50"
          }`}
        >
          {isVerifying ? (
            <Loader2 className="w-4 h-4 mr-1.5 animate-spin" />
          ) : act.isVerified ? (
            <CheckCircle2 className="w-4 h-4 mr-1.5" />
          ) : (
            <Circle className="w-4 h-4 mr-1.5" />
          )}
          {act.isVerified ? "Verified" : "Verify"}
        </Button>
      </div>
    </motion.div>
  );
}
