import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Highlight />
        <Projects />
        <About />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </>
  );
}
