"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm text-text md:flex">
            <Link href="#" className="hover:text-primary">Explore</Link>
            <Link href="#" className="hover:text-primary">aibazzar pro</Link>
            <Link href="/sell" className="hover:text-primary">Become a seller</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => router.push("/login")}>Sign in</Button>
          <Button size="sm" onClick={() => router.push("/register")}>Get started</Button>
        </div>
      </div>
    </header>
  );
}