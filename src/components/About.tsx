import { Button } from "@/components/ui/button";
import { Target, Users, Trophy } from "lucide-react";
import missionImg from "@/assets/about-mission.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Guiding The <span className="text-primary">Lost Generation</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            In today's society, men are struggling to find their purpose, build wealth, and embody 
            true masculinity. MaleMindCollective provides the roadmap to help you navigate modern 
            challenges and build the life you deserve.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-card p-8 md:p-12 rounded-xl shadow-card border border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-primary">My Mission</h3>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                I started MaleMindCollective because I witnessed too many good men being left behind by society. 
                Men who were once the backbone of communities are now struggling in silence, abandoned by a world 
                that no longer values traditional masculine virtues while offering no clear alternative path forward.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                I've seen friends, brothers, and fathers lose their way—caught between outdated expectations and 
                modern confusion. They're told their natural instincts are wrong, their desire to provide and protect 
                is toxic, yet given no guidance on how to channel their masculine energy productively in today's world.
              </p>
              <p className="text-lg leading-relaxed text-primary font-semibold">
                "My mission is simple: to provide the brotherhood, mentorship, and practical tools that modern men 
                desperately need to reclaim their power, build authentic wealth, and create lives of purpose and meaning."
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
                <h3 className="text-xl font-semibold mb-2">Clear Direction</h3>
                <p className="text-muted-foreground">
                  No more confusion about what it means to be a man. Get practical, 
                  actionable guidance that works in the real world.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Brotherhood Community</h3>
                <p className="text-muted-foreground">
                  Join a community of like-minded men on the same journey. Share experiences, 
                  challenges, and victories together.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Trophy className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-muted-foreground">
                  Our system has helped thousands of men build wealth, improve relationships, 
                  and find their masculine purpose.
                </p>
              </div>
            </div>

            <Button variant="premium" size="lg" asChild>
              <a href="#contact">Learn More About Our Mission</a>
            </Button>
          </div>
        </div>

        {/* The Problem Section */}
        <div className="mt-16">
          <div className="bg-gradient-card p-8 rounded-xl shadow-card">
            <h3 className="text-2xl font-bold mb-6">The Problem</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                • Men are financially struggling with no clear path to wealth
              </p>
              <p>
                • Traditional masculine values are being questioned without alternatives
              </p>
              <p>
                • Mental health and spiritual emptiness are at all-time highs
              </p>
              <p>
                • Physical health and fitness are declining across all age groups
              </p>
              <p>
                • No mentorship or guidance for navigating modern challenges
              </p>
            </div>
            
            <div className="mt-8 p-4 bg-primary/10 rounded-lg">
              <p className="text-primary font-semibold">
                "We provide the solution: A complete system for masculine transformation 
                and financial prosperity."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;