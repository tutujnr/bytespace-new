import Link from "next/link";
import Button from "../ui/Button";
import { Logo } from "./Navbar";

const cols = [
  { title: "Featured Courses", links: ["Learn Figma", "React from Zero", "SEO Basics"] },
  { title: "Business", links: ["Strategy", "Finance", "Marketing"] },
  { title: "Development", links: ["Web", "Mobile", "Cloud"] },
  { title: "Become a Creator", links: ["Join", "Guidelines", "Payouts"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white px-4 pt-16 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-mute">Stay up to date with new courses and creator news.</p>
          <form className="mt-4 flex max-w-sm rounded-full border border-black/10 p-1.5">
            <input type="email" aria-label="Email address" placeholder="Enter your email" className="min-w-0 flex-1 bg-transparent px-4 outline-none" />
            <Button type="submit" variant="lime">Search</Button>
          </form>
          <p className="mt-3 max-w-sm text-[10px] text-mute">By subscribing you agree to our Privacy Policy and consent to receive updates from ByteSpace.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {cols.map((c) => (
            <div key={c.title}><h3 className="mb-3 font-bold">{c.title}</h3>
              <ul className="space-y-2 text-mute">{c.links.map((l) => <li key={l}><Link href="/courses" className="hover:text-brand">{l}</Link></li>)}</ul></div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-black/5 py-6 text-xs text-mute sm:flex-row">
        <p>© 2026 ByteSpace. All rights reserved.</p>
        <div className="flex gap-6"><Link href="#">Privacy Policy</Link><Link href="#">Terms of Service</Link></div>
      </div>
    </footer>
  );
}
