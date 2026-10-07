import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MediaMentions from "@/components/MediaMentions";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Pillars from "@/components/Pillars";
import Testimonials from "@/components/Testimonials";
import VideoShowcase from "@/components/VideoShowcase";
import BlogPreview from "@/components/BlogPreview";
import FreeResources from "@/components/FreeResources";
import FAQ from "@/components/FAQ";
import IntakeForm from "@/components/IntakeForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { CustomerSupportChat } from "@/components/CustomerSupportChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Header />
      <main>
        <Hero />
        <MediaMentions />
        <About />
        <WhyChooseUs />
        <Pillars />
        <Services />
        <Testimonials />
        <div id="videos">
          <VideoShowcase />
        </div>
        <FreeResources />
        <BlogPreview />
        <FAQ />
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
