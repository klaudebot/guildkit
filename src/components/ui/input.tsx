import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full bg-brand-dark border border-brand-border text-brand-text px-4 py-2.5 rounded-sm text-sm",
          "placeholder:text-brand-muted focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/30",
          "transition-colors duration-200",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
export { Input };
