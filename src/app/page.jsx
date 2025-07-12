import Image from "next/image";
import Navbar from "@/Components/Layout/navbar";
import Hero from "@/Components/hero/hero";
import About from "@/Components/about/abt"
import Projects from "@/Components/projects/prj";
import Skills from "@/Components/skills/skill";
import Contact from "@/Components/contact/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
