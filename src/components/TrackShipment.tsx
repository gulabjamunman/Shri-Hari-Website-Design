import { useState } from "react";
import { Search, Package, Truck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TrackShipmentProps {
  onTrackClick: () => void;
}

const TrackShipment = ({ onTrackClick }: TrackShipmentProps) => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    onTrackClick();
  };

  return (
    <section id="track" className="section-padding bg-navy-gradient relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-3">
            Shipment Tracking
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Track Your Consignment
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Enter your tracking number to get real-time updates on your shipment status.
          </p>

          {/* Tracking form */}
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Enter tracking number (e.g., SHSS123456)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="h-14 pl-12 text-base bg-white border-0 focus-visible:ring-accent"
              />
            </div>
            <Button type="submit" variant="hero" size="xl">
              Track Now
            </Button>
          </form>

          {/* Sample tracking steps */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-white font-semibold mb-6">Sample Tracking Preview</h3>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              {[
                { icon: Package, label: "Order Placed", status: "completed" },
                { icon: Truck, label: "In Transit", status: "current" },
                { icon: CheckCircle, label: "Delivered", status: "pending" },
              ].map((step, index) => (
                <div key={step.label} className="flex items-center gap-4 flex-1">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      step.status === "completed"
                        ? "bg-green-500"
                        : step.status === "current"
                        ? "bg-accent animate-pulse-slow"
                        : "bg-white/20"
                    }`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-medium">{step.label}</div>
                    <div className="text-white/60 text-sm">
                      {step.status === "completed"
                        ? "Completed"
                        : step.status === "current"
                        ? "In Progress"
                        : "Pending"}
                    </div>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block flex-1 h-0.5 bg-white/20 mx-4">
                      <div
                        className={`h-full ${
                          step.status === "completed" ? "bg-green-500 w-full" : "w-0"
                        }`}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackShipment;
