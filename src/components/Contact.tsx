import { useState } from "react";
import { Phone, Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
    setIsSubmitting(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="section-padding bg-muted">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Info */}
          <div>
            <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-3">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Optimize Your Logistics?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Contact us for a free consultation and competitive quote. 
              Our logistics experts are ready to help you find the most efficient 
              and cost-effective shipping solutions.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <a href="tel:+918078646927" className="text-muted-foreground hover:text-secondary transition-colors">Phone
+91 92143 39415</a><div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  
                  <br />
                  <a href="tel:+919214339415" className="text-muted-foreground hover:text-secondary transition-colors">
                    +91 92143 39415
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <a href="mailto:sales@shriharishipping.com" className="text-muted-foreground hover:text-secondary transition-colors">
                    sales@shriharishipping.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Office</h4>
                  <p className="text-muted-foreground">
                    B-11, RIICO Industrial Area,<br />
                    Harmara Chouraha, Madanganj-Kishangarh,<br />
                    Rajasthan - 305801
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Request a Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Input name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} required className="h-12" />
                </div>
                <div>
                  <Input name="email" type="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} required className="h-12" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="h-12" />
                </div>
                <div>
                  <Input name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} className="h-12" />
                </div>
              </div>
              <div>
                <Textarea name="message" placeholder="Tell us about your logistics requirements..." value={formData.message} onChange={handleChange} rows={4} className="resize-none" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <>
                    Send Message
                    <Send size={18} />
                  </>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;