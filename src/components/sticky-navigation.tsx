"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Heart, Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Amenities", href: "#amenities" },
  { label: "Photos", href: "#gallery" },
  { label: "Weather", href: "#weather" },
  { label: "Book", href: "#contact" },
]

export function StickyNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      // Scrollspy effect
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass-card-strong backdrop-blur-xl shadow-lg" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-playfair font-semibold text-white dark:text-foreground">
                Alpine Luxury
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-warm-gold ${
                    activeSection === item.href.substring(1)
                      ? "text-warm-gold"
                      : "text-white/80 dark:text-foreground/80"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="text-white dark:text-foreground hover-heart">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white dark:text-foreground"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card-strong">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left text-sm font-medium transition-colors hover:text-warm-gold ${
                    activeSection === item.href.substring(1)
                      ? "text-warm-gold"
                      : "text-white/80 dark:text-foreground/80"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Floating Book Now Button for Mobile */}
      <Button
        onClick={() => scrollToSection("#contact")}
        className="fixed bottom-6 right-6 z-40 md:hidden button-soft hover-glow bg-warm-gold text-charcoal hover:bg-warm-gold/90 shadow-lg"
        size="lg"
      >
        Book Now
      </Button>
    </>
  )
}