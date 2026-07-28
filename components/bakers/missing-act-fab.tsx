"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Plus, Loader2 } from "lucide-react";
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
import { motion, AnimatePresence } from "framer-motion";

export function MissingActFab({ bakerId }: { bakerId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("MissingActRequest")
        .insert({
          title,
          description: description || null,
          bakerId: bakerId,
        });

      if (error) throw error;
      
      setIsSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
        setTimeout(() => {
          setIsSuccess(false);
          setTitle("");
          setDescription("");
        }, 300);
      }, 2000);

    } catch (error) {
      console.error("Error submitting missing act:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
            className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50"
          >
            <Button 
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-indigo-600 hover:bg-indigo-700 shadow-xl shadow-indigo-600/30 flex items-center justify-center p-0 transition-transform hover:scale-105"
            >
              <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </Button>
          </motion.div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] rounded-2xl">
          <DialogHeader>
            <DialogTitle>Report Missing Act</DialogTitle>
            <DialogDescription>
              Can't find an act in the index? Let us know and we'll prioritize adding it to the database.
            </DialogDescription>
          </DialogHeader>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <Plus className="w-8 h-8 rotate-45" /> {/* Makes it look somewhat like a check or we could use check */}
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Request Submitted!</h3>
                <p className="text-slate-500 mt-2">Thank you. We'll add this act shortly.</p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-4 py-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="missing-title">Act Title</Label>
                  <Input 
                    id="missing-title" 
                    placeholder="e.g. The Indian Evidence Act, 1872"
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="rounded-xl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Additional Details (Optional)</Label>
                  <Input 
                    id="description" 
                    placeholder="Any specific part or context?"
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    className="rounded-xl"
                  />
                </div>
                <div className="pt-4 flex justify-end gap-2">
                  <Button type="button" variant="ghost" onClick={() => setIsOpen(false)} className="rounded-xl">
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting} className="bg-indigo-600 hover:bg-indigo-700 rounded-xl">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
}
