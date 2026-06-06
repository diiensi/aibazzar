"use client";
import { Search } from "lucide-react";
import { cn } from "@/utils/helpers";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
export function SearchInput({ className, ...props }: Props) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
      <input
        className={cn(
          "h-10 w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 text-sm text-text placeholder:text-muted",
          "focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30",
          className
        )}
        {...props}
      />
    </div>
  );
}