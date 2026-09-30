import Link from "next/link";
import Image from 'next/image';
import { notFound } from "next/navigation";
import { Play, Star } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Button from "@/components/ui/Button";
import { getCourse, getCreator } from "@/lib/data";

export default async function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = getCourse(id);
  if (!course) notFound();
  const creator = getCreator(course.creatorId);
  return (
    <><Navbar />
      <main className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-10 lg:grid-cols-[2fr_1fr]">
        <div>
          {/* Video player placeholder */}
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-card bg-ink">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={course.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
            <button aria-label="Play preview" className="relative flex h-16 w-16 items-center justify-center rounded-full bg-lime"><Play className="fill-ink" /></button>
          </div>
          <h1 className="mt-6 text-3xl font-bold">{course.title}</h1>
          <p className="mt-2 flex items-center gap-2 text-mute"><Star size={16} className="fill-lime stroke-ink" /><b className="text-ink">4.7</b> rating · {course.level} · {course.lessons} lessons · {course.hours} hours</p>
          <h2 className="mt-8 text-xl font-bold">About this course</h2>
          <p className="mt-2 max-w-2xl leading-relaxed text-mute">{course.description}</p>
        </div>
        <aside className="h-fit space-y-6 rounded-card border border-black/10 p-6">
          <p className="text-3xl font-bold">${course.price}</p>
          <Button variant="black" className="w-full">Enrol now</Button>
          {creator && (<div><p className="text-xs text-mute">Instructor</p>
            <Link href={`/creator/${creator.id}`} className="mt-1 flex items-center gap-2 font-semibold hover:text-brand"><span className="h-2.5 w-2.5 rounded-full bg-lime ring-1 ring-ink/20" />{creator.name}</Link>
            <p className="text-mute">{creator.role}</p></div>)}
        </aside>
      </main><Footer /></>
  );
}
