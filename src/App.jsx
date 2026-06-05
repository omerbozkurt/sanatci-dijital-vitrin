import { LanguageProvider } from './LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  )
}
