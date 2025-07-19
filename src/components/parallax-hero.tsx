"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Heart, MapPin } from "lucide-react"

export function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      

      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card-strong p-8 lg:p-12">
            <h1 className="minimal-hero text-white mb-6">
              Stay Where the Powder Falls
            </h1>
            <div className="flex items-center justify-center gap-2 mb-8">
              <MapPin className="h-6 w-6 text-warm-gold" />
              <p className="minimal-text text-white/90">
                Gudauri, Georgia
              </p>
            </div>
            <p className="minimal-text text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience unparalleled luxury in the heart of the Caucasus Mountains. 
              Our exclusive chalet offers world-class amenities and breathtaking alpine views.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="button-soft minimal-text bg-warm-gold text-charcoal hover:bg-warm-gold/90 font-medium px-8 py-4"
              >
                Check Availability
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="button-soft minimal-text border-white/30 text-white hover:bg-white/10 font-medium px-8 py-4"
              >
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}