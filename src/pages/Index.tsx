import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Stats from "@/components/Stats";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Pillars from "@/components/Pillars";
import Testimonials from "@/components/Testimonials";
import VideoShowcase from "@/components/VideoShowcase";
import NewsletterBanner from "@/components/NewsletterBanner";
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
        <TrustBadges />
        <Stats />
        <About />
        <WhyChooseUs />
        <Services />
        <Pillars />
        <Testimonials />
        <div id="videos">
          <VideoShowcase />
        </div>
        <NewsletterBanner />
        <BlogPreview />
        <FreeResources />
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
