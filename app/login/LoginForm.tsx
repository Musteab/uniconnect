"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    const res = await signIn("credentials", { email, password, redirect: false });
    if (res?.error) {
      setErr("Invalid credentials");
      setLoading(false);
      return;
    }
    // success: go to admin
    router.push("/admin");
    setLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-3">
      <input className="rounded-md border px-3 py-2" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input className="rounded-md border px-3 py-2" placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button className="rounded-md bg-accent text-white px-4 py-2 text-sm" disabled={loading}>{loading?"Signing in...":"Sign In"}</button>
      {err && <div className="text-sm text-red-600">{err}</div>}
    </form>
  );
}
