"use client";
import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className={cn("relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl", className)}>
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 text-muted hover:text-text">
          <X className="h-5 w-5" />
        </button>
        {title && <h2 className="mb-4 text-lg font-semibold text-text">{title}</h2>}
        {children}
      </div>
    </div>
  );
}
