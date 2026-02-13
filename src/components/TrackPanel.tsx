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
    setResult(null);

    try {

      const response = await fetch(
        `https://mgmt.shriharishipping.com/test-app/api-track.php?lr_id=${trackingNumber}`
      );

      const data = await response.json();

      if (!data.success) {
        setError(data.message || "Tracking number not found");
        setIsTracking(false);
        return;
      }

      const shipment = data.data;

      setResult({
        trackingId: shipment.lr_id,
        status: shipment.status === "Active" ? "in-transit" : "delivered",
        origin: shipment.from,
        destination: shipment.to,
        estimatedDelivery: shipment.date,
        lastUpdate: shipment.remarks || "Updated recently",
        steps: [
          {
            title: "Shipment Created",
            location: shipment.from,
            time: shipment.date,
            status: "completed",
          },
          {
            title: shipment.status === "Active" ? "In Transit" : "Delivered",
            location: shipment.to,
            time: shipment.date,
            status: shipment.status === "Active" ? "current" : "completed",
          },
          {
            title: "Delivery Completed",
            location: shipment.to,
            time: shipment.status === "Active" ? "Pending" : shipment.date,
            status: shipment.status === "Active" ? "pending" : "completed",
          }
        ],
      });

    } catch (err) {

      console.error(err);
      setError("Unable to connect to tracking server");

    }

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

        {/* rest of your UI remains unchanged */}

        {result && (
          <div className="space-y-6 animate-fade-in">

            <div className="bg-muted/50 rounded-xl p-5 border border-border">

              <div className="flex items-start justify-between mb-4">

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tracking ID</p>
                  <p className="font-mono font-semibold text-foreground">
                    {result.trackingId}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {getStatusIcon(result.status)}
                  <span>
                    {result.status === "in-transit" ? "In Transit" : "Delivered"}
                  </span>
                </div>

              </div>

              <p>From: {result.origin}</p>
              <p>To: {result.destination}</p>
              <p>Last Update: {result.lastUpdate}</p>

            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={resetTracking}
            >
              Track Another Shipment
            </Button>

          </div>
        )}

      </SheetContent>
    </Sheet>
  );
};

export default TrackPanel;
