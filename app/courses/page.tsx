import { Suspense } from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CourseGrid from "@/components/sections/CourseGrid";
export const metadata = { title: "All Courses – ByteSpace" };
export default function CoursesPage() {
  return (<><Navbar /><main><div className="px-4 pt-12 md:px-10"><h1 className="mx-auto max-w-7xl text-4xl font-bold">All Courses</h1></div>
    <Suspense><CourseGrid pageSize={9} showHeader={false} /></Suspense></main><Footer /></>);
}
