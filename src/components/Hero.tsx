import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-main.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-[min(46rem,calc(100svh-9rem))] py-16 md:py-20 flex items-center relative overflow-hidden" aria-label="Introduction">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-6">Male Mind Collective</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-[1.1]">
            For men who feel lost,
            <span className="text-primary block mt-2">and are ready to find their way.</span>
          </h1>

          <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Personal coaching and guidance to build discipline, confidence and purpose —
            one honest, practical step at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="w-full sm:w-auto h-auto min-h-14 text-base px-8 py-4 hover:scale-100" asChild>
              <a href="#intake">
                Book a Free Discovery Call
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-auto min-h-14 text-base px-8 py-4 border-primary/30" asChild>
              <a href="#pillars">Explore the 5 Pillars</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
