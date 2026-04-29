import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100">
      <Navbar />
      <Hero />
      <Industries />
      <Features />
      <HowItWorks />
      <Pricing />
      <DemoForm />
      <Footer />
    </div>
  );
}
