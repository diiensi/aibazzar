"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PlusSquare, Users, FlaskConical, MessageSquare, Settings } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
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
      <aside className="hidden w-60 shrink-0 border-r border-slate-200 bg-white p-4 md:block">
        <Logo />
        <p className="mt-6 mb-2 text-xs font-medium uppercase text-muted">Main menu</p>
        <nav className="space-y-1">
          {NAV.map(({ label, href, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm",
                  active ? "bg-primary text-white" : "text-text hover:bg-surface"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 overflow-x-auto">{children}</main>
    </div>
  );
}