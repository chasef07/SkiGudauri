"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Heart, X } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Luxury living room with fireplace",
    title: "Living Room"
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Mountain views from chalet",
    title: "Mountain Views"
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Luxury master bedroom",
    title: "Master Bedroom"
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Modern luxury kitchen",
    title: "Gourmet Kitchen"
  },
  {
    src: "https://images.unsplash.com/photo-1551524164-6cf2ac8ee97c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Ski slopes in winter",
    title: "Ski Access"
  },
  {
    src: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Elegant dining area",
    title: "Dining Area"
  }
]

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (index: number) => {
    setFavorites(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/10" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="glass-card mb-4 px-4 py-2">
            Photo Gallery
          </Badge>
          <h2 className="minimal-large mb-6">
            Experience Luxury
          </h2>
          <p className="minimal-text text-muted-foreground max-w-3xl mx-auto">
            Discover the exquisite details and breathtaking views that await you in our luxury chalet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer hover-lift"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 glass-card-strong opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Image overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <h3 className="text-white font-medium text-lg mb-1">
                        {image.title}
                      </h3>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(index)
                      }}
                      className={`hover-heart bg-white/20 backdrop-blur-sm ${
                        favorites.includes(index) ? 'text-red-500' : 'text-white'
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${favorites.includes(index) ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
                <div className="relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto rounded-2xl"
                  />
                  
                  {/* Navigation buttons */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 glass-card-strong text-white hover:bg-white/20"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 glass-card-strong text-white hover:bg-white/20"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                  
                  {/* Close button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 glass-card-strong text-white hover:bg-white/20"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                  
                  {/* Image info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass-card-strong p-4 rounded-xl">
                      <h3 className="text-white text-xl font-medium mb-2">
                        {image.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}