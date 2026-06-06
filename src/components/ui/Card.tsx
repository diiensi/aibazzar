import { cn } from "@/utils/helpers";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-lg border border-slate-200 bg-card p-5 shadow-sm", className)} {...props} />;
}