"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bed, Users, Mountain, Wifi, Car, Coffee, Heart } from "lucide-react"
import { useState } from "react"

const accommodationFeatures = [
  {
    icon: Bed,
    title: "Premium Bedrooms",
    description: "6 luxurious bedrooms with panoramic mountain views",
    details: "Each bedroom features premium linens, blackout curtains, and en-suite bathrooms"
  },
  {
    icon: Users,
    title: "Sleeps 12",
    description: "Perfect for large groups and families",
    details: "Spacious accommodations designed for comfort and privacy"
  },
  {
    icon: Mountain,
    title: "Ski-in, Ski-out",
    description: "Direct access to Gudauri slopes",
    details: "No need for transportation - step out and start skiing"
  },
  {
    icon: Wifi,
    title: "Premium Amenities",
    description: "High-speed WiFi, heated floors, spa",
    details: "All modern comforts for the perfect mountain retreat"
  },
  {
    icon: Car,
    title: "Private Parking",
    description: "Covered parking for multiple vehicles",
    details: "Secure, heated garage with easy access to the chalet"
  },
  {
    icon: Coffee,
    title: "Gourmet Kitchen",
    description: "Fully equipped with premium appliances",
    details: "Professional-grade kitchen for culinary enthusiasts"
  }
]

export function LuxuryAccommodation() {
  const [favoriteFeatures, setFavoriteFeatures] = useState<number[]>([])

  const toggleFavorite = (index: number) => {
    setFavoriteFeatures(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 glass-card px-4 py-2">
            Prime Location
          </Badge>
          <h2 className="minimal-large mb-6">
            Luxury Accommodation
          </h2>
          <p className="minimal-text text-muted-foreground max-w-3xl mx-auto">
            Discover exceptional comfort in our meticulously designed chalet, 
            where every detail has been crafted for the discerning traveler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodationFeatures.map((feature, index) => {
            const Icon = feature.icon
            const isFavorite = favoriteFeatures.includes(index)
            
            return (
              <Card key={index} className="glass-card hover-lift border-0 group">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="glass-card-strong w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-warm-gold" />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleFavorite(index)}
                      className={`hover-heart ${isFavorite ? 'text-red-500' : 'text-muted-foreground'}`}
                    >
                      <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                  
                  <h3 className="minimal-medium mb-4 group-hover:text-warm-gold transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {feature.details}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="button-soft hover-glow bg-warm-gold text-charcoal hover:bg-warm-gold/90 px-8 py-4 text-lg font-medium"
          >
            View Detailed Amenities
          </Button>
        </div>
      </div>
    </section>
  )
}