"use client"
import About from "@/components/pages/about";
import Experience from "@/components/pages/experience";
import Blogs from "@/components/pages/blogs";
import Projects from '@/components/pages/projects';

export default function Home() {
  return (
    <>
      {/* About Me */}
      <About />
      {/* My Experience */}
      <Experience />
      {/* My Projects */}
      <Projects />
      {/* My Blogs */}
      <Blogs />
    </>
  );
}
