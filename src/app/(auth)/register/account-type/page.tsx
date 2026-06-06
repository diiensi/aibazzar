"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setAccountType } from "@/store/auth.store";
import { cn } from "@/utils/helpers";

export default function AccountTypePage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const username = useAppSelector((s) => s.auth.username);
  const [choice, setChoice] = useState<"buyer" | "seller" | null>(null);

  const next = () => {
    if (!choice) return;
    dispatch(setAccountType(choice));
    // these targets are built on Day 3/4 — they 404 until then (expected)
    router.push(choice === "seller" ? "/onboarding/profile" : "/catalogue");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-6">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-2xl font-semibold text-text">
          {username ? `${username}, your account has been created` : "Your account has been created"} — what brings you to aibazzar?
        </h1>
        <p className="mt-1 text-sm text-muted">We&apos;ll tailor your experience to fit your needs.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <ChoiceCard label="I am a buyer" active={choice === "buyer"} onClick={() => setChoice("buyer")} />
          <ChoiceCard label="I am a seller" active={choice === "seller"} onClick={() => setChoice("seller")} />
        </div>

        <div className="mt-8 flex justify-end">
          <Button onClick={next} disabled={!choice}>Next</Button>
        </div>
      </div>
    </main>
  );
}

function ChoiceCard({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex h-40 flex-col items-center justify-center rounded-lg border-2 p-6 transition",
        active ? "border-primary bg-primary/5" : "border-slate-200 hover:border-slate-300"
      )}
    >
      <span className="text-base font-medium text-text">{label}</span>
    </button>
  );
}