import heroImg from "@/assets/hero-paratha.jpg";
import { MapPin, Clock, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in-up">
          <Star size={14} fill="currentColor" />
          <span>Dehradun's #1 Paratha Dhaba Since 2005</span>
          <Star size={14} fill="currentColor" />
        </div>

        {/* Hindi Title */}
        <p className="font-hindi text-cream/80 text-lg mb-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          स्वागत है आपका
        </p>

        {/* Main Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-cream mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Pahalwan{" "}
          <span className="text-gradient-gold">Paratha</span>
          <br />
          Dhabha
        </h1>

        {/* Tagline */}
        <p className="text-cream/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up font-hindi" style={{ animationDelay: "0.3s" }}>
          असली देसी स्वाद, घर जैसा खाना — गर्म पराठे, ताजा मक्खन और प्यार से बना हर निवाला
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-2 text-cream">
            <Star size={18} className="text-gold" fill="currentColor" />
            <span className="font-bold text-lg">3.9</span>
            <span className="text-cream/60 text-sm">30K+ Ratings</span>
          </div>
          <div className="w-px h-6 bg-cream/20" />
          <div className="flex items-center gap-2 text-cream">
            <Clock size={18} className="text-primary" />
            <span className="font-semibold">24 Hours Open</span>
          </div>
          <div className="w-px h-6 bg-cream/20" />
          <div className="flex items-center gap-2 text-cream">
            <MapPin size={18} className="text-primary" />
            <span className="font-semibold">Prem Nagar, Dehradun</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="#menu"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-warm hover:opacity-90 transition-all hover:scale-105 font-display"
          >
            देखें Menu
          </a>
          <a
            href="#contact"
            className="border-2 border-cream text-cream px-8 py-4 rounded-full font-bold text-lg hover:bg-cream hover:text-deep-brown transition-all hover:scale-105 font-display backdrop-blur-sm"
          >
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cream/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
