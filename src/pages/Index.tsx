import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pillars from "@/components/Pillars";
import Testimonials from "@/components/Testimonials";
import VideoShowcase from "@/components/VideoShowcase";
import FreeResources from "@/components/FreeResources";
import IntakeForm from "@/components/IntakeForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { CustomerSupportChat } from "@/components/CustomerSupportChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Pillars />
        <Testimonials />
        <div id="videos">
          <VideoShowcase />
        </div>
        <FreeResources />
        <IntakeForm />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <CustomerSupportChat />
    </div>
  );
};

export default Index;
