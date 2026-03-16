import { Star, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const marcusImg = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200";
const davidImg = "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200";
const jamesImg = "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200";
const alexImg = "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200";
const robertImg = "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200";
const michaelImg = "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200";
const chrisImg = "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200";
const kevinImg = "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=200";
const brandonImg = "https://images.pexels.com/photos/2380795/pexels-photo-2380795.jpeg?auto=compress&cs=tinysrgb&w=200";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus Rodriguez",
      age: "32, Entrepreneur",
      image: marcusImg,
      content: "MaleMindCollective completely transformed my approach to wealth building. I went from living paycheck to paycheck to building multiple income streams.",
      rating: 5,
      transformation: "Built 6-figure business in 8 months",
      metric: "400% income growth",
    },
    {
      name: "David Chen",
      age: "28, Software Engineer",
      image: davidImg,
      content: "This program gave me the masculine foundation I needed to become a leader in my career and relationships. The brotherhood aspect is invaluable.",
      rating: 5,
      transformation: "Promoted to team lead, found confidence",
      metric: "65% salary increase",
    },
    {
      name: "James Williams",
      age: "35, Father of 2",
      image: jamesImg,
      content: "As a father, I needed to become the man my family could look up to. The 5 pillars approach helped me get in the best shape of my life while building wealth.",
      rating: 5,
      transformation: "Lost 40lbs, doubled income",
      metric: "2x income growth",
    },
    {
      name: "Alex Thompson",
      age: "25, Recent Graduate",
      image: alexImg,
      content: "This community helped me understand how to be a strong, purposeful man in today's world without apologizing for it.",
      rating: 5,
      transformation: "Found purpose and direction",
      metric: "$75K starting role",
    },
    {
      name: "Robert Garcia",
      age: "41, Business Owner",
      image: robertImg,
      content: "I thought it was too late to change my life. The practical strategies for passive income and mindset work proved me wrong. I'm now financially free.",
      rating: 5,
      transformation: "Achieved financial freedom",
      metric: "$15K/mo passive income",
    },
    {
      name: "Michael Johnson",
      age: "29, Sales Manager",
      image: michaelImg,
      content: "The spiritual and mindset components were game-changers. I learned to channel my masculine energy productively and build authentic wealth.",
      rating: 5,
      transformation: "Tripled sales performance",
      metric: "3x sales growth",
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star size={16} className="fill-current" />
            Verified Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Men, <span className="text-primary">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join 500+ men who have transformed their lives through our proven system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-card border border-primary/10 hover:border-primary/20 transition-smooth relative group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-smooth" size={32} />

              {/* Profile */}
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} - ${testimonial.age}`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-primary fill-current" size={16} />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>

              {/* Transformation + Metric */}
              <div className="space-y-2">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <p className="text-primary font-semibold text-sm">
                    🎯 {testimonial.transformation}
                  </p>
                </div>
                <div className="bg-secondary/50 p-2 rounded-lg text-center">
                  <p className="text-xs text-muted-foreground">Key Result: <span className="text-primary font-bold">{testimonial.metric}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA linking to full Success Stories page */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card p-8 rounded-xl max-w-2xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Want to See More Transformations?</h3>
            <p className="text-muted-foreground mb-6">
              Read in-depth before & after stories with detailed journeys and measurable results from men just like you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/success-stories">
                <Button variant="hero" className="gap-2">
                  Read Full Success Stories <ArrowRight size={16} />
                </Button>
              </Link>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
              >
                Start Your Transformation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;