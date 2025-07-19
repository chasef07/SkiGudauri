import { ParallaxHero } from '@/components/parallax-hero'
import { LuxuryAccommodation } from '@/components/luxury-accommodation'
import { WeatherWidget } from '@/components/weather-widget'
import { ImageGallery } from '@/components/image-gallery'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ParallaxHero />
      <LuxuryAccommodation />
      <WeatherWidget />
      <ImageGallery />
      <ContactForm />
      <Footer />
    </main>
  )
}