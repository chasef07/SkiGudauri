"use client"

import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CloudSnow, Wind, Droplets, Thermometer, MapPin } from "lucide-react"

interface WeatherData {
  temperature: number
  condition: string
  windSpeed: number
  humidity: number
  snowDepth: number
  lastUpdated: string
}

export function WeatherWidget() {
  const { data: weather, isLoading } = useQuery<WeatherData>({
    queryKey: ['/api/weather'],
    refetchInterval: 10 * 60 * 1000, // Refetch every 10 minutes
  })

  if (isLoading) {
    return (
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 animate-pulse">
            <div className="h-8 bg-muted rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-muted/50 rounded w-64 mx-auto"></div>
          </div>
        </div>
      </section>
    )
  }

  if (!weather) {
    return null
  }

  const getConditionIcon = (condition: string) => {
    const lowerCondition = condition.toLowerCase()
    if (lowerCondition.includes('snow')) {
      return <CloudSnow className="h-12 w-12 text-blue-400" />
    }
    return <CloudSnow className="h-12 w-12 text-blue-400" />
  }

  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-cyan-950/20 dark:from-blue-950/40 dark:to-cyan-950/40" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="glass-card mb-4 px-4 py-2">
            Live Weather Data
          </Badge>
          <h2 className="minimal-large mb-4">
            Current Conditions
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-5 w-5 text-warm-gold" />
            <p className="minimal-text text-muted-foreground">
              Gudauri Ski Resort, Georgia
            </p>
          </div>
        </div>

        <Card className="glass-card-strong border-0 hover-lift">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-6">
              {getConditionIcon(weather.condition)}
            </div>
            <CardTitle className="text-6xl font-light font-playfair text-foreground mb-2">
              {weather.temperature}°C
            </CardTitle>
            <p className="text-xl text-muted-foreground capitalize font-light">
              {weather.condition}
            </p>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center p-6 glass-card hover-lift">
                <Wind className="h-8 w-8 text-warm-gold mx-auto mb-4" />
                <p className="text-sm text-muted-foreground font-medium mb-2">Wind Speed</p>
                <p className="text-2xl font-light text-foreground">
                  {weather.windSpeed} km/h
                </p>
              </div>
              
              <div className="text-center p-6 glass-card hover-lift">
                <Droplets className="h-8 w-8 text-warm-gold mx-auto mb-4" />
                <p className="text-sm text-muted-foreground font-medium mb-2">Humidity</p>
                <p className="text-2xl font-light text-foreground">
                  {weather.humidity}%
                </p>
              </div>
              
              <div className="text-center p-6 glass-card hover-lift col-span-2 md:col-span-1">
                <CloudSnow className="h-8 w-8 text-warm-gold mx-auto mb-4" />
                <p className="text-sm text-muted-foreground font-medium mb-2">Snow Base</p>
                <p className="text-2xl font-light text-foreground">
                  {weather.snowDepth} cm
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Thermometer className="h-5 w-5 text-warm-gold" />
                <Badge className="glass-card bg-green-500/20 text-green-400 border-green-500/30">
                  Excellent Ski Conditions
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Last updated: {new Date(weather.lastUpdated).toLocaleTimeString()}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}