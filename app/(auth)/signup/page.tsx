"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useAppDispatch } from "@/store/hooks";
import { setEmail } from "@/store/authSlice";

export default function SignupPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [email, setEmailLocal] = useState("");
  const [showEmail, setShowEmail] = useState(false);

  const continueWithEmail = () => {
    dispatch(setEmail(email));
    router.push("/signup/username");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 md:grid-cols-2">
        <div className="hidden flex-col justify-center bg-surface p-10 md:flex">
          <Logo className="text-3xl" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            The global AI marketplace where builders ship, and businesses discover, test, and buy AI products.
          </p>
        </div>

        <div className="p-8 sm:p-10">
          <h1 className="text-2xl font-semibold text-text">Create a new account</h1>
          <p className="mt-1 text-sm text-muted">
            Already have an account?{" "}
            <Link href="/signin" className="text-primary underline">Sign in</Link>
          </p>

          <div className="mt-8 space-y-3">
            <Button variant="outline" className="w-full" onClick={() => router.push("/signup/username")}>Continue with Google</Button>
            <Button variant="outline" className="w-full" onClick={() => router.push("/signup/username")}>Continue with Apple</Button>
            <Button variant="outline" className="w-full" onClick={() => router.push("/signup/username")}>Continue with GitHub</Button>
          </div>

          {!showEmail ? (
            <button onClick={() => setShowEmail(true)} className="mt-4 text-sm text-muted underline hover:text-primary">
              Or sign up using email
            </button>
          ) : (
            <div className="mt-4 space-y-3">
              <Input type="email" value={email} onChange={(e) => setEmailLocal(e.target.value)} placeholder="you@example.com" />
              <Button className="w-full" onClick={continueWithEmail} disabled={!email}>Continue</Button>
            </div>
          )}

          <p className="mt-2 text-xs text-muted">Additional verification may be required at a later stage.</p>
          <p className="mt-10 text-xs leading-relaxed text-muted">
            By joining, you agree to the aibazzar{" "}
            <Link href="#" className="underline">Terms of Service</Link> and Privacy Policy.
          </p>
        </div>
      </div>
    </main>
  );
}