import Footer from "../components/global/Footer";
import About from "../components/home/about/About";
import Contact from "../components/home/contact/Contact";
import Hero from "../components/home/hero/Hero";
import Projects from "../components/home/projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
