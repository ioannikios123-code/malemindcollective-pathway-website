import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Download, BookOpen, Video, FileText, Mail, CheckCircle2 } from "lucide-react";
import { Newsletter } from "./Newsletter";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const FreeResources = () => {
  const [leadEmail, setLeadEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [guideRequested, setGuideRequested] = useState(false);
  const { toast } = useToast();

  const handleGuideRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("intake_forms").insert({
        user_id: crypto.randomUUID(),
        email: leadEmail,
        full_name: "Free Guide Request",
        form_type: "free-guide",
      });
      if (error) throw error;

      try {
        await supabase.functions.invoke("send-form-notification", {
          body: {
            formType: "free-guide",
            name: "Free Guide Request",
            email: leadEmail,
          },
        });
      } catch (emailError) {
        console.error("Email notification failed:", emailError);
      }

      setGuideRequested(true);
      toast({
        title: "Guide on the way! 📘",
        description: "Check your inbox for the Mindset Transformation Guide.",
      });
      setLeadEmail("");
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resources = [
    {
      icon: FileText,
      title: "Mindset Transformation Guide",
      description: "7-day action plan to shift your mindset and build unshakeable confidence",
      type: "lead-magnet" as const,
    },
    {
      icon: Video,
      title: "Free Training Videos",
      description: "Watch training sessions on mindset, wealth, spirituality, fitness, and masculinity",
      type: "videos" as const,
    },
    {
      icon: BookOpen,
      title: "Weekly Newsletter",
      description: "Get exclusive insights, strategies, and early access to programs delivered weekly",
      type: "newsletter" as const,
    },
  ];

  return (
    <section id="free-resources" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Download className="text-primary" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Journey With Free Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get immediate access to proven strategies and insights. No strings attached—just 
            valuable content to help you start transforming today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:shadow-premium transition-all">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="text-primary" size={24} />
                </div>
                <CardTitle className="text-2xl mb-2">{resource.title}</CardTitle>
                <CardDescription className="text-base">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {resource.type === "lead-magnet" && (
                  <>
                    {guideRequested ? (
                      <div className="flex items-center gap-2 text-primary">
                        <CheckCircle2 size={20} />
                        <span className="font-medium">Guide sent! Check your inbox.</span>
                      </div>
                    ) : (
                      <form onSubmit={handleGuideRequest} className="flex gap-2">
                        <Input
                          type="email"
                          placeholder="Your email"
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                          required
                          className="flex-1"
                        />
                        <Button type="submit" disabled={isSubmitting} variant="default" size="sm">
                          {isSubmitting ? "..." : "Get It Free"}
                        </Button>
                      </form>
                    )}
                  </>
                )}
                {resource.type === "videos" && (
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#videos">Watch Free Videos</a>
                  </Button>
                )}
                {resource.type === "newsletter" && (
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#newsletter">Subscribe Free</a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready for personalized guidance? Let's talk about your specific goals.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="#intake">Book Your Free Discovery Call</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
