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
import BookingInquiryForm from "@/components/BookingInquiryForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { CustomerSupportChat } from "@/components/CustomerSupportChat";

const Index = () => {
  return (
    <div className="homepage min-h-screen bg-background pt-16 lg:pt-[72px]">
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
        <section id="intake" className="py-20"><div className="container mx-auto px-4 max-w-3xl"><h2 className="text-3xl md:text-4xl mb-4">Book Your Free Discovery Call</h2><p className="text-muted-foreground mb-8">Tell us about your goals and preferred times. Your call is confirmed after we agree on a time together.</p><BookingInquiryForm /></div></section>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <CustomerSupportChat />
    </div>
  );
};

export default Index;
