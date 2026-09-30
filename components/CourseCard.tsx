import Link from "next/link";
import { Star } from "lucide-react";
import Card from "./ui/Card";
import { getCreator, type Course } from "@/lib/data";

export default function CourseCard({ course }: { course: Course }) {
  const creator = getCreator(course.creatorId);
  return (
    <Link href={`/courses/${course.id}`} className="block">
      <Card hover className="overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={course.image} alt={course.title} width={400} height={220} className="aspect-[400/220] w-full object-cover" />
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-soft2 px-3 py-1 text-xs font-medium text-brand">{course.level}</span>
            <span className="flex items-center gap-1 text-xs font-semibold"><Star size={14} className="fill-lime stroke-ink" />{course.rating}</span>
          </div>
          <h3 className="text-base font-bold">{course.title}</h3>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-mute"><span className="h-2.5 w-2.5 rounded-full bg-lime ring-1 ring-ink/20" />{creator?.name}</span>
            <span className="text-base font-bold">${course.price}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
