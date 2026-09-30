"use client";
import Link from "next/link";
import Image from 'next/image';
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import CourseCard from "../CourseCard";
import Button from "../ui/Button";
import { courses, categories } from "@/lib/data";

interface Props { limit?: number; pageSize?: number; showHeader?: boolean; title?: string }

/** Filterable course grid. `limit` = landing preview; `pageSize` = paginated listing. Reads ?q= from URL. */
export default function CourseGrid({ limit, pageSize, showHeader = true, title = "Discover Your Passion, Build Your Skills" }: Props) {
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [cat, setCat] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => courses.filter((c) =>
    (cat === "All" || c.category === cat) && c.title.toLowerCase().includes(q.trim().toLowerCase())), [q, cat]);
  const pages = pageSize ? Math.max(1, Math.ceil(filtered.length / pageSize)) : 1;
  const shown = pageSize ? filtered.slice((page - 1) * pageSize, page * pageSize) : filtered.slice(0, limit);

  return (
    <section id="featured" className="bg-white px-4 py-16 md:px-10">
      <div className="mx-auto max-w-7xl">
        {showHeader && (
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-md text-3xl font-bold md:text-4xl">{title}</h2>
            {limit && <Link href="/courses" className="font-semibold text-brand hover:underline">View All</Link>}
          </div>
        )}
        {pageSize && (
          <input value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} placeholder="Search courses"
            className="mb-6 w-full rounded-full border border-black/10 px-5 py-3 outline-none focus:ring-2 focus:ring-brand md:max-w-sm" />
        )}
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {["All", ...categories].map((c) => (
            <button key={c} onClick={() => { setCat(c); setPage(1); }} aria-pressed={cat === c}
              className={`rounded-full border px-4 py-2 font-medium transition ${cat === c ? "border-ink bg-ink text-white" : "border-black/10 hover:bg-soft2"}`}>{c}</button>
          ))}
        </div>
        {shown.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{shown.map((c) => <CourseCard key={c.id} course={c} />)}</div>
        ) : <p className="py-16 text-center text-mute">No courses match your search. Try another keyword or category.</p>}
        {pageSize && pages > 1 && (
          <nav className="mt-10 flex justify-center gap-2" aria-label="Pagination">
            {Array.from({ length: pages }, (_, i) => (
              <button key={i} onClick={() => setPage(i + 1)} aria-current={page === i + 1}
                className={`h-10 w-10 rounded-full font-semibold ${page === i + 1 ? "bg-brand text-white" : "bg-soft2 hover:bg-lime"}`}>{i + 1}</button>
            ))}
          </nav>
        )}
        {!pageSize && <div className="mt-10 text-center"><Button href="/courses" variant="black">Browse all courses</Button></div>}
      </div>
    </section>
  );
}
