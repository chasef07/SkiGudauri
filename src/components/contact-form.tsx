"use client"

import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Mail, Calendar, User, MessageSquare } from "lucide-react"

interface InquiryData {
  name: string
  email: string
  checkIn: string
  checkOut: string
  message: string
}

export function ContactForm() {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  
  const [formData, setFormData] = useState<InquiryData>({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    message: ""
  })

  const mutation = useMutation({
    mutationFn: async (data: InquiryData) => {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error("Failed to send inquiry")
      return response.json()
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent!",
        description: "Thank you for your inquiry. We will get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        checkIn: "",
        checkOut: "",
        message: ""
      })
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] })
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again.",
        variant: "destructive",
      })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="glass-card mb-4 px-4 py-2">
            Book Your Stay
          </Badge>
          <h2 className="minimal-large mb-6">
            Contact Us
          </h2>
          <p className="minimal-text text-muted-foreground max-w-2xl mx-auto">
            Ready to experience luxury in the mountains? Send us your inquiry and we'll help plan your perfect getaway.
          </p>
        </div>

        <Card className="glass-card-strong border-0 hover-lift">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-playfair font-light">
              Request Information
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    <User className="h-4 w-4 text-warm-gold" />
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass-card border-0 bg-white/5 dark:bg-white/5 placeholder:text-muted-foreground/60"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4 text-warm-gold" />
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass-card border-0 bg-white/5 dark:bg-white/5 placeholder:text-muted-foreground/60"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="checkIn" className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-warm-gold" />
                    Check-in Date
                  </label>
                  <Input
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="glass-card border-0 bg-white/5 dark:bg-white/5"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="checkOut" className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-warm-gold" />
                    Check-out Date
                  </label>
                  <Input
                    id="checkOut"
                    name="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="glass-card border-0 bg-white/5 dark:bg-white/5"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-warm-gold" />
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your stay preferences, group size, special requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="glass-card border-0 bg-white/5 dark:bg-white/5 placeholder:text-muted-foreground/60 resize-none"
                />
              </div>

              <div className="text-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  disabled={mutation.isPending}
                  className="button-soft hover-glow bg-warm-gold text-charcoal hover:bg-warm-gold/90 px-8 py-4 text-lg font-medium min-w-[200px]"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}