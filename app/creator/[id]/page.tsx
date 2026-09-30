import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CourseCard from "@/components/CourseCard";
import { courses, getCreator } from "@/lib/data";
import Image from 'next/image';

export default async function CreatorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const creator = getCreator(id);
  if (!creator) notFound();
  const list = courses.filter((c) => c.creatorId === id);
  return (
    <><Navbar />
      <main>
        <section className="grid-bg bg-brand px-4 py-14 text-white md:px-10"><div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold">{creator.name}</h1>
          <p className="mt-1 text-lime">{creator.role}</p>
          <p className="mt-4 max-w-xl text-periwinkle">{creator.bio}</p>
        </div></section>
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-10">
          <h2 className="mb-6 text-2xl font-bold">Courses by {creator.name} ({list.length})</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((c) => <CourseCard key={c.id} course={c} />)}</div>
        </section>
      </main><Footer /></>
  );
}
