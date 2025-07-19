import { ParallaxHero } from '@/components/parallax-hero'
import { StickyNavigation } from '@/components/sticky-navigation'
import { LuxuryAccommodation } from '@/components/luxury-accommodation'
import { WeatherWidget } from '@/components/weather-widget'
import { ImageGallery } from '@/components/image-gallery'
import { LocationMap } from '@/components/location-map'
import { TrustSignals } from '@/components/trust-signals'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <StickyNavigation />
      <section id="home">
        <ParallaxHero />
      </section>
      <section id="amenities">
        <LuxuryAccommodation />
      </section>
      <section id="weather">
        <WeatherWidget />
      </section>
      <section id="gallery">
        <ImageGallery />
      </section>
      <LocationMap />
      <TrustSignals />
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </main>
  )
}