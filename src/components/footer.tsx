"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Instagram, Facebook, ExternalLink } from "lucide-react"
import { SiAirbnb } from "react-icons/si"

export function Footer() {
  return (
    <footer className="relative bg-charcoal dark:bg-background border-t border-border/50">
      {/* Glass overlay for subtle effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="glass-card-strong inline-block px-6 py-3 mb-6">
              <h3 className="text-2xl font-playfair font-semibold text-white dark:text-foreground">
                Alpine Luxury
              </h3>
            </div>
            <p className="text-white/80 dark:text-muted-foreground mb-8 leading-relaxed max-w-md">
              Experience the pinnacle of mountain luxury in our exclusive chalet. 
              Where sophisticated comfort meets alpine adventure in the heart of Gudauri.
            </p>
            
            {/* Booking Platforms */}
            <div className="space-y-4">
              <Badge variant="secondary" className="glass-card text-xs px-3 py-1">
                Book Direct & Save
              </Badge>
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="button-soft glass-card border-white/20 text-white dark:text-foreground hover:bg-white/10 dark:hover:bg-white/5"
                  asChild
                >
                  <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer">
                    <SiAirbnb className="h-4 w-4 mr-2" />
                    Airbnb
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="button-soft bg-warm-gold text-charcoal hover:bg-warm-gold/90"
                >
                  Direct Booking
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white dark:text-foreground mb-6">
              Contact
            </h4>
            <div className="space-y-4 text-white/80 dark:text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-warm-gold flex-shrink-0" />
                <div>
                  <p className="font-medium">Gudauri Ski Resort</p>
                  <p className="text-sm">Mtskheta-Mtianeti, Georgia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-warm-gold flex-shrink-0" />
                <p>+995 555 123 456</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-warm-gold flex-shrink-0" />
                <p>info@alpineluxury.ge</p>
              </div>
            </div>
          </div>

          {/* Social & Info */}
          <div>
            <h4 className="text-lg font-semibold text-white dark:text-foreground mb-6">
              Follow Us
            </h4>
            <div className="flex gap-3 mb-8">
              <Button 
                variant="ghost" 
                size="icon" 
                className="glass-card hover-glow text-white dark:text-foreground hover:text-warm-gold"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="glass-card hover-glow text-white dark:text-foreground hover:text-warm-gold"
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="space-y-2 text-sm text-white/60 dark:text-muted-foreground">
              <p>Licensed Accommodation</p>
              <p>Tourism License: GL-2024-001</p>
              <p>VAT: GE123456789</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 dark:border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60 dark:text-muted-foreground">
            <p>© 2025 Alpine Luxury. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-warm-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-warm-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-warm-gold transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}