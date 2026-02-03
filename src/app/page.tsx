import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import GitHubHeatmap from '@/components/GitHubHeatmap'
import Projects from '@/components/Projects'
import Certificates from '@/components/Certificates'
import CV from '@/components/CV'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal-950">
      <Navbar />
      <Hero />
      <GitHubHeatmap />
      <Projects />
      <Certificates />
      <CV />
      <Footer />
    </main>
  )
}
