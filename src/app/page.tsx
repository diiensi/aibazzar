"use client";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layouts/Navbar";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Find, Try & Deploy <span className="text-primary">the Best AI Products</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          A marketplace to discover, test in a live sandbox, and buy the best AI tools — all in one place.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button size="lg" onClick={() => router.push("/catalogue")}>Explore products</Button>
          <Button size="lg" variant="outline" onClick={() => router.push("/sell")}>Become a seller</Button>
        </div>

        {/* demo shortcuts — remove before production */}
        <div className="mt-16 border-t border-slate-200 pt-6">
          <p className="mb-3 text-xs uppercase text-muted">Quick links (demo)</p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <Link href="/register" label="Register" router={router} />
            <Link href="/login" label="Login" router={router} />
            <Link href="/catalogue" label="Catalogue" router={router} />
            <Link href="/dashboard" label="Dashboard" router={router} />
            <Link href="/components" label="Components" router={router} />
          </div>
        </div>
      </main>
    </>
  );
}

function Link({ label, router, ...p }: { label: string; router: ReturnType<typeof useRouter> } & { [k: string]: unknown } & { ["href"]?: never }) {
  const href = (arguments[0] as { href?: string }).href ?? "/";
  return (
    <button onClick={() => router.push(href)} className="rounded-md border border-slate-300 px-3 py-1 text-text hover:bg-surface">
      {label}
    </button>
  );
}