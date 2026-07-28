import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-blue-200 bg-blue-50 text-blue-700 font-semibold",
        secondary:
          "border border-indigo-200 bg-indigo-50 text-indigo-700 font-semibold",
        outline:
          "border border-slate-200 bg-white text-slate-700 shadow-xs",
        success:
          "border border-emerald-200 bg-emerald-50 text-emerald-700 font-semibold",
        warning:
          "border border-amber-200 bg-amber-50 text-amber-800 font-semibold",
        glow:
          "border border-blue-300 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-900 shadow-xs font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
