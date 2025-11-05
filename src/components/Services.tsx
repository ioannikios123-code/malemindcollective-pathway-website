import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, BookOpen, Video, Users, DollarSign, Zap } from "lucide-react";

const coachingImg = "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800";
const coursesImg = "https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800";
const masterclassImg = "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800";
const groupImg = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800";
const wealthImg = "https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=800";
const transformationImg = "https://images.pexels.com/photos/4162488/pexels-photo-4162488.jpeg?auto=compress&cs=tinysrgb&w=800";

const Services = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "1-on-1 Coaching",
      description: "Personal transformation sessions tailored to your specific needs and goals",
      features: ["Weekly 60-min sessions", "Custom action plans", "24/7 text support", "Goal tracking"],
      price: "From $297/month",
      image: coachingImg
    },
    {
      icon: BookOpen,
      title: "Digital Courses",
      description: "Comprehensive online programs covering all aspects of masculine development",
      features: ["5 Core modules", "Lifetime access", "Downloadable resources", "Community access"],
      price: "From $197 one-time",
      image: coursesImg
    },
    {
      icon: Video,
      title: "Masterclasses",
      description: "Deep-dive sessions on specific topics like wealth building and mindset",
      features: ["Live Q&A sessions", "Replay access", "PDF workbooks", "Implementation guides"],
      price: "From $97 each",
      image: masterclassImg
    },
    {
      icon: Users,
      title: "Group Programs",
      description: "Small cohort coaching for accountability and brotherhood",
      features: ["8-week programs", "Max 10 participants", "Weekly group calls", "Peer support"],
      price: "From $497/program",
      image: groupImg
    },
    {
      icon: DollarSign,
      title: "Wealth Building Intensive",
      description: "Focused program on passive income, investments, and financial freedom",
      features: ["Investment strategies", "Passive income blueprints", "Budgeting systems", "Wealth mindset"],
      price: "From $697 one-time",
      image: wealthImg
    },
    {
      icon: Zap,
      title: "90-Day Transformation",
      description: "Complete lifestyle overhaul covering all 5 pillars of development",
      features: ["All-inclusive program", "Personal coach", "Daily check-ins", "Guarantee results"],
      price: "From $1,997",
      image: transformationImg
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
            <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-premium transition-smooth overflow-hidden group">
              {/* Service Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
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
                <Button 
                  variant="premium" 
                  className="w-full" 
                  asChild
                >
                  <a href={
                    index === 0 ? "/coaching" : 
                    index === 1 ? "/courses" : 
                    index === 3 ? "/mastermind" : 
                    "#intake"
                  }>
                    Learn More
                  </a>
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