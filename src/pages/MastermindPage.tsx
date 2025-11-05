import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, TrendingUp, Award, MessageSquare, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MastermindPage = () => {
  const benefits = [
    {
      icon: Users,
      title: "Elite Network",
      description: "Connect with high-achieving men who are committed to excellence"
    },
    {
      icon: Target,
      title: "Focused Growth",
      description: "8-week intensive programs with specific transformation goals"
    },
    {
      icon: MessageSquare,
      title: "Weekly Calls",
      description: "Live group coaching sessions with expert facilitators"
    },
    {
      icon: Award,
      title: "Accountability",
      description: "Maximum 10 participants ensures personal attention and results"
    }
  ];

  const programs = [
    {
      title: "Wealth Builders Mastermind",
      duration: "8 weeks",
      focus: "Financial Freedom & Business Growth",
      price: "$497",
      starts: "Every month",
      description: "Build multiple income streams and scale your wealth with like-minded entrepreneurs",
      outcomes: [
        "Launch or scale a profitable business",
        "Create passive income systems",
        "Network with successful entrepreneurs",
        "Develop wealth-building habits"
      ]
    },
    {
      title: "Peak Performance Mastermind",
      duration: "8 weeks",
      focus: "Physical & Mental Excellence",
      price: "$497",
      starts: "Every month",
      description: "Transform your body and mind with a group of committed men pushing their limits",
      outcomes: [
        "Achieve your fitness goals",
        "Master mental resilience",
        "Build unbreakable discipline",
        "Optimize health and energy"
      ]
    },
    {
      title: "Leadership Elite Mastermind",
      duration: "8 weeks",
      focus: "Leadership & Influence",
      price: "$597",
      starts: "Quarterly",
      description: "Develop the leadership skills to excel in business, relationships, and life",
      outcomes: [
        "Master communication and influence",
        "Build and lead high-performing teams",
        "Develop executive presence",
        "Create lasting impact"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Mastermind
                <span className="text-primary block">Group Programs</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join an elite group of ambitious men in focused 8-week programs designed for 
                rapid transformation and lifelong brotherhood.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="#programs">Explore Programs</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Join a Mastermind?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Accelerate your growth by surrounding yourself with winners
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-gradient-card border-border text-center">
                  <CardHeader>
                    <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Programs */}
        <section id="programs" className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Current Mastermind Programs</h2>
              <p className="text-xl text-muted-foreground">
                Choose the program that aligns with your goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-premium transition-smooth">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-2xl">{program.title}</CardTitle>
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{program.price}</div>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                    
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar size={16} className="mr-2" />
                        {program.duration} • Starts {program.starts}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Target size={16} className="mr-2" />
                        Focus: {program.focus}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What You'll Achieve:</h4>
                      <ul className="space-y-2">
                        {program.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <TrendingUp size={14} className="text-primary mr-2 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="premium" className="w-full" asChild>
                      <a href="/#intake">Apply Now</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">How Masterminds Work</h2>
            
            <div className="space-y-6">
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">1</div>
                    Application & Selection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Submit your application and goals. We carefully select participants to ensure 
                    group compatibility and commitment level. Limited to 10 members per group.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">2</div>
                    Weekly Group Calls
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Meet weekly for 90-minute live coaching sessions. Share wins, get feedback, 
                    and push each other to new levels of excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">3</div>
                    Peer Support & Accountability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access private group chat for daily support, share resources, and hold each 
                    other accountable between sessions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-3">4</div>
                    Transformation & Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Achieve your 8-week goals and build lasting relationships with men who will 
                    support your continued growth long after the program ends.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Your Brotherhood?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Spots are limited to 10 members per group. Apply now to secure your place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/#intake">Apply for Mastermind</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:malemindcollective@gmail.com">Ask Questions</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MastermindPage;
