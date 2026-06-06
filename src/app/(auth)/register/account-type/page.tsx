"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Briefcase, PackageCheck, Check } from "lucide-react";
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
    router.push(choice === "seller" ? "/onboarding/profile" : "/catalogue");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-6">
      <div className="w-full max-w-3xl rounded-xl border border-slate-200 p-10">
        <h1 className="text-center text-2xl font-semibold text-text">
          {username ? `${username}, your account has been created` : "Your account has been created"} what brings you to aibazzar?
        </h1>
        <p className="mt-2 text-center text-sm text-muted">We&apos;ll tailor your experience to fit your needs.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <ChoiceCard
            label="I am a buyer"
            icon={<Briefcase className="h-12 w-12 text-primary" />}
            active={choice === "buyer"}
            onClick={() => setChoice("buyer")}
          />
          <ChoiceCard
            label="I am a seller"
            icon={<PackageCheck className="h-12 w-12 text-accent" />}
            active={choice === "seller"}
            onClick={() => setChoice("seller")}
          />
        </div>

        <div className="mt-8 flex justify-end">
          <Button onClick={next} disabled={!choice}>Next</Button>
        </div>
      </div>
    </main>
  );
}

function ChoiceCard({
  label, icon, active, onClick,
}: { label: string; icon: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex h-56 flex-col items-center justify-center gap-4 rounded-lg border-2 p-6 transition",
        active ? "border-primary bg-primary/5" : "border-slate-200 hover:border-slate-300"
      )}
    >
      {/* checkbox */}
      <span className={cn(
        "absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded border",
        active ? "border-primary bg-primary text-white" : "border-slate-300"
      )}>
        {active && <Check className="h-3.5 w-3.5" />}
      </span>
      {icon}
      <span className="text-base font-medium text-text">{label}</span>
    </button>
  );
}