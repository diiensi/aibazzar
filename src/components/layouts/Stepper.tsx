import { cn } from "@/utils/helpers";

export function Stepper({ current, total, className }: { current: number; total: number; className?: string }) {
  const pct = Math.min(100, Math.round((current / total) * 100));
  return (
    <div className={cn("h-1 w-full bg-slate-200", className)}>
      <div className="h-full bg-primary transition-all duration-300" style={{ width: `${pct}%` }} />
    </div>
  );
}