import { Check } from "lucide-react";

interface Props { title?: string; points?: string[]; image?: string }

export default function ManageCourses({ title = "Create & Manage Courses Easily.", image = "/images/hero.jpeg",
  points = ["Upload video lessons and resources in minutes", "Track enrolments and revenue in one dashboard", "Get paid directly with transparent fees", "Reach students across the world"] }: Props) {
  return (
    <div className="mx-auto mt-20 grid max-w-7xl items-center gap-10 md:grid-cols-2">
      <div className="relative order-2 md:order-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="Courses" width={560} height={420} className="w-full rounded-card object-cover" />
        <div className="absolute -top-4 left-4 rounded-2xl bg-brand p-4 text-white shadow-xl"><p className="text-xs text-periwinkle">Total Revenue</p><p className="text-xl font-bold">$85</p></div>
        <div className="absolute -bottom-4 right-4 rounded-2xl bg-brand2 p-4 text-white shadow-xl"><p className="text-xs text-periwinkle">Year to Date</p><p className="text-xl font-bold">$900</p></div>
      </div>
      <div className="order-1 md:order-2">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <ul className="mt-6 space-y-4">
          {points.map((p) => (<li key={p} className="flex items-start gap-3"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white"><Check size={14} /></span>{p}</li>))}
        </ul>
      </div>
    </div>
  );
}
