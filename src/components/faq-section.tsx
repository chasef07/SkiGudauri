'use client'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What's included in the rental?",
    answer: "The rental includes full access to the chalet with all amenities listed, linens, towels, kitchen essentials, WiFi, parking, and concierge service. Ski equipment rental can be arranged through our concierge."
  },
  {
    question: "How far is the chalet from the ski lifts?",
    answer: "The chalet offers true ski-in/ski-out access, meaning you can literally walk out your door and onto the slopes. The nearest lift is just 50 meters away, making it incredibly convenient for all skill levels."
  },
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is from 4:00 PM and check-out is by 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
  },
  {
    question: "Are pets allowed?",
    answer: "We welcome well-behaved pets with prior approval and a pet fee. Please contact us before booking to discuss your furry family members."
  },
  {
    question: "What's the cancellation policy?",
    answer: "We offer flexible cancellation up to 14 days before arrival for a full refund. Cancellations within 14 days are subject to a 50% charge. Weather-related cancellations are handled case-by-case."
  },
  {
    question: "How do I get to Gudauri from Tbilisi?",
    answer: "Gudauri is approximately 2 hours drive from Tbilisi. We can arrange airport transfers or provide detailed directions for self-driving. The mountain road is well-maintained and scenic."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((faq, index) => (
        <Card key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
          <button 
            className="w-full px-6 py-4 text-left bg-white hover:bg-snow transition-colors duration-300 flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-semibold text-charcoal">{faq.question}</span>
            <ChevronDown 
              className={`text-dark-grey transition-transform duration-300 h-5 w-5 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <CardContent className="px-6 py-4 bg-snow">
              <p className="text-dark-grey">{faq.answer}</p>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}
