import { useState } from "react";
import { X, Package, MapPin, Calendar, Truck, Train, Ship, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

interface QuotePanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const transportModes = [
  { id: "road", label: "Road", icon: Truck },
  { id: "rail", label: "Rail", icon: Train },
  { id: "sea", label: "Sea", icon: Ship },
];

const QuotePanel = ({ open, onOpenChange }: QuotePanelProps) => {
  const { toast } = useToast();
  const [selectedModes, setSelectedModes] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    origin: "",
    destination: "",
    cargoType: "",
    weight: "",
    date: "",
    notes: "",
  });

  const toggleMode = (modeId: string) => {
    setSelectedModes((prev) =>
      prev.includes(modeId)
        ? prev.filter((id) => id !== modeId)
        : [...prev, modeId]
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Quote Request Submitted!",
      description: "Our team will contact you within 24 hours with a detailed quote.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      origin: "",
      destination: "",
      cargoType: "",
      weight: "",
      date: "",
      notes: "",
    });
    setSelectedModes([]);
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-display text-2xl text-foreground">
            Get a Free Quote
          </SheetTitle>
          <SheetDescription>
            Fill in your shipment details and we'll provide a competitive quote within 24 hours.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Transport Mode Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              Preferred Transport Mode(s)
            </Label>
            <div className="grid grid-cols-3 gap-3">
              {transportModes.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => toggleMode(mode.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedModes.includes(mode.id)
                      ? "border-secondary bg-secondary/10 text-secondary"
                      : "border-border bg-muted/50 text-muted-foreground hover:border-secondary/50"
                  }`}
                >
                  <mode.icon className="w-6 h-6" />
                  <span className="text-sm font-medium">{mode.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center">
                1
              </span>
              Contact Details
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                />
              </div>
            </div>
          </div>

          {/* Shipment Details */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center">
                2
              </span>
              Shipment Details
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="origin" className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Origin *
                </Label>
                <Input
                  id="origin"
                  name="origin"
                  value={formData.origin}
                  onChange={handleChange}
                  placeholder="City, State"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination" className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Destination *
                </Label>
                <Input
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="City, State"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cargoType" className="flex items-center gap-1">
                  <Package className="w-3 h-3" /> Cargo Type *
                </Label>
                <Input
                  id="cargoType"
                  name="cargoType"
                  value={formData.cargoType}
                  onChange={handleChange}
                  placeholder="e.g., Marble, Granite"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (approx.)</Label>
                <Input
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="e.g., 20 tons"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Preferred Date
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Requirements</Label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any special handling requirements, preferred routes, or other details..."
              rows={3}
              className="resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                Request Quote
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to our terms and privacy policy.
          </p>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default QuotePanel;
