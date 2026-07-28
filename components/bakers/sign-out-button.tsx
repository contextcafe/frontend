"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut, Loader2 } from "lucide-react";
import { useState } from "react";

export function SignOutButton() {
  const router = useRouter();
  const supabase = createClient();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await supabase.auth.signOut();
      router.push("/bakers/login");
      router.refresh();
    } catch (error) {
      console.error("Error signing out:", error);
      setIsSigningOut(false);
    }
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleSignOut} 
      disabled={isSigningOut}
      className="gap-1.5 text-xs"
    >
      {isSigningOut ? (
        <Loader2 className="h-3 w-3 animate-spin" />
      ) : (
        <LogOut className="h-3 w-3" />
      )}
      <span>Sign Out</span>
    </Button>
  );
}
