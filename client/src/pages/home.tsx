import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <About />
      <Publications />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
