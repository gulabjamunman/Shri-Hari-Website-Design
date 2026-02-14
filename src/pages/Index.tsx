import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Clients from "@/components/Clients";
import TrackShipment from "@/components/TrackShipment";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QuotePanel from "@/components/QuotePanel";
import TrackPanel from "@/components/TrackPanel";
import { useQuotePanel } from "@/hooks/useQuotePanel";
import { useTrackPanel } from "@/hooks/useTrackPanel";

const Index = () => {
  const { isOpen: isQuoteOpen, setIsOpen: setQuoteOpen, openQuotePanel } = useQuotePanel();
  const { isOpen: isTrackOpen, setIsOpen: setTrackOpen, openTrackPanel } = useTrackPanel();

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={openQuotePanel} />
      <main>
        <Hero onQuoteClick={openQuotePanel} onTrackClick={openTrackPanel} />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Clients />
        <TrackShipment onTrackClick={openTrackPanel} />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <QuotePanel open={isQuoteOpen} onOpenChange={setQuoteOpen} />
      <TrackPanel open={isTrackOpen} onOpenChange={setTrackOpen} />
    </div>
  );
};

export default Index;
