import { Truck, Train, Ship, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import roadImage from "@/assets/road-transport.jpg";
import railImage from "@/assets/rail-transport.jpg";
import seaImage from "@/assets/sea-shipping.jpg";
import globalImage from "@/assets/global-network.jpg";

const services = [
  {
    icon: Truck,
    title: "Road Transport",
    description:
      "End-to-end road transportation at competitive prices. Safe delivery with backup measures for any contingency.",
    image: roadImage,
    features: ["Full Truck Load (FTL)", "Part Load Service", "Door-to-Door Delivery", "24/7 Support"],
  },
  {
    icon: Train,
    title: "Rail Freight",
    description:
      "Tie-ups with all major rail operators in India. Full-rake, part-rake, or individual containers as per convenience.",
    image: railImage,
    features: ["Full Rake Booking", "Part Rake Service", "Container Transport", "Cost Efficient"],
  },
  {
    icon: Ship,
    title: "Domestic Shipping",
    description:
      "Partnerships with all major domestic shipping lines ensuring swift cargo movement across terminals.",
    image: seaImage,
    features: ["Coastal Shipping", "Port-to-Port", "Customs Clearance", "Documentation"],
  },
  {
    icon: Globe,
    title: "EXIM (Import/Export)",
    description:
      "Work with Maersk, MSC, OOCL and major NVOCCs. CHA tie-ups across all major Indian ports.",
    image: globalImage,
    features: ["Ocean Freight", "60+ Countries", "Competitive Pricing", "Complete Documentation"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-3">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Multimodal Logistics Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From first-mile to last-mile, we provide comprehensive transportation 
            solutions across road, rail, and sea.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                {/* Features */}
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="text-secondary hover:text-secondary-foreground hover:bg-secondary group/btn p-0 h-auto">
                  Learn More
                  <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
