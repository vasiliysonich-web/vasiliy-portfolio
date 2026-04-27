import Navbar from '@/components/navigation/navbar'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Services from '@/components/sections/services'
import Cases from '@/components/sections/cases'
import Reviews from '@/components/sections/reviews'
import Contact from '@/components/sections/contact'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Cases />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}
