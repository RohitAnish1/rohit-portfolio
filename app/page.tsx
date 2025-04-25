import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}

