"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAppDispatch } from "@/store/hooks";
import { setUsername } from "@/store/auth.store";

export default function UsernamePage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");

  const submit = () => {
    dispatch(setUsername(name));
    router.push("/register/account-type");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-6">
      <div className="w-full max-w-md">
        <Link href="/register" className="text-sm text-muted hover:text-text">&larr; Back</Link>
        <h1 className="mt-4 text-2xl font-semibold text-text">Get your profile started</h1>
        <p className="mt-1 text-sm text-muted">Add a username that&apos;s unique to you, this is how you&apos;ll appear to others.</p>
        <p className="mt-2 text-sm font-medium text-text">You can&apos;t change your username, so choose wisely.</p>

        <label className="mt-6 block text-sm font-medium text-text">Choose a username</label>
        <Input className="mt-2" value={name} onChange={(e) => setName(e.target.value)} placeholder="john_smith" />
        <p className="mt-2 text-xs text-muted">Build trust by using your full name or business name.</p>

        <Button className="mt-6 w-full" onClick={submit} disabled={!name}>Create my account</Button>
      </div>
    </main>
  );
}