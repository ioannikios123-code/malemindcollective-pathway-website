import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Clock, FileText, Users, Play, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CustomerSupportChat } from "@/components/CustomerSupportChat";

const MasterclassesPage = () => {
  const masterclasses = [
    {
      title: "Mindset Mastery Intensive",
      duration: "3 hours",
      price: "$97",
      description: "Deep-dive session on reprogramming your mind for success, abundance, and unshakeable confidence.",
      topics: [
        "Identifying and breaking limiting beliefs",
        "Building a success-oriented identity",
        "Daily mental rituals for peak performance",
        "Visualization and manifestation techniques"
      ],
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Wealth Building Fundamentals",
      duration: "4 hours",
      price: "$147",
      description: "Learn the exact strategies to build multiple income streams and create lasting financial freedom.",
      topics: [
        "Investment principles for beginners",
        "Creating passive income systems",
        "Side business fundamentals",
        "Money management and budgeting"
      ],
      image: "https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Physical Transformation Blueprint",
      duration: "3 hours",
      price: "$97",
      description: "Complete guide to building muscle, losing fat, and optimizing your health for peak performance.",
      topics: [
        "Training program design",
        "Nutrition fundamentals and meal prep",
        "Supplement protocols that work",
        "Recovery and optimization strategies"
      ],
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Spiritual Awakening Workshop",
      duration: "3 hours",
      price: "$97",
      description: "Connect with your purpose, develop inner peace, and unlock your spiritual potential.",
      topics: [
        "Finding your life purpose",
        "Meditation and mindfulness practices",
        "Energy management techniques",
        "Building a meaningful life"
      ],
      image: "https://images.pexels.com/photos/3772612/pexels-photo-3772612.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Modern Masculinity Mastery",
      duration: "4 hours",
      price: "$147",
      description: "Understand what it means to be a man in today's world and how to embody masculine virtues.",
      topics: [
        "Core masculine principles",
        "Leadership and influence",
        "Relationship dynamics",
        "Building respect and presence"
      ],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
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
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Video className="text-primary" size={32} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Deep-Dive
                <span className="text-primary block">Masterclasses</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Intensive training sessions on specific topics. Get expert insights, 
                actionable strategies, and lifetime access to transform your life.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Play className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-1">HD Video</h3>
                <p className="text-sm text-muted-foreground">High-quality recordings</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <FileText className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-1">PDF Workbooks</h3>
                <p className="text-sm text-muted-foreground">Downloadable materials</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-1">Live Q&A</h3>
                <p className="text-sm text-muted-foreground">Monthly sessions</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-1">Lifetime Access</h3>
                <p className="text-sm text-muted-foreground">Watch anytime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Masterclasses Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {masterclasses.map((masterclass, index) => (
                <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-premium transition-smooth overflow-hidden group">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={masterclass.image}
                      alt={masterclass.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="text-white" size={48} />
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{masterclass.title}</CardTitle>
                      <div className="text-2xl font-bold text-primary">{masterclass.price}</div>
                    </div>
                    <CardDescription>{masterclass.description}</CardDescription>
                    
                    <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {masterclass.duration}
                      </div>
                      <div className="flex items-center">
                        <FileText size={16} className="mr-1" />
                        PDF Included
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {masterclass.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button variant="premium" className="w-full" asChild>
                      <a href="/#intake">Get Instant Access</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bundle Offer */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-6">Get All 5 Masterclasses</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Access the complete collection and save over $100
            </p>
            <Card className="bg-gradient-card border-primary/20 shadow-premium">
              <CardHeader>
                <CardTitle className="text-3xl">Complete Masterclass Bundle</CardTitle>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <span className="text-2xl text-muted-foreground line-through">$485</span>
                  <span className="text-5xl font-bold text-primary">$297</span>
                </div>
                <CardDescription className="text-lg mt-4">
                  Lifetime access to all 5 masterclasses plus bonus Q&A sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="hero" size="lg" className="w-full max-w-md" asChild>
                  <a href="/#intake">Get the Bundle</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Not sure which masterclass is right for you? Book a free call and we'll help you decide.
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:malemindcollective@gmail.com">Schedule Free Call</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <CustomerSupportChat />
    </div>
  );
};

export default MasterclassesPage;
