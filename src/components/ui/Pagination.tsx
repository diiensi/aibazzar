import { cn } from "@/utils/helpers";

export function Pagination({ pages = 3, current = 1 }: { pages?: number; current?: number }) {
  return (
    <div className="flex items-center gap-1">
      <button className="rounded-md border border-slate-300 px-3 py-1 text-sm text-text">Previous</button>
      {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          className={cn("h-8 w-8 rounded-md text-sm", p === current ? "bg-primary text-white" : "border border-slate-300 text-text")}
        >
          {p}
        </button>
      ))}
      <button className="rounded-md border border-slate-300 px-3 py-1 text-sm text-text">Next</button>
    </div>
  );
}