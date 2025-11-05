import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Award, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CoursesPage = () => {
  const courses = [
    {
      title: "Mindset Mastery",
      price: "$197",
      duration: "6 weeks",
      students: "2,400+",
      level: "Beginner to Advanced",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Transform your thinking patterns and develop an unstoppable mindset",
      modules: [
        "Mental programming and belief systems",
        "Overcoming limiting beliefs",
        "Building unshakeable confidence",
        "Goal setting and achievement strategies",
        "Daily mental practices for success"
      ]
    },
    {
      title: "Physical Dominance",
      price: "$197",
      duration: "8 weeks",
      students: "1,800+",
      level: "All Levels",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete training system for building a strong, aesthetic, powerful physique",
      modules: [
        "Science-based training programs",
        "Nutrition and meal planning",
        "Supplement protocols",
        "Recovery and optimization",
        "Habit building for consistency"
      ]
    },
    {
      title: "Wealth Builder Blueprint",
      price: "$297",
      duration: "10 weeks",
      students: "3,200+",
      level: "Beginner to Intermediate",
      image: "https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Create multiple income streams and build lasting financial freedom",
      modules: [
        "Income generation strategies",
        "Investment fundamentals",
        "Passive income systems",
        "Business building basics",
        "Money mindset and management"
      ]
    },
    {
      title: "Spiritual Awakening",
      price: "$197",
      duration: "6 weeks",
      students: "1,500+",
      level: "All Levels",
      image: "https://images.pexels.com/photos/3772612/pexels-photo-3772612.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Connect with your purpose and unlock your inner power",
      modules: [
        "Purpose discovery frameworks",
        "Meditation and mindfulness practices",
        "Energy management techniques",
        "Spiritual disciplines for men",
        "Building a meaningful life"
      ]
    },
    {
      title: "Masculine Leadership",
      price: "$247",
      duration: "8 weeks",
      students: "2,100+",
      level: "Intermediate to Advanced",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Develop the leadership skills to excel in all areas of life",
      modules: [
        "Leadership principles and frameworks",
        "Communication mastery",
        "Influence and persuasion",
        "Building and leading teams",
        "Relationship dynamics"
      ]
    },
    {
      title: "Complete Transformation",
      price: "$497",
      duration: "12 weeks",
      students: "5,600+",
      level: "All Levels",
      image: "https://images.pexels.com/photos/4162488/pexels-photo-4162488.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "All-in-one course covering all 5 pillars of masculine development",
      modules: [
        "All content from individual courses",
        "Bonus masterclasses",
        "Private community access",
        "Monthly live Q&A sessions",
        "Lifetime updates and new content"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Digital Courses &
              <span className="text-primary block">Training Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive self-paced courses designed to transform every aspect of your life. 
              Learn at your own pace with lifetime access.
            </p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-premium transition-smooth overflow-hidden group">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <div className="text-2xl font-bold text-primary">{course.price}</div>
                    </div>
                    <CardDescription>{course.description}</CardDescription>
                    
                    <div className="flex flex-wrap gap-4 mt-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Clock size={16} className="mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users size={16} className="mr-1" />
                        {course.students}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Award size={16} className="mr-1" />
                        {course.level}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                      <ul className="space-y-2">
                        {course.modules.slice(0, 3).map((module, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <BookOpen size={14} className="text-primary mr-2 mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{module}</span>
                          </li>
                        ))}
                      </ul>
                      {course.modules.length > 3 && (
                        <p className="text-sm text-muted-foreground mt-2">
                          +{course.modules.length - 3} more modules
                        </p>
                      )}
                    </div>
                    
                    <Button variant="premium" className="w-full" asChild>
                      <a href="/#intake">Enroll Now</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">Not Sure Which Course to Start With?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a free consultation and we'll help you choose the perfect program for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:malemindcollective@gmail.com">Book Free Consultation</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
