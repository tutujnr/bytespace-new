import { Suspense } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import CourseGrid from "@/components/sections/CourseGrid";
import Categories from "@/components/sections/Categories";
import Growth from "@/components/sections/Growth";
import CreatorBanner from "@/components/sections/CreatorBanner";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense><CourseGrid limit={6} /></Suspense>
        <Categories />
        <Growth />
        <CreatorBanner />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
