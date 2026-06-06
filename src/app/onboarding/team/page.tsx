"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingShell } from "@/components/layouts/OnboardingShell";
import { useAppDispatch } from "@/store/hooks";
import { setIsTeam } from "@/store/onboarding.store";
import { cn } from "@/utils/helpers";

export default function TeamPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [choice, setChoice] = useState<boolean | null>(null);

  const onContinue = () => {
    if (choice === null) return;
    dispatch(setIsTeam(choice));
    router.push("/onboarding/portfolio");
  };

  return (
    <OnboardingShell step={2} total={3} onBack={() => router.push("/onboarding/profile")} onContinue={onContinue}>
      <h1 className="text-center text-2xl font-semibold text-text">Are you part of a team?</h1>
      <p className="mt-1 text-center text-sm text-muted">You can come back and update your profile anytime.</p>

      <div className="mx-auto mt-8 grid max-w-lg gap-4 sm:grid-cols-2">
        <Choice label="No" sub="I work independently" active={choice === false} onClick={() => setChoice(false)} />
        <Choice label="Yes" sub="I'm part of a team" active={choice === true} onClick={() => setChoice(true)} />
      </div>
    </OnboardingShell>
  );
}

function Choice({ label, sub, active, onClick }: { label: string; sub: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-lg border-2 p-6 text-center transition",
        active ? "border-primary bg-primary/5" : "border-slate-200 hover:border-slate-300"
      )}
    >
      <p className="font-medium text-text">{label}</p>
      <p className="mt-1 text-sm text-muted">{sub}</p>
    </button>
  );
}