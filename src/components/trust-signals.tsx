"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Sparkles, Users } from "lucide-react"

const testimonials = [
  {
    name: "Sarah & Michael Chen",
    location: "San Francisco, CA",
    quote: "Absolutely stunning chalet with unbeatable ski access. The attention to detail and luxury amenities exceeded our expectations. Will definitely be back!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "James Morrison",
    location: "London, UK",
    quote: "Perfect for our ski group of 8. The location is incredible - literally ski-in, ski-out. The chalet manager was super responsive and helpful.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Anna Kowalski",
    location: "Warsaw, Poland",
    quote: "The mountain views from every room are breathtaking. Luxury meets authentic Georgian hospitality. Gudauri's hidden gem!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  }
]

const trustBadges = [
  {
    icon: Shield,
    label: "Verified Property",
    description: "Licensed accommodation"
  },
  {
    icon: Sparkles,
    label: "Premium Cleaning",
    description: "Professional standards"
  },
  {
    icon: Users,
    label: "250+ Happy Guests",
    description: "Since 2022"
  }
]

export function TrustSignals() {
  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="glass-card mb-4 px-4 py-2">
            Guest Reviews
          </Badge>
          <h2 className="minimal-large mb-6">
            Trusted by Skiers Worldwide
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-semibold">4.9/5</span>
            <span className="text-muted-foreground">• 127 reviews</span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card hover-lift border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-8">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div key={index} className="text-center">
                <div className="glass-card-strong w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 hover-lift">
                  <Icon className="h-10 w-10 text-warm-gold" />
                </div>
                <h3 className="text-lg font-medium mb-2">{badge.label}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            )
          })}
        </div>

        {/* Urgency Banner */}
        <div className="mt-16 text-center">
          <Card className="glass-card-strong border-warm-gold/30 max-w-md mx-auto">
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-2 text-warm-gold">
                Limited Availability
              </h3>
              <p className="text-sm text-muted-foreground">
                Only 3 weekends left this season. Book now to secure your dates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}