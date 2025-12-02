import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Video, MessageCircle, Calendar, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CustomerSupportChat } from "@/components/CustomerSupportChat";

const CoachingPage = () => {
  const benefits = [
    "Weekly 60-minute 1-on-1 sessions",
    "Custom action plans tailored to your goals",
    "24/7 text support between sessions",
    "Progress tracking and accountability",
    "Access to exclusive resources and tools",
    "Lifetime access to session recordings"
  ];

  const testimonials = [
    {
      name: "Marcus R.",
      result: "Lost 35 lbs, doubled income in 6 months",
      quote: "The 1-on-1 coaching transformed every area of my life. Having someone who truly understands masculine development made all the difference."
    },
    {
      name: "David C.",
      result: "Launched successful business, improved relationships",
      quote: "Best investment I've ever made. The personalized approach helped me breakthrough barriers I didn't even know existed."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                1-on-1 Elite
                <span className="text-primary block">Coaching Program</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Work directly with our expert coaches to transform your mindset, body, wealth, 
                and overall masculine presence through personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="#apply">Apply for Coaching</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#details">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section id="details" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What's Included</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need for complete transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <Video className="text-primary mb-4" size={40} />
                  <CardTitle>Weekly Sessions</CardTitle>
                  <CardDescription>
                    60-minute deep-dive coaching calls focused on your specific challenges and goals
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <MessageCircle className="text-primary mb-4" size={40} />
                  <CardTitle>24/7 Support</CardTitle>
                  <CardDescription>
                    Direct text access to your coach for questions, accountability, and breakthrough moments
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-card border-border">
                <CardHeader>
                  <TrendingUp className="text-primary mb-4" size={40} />
                  <CardTitle>Progress Tracking</CardTitle>
                  <CardDescription>
                    Detailed tracking of your physical, mental, and financial growth with regular assessments
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-12 max-w-2xl mx-auto">
              <Card className="bg-gradient-card border-primary/20">
                <CardHeader>
                  <CardTitle>Program Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {testimonial.result}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Apply */}
        <section id="apply" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="bg-gradient-card border-border shadow-premium">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">Investment</CardTitle>
                <div className="text-5xl font-bold text-primary mb-4">$297/month</div>
                <CardDescription className="text-lg">
                  3-month minimum commitment • Cancel anytime after
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-primary/10 p-6 rounded-lg">
                  <p className="text-center text-lg">
                    Limited spots available. We only accept 10 new coaching clients per month 
                    to ensure quality and personalized attention.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="flex-1" asChild>
                    <a href="/#intake">Apply Now</a>
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1" asChild>
                    <a href="mailto:malemindcollective@gmail.com">
                      <Calendar className="mr-2" size={20} />
                      Book Free Call
                    </a>
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

export default CoachingPage;
