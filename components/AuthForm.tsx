"use client";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Card from "./ui/Card";
import { Logo } from "./sections/Navbar";

/** Shared login/signup card with client-side validation. */
export default function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const isLogin = mode === "login";
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email")).trim(), password = String(f.get("password"));
    const next: typeof errors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (password.length < 8) next.password = "Password must be at least 8 characters.";
    else if (!isLogin && !/\d/.test(password)) next.password = "Include at least one number.";
    setErrors(next);
    setDone(Object.keys(next).length === 0); // TODO: call auth API here
  };

  return (
    <main className="grid-bg flex min-h-screen items-center justify-center bg-brand px-4 py-10">
      <Card className="w-full max-w-md p-8">
        <div className="mb-6 flex justify-center"><Logo /></div>
        <h1 className="text-center text-2xl font-bold">{isLogin ? "Welcome Back" : "Welcome to ByteSpace"}</h1>
        <p className="mb-6 mt-1 text-center text-mute">{isLogin ? "Log in to continue learning." : "Create an account to start learning."}</p>
        <form onSubmit={submit} noValidate className="space-y-4">
          <Input id="email" name="email" type="email" label="Email" autoComplete="email" error={errors.email} />
          <Input id="password" name="password" type="password" label="Password" autoComplete={isLogin ? "current-password" : "new-password"} error={errors.password} />
          <Button type="submit" className="w-full">{isLogin ? "Log in" : "Create account"}</Button>
          {done && <p role="status" className="text-center text-brand">{isLogin ? "Logged in (demo)." : "Account created (demo)."}</p>}
        </form>
        <p className="mt-6 text-center text-mute">
          {isLogin ? "New here? " : "Already have an account? "}
          <Link href={isLogin ? "/signup" : "/login"} className="font-semibold text-brand">{isLogin ? "Sign up" : "Log in"}</Link>
        </p>
      </Card>
    </main>
  );
}
