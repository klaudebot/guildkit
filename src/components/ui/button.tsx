"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-accent-primary text-white hover:bg-accent-hover glow-purple-sm hover:glow-purple":
              variant === "primary",
            "bg-brand-card text-brand-text border border-brand-border hover:border-accent-primary/50 hover:bg-brand-dark":
              variant === "secondary",
            "text-brand-muted hover:text-brand-text hover:bg-brand-card":
              variant === "ghost",
            "border border-brand-border text-brand-text hover:border-accent-primary/50":
              variant === "outline",
          },
          {
            "text-sm px-3 py-1.5 rounded": size === "sm",
            "text-sm px-5 py-2.5 rounded-sm": size === "md",
            "text-base px-8 py-3.5 rounded-sm": size === "lg",
          },
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
export { Button };
