"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const links = [{ label: "Home", href: "/" }, { label: "Categories", href: "/#categories" }, { label: "About", href: "/#about" }, { label: "Featured", href: "/#featured" }];

export function Logo({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`flex items-center gap-1 text-xl font-extrabold ${light ? "text-white" : "text-ink"}`}>ByteSpace<span className="h-2 w-2 rounded-full bg-lime" /></Link>;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">{links.map((l) => <Link key={l.label} href={l.href} className="font-medium hover:text-brand">{l.label}</Link>)}</nav>
        <Button href="/signup" className="hidden md:inline-flex">Get Started</Button>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-black/5 bg-white px-4 py-4 md:hidden">
          {links.map((l) => <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className="font-medium">{l.label}</Link>)}
          <Button href="/signup">Get Started</Button>
        </nav>
      )}
    </header>
  );
}
