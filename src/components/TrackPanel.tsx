import { useState } from "react";
import { Search, Package, Truck, CheckCircle, MapPin, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

interface TrackPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface TrackingResult {
  trackingId: string;
  status: "in-transit" | "delivered" | "pending";
  origin: string;
  destination: string;
  estimatedDelivery: string;
  lastUpdate: string;
  steps: {
    title: string;
    location: string;
    time: string;
    status: "completed" | "current" | "pending";
  }[];
}

const TrackPanel = ({ open, onOpenChange }: TrackPanelProps) => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [error, setError] = useState("");

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number");
      return;
    }

    setError("");
    setIsTracking(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock tracking result
    setResult({
      trackingId: trackingNumber.toUpperCase(),
      status: "in-transit",
      origin: "Kishangarh, Rajasthan",
      destination: "Mumbai, Maharashtra",
      estimatedDelivery: "Jan 29, 2026",
      lastUpdate: "2 hours ago",
      steps: [
        {
          title: "Shipment Picked Up",
          location: "Kishangarh, Rajasthan",
          time: "Jan 25, 2026 - 10:30 AM",
          status: "completed",
        },
        {
          title: "In Transit - Departed Facility",
          location: "Jaipur Hub, Rajasthan",
          time: "Jan 26, 2026 - 06:15 AM",
          status: "completed",
        },
        {
          title: "In Transit",
          location: "Ahmedabad Hub, Gujarat",
          time: "Jan 27, 2026 - 02:45 PM",
          status: "current",
        },
        {
          title: "Out for Delivery",
          location: "Mumbai, Maharashtra",
          time: "Pending",
          status: "pending",
        },
        {
          title: "Delivered",
          location: "Mumbai, Maharashtra",
          time: "Pending",
          status: "pending",
        },
      ],
    });

    setIsTracking(false);
  };

  const resetTracking = () => {
    setResult(null);
    setTrackingNumber("");
    setError("");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "current":
        return "bg-accent animate-pulse";
      default:
        return "bg-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "in-transit":
        return <Truck className="w-5 h-5" />;
      case "delivered":
        return <CheckCircle className="w-5 h-5" />;
      default:
        return <Package className="w-5 h-5" />;
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-display text-2xl text-foreground">
            Track Shipment
          </SheetTitle>
          <SheetDescription>
            Enter your tracking number to get real-time updates on your shipment.
          </SheetDescription>
        </SheetHeader>

        {/* Search Form */}
        <form onSubmit={handleTrack} className="mb-6">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="e.g., SHSS123456"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="pl-10 h-12"
                disabled={isTracking}
              />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={isTracking}>
              {isTracking ? "..." : "Track"}
            </Button>
          </div>
          {error && <p className="text-destructive text-sm mt-2">{error}</p>}
        </form>

        {/* Tracking Result */}
        {result && (
          <div className="space-y-6 animate-fade-in">
            {/* Status Card */}
            <div className="bg-muted/50 rounded-xl p-5 border border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tracking ID</p>
                  <p className="font-mono font-semibold text-foreground">{result.trackingId}</p>
                </div>
                <div className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 ${
                  result.status === "in-transit" 
                    ? "bg-accent/20 text-accent" 
                    : result.status === "delivered"
                    ? "bg-green-500/20 text-green-600"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {getStatusIcon(result.status)}
                  {result.status === "in-transit" ? "In Transit" : result.status === "delivered" ? "Delivered" : "Pending"}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">From</p>
                    <p className="font-medium text-foreground">{result.origin}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">To</p>
                    <p className="font-medium text-foreground">{result.destination}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">Est. Delivery</p>
                    <p className="font-medium text-foreground">{result.estimatedDelivery}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">Last Update</p>
                    <p className="font-medium text-foreground">{result.lastUpdate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Shipment Progress</h4>
              <div className="space-y-0">
                {result.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    {/* Timeline indicator */}
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(step.status)}`} />
                      {index < result.steps.length - 1 && (
                        <div className={`w-0.5 flex-1 min-h-[60px] ${
                          step.status === "completed" ? "bg-green-500" : "bg-muted"
                        }`} />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-6">
                      <p className={`font-medium ${
                        step.status === "current" 
                          ? "text-secondary" 
                          : step.status === "completed"
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}>
                        {step.title}
                      </p>
                      <p className="text-sm text-muted-foreground">{step.location}</p>
                      <p className="text-xs text-muted-foreground mt-1">{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Track Another */}
            <Button
              variant="outline"
              className="w-full"
              onClick={resetTracking}
            >
              Track Another Shipment
            </Button>
          </div>
        )}

        {/* Empty State */}
        {!result && !isTracking && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-muted-foreground" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Enter Tracking Number</h4>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              Your tracking number can be found in your shipping confirmation email or receipt.
            </p>
          </div>
        )}

        {/* Loading State */}
        {isTracking && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Search className="w-8 h-8 text-secondary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Tracking Shipment...</h4>
            <p className="text-sm text-muted-foreground">
              Please wait while we fetch your shipment details.
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default TrackPanel;
