"use client";
import { Bell, Sun } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { SearchInput } from "@/components/ui/SearchInput";

export function DashboardTopbar({ title = "Dashboard" }: { title?: string }) {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-3">
      <h1 className="text-lg font-semibold text-primary">{title}</h1>
      <div className="flex items-center gap-4">
        <div className="hidden w-80 md:block">
          <SearchInput placeholder="Search data, users, or reports" />
        </div>
        <button className="text-muted hover:text-text"><Bell className="h-5 w-5" /></button>
        <button className="text-muted hover:text-text"><Sun className="h-5 w-5" /></button>
        <Avatar name="Mark" size={32} />
      </div>
    </header>
  );
}