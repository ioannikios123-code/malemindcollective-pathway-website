import { Shield, Heart, TrendingUp, Users, Clock, Award } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "No Toxic Masculinity",
      description: "We focus on genuine growth, emotional intelligence, and healthy confidence—not outdated stereotypes or harmful ideologies."
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "We address mindset, relationships, career, finances, and mental health as interconnected parts of your whole life."
    },
    {
      icon: TrendingUp,
      title: "Evidence-Based Methods",
      description: "Our strategies are grounded in psychology research, proven coaching frameworks, and real-world results."
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Join a brotherhood of like-minded men committed to growth, accountability, and supporting each other."
    },
    {
      icon: Clock,
      title: "Flexible Programs",
      description: "Whether you have 10 minutes or 10 hours a week, our programs adapt to your schedule and lifestyle."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Over 10,000 men have transformed their lives through our programs with a 95% satisfaction rate."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Men Choose
            <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2">
              MaleMindCollective
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're different because we believe in balanced, responsible transformation—not quick fixes or harmful stereotypes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-gradient-card p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
