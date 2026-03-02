import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { CustomerSupportChat } from "@/components/CustomerSupportChat";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Heart, Shield, Lightbulb, Users } from "lucide-react";

const founderImg = "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600";

const milestones = [
  { year: "The Beginning", text: "Grew up facing adversity, financial hardship, and a lack of strong male role models. These experiences planted the seed for what would become MaleMindCollective." },
  { year: "The Struggle", text: "Spent years searching for answers — trying programs, reading hundreds of books, and learning through painful trial and error across fitness, finances, relationships, and identity." },
  { year: "The Breakthrough", text: "Discovered that true masculine transformation requires a holistic approach — not just one area, but all five pillars working together. Built a system that finally delivered lasting change." },
  { year: "The Mission", text: "Began coaching other men through the same framework. Within months, the results were undeniable — men were building wealth, getting fit, finding purpose, and becoming leaders." },
  { year: "Today", text: "MaleMindCollective has impacted 500+ men worldwide. What started as a personal journey has become a movement dedicated to helping men reclaim their power and build extraordinary lives." },
];

const values = [
  { icon: Shield, title: "Authenticity", desc: "No shortcuts, no gimmicks. Real strategies that produce real results." },
  { icon: Target, title: "Accountability", desc: "Growth requires discipline. We hold each other to the highest standard." },
  { icon: Heart, title: "Brotherhood", desc: "Men thrive when surrounded by other driven, purposeful men." },
  { icon: Lightbulb, title: "Transformation", desc: "We don't settle for incremental change. We pursue total evolution." },
];

const FounderPage = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(45_100%_70%/0.04),transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-primary rounded-2xl opacity-20 blur-sm" />
                  <img
                    src={founderImg}
                    alt="Founder of MaleMindCollective"
                    className="relative w-64 h-80 md:w-72 md:h-96 object-cover rounded-2xl shadow-elegant"
                  />
                </div>
              </div>

              {/* Intro */}
              <div className="text-center md:text-left">
                <p className="text-primary font-medium text-sm uppercase tracking-widest mb-3">Meet the Founder</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Building Men Who Build <span className="bg-gradient-primary bg-clip-text text-transparent">Legacies</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg">
                  I created MaleMindCollective because I lived the pain of having no roadmap. No mentor. No brotherhood.
                  I built the program I wish I had — and now it's transforming lives across the globe.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Link to="/apply">
                    <Button variant="hero" className="gap-2">
                      Work With Me <ArrowRight size={16} />
                    </Button>
                  </Link>
                  <Link to="/success-stories">
                    <Button variant="outline">See the Results</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Story Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                My <span className="text-primary">Journey</span>
              </h2>
              <p className="text-center text-muted-foreground mb-16 text-lg">
                From struggle to purpose — this is the path that created MaleMindCollective.
              </p>

              <div className="space-y-0">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-6">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow flex-shrink-0" />
                      {i < milestones.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/40 to-primary/5" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-12">
                      <p className="text-primary font-bold text-sm uppercase tracking-wider mb-1">{m.year}</p>
                      <p className="text-muted-foreground leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The <span className="text-primary">Mission</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                To equip every man with the mindset, strategy, and brotherhood he needs to build an extraordinary life — on his own terms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((v, i) => (
                <div key={i} className="bg-card p-6 rounded-xl border border-primary/10 text-center hover:border-primary/20 transition-smooth">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Message */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-card p-10 md:p-14 rounded-2xl border border-primary/20 shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-primary" size={24} />
                <p className="text-primary font-semibold text-sm uppercase tracking-wider">A Message to You</p>
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                "If you're reading this, you already know something needs to change. That feeling in your gut — the one telling you that you're capable of more — that's not anxiety. That's your potential demanding to be unleashed.
              </p>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                I've been exactly where you are. Unsure, unfocused, and underperforming in areas that matter most. But I discovered that with the right system, the right mindset, and the right men around you, transformation isn't just possible — it's inevitable.
              </p>
              <p className="text-foreground text-lg leading-relaxed mb-8">
                MaleMindCollective isn't just a coaching program. It's a commitment to becoming the man you were born to be. And I'm here to walk that path with you."
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link to="/apply">
                  <Button variant="hero" size="lg" className="gap-2">
                    Begin Your Transformation <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
      <CustomerSupportChat />
    </div>
  );
};

export default FounderPage;
