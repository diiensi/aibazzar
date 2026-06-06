"use client";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { error?: boolean; }
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-10 w-full rounded-md border bg-white px-3 text-sm text-text placeholder:text-muted",
        "focus:outline-none focus:ring-2 focus:ring-primary/30",
        error ? "border-danger focus:ring-danger/30" : "border-slate-300 focus:border-primary",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";