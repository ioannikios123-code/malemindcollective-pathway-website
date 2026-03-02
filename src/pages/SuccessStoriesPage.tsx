import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { CustomerSupportChat } from "@/components/CustomerSupportChat";
import { Star, TrendingUp, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const marcusImg = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400";
const davidImg = "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400";
const jamesImg = "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400";
const alexImg = "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400";
const robertImg = "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400";
const michaelImg = "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400";
const danielImg = "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400";
const chrisImg = "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400";
const kevinImg = "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=400";

const featuredStories = [
  {
    name: "Marcus Rodriguez",
    age: 32,
    role: "Entrepreneur",
    image: marcusImg,
    headline: "From Paycheck to Paycheck to 6-Figure Business Owner",
    before: "Working a 9-to-5 job with no savings, drowning in consumer debt, and feeling stuck with no clear path forward.",
    journey: "Marcus joined the Wealth Building program and applied the passive income strategies immediately. Within 3 months he launched his first online business. The mindset coaching helped him overcome his fear of failure and take calculated risks.",
    after: "Built a 6-figure e-commerce business in 8 months, eliminated all consumer debt, and now mentors other aspiring entrepreneurs.",
    metrics: [
      { label: "Income Growth", value: "400%" },
      { label: "Debt Eliminated", value: "$45K" },
      { label: "Time to Results", value: "8 months" },
    ],
    quote: "MaleMindCollective didn't just teach me about money — it taught me about the man I needed to become to earn it.",
    program: "Wealth Building + Mindset Mastery",
  },
  {
    name: "David Chen",
    age: 28,
    role: "Software Engineer → Engineering Lead",
    image: davidImg,
    headline: "Lost College Grad to Confident Team Leader",
    before: "Directionless after graduating, socially isolated, struggling with imposter syndrome at work, and unable to assert himself.",
    journey: "David enrolled in the full 5 Pillars coaching program. The masculinity and mindset modules were transformative. Weekly accountability calls pushed him to speak up at work and pursue leadership opportunities he would have avoided before.",
    after: "Promoted to engineering team lead within 6 months, built a strong social circle, and developed unshakeable confidence in his abilities.",
    metrics: [
      { label: "Salary Increase", value: "65%" },
      { label: "Team Size Led", value: "12 people" },
      { label: "Time to Promotion", value: "6 months" },
    ],
    quote: "I went from being invisible at work to leading a team of 12. The brotherhood aspect changed everything for me.",
    program: "1-on-1 Coaching + Mastermind",
  },
  {
    name: "James Williams",
    age: 35,
    role: "Father of 2",
    image: jamesImg,
    headline: "Overweight & Overwhelmed to Family Role Model",
    before: "50 lbs overweight, stagnant career, strained marriage, and feeling like he was letting his kids down every single day.",
    journey: "James started with the Physical Excellence pillar and the transformation cascaded into every area of his life. As his body changed, his energy, confidence, and discipline followed. He then tackled wealth building and doubled his income.",
    after: "Lost 40 lbs and got in the best shape of his life, doubled his income through a career change, and rebuilt a thriving marriage.",
    metrics: [
      { label: "Weight Lost", value: "40 lbs" },
      { label: "Income Growth", value: "2x" },
      { label: "Marriage Rating", value: "10/10" },
    ],
    quote: "My kids now look at me the way I always wanted them to — with pride. That alone was worth everything.",
    program: "Physical Excellence + Wealth Building",
  },
];

const additionalTestimonials = [
  {
    name: "Alex Thompson",
    age: 25,
    role: "Recent Graduate",
    image: alexImg,
    quote: "Society told me everything I believed about masculinity was wrong. This community helped me understand how to be a strong, purposeful man without apologizing for it.",
    transformation: "Found purpose, direction, and a $75K starting role",
    rating: 5,
  },
  {
    name: "Robert Garcia",
    age: 41,
    role: "Business Owner",
    image: robertImg,
    quote: "I thought it was too late to change my life at 41. The practical strategies and mindset work proved me completely wrong. I'm now financially free.",
    transformation: "Achieved financial freedom — $15K/mo passive income",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    age: 29,
    role: "Sales Manager",
    image: michaelImg,
    quote: "The spiritual and mindset components were game-changers. I tripled my sales performance and built authentic wealth on my own terms.",
    transformation: "Tripled sales — now top performer in his company",
    rating: 5,
  },
  {
    name: "Daniel Park",
    age: 34,
    role: "Freelance Designer",
    image: danielImg,
    quote: "I was undercharging, overworking, and burning out. The wealth and mindset pillars taught me my worth. I 5x'd my rates and work half the hours.",
    transformation: "5x'd freelance rates, halved working hours",
    rating: 5,
  },
  {
    name: "Chris Martinez",
    age: 27,
    role: "Personal Trainer",
    image: chrisImg,
    quote: "I had the body but not the mind or the money. This program gave me the complete picture. I now own my own gym and lead with purpose.",
    transformation: "Opened his own gym, grew to 200+ members",
    rating: 5,
  },
  {
    name: "Kevin Brooks",
    age: 38,
    role: "Corporate Executive",
    image: kevinImg,
    quote: "The mastermind group held me accountable like nothing else. I went from middle management to VP in under a year. The men in this group elevate you.",
    transformation: "Promoted to VP, salary increased by $80K",
    rating: 5,
  },
];

const SuccessStoriesPage = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(45_100%_70%/0.05),transparent_60%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award size={16} />
                Real Transformations, Real Men
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Success Stories & <span className="bg-gradient-primary bg-clip-text text-transparent">Transformations</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Every man who walks through our doors has a story. Here are the men who chose to rewrite theirs — and the results speak for themselves.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {[
                { icon: Users, value: "500+", label: "Men Transformed" },
                { icon: TrendingUp, value: "92%", label: "Report Life Improvement" },
                { icon: Award, value: "4.9/5", label: "Average Rating" },
                { icon: Star, value: "85%", label: "Achieve Goals in 6 Months" },
              ].map((stat, i) => (
                <div key={i} className="text-center bg-card/50 p-6 rounded-xl border border-primary/10">
                  <stat.icon className="mx-auto text-primary mb-2" size={24} />
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Deep-Dive Stories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured <span className="text-primary">Transformation Stories</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                In-depth journeys from before, through the process, to breakthrough results.
              </p>
            </div>

            <div className="space-y-20 max-w-5xl mx-auto">
              {featuredStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-primary/10 overflow-hidden shadow-card"
                >
                  {/* Header */}
                  <div className="bg-gradient-card p-8 flex flex-col md:flex-row items-center gap-6 border-b border-primary/10">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-24 h-24 rounded-full object-cover border-3 border-primary/30 shadow-elegant"
                    />
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-foreground">{story.name}</h3>
                      <p className="text-muted-foreground">{story.age}, {story.role}</p>
                      <p className="text-primary font-semibold mt-1 text-lg">{story.headline}</p>
                    </div>
                  </div>

                  <div className="p-8 space-y-8">
                    {/* Before / Journey / After */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-destructive/5 p-5 rounded-xl border border-destructive/10">
                        <p className="text-destructive font-semibold text-sm uppercase tracking-wider mb-2">Before</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{story.before}</p>
                      </div>
                      <div className="bg-secondary p-5 rounded-xl border border-border">
                        <p className="text-muted-foreground font-semibold text-sm uppercase tracking-wider mb-2">The Journey</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{story.journey}</p>
                      </div>
                      <div className="bg-primary/5 p-5 rounded-xl border border-primary/10">
                        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">After</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{story.after}</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {story.metrics.map((metric, i) => (
                        <div key={i} className="text-center bg-secondary/50 p-4 rounded-lg">
                          <p className="text-2xl font-bold text-primary">{metric.value}</p>
                          <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="border-l-4 border-primary pl-6 py-2">
                      <p className="text-foreground italic text-lg leading-relaxed">"{story.quote}"</p>
                      <cite className="text-muted-foreground text-sm mt-2 block">— {story.name}</cite>
                    </blockquote>

                    <p className="text-xs text-muted-foreground">
                      Program: <span className="text-primary font-medium">{story.program}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Testimonials Grid */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                More <span className="text-primary">Success Stories</span>
              </h2>
              <p className="text-muted-foreground text-lg">Hear from men across all walks of life.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {additionalTestimonials.map((t, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-card border border-primary/10 hover:border-primary/20 transition-smooth"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.age}, {t.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="text-primary fill-current" size={14} />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.quote}"</p>
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <p className="text-primary font-semibold text-xs">🎯 {t.transformation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-gradient-card p-12 rounded-2xl border border-primary/20 shadow-elegant">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Story Could Be <span className="text-primary">Next</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Every transformation starts with a single decision. The men above were once exactly where you are now. 
                The only difference? They chose to take action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <Button variant="hero" size="lg" className="gap-2">
                    Apply for Coaching <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button variant="outline" size="lg">
                    Explore Programs
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

export default SuccessStoriesPage;
