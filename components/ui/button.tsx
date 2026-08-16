import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 border border-blue-500",
        glow:
          "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:from-blue-700 hover:to-indigo-700 border border-blue-500/50",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200",
        outline:
          "border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 shadow-xs hover:border-slate-400",
        ghost:
          "text-slate-700 hover:text-slate-900 hover:bg-slate-100",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-600/20",
        accent:
          "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/20 border border-indigo-500",
        primary:
          "flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-4 text-sm font-bold text-white shadow-md shadow-slate-900/20 hover:bg-slate-800 transition-all duration-200 cursor-pointer active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-base rounded-xl",
        sm: "h-9 px-4 text-sm rounded-lg",
        lg: "h-13 px-8 text-lg rounded-xl font-bold",
        icon: "h-11 w-11 p-0 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
