import { Shield, Clock, DollarSign, Users, Award, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "A decade and a half of expertise in multimodal logistics gives us unmatched industry knowledge.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Our market experience enables us to secure the most competitive rates for your transportation needs.",
  },
  {
    icon: Shield,
    title: "Risk Diversification",
    description: "Multimodal approach mitigates risk by avoiding dependence on a single transportation mode.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Schedule-driven timelines with frequent services ensure predictable and reliable deliveries.",
  },
  {
    icon: Users,
    title: "Trusted Partners",
    description: "Tie-ups with Maersk, MSC, OOCL, all major rail operators, and CHAs across Indian ports.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Operational 365 days a year with round-the-clock support for your shipments.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Trusted Logistics Partner
          </h2>
          <p className="text-muted-foreground text-lg">
            Every shipment carries your expectations, timelines, and trust. 
            We take that responsibility seriously.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-secondary/30"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
