import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Payments from '../components/Payments'
import Reservations from '../components/Reservations'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Payments />
      <Reservations />
      <Testimonials />
      <Contact />
    </main>
  )
}
