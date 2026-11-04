import Shell from "@/components/Shell";
import Squiggle from "@/components/Squiggle";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Hub from "@/components/Hub";
import Highlight from "@/components/Highlight";
import Impact from "@/components/Impact";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Squiggle />
      <Shell>
        <Hero />
        <Marquee />
        <Hub />
        <Highlight />
        <Impact />
        <Projects />
        <Services />
        <Skills />
        <About />
        <Contact />
      </Shell>
    </>
  );
}
