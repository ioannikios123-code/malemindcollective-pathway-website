import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Award, Users, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CustomerSupportChat } from "@/components/CustomerSupportChat";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string | null;
  level: string | null;
  features: string[] | null;
  image_url: string | null;
}

const CoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Fallback courses if database is empty
  const fallbackCourses = [
    {
      id: "mindset-mastery",
      title: "Mindset Mastery",
      price: 197,
      duration: "6 weeks",
      level: "Beginner to Advanced",
      image_url: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Transform your thinking patterns and develop an unstoppable mindset",
      features: [
        "Mental programming and belief systems",
        "Overcoming limiting beliefs",
        "Building unshakeable confidence",
        "Goal setting and achievement strategies",
        "Daily mental practices for success"
      ]
    },
    {
      id: "physical-dominance",
      title: "Physical Dominance",
      price: 197,
      duration: "8 weeks",
      level: "All Levels",
      image_url: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete training system for building a strong, aesthetic, powerful physique",
      features: [
        "Science-based training programs",
        "Nutrition and meal planning",
        "Supplement protocols",
        "Recovery and optimization",
        "Habit building for consistency"
      ]
    },
    {
      id: "wealth-builder",
      title: "Wealth Builder Blueprint",
      price: 297,
      duration: "10 weeks",
      level: "Beginner to Intermediate",
      image_url: "https://images.pexels.com/photos/6120214/pexels-photo-6120214.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Create multiple income streams and build lasting financial freedom",
      features: [
        "Income generation strategies",
        "Investment fundamentals",
        "Passive income systems",
        "Business building basics",
        "Money mindset and management"
      ]
    },
    {
      id: "spiritual-awakening",
      title: "Spiritual Awakening",
      price: 197,
      duration: "6 weeks",
      level: "All Levels",
      image_url: "https://images.pexels.com/photos/3772612/pexels-photo-3772612.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Connect with your purpose and unlock your inner power",
      features: [
        "Purpose discovery frameworks",
        "Meditation and mindfulness practices",
        "Energy management techniques",
        "Spiritual disciplines for men",
        "Building a meaningful life"
      ]
    },
    {
      id: "masculine-leadership",
      title: "Masculine Leadership",
      price: 247,
      duration: "8 weeks",
      level: "Intermediate to Advanced",
      image_url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Develop the leadership skills to excel in all areas of life",
      features: [
        "Leadership principles and frameworks",
        "Communication mastery",
        "Influence and persuasion",
        "Building and leading teams",
        "Relationship dynamics"
      ]
    },
    {
      id: "complete-transformation",
      title: "Complete Transformation",
      price: 497,
      duration: "12 weeks",
      level: "All Levels",
      image_url: "https://images.pexels.com/photos/4162488/pexels-photo-4162488.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "All-in-one course covering all 5 pillars of masculine development",
      features: [
        "All content from individual courses",
        "Bonus masterclasses",
        "Private community access",
        "Monthly live Q&A sessions",
        "Lifetime updates and new content"
      ]
    }
  ];

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    fetchCourses();

    return () => subscription.unsubscribe();
  }, []);

  const fetchCourses = async () => {
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("is_active", true);

    if (data && data.length > 0) {
      setCourses(data);
    } else {
      setCourses(fallbackCourses);
    }
    setIsLoading(false);
  };

  const handleEnroll = async (course: Course) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login or create an account to purchase courses.",
      });
      navigate("/auth");
      return;
    }

    setCheckoutLoading(course.id);

    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          courseId: course.id,
          courseTitle: course.title,
          price: course.price,
          successUrl: `${window.location.origin}/dashboard?success=true`,
          cancelUrl: `${window.location.origin}/courses?canceled=true`,
        },
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error: any) {
      console.error("Checkout error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setCheckoutLoading(null);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

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
              {courses.map((course) => (
                <Card key={course.id} className="bg-gradient-card border-border shadow-card hover:shadow-premium transition-smooth overflow-hidden group">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={course.image_url || "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <div className="text-2xl font-bold text-primary">${course.price}</div>
                    </div>
                    <CardDescription>{course.description}</CardDescription>
                    
                    <div className="flex flex-wrap gap-4 mt-4 text-sm">
                      {course.duration && (
                        <div className="flex items-center text-muted-foreground">
                          <Clock size={16} className="mr-1" />
                          {course.duration}
                        </div>
                      )}
                      <div className="flex items-center text-muted-foreground">
                        <Users size={16} className="mr-1" />
                        2,000+
                      </div>
                      {course.level && (
                        <div className="flex items-center text-muted-foreground">
                          <Award size={16} className="mr-1" />
                          {course.level}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    {course.features && course.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                        <ul className="space-y-2">
                          {course.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <BookOpen size={14} className="text-primary mr-2 mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        {course.features.length > 3 && (
                          <p className="text-sm text-muted-foreground mt-2">
                            +{course.features.length - 3} more modules
                          </p>
                        )}
                      </div>
                    )}
                    
                    <Button 
                      variant="premium" 
                      className="w-full" 
                      onClick={() => handleEnroll(course)}
                      disabled={checkoutLoading === course.id}
                    >
                      {checkoutLoading === course.id ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Enroll Now"
                      )}
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
      <CustomerSupportChat />
    </div>
  );
};

export default CoursesPage;