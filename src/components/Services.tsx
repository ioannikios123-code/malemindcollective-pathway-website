import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, BookOpen, Video, Users, DollarSign, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "1-on-1 Coaching",
      description: "Personal transformation sessions tailored to your specific needs and goals",
      features: ["Weekly 60-min sessions", "Custom action plans", "24/7 text support", "Goal tracking"],
      price: "From $297/month"
    },
    {
      icon: BookOpen,
      title: "Digital Courses",
      description: "Comprehensive online programs covering all aspects of masculine development",
      features: ["5 Core modules", "Lifetime access", "Downloadable resources", "Community access"],
      price: "From $197 one-time"
    },
    {
      icon: Video,
      title: "Masterclasses",
      description: "Deep-dive sessions on specific topics like wealth building and mindset",
      features: ["Live Q&A sessions", "Replay access", "PDF workbooks", "Implementation guides"],
      price: "From $97 each"
    },
    {
      icon: Users,
      title: "Group Programs",
      description: "Small cohort coaching for accountability and brotherhood",
      features: ["8-week programs", "Max 10 participants", "Weekly group calls", "Peer support"],
      price: "From $497/program"
    },
    {
      icon: DollarSign,
      title: "Wealth Building Intensive",
      description: "Focused program on passive income, investments, and financial freedom",
      features: ["Investment strategies", "Passive income blueprints", "Budgeting systems", "Wealth mindset"],
      price: "From $697 one-time"
    },
    {
      icon: Zap,
      title: "90-Day Transformation",
      description: "Complete lifestyle overhaul covering all 5 pillars of development",
      features: ["All-inclusive program", "Personal coach", "Daily check-ins", "Guarantee results"],
      price: "From $1,997"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Life With Our
            <span className="text-primary block">Proven Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the path that fits your goals and budget. Every program is designed 
            to deliver real, measurable results in your journey to masculine excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-premium transition-smooth">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                <Button variant="premium" className="w-full" asChild>
                  <a href="#contact">Learn More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg mb-6 text-muted-foreground">
            Not sure which program is right for you?
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Schedule Free Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;