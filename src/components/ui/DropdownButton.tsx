import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/helpers";

export function DropdownButton({ label, active }: { label: string; active?: boolean }) {
  return (
    <button className={cn(
      "inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm",
      active ? "bg-primary text-white" : "border border-slate-300 text-text"
    )}>
      {label} <ChevronDown className="h-4 w-4" />
    </button>
  );
}