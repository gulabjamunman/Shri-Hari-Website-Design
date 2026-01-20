import { useEffect, useRef, useState } from "react";
import { MapPin, Container, Globe, Gauge } from "lucide-react";

const stats = [
  {
    icon: Gauge,
    value: "5M+",
    label: "KMs Driven",
    description: "Across India's vast road network",
  },
  {
    icon: Globe,
    value: "60+",
    label: "Countries Reached",
    description: "Global shipping partnerships",
  },
  {
    icon: Container,
    value: "44,000+",
    label: "Containers Delivered",
    description: "Safe and timely arrivals",
  },
  {
    icon: MapPin,
    value: "12M+ MT",
    label: "Material Delivered",
    description: "Trusted with massive cargo",
  },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-navy-gradient py-16 md:py-20">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${
                isVisible ? "animate-counter" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 mb-4">
                <stat.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-accent font-semibold mb-1">{stat.label}</div>
              <div className="text-white/60 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
