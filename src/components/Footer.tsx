import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/shss.png";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (

    <footer className="bg-navy-gradient text-white">

      <div className="container-wide py-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}

          <div className="lg:col-span-1">

            <div className="flex items-center gap-3 mb-5">

              {/* Logo */}

              <img
                src={logo}
                alt="Shri Hari Shipping Solutions"
                className="h-12 w-auto brightness-0 invert opacity-90"
              />

              {/* Company name */}

              <div>

                <div className="font-display font-bold text-xl leading-tight">
                  Shri Hari
                </div>

                <div className="text-[10px] text-white/70 font-semibold tracking-widest uppercase">
                  Shipping Solutions
                </div>

              </div>

            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Multimodal freight forwarding with 15+ years of excellence.
              Reliable, time-bound, and cost-effective logistics solutions.
            </p>

            {/* LinkedIn only */}

            <div className="flex gap-3">

              <a
                href="https://www.linkedin.com/company/shri-hari-shipping-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="font-display font-bold text-lg mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">

              {["Home", "About Us", "Services", "Track Shipment", "Contact"].map(link => (

                <li key={link}>

                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h4 className="font-display font-bold text-lg mb-5">
              Services
            </h4>

            <ul className="space-y-3">

              {[
                "Road Transport",
                "Rail Freight",
                "Domestic Shipping",
                "EXIM (Import/Export)"
              ].map(service => (

                <li key={service}>

                  <a
                    href="#services"
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="font-display font-bold text-lg mb-5">
              Contact Us
            </h4>

            <ul className="space-y-4">

              <li className="flex items-start gap-3">

                <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />

                <a
                  href="tel:+919214339415"
                  className="text-sm text-white/70 hover:text-accent transition-colors"
                >
                  +91 92143 39415
                </a>

              </li>

              <li className="flex items-start gap-3">

                <Mail size={18} className="text-accent mt-0.5 flex-shrink-0" />

                <a
                  href="mailto:sales@shriharishipping.com"
                  className="text-sm text-white/70 hover:text-accent transition-colors"
                >
                  sales@shriharishipping.com
                </a>

              </li>

              <li className="flex items-start gap-3">

                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />

                <span className="text-sm text-white/70">
                  B-11, RIICO Industrial Area,<br />
                  Madanganj-Kishangarh,<br />
                  Rajasthan - 305801
                </span>

              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-white/10">

        <div className="container-wide py-6 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p className="text-white/50 text-sm text-center sm:text-left">
            © {currentYear} Shri Hari Shipping Solutions. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <a href="#" className="text-white/50 hover:text-accent transition-colors">
              Privacy Policy
            </a>

            <a href="#" className="text-white/50 hover:text-accent transition-colors">
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>

  );

};

export default Footer;
