"use client";
import { forwardRef } from "react";
import { cn } from "@/utils/helpers";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> { label?: string; }
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => (
    <label className="inline-flex cursor-pointer select-none items-center gap-2">
      <input ref={ref} type="checkbox" className={cn("h-4 w-4 accent-primary", className)} {...props} />
      {label && <span className="text-sm text-text">{label}</span>}
    </label>
  )
);
Checkbox.displayName = "Checkbox";