import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-brand-card border border-brand-border rounded-sm p-6 transition-all duration-300",
          "hover:border-accent-primary/30",
          className,
        )}
        {...props}
      />
    );
  },
);

Card.displayName = "Card";
export { Card };
