import { CustomCursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground relative selection:bg-primary selection:text-white">
      {/* Non-mobile custom cursor */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
