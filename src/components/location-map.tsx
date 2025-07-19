"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Mountain, Car, Coffee, Utensils } from "lucide-react"

const locationPoints = [
  {
    icon: Mountain,
    title: "Ski Lift Access",
    description: "3 min walk",
    detail: "Direct access to Gudauri ski lifts"
  },
  {
    icon: Car,
    title: "Parking",
    description: "On-site",
    detail: "Covered heated garage"
  },
  {
    icon: Utensils,
    title: "Restaurants",
    description: "2 min walk",
    detail: "Traditional Georgian cuisine"
  },
  {
    icon: Coffee,
    title: "Ski School",
    description: "5 min walk",
    detail: "Professional instruction available"
  }
]

export function LocationMap() {
  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 to-cyan-950/10 dark:from-blue-950/20 dark:to-cyan-950/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="glass-card mb-4 px-4 py-2">
            Prime Location
          </Badge>
          <h2 className="minimal-large mb-6">
            Perfect Mountain Location
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-5 w-5 text-warm-gold" />
            <p className="minimal-text text-muted-foreground">
              Gudauri Ski Resort, Mtskheta-Mtianeti, Georgia
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map placeholder with interactive styling */}
          <Card className="glass-card-strong border-0 hover-lift aspect-[4/3] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Gudauri ski resort aerial view"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Map markers */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="glass-card-strong p-3 rounded-full animate-pulse">
                  <MapPin className="h-6 w-6 text-warm-gold" />
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass-card-strong p-4 rounded-xl">
                  <h3 className="text-white text-lg font-medium mb-2">
                    Alpine Luxury Chalet
                  </h3>
                  <p className="text-white/80 text-sm">
                    Elevation: 2,196m • Coordinates: 42.4787°N, 44.4735°E
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Location details */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-playfair font-light mb-4">
                Everything Within Reach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our chalet is strategically positioned in the heart of Gudauri ski resort, 
                offering unparalleled access to slopes, dining, and mountain activities.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {locationPoints.map((point, index) => {
                const Icon = point.icon
                return (
                  <Card key={index} className="glass-card hover-lift border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="glass-card-strong w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-warm-gold" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{point.title}</h4>
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="h-3 w-3 text-warm-gold" />
                            <span className="text-sm font-medium text-warm-gold">
                              {point.description}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {point.detail}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="glass-card p-4 rounded-xl">
                <div className="text-2xl font-light font-playfair mb-1">2,196m</div>
                <div className="text-xs text-muted-foreground">Elevation</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-2xl font-light font-playfair mb-1">-8°C</div>
                <div className="text-xs text-muted-foreground">Avg Winter</div>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="text-2xl font-light font-playfair mb-1">120cm</div>
                <div className="text-xs text-muted-foreground">Snow Base</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}