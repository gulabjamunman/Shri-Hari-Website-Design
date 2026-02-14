import { useState } from "react";
import {
  Package,
  MapPin,
  Calendar,
  Truck,
  Train,
  Ship,
  ArrowRight,
} from "lucide-react";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /*
  ===========================================
  REAL SUBMIT FUNCTION - SENDS DATA TO PHP
  ===========================================
  */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://shriharishipping.com/send-quote.php",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ...formData,
            transportModes: selectedModes.join(", "),
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Quote Request Submitted",
          description:
            "Our team will contact you within 24 hours with a detailed quote.",
        });

        // Reset form
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

        onOpenChange(false);

      } else {
        toast({
          title: "Submission Failed",
          description:
            result.message || "Unable to send quote request.",
          variant: "destructive",
        });
      }

    } catch (error) {
      toast({
        title: "Network Error",
        description:
          "Could not connect to the server. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">

        <SheetHeader className="mb-6">
          <SheetTitle className="font-display text-2xl">
            Get a Free Quote
          </SheetTitle>

          <SheetDescription>
            Fill in your shipment details and receive a quote within 24 hours.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Transport Mode */}
          <div className="space-y-3">
            <Label>Preferred Transport Mode(s)</Label>

            <div className="grid grid-cols-3 gap-3">

              {transportModes.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => toggleMode(mode.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all
                  ${
                    selectedModes.includes(mode.id)
                      ? "border-secondary bg-secondary/10 text-secondary"
                      : "border-border bg-muted/50 hover:border-secondary/50"
                  }`}
                >
                  <mode.icon className="w-6 h-6" />

                  <span className="text-sm font-medium">
                    {mode.label}
                  </span>

                </button>
              ))}

            </div>
          </div>

          {/* Contact Details */}

          <div className="space-y-4">

            <h4 className="font-semibold">
              Contact Details
            </h4>

            <div className="grid grid-cols-2 gap-4">

              <div>
                <Label>Full Name *</Label>

                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label>Phone *</Label>

                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div>
                <Label>Email *</Label>

                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label>Company</Label>

                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

            </div>

          </div>

          {/* Shipment Details */}

          <div className="space-y-4">

            <h4 className="font-semibold">
              Shipment Details
            </h4>

            <div className="grid grid-cols-2 gap-4">

              <div>
                <Label>Origin *</Label>

                <Input
                  name="origin"
                  value={formData.origin}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label>Destination *</Label>

                <Input
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div>
                <Label>Cargo Type *</Label>

                <Input
                  name="cargoType"
                  value={formData.cargoType}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Label>Weight</Label>

                <Input
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div>
              <Label>Preferred Date</Label>

              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

          </div>

          {/* Notes */}

          <div>
            <Label>Additional Requirements</Label>

            <Textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Submitting..."
              : (
                <>
                  Request Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
          </Button>

        </form>

      </SheetContent>
    </Sheet>
  );
};

export default QuotePanel;
