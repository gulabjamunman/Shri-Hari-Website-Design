import { ArrowRight, Ship, Truck, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-logistics.jpg";

interface HeroProps {
  onQuoteClick: () => void;
}

const Hero = ({ onQuoteClick }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Container port and logistics operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
            <span className="text-white/90 text-sm font-medium">
              15+ Years of Logistics Excellence
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Logistics Takes On<br />
            <span className="text-accent">A New Look</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-white/80 mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Multimodal freight forwarding across road, rail, and sea. 
            Reliable, time-bound, and cost-effective delivery solutions you can plan around with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={onQuoteClick}>
              Get Free Quote
              <ArrowRight size={20} />
            </Button>
            <Button variant="heroOutline" size="xl">
              Track Shipment
            </Button>
          </div>

          {/* Transport modes */}
          <div className="flex flex-wrap gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Truck, label: "Road Transport" },
              { icon: Train, label: "Rail Freight" },
              { icon: Ship, label: "Sea Shipping" },
            ].map((mode) => (
              <div
                key={mode.label}
                className="flex items-center gap-3 text-white/80"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <mode.icon size={20} className="text-accent" />
                </div>
                <span className="font-medium">{mode.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
