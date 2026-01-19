import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SuperAPISection from "@/components/SuperAPISection";
import TechStackSection from "@/components/TechStackSection";
import AliadosSection from "@/components/AliadosSection";
import ClientesSection from "@/components/ClientesSection";
import PhilosophySection from "@/components/PhilosophySection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SuperAPISection />
        <TechStackSection />
        <AliadosSection />
        <ClientesSection />
        <PhilosophySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
