"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PlusSquare, Users, FlaskConical, MessageSquare, Settings, LogOut, ExternalLink } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { Avatar } from "@/components/ui/Avatar";
import { DashboardTopbar } from "@/components/layouts/DashboardTopbar";
import { cn } from "@/utils/helpers";

const NAV = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Add AI Products", href: "/dashboard/products", icon: PlusSquare },
  { label: "Customers", href: "/dashboard/customers", icon: Users },
  { label: "Sandbox", href: "/dashboard/sandbox", icon: FlaskConical },
  { label: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-screen bg-surface">
      <aside className="hidden w-60 shrink-0 flex-col border-r border-slate-200 bg-white p-4 md:flex">
        <div className="flex items-center gap-1">
          <Logo />
          <span className="text-sm text-muted">Seller</span>
        </div>

        <p className="mt-6 mb-2 text-xs font-medium uppercase text-muted">Main menu</p>
        <nav className="space-y-1">
          {NAV.map(({ label, href, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm",
                active ? "bg-primary text-white" : "text-text hover:bg-surface"
              )}>
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto space-y-3 pt-6">
          <div className="flex items-center justify-between rounded-md border border-slate-200 p-2">
            <div className="flex items-center gap-2">
              <Avatar name="Mark" size={32} />
              <div>
                <p className="text-sm font-medium text-text">Dealport</p>
                <p className="text-xs text-muted">Mark@thedesigner…</p>
              </div>
            </div>
            <LogOut className="h-4 w-4 text-muted" />
          </div>
          <a href="#" className="flex items-center gap-2 rounded-md border border-slate-200 p-2 text-sm text-text">
            <ExternalLink className="h-4 w-4" /> aibazzar.com
          </a>
        </div>
      </aside>

      <div className="flex flex-1 flex-col overflow-x-auto">
        <DashboardTopbar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}