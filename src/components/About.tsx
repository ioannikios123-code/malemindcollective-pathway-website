import { Button } from "@/components/ui/button";
import { Target, Users, Trophy } from "lucide-react";

const missionImg = "https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1200";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Coaching for Men Who Want More
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            You're not looking for shortcuts or empty promises. You want real growth, sustainable 
            change, and a life built on purpose—not hype.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Whether you're struggling with confidence, navigating a career transition, improving 
            your mental health, or searching for deeper meaning—you're in the right place.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-card p-8 md:p-12 rounded-xl shadow-card border border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-primary">My Coaching Philosophy</h3>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                I believe in balanced transformation—combining mindset mastery with practical action. 
                This isn't about "getting rich quick" or toxic masculinity. It's about building 
                genuine confidence, meaningful relationships, career success, and financial stability 
                while staying true to your values.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                My approach integrates personal development, social awareness, and responsible 
                decision-making. You'll develop mental resilience, emotional intelligence, and the 
                practical skills needed to thrive in all areas of life.
              </p>
              <p className="text-lg leading-relaxed text-primary font-semibold">
                "Real success means purpose, impact, and fulfillment—not just money or status. 
                I'm here to help you achieve meaningful transformation that lasts."
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={missionImg} 
              alt="Brotherhood and mentorship - men supporting each other"
              className="rounded-xl shadow-premium w-full h-auto"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Target className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Guidance</h3>
                <p className="text-muted-foreground">
                  No cookie-cutter programs. Get strategies tailored to your specific challenges, 
                  goals, and life situation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
                <p className="text-muted-foreground">
                  Address mindset, confidence, relationships, career growth, and mental health 
                  as interconnected parts of your transformation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Trophy className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Proven Framework</h3>
                <p className="text-muted-foreground">
                  Based on psychology, personal development research, and real-world results 
                  from helping men achieve lasting change.
                </p>
              </div>
            </div>

            <Button variant="premium" size="lg" asChild>
              <a href="#intake">Book Your Free Discovery Call</a>
            </Button>
          </div>
        </div>

        {/* The Problem Section */}
        <div className="mt-16">
          <div className="bg-gradient-card p-8 rounded-xl shadow-card">
            <h3 className="text-2xl font-bold mb-6">Who This Is For</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                ✓ Young professionals seeking clarity on their career and life direction
              </p>
              <p>
                ✓ Men struggling with confidence, self-doubt, or imposter syndrome
              </p>
              <p>
                ✓ Individuals navigating major life transitions (career change, relationships, identity)
              </p>
              <p>
                ✓ Those wanting to improve mental health, manage stress, or overcome burnout
              </p>
              <p>
                ✓ Men ready to take responsibility and commit to meaningful personal growth
              </p>
            </div>
            
            <div className="mt-8 p-4 bg-primary/10 rounded-lg">
              <p className="text-primary font-semibold">
                If you're ready for real transformation—not quick fixes—let's build your path forward together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;