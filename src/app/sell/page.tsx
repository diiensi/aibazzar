"use client";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layouts/Navbar";
import { Button } from "@/components/ui/Button";

export default function SellPage() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-text sm:text-5xl">
          Sell Your <span className="text-primary">AI Product</span> to Customers Worldwide
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Join aibazzar, the global AI marketplace where developers, startups, and businesses
          discover, test, and purchase AI products through interactive sandbox demos.
        </p>
        <Button size="lg" className="mt-8" onClick={() => router.push("/register")}>
          Create a Profile
        </Button>
      </main>

      <div className="border-t border-slate-200 bg-surface py-4">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-2 px-6 text-sm text-muted">
          <span>✓ Global AI Buyers</span>
          <span>✓ Worldwide Distribution</span>
          <span>✓ Reach Enterprise</span>
          <span>✓ Built for AI Startups</span>
          <span>✓ Discover New Customers</span>
        </div>
      </div>
    </>
  );
}