import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SuperAPISection from "@/components/SuperAPISection";
import TechStackSection from "@/components/TechStackSection";
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
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
