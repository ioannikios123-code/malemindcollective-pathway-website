import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Brain, Dumbbell, Heart, DollarSign, Crown, Check, Calendar, Users, Video } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CustomerSupportChat } from "@/components/CustomerSupportChat";

const TransformationPage = () => {
  const pillars = [
    { icon: Brain, title: "Mindset", description: "Reprogram your beliefs and build unshakeable confidence" },
    { icon: Heart, title: "Spirituality", description: "Connect with your purpose and inner power" },
    { icon: Dumbbell, title: "Physicality", description: "Transform your body and optimize your health" },
    { icon: DollarSign, title: "Wealth", description: "Build financial freedom and multiple income streams" },
    { icon: Crown, title: "Masculinity", description: "Embody authentic masculine leadership and presence" }
  ];

  const timeline = [
    {
      week: "Week 1-2",
      title: "Foundation & Assessment",
      description: "Complete assessment, set goals, and establish your baseline across all 5 pillars"
    },
    {
      week: "Week 3-4",
      title: "Mindset Transformation",
      description: "Eliminate limiting beliefs, build new neural pathways, and develop success habits"
    },
    {
      week: "Week 5-6",
      title: "Physical Optimization",
      description: "Implement training and nutrition protocols, establish workout routines"
    },
    {
      week: "Week 7-8",
      title: "Spiritual Awakening",
      description: "Discover your purpose, develop meditation practice, align with your values"
    },
    {
      week: "Week 9-10",
      title: "Wealth Building",
      description: "Create financial plan, start income streams, implement investment strategies"
    },
    {
      week: "Week 11-12",
      title: "Integration & Mastery",
      description: "Bring all pillars together, create sustainable systems, plan for continued growth"
    }
  ];

  const includes = [
    { icon: Video, text: "12 weeks of intensive coaching" },
    { icon: Users, text: "Weekly 1-on-1 sessions" },
    { icon: Calendar, text: "Daily check-ins and accountability" },
    { icon: Crown, text: "Access to all courses and masterclasses" },
    { icon: Brain, text: "Personalized action plans" },
    { icon: Heart, text: "Private community access" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="text-primary" size={32} />
              </div>
              <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-6">
                Our Most Comprehensive Program
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                90-Day Complete
                <span className="text-primary block">Transformation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                The ultimate program for men ready to transform every aspect of their life. 
                12 weeks of intensive coaching covering all 5 pillars of masculine development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="#apply">Apply Now - $1,997</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#details">See Full Program</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Results Banner */}
        <section className="py-8 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm opacity-90">Completion Rate</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-primary-foreground/30" />
              <div>
                <div className="text-3xl font-bold">847+</div>
                <div className="text-sm opacity-90">Transformations</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-primary-foreground/30" />
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">Money-Back Guarantee</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Pillars */}
        <section id="details" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">The 5 Pillars of Transformation</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A holistic approach to masculine development covering every area of your life
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {pillars.map((pillar, index) => (
                <Card key={index} className="bg-gradient-card border-border text-center">
                  <CardHeader>
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <pillar.icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-lg">{pillar.title}</CardTitle>
                    <CardDescription className="text-sm">{pillar.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Your 12-Week Journey</h2>
              <p className="text-xl text-muted-foreground">
                A structured path to complete transformation
              </p>
            </div>

            <div className="space-y-6">
              {timeline.map((phase, index) => (
                <Card key={index} className="bg-gradient-card border-border overflow-hidden">
                  <div className="flex">
                    <div className="bg-primary text-primary-foreground p-6 flex items-center justify-center min-w-[120px]">
                      <span className="font-bold text-center">{phase.week}</span>
                    </div>
                    <CardHeader className="flex-1">
                      <CardTitle>{phase.title}</CardTitle>
                      <CardDescription className="text-base">{phase.description}</CardDescription>
                    </CardHeader>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What's Included</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {includes.map((item, index) => (
                <div key={index} className="flex items-center p-6 bg-gradient-card rounded-lg border border-border">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <span className="text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-primary" size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4">100% Results Guarantee</h2>
            <p className="text-lg text-muted-foreground">
              Complete the program, do the work, and if you don't see significant transformation 
              across all 5 pillars, we'll refund your investment in full. No questions asked.
            </p>
          </div>
        </section>

        {/* Pricing & CTA */}
        <section id="apply" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="bg-gradient-card border-primary/20 shadow-premium">
              <CardHeader className="text-center">
                <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Limited to 10 participants per cohort
                </div>
                <CardTitle className="text-3xl mb-4">90-Day Complete Transformation</CardTitle>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-2xl text-muted-foreground line-through">$2,997</span>
                  <span className="text-5xl font-bold text-primary">$1,997</span>
                </div>
                <CardDescription className="text-lg mt-4">
                  One-time payment or 3x $697/month • 100% Money-Back Guarantee
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <p className="text-lg">
                    ⚡ <strong>Next Cohort Starts Soon:</strong> Only a few spots remaining. Apply now to secure your place.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="flex-1" asChild>
                    <a href="/#intake">Apply Now</a>
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1" asChild>
                    <a href="mailto:malemindcollective@gmail.com">Book Discovery Call</a>
                  </Button>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Applications are reviewed within 24 hours. Not everyone is accepted.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <CustomerSupportChat />
    </div>
  );
};

export default TransformationPage;
