import Link from "next/link";
import { Palette, Code2, Server, Briefcase, Megaphone, Camera, type LucideIcon } from "lucide-react";
import Card from "../ui/Card";
import { categories } from "@/lib/data";

const icons: Record<string, LucideIcon> = { Design: Palette, Development: Code2, "IT & Software": Server, Business: Briefcase, Marketing: Megaphone, Photography: Camera };

export default function Categories({ title = "Explore Diverse Learning Paths at Bytespace", subtitle = "Pick a field, follow a guided path and build skills that employers and clients look for." }) {
  return (
    <section id="categories" className="bg-soft px-4 py-16 md:px-10">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-mute">{subtitle}</p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => { const Icon = icons[c]; return (
            <Link key={c} href={`/courses?q=`} className="block">
              <Card hover className="flex flex-col items-center gap-4 p-6">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ink/10 bg-lime"><Icon size={24} /></span>
                <span className="font-semibold">{c}</span>
              </Card>
            </Link>); })}
        </div>
      </div>
    </section>
  );
}
