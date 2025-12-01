import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

const heroImage = "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1920";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden" role="banner" aria-label="Hero section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Powerful masculine figure representing transformation and success"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Transform Your Mindset, Build Unshakeable Confidence, Find Your Purpose
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto">
            Are you a young professional or man in transition feeling stuck, lacking confidence, 
            or searching for direction? I help men like you achieve meaningful success through 
            balanced personal growth—not quick fixes, but real transformation.
          </p>

          <p className="text-lg md:text-xl mb-8 text-foreground/80 max-w-3xl mx-auto">
            Master mindset, build healthy relationships, achieve career growth, and create 
            financial freedom while staying grounded in purpose and social responsibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 shadow-glow" asChild>
              <a href="#intake" aria-label="Book your free discovery call">
                Book a Free Discovery Call
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#free-resources" aria-label="Get free mindset resources">
                <PlayCircle className="mr-2" size={20} />
                Get Free Resources
              </a>
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