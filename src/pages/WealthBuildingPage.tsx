import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Building, Wallet, CheckCircle, BarChart, Target, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CustomerSupportChat } from "@/components/CustomerSupportChat";

const WealthBuildingPage = () => {
  const modules = [
    {
      icon: Wallet,
      title: "Money Mindset Mastery",
      description: "Reprogram your relationship with money and eliminate scarcity thinking"
    },
    {
      icon: BarChart,
      title: "Investment Fundamentals",
      description: "Learn how to grow your wealth through stocks, real estate, and other assets"
    },
    {
      icon: Building,
      title: "Business Building",
      description: "Start and scale profitable side businesses and online ventures"
    },
    {
      icon: TrendingUp,
      title: "Passive Income Systems",
      description: "Create multiple streams of income that work while you sleep"
    }
  ];

  const outcomes = [
    "Clear understanding of investment vehicles and strategies",
    "At least one new income stream started",
    "Complete budget and financial plan in place",
    "Investment portfolio strategy developed",
    "Emergency fund and savings automated",
    "Debt elimination strategy (if applicable)",
    "Passive income blueprint customized to your skills",
    "Accountability and support from like-minded men"
  ];

  const includes = [
    "10 weeks of intensive training",
    "Weekly live coaching calls",
    "1-on-1 strategy session",
    "Investment planning templates",
    "Business launch toolkit",
    "Private community access",
    "Lifetime course updates",
    "30-day money-back guarantee"
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
                <DollarSign className="text-primary" size={32} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Wealth Building
                <span className="text-primary block">Intensive Program</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                A 10-week comprehensive program designed to transform your financial future. 
                Learn to invest, build passive income, and achieve financial freedom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="#enroll">Enroll Now - $697</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#details">See Full Curriculum</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-primary">$2.3M+</div>
                <div className="text-muted-foreground">Wealth Created by Alumni</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">847+</div>
                <div className="text-muted-foreground">Graduates</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">10</div>
                <div className="text-muted-foreground">Week Program</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">4.9★</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules */}
        <section id="details" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Core Program Modules</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Four pillars of wealth building that will transform your financial life
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {modules.map((module, index) => (
                <Card key={index} className="bg-gradient-card border-border">
                  <CardHeader>
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <module.icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                    <CardDescription className="text-base">{module.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">
                    What You'll Achieve
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    By the end of this 10-week intensive, you'll have the knowledge, 
                    strategies, and action plan to build lasting wealth.
                  </p>
                </div>
                <div>
                  <Card className="bg-gradient-card border-border">
                    <CardContent className="pt-6">
                      <ul className="space-y-4">
                        {outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">What's Included</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {includes.map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-gradient-card rounded-lg border border-border">
                  <Target className="text-primary mr-3 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="bg-gradient-card border-border shadow-premium">
              <CardContent className="pt-8 text-center">
                <div className="mb-6">
                  <Users className="text-primary mx-auto" size={48} />
                </div>
                <blockquote className="text-xl italic mb-6">
                  "Before this program, I was living paycheck to paycheck. Within 6 months of 
                  completing the Wealth Building Intensive, I had paid off $15K in debt, started 
                  investing, and launched a side business generating $3K/month. This program 
                  changed my life."
                </blockquote>
                <div>
                  <div className="font-semibold">Marcus R.</div>
                  <div className="text-muted-foreground">Program Graduate</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing & CTA */}
        <section id="enroll" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="bg-gradient-card border-border shadow-premium">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">Wealth Building Intensive</CardTitle>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-2xl text-muted-foreground line-through">$997</span>
                  <span className="text-5xl font-bold text-primary">$697</span>
                </div>
                <CardDescription className="text-lg mt-4">
                  One-time payment • Lifetime access • 30-day money-back guarantee
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-primary/10 p-6 rounded-lg text-center">
                  <p className="text-lg">
                    🔥 <strong>Limited Time:</strong> Next cohort starts soon. Only 20 spots available.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="flex-1" asChild>
                    <a href="/#intake">Enroll Now</a>
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1" asChild>
                    <a href="mailto:malemindcollective@gmail.com">Ask Questions</a>
                  </Button>
                </div>
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

export default WealthBuildingPage;
