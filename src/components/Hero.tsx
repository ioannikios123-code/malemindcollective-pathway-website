import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, CheckCircle } from "lucide-react";

const heroImage = "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1920";

const Hero = () => {
  const benefits = [
    "Build unshakeable confidence",
    "Find clarity and purpose",
    "Achieve meaningful success"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden" role="banner" aria-label="Hero section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Powerful masculine figure representing transformation and success"
          className="w-full h-full object-cover opacity-25"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-semibold">Coaching for Men Who Want Real Transformation</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Transform Your Mindset.
            <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2">
              Build Your Best Life.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Are you a man feeling stuck, lacking confidence, or searching for direction? 
            I help men achieve meaningful success through <span className="text-foreground font-medium">balanced personal growth</span>—not 
            quick fixes, but real transformation.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-foreground/90">
                <CheckCircle className="text-primary" size={18} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-10 py-7 shadow-glow" asChild>
              <a href="#intake" aria-label="Book your free discovery call">
                Book a Free Discovery Call
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-7 border-primary/30" asChild>
              <a href="#free-resources" aria-label="Get free mindset resources">
                <PlayCircle className="mr-2" size={20} />
                Get Free Resources
              </a>
            </Button>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">10,000+</div>
              <div className="text-muted-foreground">Men Transformed</div>
            </div>
            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">5 Years</div>
              <div className="text-muted-foreground">Proven System</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;