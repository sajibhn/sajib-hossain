import path from 'path'
import * as fs from 'fs/promises';
import Footer from "../components/global/Footer";
import About from "../components/home/about/About";
import Contact from "../components/home/contact/Contact";
import Hero from "../components/home/hero/Hero";
import Projects from "../components/home/projects/Projects";

export default function Home(data) {
  return (
    <>
      <Hero />
      <About />
      <Projects data={data} />
      <Contact />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'portfolio.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)
  return {
    props: { data: data.portfolio }
  }
}
