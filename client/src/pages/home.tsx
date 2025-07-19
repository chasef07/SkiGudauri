import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WeatherWidget from "@/components/weather-widget";
import ImageGallery from "@/components/image-gallery";
import FAQSection from "@/components/faq-section";
import ContactForm from "@/components/contact-form";
import { 
  Mountain, 
  Bed, 
  Utensils, 
  CableCar, 
  Flame, 
  Waves, 
  Wifi, 
  Phone, 
  Car,
  Star,
  Menu,
  X,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Calendar
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <div className="hidden">
        <meta name="title" content="Luxury Ski Chalet Rental - Gudauri, Georgia | Premium Alpine Retreat" />
        <meta name="description" content="Experience luxury at our exclusive ski chalet in Gudauri, Georgia. Premium amenities, stunning mountain views, and direct access to world-class ski slopes." />
        <meta name="keywords" content="luxury ski chalet, Gudauri Georgia, ski rental, mountain resort, alpine retreat, luxury accommodation" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Luxury Ski Chalet Rental - Gudauri, Georgia" />
        <meta property="og:description" content="Experience luxury at our exclusive ski chalet in Gudauri, Georgia." />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/98 backdrop-blur-sm shadow-sm" : "bg-white/95 backdrop-blur-sm"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-playfair text-2xl font-bold text-charcoal">
              Alpine Luxury
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-dark-grey hover:text-gold transition-colors duration-300 font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection("property")} className="text-dark-grey hover:text-gold transition-colors duration-300 font-medium">
                Property
              </button>
              <button onClick={() => scrollToSection("amenities")} className="text-dark-grey hover:text-gold transition-colors duration-300 font-medium">
                Amenities
              </button>
              <button onClick={() => scrollToSection("weather")} className="text-dark-grey hover:text-gold transition-colors duration-300 font-medium">
                Weather
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-dark-grey hover:text-gold transition-colors duration-300 font-medium">
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection("booking")}
                className="bg-gold text-white hover:bg-gold/90 rounded-full px-6"
              >
                Book Now
              </Button>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-charcoal"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection("home")} className="text-dark-grey hover:text-gold transition-colors duration-300 font-medium text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection("property")} className="text-dark-grey hover:text-gold transition-colors duration-300 font-medium text-left">
                  Property
                </button>
                <button onClick={() => scrollToSection("amenities")} className="text-dark-grey hover:text-gold transition-colors duration-300 font-medium text-left">
                  Amenities
                </button>
                <button onClick={() => scrollToSection("weather")} className="text-dark-grey hover:text-gold transition-colors duration-300 font-medium text-left">
                  Weather
                </button>
                <button onClick={() => scrollToSection("faq")} className="text-dark-grey hover:text-gold transition-colors duration-300 font-medium text-left">
                  FAQ
                </button>
                <Button 
                  onClick={() => scrollToSection("booking")}
                  className="bg-gold text-white hover:bg-gold/90 rounded-full w-fit"
                >
                  Book Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed parallax-bg"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Luxury Alpine
            <span className="text-gold block">Retreat</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Experience unparalleled luxury in the heart of Gudauri's pristine mountain landscape
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection("booking")}
              className="bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Your Stay
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("property")}
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Explore Property
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Property Overview */}
      <section id="property" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Exquisite Mountain Sanctuary
            </h2>
            <p className="text-xl text-dark-grey max-w-3xl mx-auto">
              Nestled in the breathtaking mountains of Gudauri, Georgia, this luxury chalet offers an unmatched alpine experience with world-class amenities and stunning panoramic views.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gold/20 p-3 rounded-full">
                  <Mountain className="text-gold h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-semibold mb-2">Prime Location</h3>
                  <p className="text-dark-grey">Direct access to Gudauri's renowned ski slopes with breathtaking 360-degree mountain views.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-alpine/20 p-3 rounded-full">
                  <Bed className="text-alpine h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-semibold mb-2">Luxury Accommodation</h3>
                  <p className="text-dark-grey">Sleeps up to 8 guests in 4 elegantly appointed bedrooms with premium linens and furnishings.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gold/20 p-3 rounded-full">
                  <Utensils className="text-gold h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-semibold mb-2">Gourmet Kitchen</h3>
                  <p className="text-dark-grey">Fully equipped modern kitchen with high-end appliances and mountain view dining area.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Luxury chalet interior" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <Badge className="absolute -top-4 -right-4 bg-gold text-white px-4 py-2 rounded-full font-semibold">
                Premium Suite
              </Badge>
            </div>
          </div>

          {/* Property Stats */}
          <Card className="bg-snow rounded-2xl p-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-charcoal">4</div>
                  <div className="text-dark-grey font-medium">Bedrooms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-charcoal">3</div>
                  <div className="text-dark-grey font-medium">Bathrooms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-charcoal">8</div>
                  <div className="text-dark-grey font-medium">Guests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-playfair font-bold text-charcoal">200m²</div>
                  <div className="text-dark-grey font-medium">Living Space</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-snow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">Discover Luxury</h2>
            <p className="text-xl text-dark-grey">Explore every detail of your alpine sanctuary</p>
          </div>

          <ImageGallery />
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">Premium Amenities</h2>
            <p className="text-xl text-dark-grey max-w-2xl mx-auto">Every detail crafted for your comfort and convenience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl hover:bg-snow transition-all duration-300">
              <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CableCar className="text-gold h-8 w-8" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Ski-in/Ski-out</h3>
              <p className="text-dark-grey">Direct access to world-class ski slopes right from your doorstep</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-snow transition-all duration-300">
              <div className="bg-alpine/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="text-alpine h-8 w-8" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Fireplace</h3>
              <p className="text-dark-grey">Cozy up by the modern fireplace after a day on the slopes</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-snow transition-all duration-300">
              <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="text-gold h-8 w-8" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Private Hot Tub</h3>
              <p className="text-dark-grey">Relax in the outdoor hot tub with stunning mountain views</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-snow transition-all duration-300">
              <div className="bg-alpine/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="text-alpine h-8 w-8" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">High-Speed WiFi</h3>
              <p className="text-dark-grey">Stay connected with complimentary high-speed internet throughout</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-snow transition-all duration-300">
              <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-gold h-8 w-8" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Concierge Service</h3>
              <p className="text-dark-grey">24/7 concierge service for all your mountain adventure needs</p>
            </div>

            <div className="text-center p-6 rounded-2xl hover:bg-snow transition-all duration-300">
              <div className="bg-alpine/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="text-alpine h-8 w-8" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-2">Private Parking</h3>
              <p className="text-dark-grey">Secure parking for up to 3 vehicles with easy access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Widget */}
      <section id="weather" className="py-20 bg-gradient-to-br from-alpine to-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-8">Live Weather in Gudauri</h2>
          <WeatherWidget />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-snow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">Guest Experiences</h2>
            <p className="text-xl text-dark-grey">What our guests say about their alpine retreat</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-dark-grey mb-6 italic">
                  "Absolutely breathtaking! The chalet exceeded all expectations. The views, amenities, and proximity to the slopes made it the perfect ski vacation."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold mr-4">
                    S
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-dark-grey/70">London, UK</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-dark-grey mb-6 italic">
                  "Luxury at its finest. Every detail was perfect, from the hot tub to the concierge service. We'll definitely be returning!"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-alpine rounded-full flex items-center justify-center text-white font-bold mr-4">
                    M
                  </div>
                  <div>
                    <div className="font-semibold">Michael Chen</div>
                    <div className="text-sm text-dark-grey/70">Toronto, Canada</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-dark-grey mb-6 italic">
                  "The perfect mountain getaway. Stunning location, impeccable service, and memories that will last a lifetime."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold mr-4">
                    A
                  </div>
                  <div>
                    <div className="font-semibold">Anna Mueller</div>
                    <div className="text-sm text-dark-grey/70">Munich, Germany</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-dark-grey">Everything you need to know about your stay</p>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-6">Book Your Alpine Escape</h2>
          <p className="text-xl text-white/90 mb-12">Secure your luxury mountain retreat today</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a 
              href="https://www.airbnb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-gold hover:bg-opacity-90 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
            >
              <div className="flex items-center justify-center mb-4">
                <svg className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm7.9 8.4c-.9 2.5-2.3 4.4-4.1 5.7-1.8 1.3-3.9 1.9-6.4 1.9-2.5 0-4.6-.6-6.4-1.9-1.8-1.3-3.2-3.2-4.1-5.7 0-.1 0-.3.1-.4.9-2.5 2.3-4.4 4.1-5.7C5.0 1 7.1.4 9.6.4s4.6.6 6.4 1.9c1.8 1.3 3.2 3.2 4.1 5.7 0 .1 0 .3-.1.4z"/>
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-2">Book via Airbnb</h3>
              <p className="text-white/90 mb-4">Secure booking with Airbnb's trusted platform</p>
              <div className="font-semibold text-lg">From €450/night</div>
            </a>

            <div className="group bg-alpine hover:bg-opacity-90 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-2">Book Direct</h3>
              <p className="text-white/90 mb-4">Best rates guaranteed with direct booking</p>
              <div className="font-semibold text-lg">From €420/night</div>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <CardContent className="p-0">
              <h3 className="font-playfair text-2xl font-bold mb-6">Quick Inquiry</h3>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="font-playfair text-2xl font-bold mb-4">Alpine Luxury</div>
              <p className="text-white/80 mb-4">Experience the ultimate luxury ski retreat in the heart of Gudauri's pristine mountains.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-playfair text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection("property")} className="text-white/80 hover:text-gold transition-colors duration-300">Property</button></li>
                <li><button onClick={() => scrollToSection("amenities")} className="text-white/80 hover:text-gold transition-colors duration-300">Amenities</button></li>
                <li><button onClick={() => scrollToSection("faq")} className="text-white/80 hover:text-gold transition-colors duration-300">FAQ</button></li>
                <li><button onClick={() => scrollToSection("booking")} className="text-white/80 hover:text-gold transition-colors duration-300">Booking</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-playfair text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-white/80">
                <p><Phone className="inline h-4 w-4 mr-2" /> +995 555 123 456</p>
                <p><Mail className="inline h-4 w-4 mr-2" /> info@alpineluxury.ge</p>
                <p><MapPin className="inline h-4 w-4 mr-2" /> Gudauri Resort, Georgia</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Alpine Luxury Chalet. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </>
  );
}
