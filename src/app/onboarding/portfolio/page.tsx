"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingShell } from "@/components/layouts/OnboardingShell";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAppDispatch } from "@/store/hooks";
import { addPortfolioLink } from "@/store/onboarding.store";

export default function PortfolioPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [link, setLink] = useState("");
  const [links, setLinks] = useState<string[]>([]);

  const add = () => {
    if (!link) return;
    setLinks([...links, link]);
    dispatch(addPortfolioLink(link));
    setLink("");
  };

  return (
    <OnboardingShell
      step={3}
      total={3}
      onBack={() => router.push("/onboarding/team")}
      onContinue={() => router.push("/dashboard")}
      continueLabel="Finish"
    >
      <h1 className="text-center text-2xl font-semibold text-text">Do you have a portfolio or website?</h1>
      <p className="mt-1 text-center text-sm text-muted">This won&apos;t be shared publicly.</p>

      <div className="mx-auto mt-8 max-w-md">
        <label className="text-sm font-medium text-text">Add links</label>
        <Input className="mt-2" value={link} onChange={(e) => setLink(e.target.value)} placeholder="mypersonalwebsite.com" />
        <Button variant="outline" size="sm" className="mt-3" onClick={add}>Add</Button>
        {links.length > 0 && (
          <ul className="mt-4 space-y-1 text-sm text-muted">
            {links.map((l, i) => <li key={i}>• {l}</li>)}
          </ul>
        )}
      </div>
    </OnboardingShell>
  );
}