import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("text-2xl font-extrabold tracking-tight", className)}>
      <span className="italic text-primary">ai</span>
      <span className="text-text">bazzar</span>
    </Link>
  );
}