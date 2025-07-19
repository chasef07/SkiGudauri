'use client'

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Loader2 } from "lucide-react";
import type { InsertInquiry } from "@/types";

export default function ContactForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState<InsertInquiry>({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    message: ""
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      return await apiRequest("POST", "/api/inquiries", data);
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent!",
        description: "Thank you for your inquiry. We will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        checkIn: "",
        checkOut: "",
        message: ""
      });
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Required Fields",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      });
      return;
    }

    mutation.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertInquiry, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-0 bg-white/20 text-white placeholder-white/70 focus:bg-white/30 focus:outline-none transition-all duration-300"
          required
        />
        <Input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-0 bg-white/20 text-white placeholder-white/70 focus:bg-white/30 focus:outline-none transition-all duration-300"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="date"
          placeholder="Check-in Date"
          value={formData.checkIn || ""}
          onChange={(e) => handleInputChange("checkIn", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-0 bg-white/20 text-white placeholder-white/70 focus:bg-white/30 focus:outline-none transition-all duration-300"
        />
        <Input
          type="date"
          placeholder="Check-out Date"
          value={formData.checkOut || ""}
          onChange={(e) => handleInputChange("checkOut", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-0 bg-white/20 text-white placeholder-white/70 focus:bg-white/30 focus:outline-none transition-all duration-300"
        />
      </div>
      <Textarea
        placeholder="Special Requests"
        rows={4}
        value={formData.message || ""}
        onChange={(e) => handleInputChange("message", e.target.value)}
        className="w-full px-4 py-3 rounded-xl border-0 bg-white/20 text-white placeholder-white/70 focus:bg-white/30 focus:outline-none transition-all duration-300 resize-none"
      />
      <Button 
        type="submit"
        disabled={mutation.isPending}
        className="w-full bg-gold hover:bg-gold/90 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:transform-none"
      >
        {mutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Inquiry"
        )}
      </Button>
    </form>
  );
}
