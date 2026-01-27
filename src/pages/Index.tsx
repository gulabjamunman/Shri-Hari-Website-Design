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
import { useQuotePanel } from "@/hooks/useQuotePanel";

const Index = () => {
  const { isOpen, setIsOpen, openQuotePanel } = useQuotePanel();

  return (
    <div className="min-h-screen bg-background">
      <Header onQuoteClick={openQuotePanel} />
      <main>
        <Hero onQuoteClick={openQuotePanel} />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Clients />
        <TrackShipment />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <QuotePanel open={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
};

export default Index;
