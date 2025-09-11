import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus Rodriguez",
      age: "32, Entrepreneur",
      content: "MaleMindCollective completely transformed my approach to wealth building. I went from living paycheck to paycheck to building multiple income streams. The mindset shifts alone were worth it.",
      rating: 5,
      transformation: "Built 6-figure business in 8 months"
    },
    {
      name: "David Chen",
      age: "28, Software Engineer", 
      content: "I was lost and had no direction after college. This program gave me the masculine foundation I needed to become a leader in my career and relationships. The brotherhood aspect is invaluable.",
      rating: 5,
      transformation: "Promoted to team lead, found confidence"
    },
    {
      name: "James Williams",
      age: "35, Father of 2",
      content: "As a father, I needed to become the man my family could look up to. The 5 pillars approach helped me get in the best shape of my life while building wealth for my children's future.",
      rating: 5,
      transformation: "Lost 40lbs, doubled income"
    },
    {
      name: "Alex Thompson",
      age: "25, Recent Graduate",
      content: "Society told me everything I believed about masculinity was wrong. This community helped me understand how to be a strong, purposeful man in today's world without apologizing for it.",
      rating: 5,
      transformation: "Found purpose and direction"
    },
    {
      name: "Robert Garcia",
      age: "41, Business Owner",
      content: "I thought it was too late to change my life. The practical strategies for passive income and mindset work proved me wrong. I'm now financially free and mentally stronger than ever.",
      rating: 5,
      transformation: "Achieved financial freedom"
    },
    {
      name: "Michael Johnson",
      age: "29, Sales Manager",
      content: "The spiritual and mindset components were game-changers. I learned to channel my masculine energy productively and build authentic wealth. Best investment I've ever made.",
      rating: 5,
      transformation: "Tripled sales performance"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Men, <span className="text-primary">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See how thousands of men have transformed their lives through our proven system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-card border border-primary/10 hover:border-primary/20 transition-smooth"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-primary fill-current" size={16} />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Transformation Highlight */}
              <div className="bg-primary/10 p-3 rounded-lg mb-4">
                <p className="text-primary font-semibold text-sm">
                  🎯 {testimonial.transformation}
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.age}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card p-8 rounded-xl max-w-2xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Them?</h3>
            <p className="text-muted-foreground mb-6">
              Don't let another year pass feeling lost and financially struggling. 
              Take the first step towards masculine transformation today.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-primary text-primary-foreground hover:bg-gradient-primary/90 h-11 px-8 shadow-elegant hover:shadow-glow"
            >
              Start Your Transformation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;