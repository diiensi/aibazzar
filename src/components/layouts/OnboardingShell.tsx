"use client";
import { Logo } from "@/components/shared/Logo";
import { Stepper } from "@/components/layouts/Stepper";
import { Button } from "@/components/ui/Button";

interface Props {
  step: number;
  total: number;
  onBack?: () => void;
  onContinue: () => void;
  continueLabel?: string;
  children: React.ReactNode;
}

export function OnboardingShell({ step, total, onBack, onContinue, continueLabel = "Continue", children }: Props) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
        <Logo />
        <button className="text-sm text-muted hover:text-text">Exit</button>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">{children}</main>

      <Stepper current={step} total={total} />
      <footer className="flex items-center justify-between px-6 py-4">
        <button
          onClick={onBack}
          disabled={!onBack}
          className="text-sm text-text hover:text-primary disabled:opacity-40"
        >
          &larr; Back
        </button>
        <Button onClick={onContinue}>{continueLabel}</Button>
      </footer>
    </div>
  );
}