import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Dumbbell, DollarSign, Shield } from "lucide-react";

const Pillars = () => {
  const pillars = [
    {
      icon: Brain,
      title: "Mindset Mastery",
      description: "Develop unshakeable confidence and mental resilience",
      details: [
        "Overcome limiting beliefs and self-doubt",
        "Build unstoppable confidence in any situation",
        "Master emotional intelligence and self-control",
        "Develop a growth mindset for continuous improvement"
      ]
    },
    {
      icon: Heart,
      title: "Spiritual Foundation",
      description: "Connect with your deeper purpose and meaning",
      details: [
        "Discover your life's true purpose and calling",
        "Develop inner peace and spiritual practices",
        "Build strong moral character and integrity",
        "Create meaningful connections with others"
      ]
    },
    {
      icon: Dumbbell,
      title: "Physical Excellence",
      description: "Build a strong, healthy, and attractive physique",
      details: [
        "Optimize your fitness and nutrition for peak performance",
        "Develop discipline through physical challenges",
        "Boost energy and vitality in all areas of life",
        "Create the body that commands respect"
      ]
    },
    {
      icon: DollarSign,
      title: "Wealth Building",
      description: "Master money and create multiple income streams",
      details: [
        "Develop a millionaire mindset about money",
        "Learn proven investment and business strategies",
        "Create passive income streams that work for you",
        "Build generational wealth and financial security"
      ]
    },
    {
      icon: Shield,
      title: "Modern Masculinity",
      description: "Embody authentic masculine leadership and strength",
      details: [
        "Understand and embrace healthy masculine traits",
        "Develop leadership skills in all areas of life",
        "Learn to be a protector and provider",
        "Build authentic relationships and attract quality people"
      ]
    }
  ];

  return (
    <section id="pillars" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The 5 Pillars of
            <span className="text-primary block">Masculine Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive system addresses every aspect of your development as a man. 
            Master these 5 pillars and transform into the leader you're meant to be.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-border shadow-card hover:shadow-premium transition-smooth ${
                index === 4 ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
            >
              <CardHeader className="text-center pb-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl mb-2">{pillar.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {pillar.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pillar.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-card p-8 rounded-xl shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Master All 5 Pillars?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Join our comprehensive transformation program and work with me directly 
              to build excellence in every area of your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-premium hover:scale-105 transform transition-smooth text-center">
                Start Your Journey Today
              </a>
              <a href="#contact" className="border border-primary/20 bg-transparent text-foreground px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth text-center">
                Download Free Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;