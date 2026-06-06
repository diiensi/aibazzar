"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingShell } from "@/components/layouts/OnboardingShell";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { useAppDispatch } from "@/store/hooks";
import { updateProfile } from "@/store/onboarding.store";

export default function ProfilePage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [displayName, setDisplayName] = useState("");
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");

  const onContinue = () => {
    dispatch(updateProfile({ displayName, title, about }));
    router.push("/onboarding/team");
  };

  return (
    <OnboardingShell step={1} total={3} onContinue={onContinue}>
      <h1 className="text-center text-2xl font-semibold text-text">Edit your new profile</h1>
      <p className="mt-1 text-center text-sm text-muted">You can come back and update your profile anytime.</p>

      <Card className="mt-8">
        <div className="flex items-start gap-4">
          <Avatar size={64} />
          <div className="flex-1 space-y-3">
            <Input value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Add display name" />
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add title" />
            <p className="text-sm text-muted">India · <button className="underline">Add languages</button></p>
          </div>
        </div>
      </Card>

      <Section title="About" hint="Share some details about yourself, your expertise, and what you offer.">
        <Textarea value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Add details about yourself..." rows={3} />
      </Section>

      <Section title="Skills and expertise" hint="Attract relevant clients by sharing your strengths and abilities.">
        <Button variant="outline" size="sm">+ Add skills and expertise</Button>
      </Section>

      <Section title="Work experience" hint="Add your job history and achievements to give clients insight into your expertise.">
        <Button variant="outline" size="sm">+ Work experience</Button>
      </Section>

      <div className="grid gap-4 sm:grid-cols-2">
        <Section title="Education" hint="Add any educational degrees or programs.">
          <Button variant="outline" size="sm">+ Add Education</Button>
        </Section>
        <Section title="Certifications" hint="Add any certifications.">
          <Button variant="outline" size="sm">+ Add Certifications</Button>
        </Section>
      </div>
    </OnboardingShell>
  );
}

function Section({ title, hint, children }: { title: string; hint: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-text">{title}</h2>
      <p className="mt-1 text-sm text-muted">{hint}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}