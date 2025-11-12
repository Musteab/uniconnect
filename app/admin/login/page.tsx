"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useAdmin } from "@/context/AdminContext";

export default function AdminLoginPage() {
  const { login } = useAdmin();
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();

  async function onSubmit(formData: FormData) {
    setErr(null);
    const ok = await login(String(formData.get("password") || ""));
    if (!ok) setErr("Invalid password");
    else router.push("/admin");
  }

  return (
    <div className="container-px max-w-md mx-auto py-16">
      <h1 className="text-2xl font-semibold mb-4">Admin Login</h1>
      <form action={onSubmit} className="space-y-4">
        <Input name="password" type="password" label="Password" required />
        <Button>Login</Button>
        {err && <div className="text-sm text-red-600">{err}</div>}
      </form>
      <div className="text-xs text-dark/60 mt-3">Demo password: admin123</div>
    </div>
  );
}

