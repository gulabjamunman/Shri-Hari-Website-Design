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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Clients />
        <TrackShipment />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
