import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail, Instagram, Youtube, Twitter, Calendar } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@malemindcollective",
      description: "Daily motivation and tips",
      color: "hover:text-pink-500"
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "MaleMindCollective",
      description: "In-depth training videos",
      color: "hover:text-red-500"
    },
    {
      icon: Twitter,
      name: "Twitter",
      handle: "@malemindcollective",
      description: "Quick insights and updates",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your
            <span className="text-primary block">Transformation?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch, ask questions, or follow along on social media for daily 
            motivation and insights on your journey to masculine excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="text-primary" size={24} />
                </div>
                <CardTitle>Q&A Access</CardTitle>
                <CardDescription>
                  Get direct access to ask questions and receive personalized guidance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Submit your questions through our exclusive Q&A platform and get detailed 
                  responses from our coaching team.
                </p>
                <Button variant="premium" className="w-full" asChild>
                  <a href="mailto:hello@malemindcollective.com">Access Q&A Platform</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="text-primary" size={24} />
                </div>
                <CardTitle>Free Consultation</CardTitle>
                <CardDescription>
                  Book a 30-minute strategy call to discuss your goals and challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Let's talk about where you are now, where you want to be, and the best 
                  path to get there.
                </p>
                <Button variant="hero" className="w-full" asChild>
                  <a href="mailto:hello@malemindcollective.com">Schedule Free Call</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <CardTitle>Direct Contact</CardTitle>
                <CardDescription>
                  Reach out directly for business inquiries or collaboration opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Email: hello@malemindcollective.com
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:hello@malemindcollective.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Follow Our Journey</h3>
            <p className="text-muted-foreground mb-8">
              Stay connected and get daily inspiration, tips, and behind-the-scenes 
              content from the MaleMindCollective community.
            </p>

            <div className="space-y-6">
              {socialLinks.map((social, index) => (
                <div 
                  key={index}
                  className="bg-gradient-card p-6 rounded-lg border border-border shadow-card hover:shadow-premium transition-smooth cursor-pointer group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <social.icon className={`${social.color} transition-smooth`} size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{social.name}</h4>
                      <p className="text-primary font-medium">{social.handle}</p>
                      <p className="text-muted-foreground text-sm">{social.description}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-smooth">
                      Follow
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
              <h4 className="font-semibold mb-2 text-primary">Join Our Newsletter</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Get weekly insights, exclusive content, and early access to new programs.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button variant="default">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;