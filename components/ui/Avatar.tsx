import { cn } from "@/lib/utils";

interface AvatarProps { src?: string; name?: string; size?: number; className?: string; }
export function Avatar({ src, name = "", size = 40, className }: AvatarProps) {
  const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div
      className={cn("inline-flex items-center justify-center overflow-hidden rounded-full bg-surface text-sm font-medium text-muted", className)}
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {src ? <img src={src} alt={name} className="h-full w-full object-cover" /> : initials || "?"}
    </div>
  );
}