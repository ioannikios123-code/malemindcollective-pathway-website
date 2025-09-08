import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Success and leadership transformation"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Into The
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Man You're Meant To Be
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Master the 5 pillars of modern masculinity: Mindset, Spirituality, Physicality, 
            Wealth Building, and Financial Freedom. Join thousands of men reclaiming their power.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Your Transformation
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <PlayCircle className="mr-2" size={20} />
              Watch Free Training
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Men Transformed</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-2">5 Years</div>
              <div className="text-muted-foreground">Proven System</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;