"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Search, TrendingUp, Users } from "lucide-react";
import Button from "../ui/Button";

interface Props { title?: string; placeholder?: string; image?: string }

export default function Hero({ title = "Get Access to Hundreds Courses Available", placeholder = "What do you want to learn?", image = "/images/hero.jpeg" }: Props) {
  const [q, setQ] = useState("");
  const router = useRouter();
  const submit = (e: FormEvent) => { e.preventDefault(); router.push(`/courses?q=${encodeURIComponent(q)}`); };
  return (
    <section className="relative overflow-hidden bg-brand px-4 pt-16 text-center text-white md:px-10 md:pt-24">
      <div className="grid-bg absolute inset-0" aria-hidden />
      {/* Decorative shapes */}
      <svg aria-hidden className="absolute left-6 top-24 hidden w-24 md:block" viewBox="0 0 100 40" fill="none"><path d="M2 30c12-28 24 8 36-10s24 8 36-10 16 6 24 4" stroke="#D2FF4D" strokeWidth="6" strokeLinecap="round" /></svg>
      <div aria-hidden className="absolute right-10 top-32 hidden h-0 w-0 border-x-[24px] border-b-[42px] border-x-transparent border-b-white md:block" />
      <div aria-hidden className="absolute left-16 top-[55%] hidden h-0 w-0 rotate-12 border-x-[18px] border-b-[32px] border-x-transparent border-b-white/80 md:block" />
      <div className="relative mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        <form onSubmit={submit} role="search" className="mx-auto mt-8 flex max-w-xl items-center rounded-full bg-white p-1.5">
          <Search className="ml-4 shrink-0 text-mute" size={18} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={placeholder} aria-label="Search courses" className="min-w-0 flex-1 bg-transparent px-3 py-2 text-ink outline-none" />
          <Button type="submit" variant="lime">Search</Button>
        </form>
      </div>
      <div className="relative mx-auto mt-14 w-full max-w-md">
        <div className="overflow-hidden rounded-t-[40px] bg-lime pt-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="Student learning on a laptop" width={520} height={560} className="mx-auto h-80 w-full object-cover object-top mix-blend-multiply md:h-96" />
        </div>
        <div className="absolute -right-4 top-6 flex items-center gap-3 rounded-2xl bg-white p-3 text-left text-ink shadow-xl md:-right-24">
          <TrendingUp className="text-brand" /><div><p className="text-xs text-mute">Learning Progress</p><p className="text-lg font-bold">61%</p></div>
        </div>
        <div className="absolute -left-4 bottom-10 flex items-center gap-3 rounded-2xl bg-white p-3 text-left text-ink shadow-xl md:-left-24">
          <Users className="text-brand" /><div><p className="text-xs text-mute">Happy Students</p><p className="text-lg font-bold">10K+</p></div>
        </div>
      </div>
    </section>
  );
}
