import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Sparkles, CheckCircle2, Gift } from "lucide-react";

export const NewsletterBanner = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const tempUserId = crypto.randomUUID();
      
      const { error } = await supabase.from("intake_forms").insert({
        user_id: tempUserId,
        email,
        full_name: "Newsletter Subscriber",
        form_type: "newsletter",
      });

      if (error) throw error;

      // Send email notification
      try {
        await supabase.functions.invoke("send-form-notification", {
          body: {
            formType: "newsletter",
            name: "Newsletter Subscriber",
            email: email,
          },
        });
      } catch (emailError) {
        console.error("Email notification failed:", emailError);
      }

      setIsSubscribed(true);
      toast({
        title: "Welcome to the Collective! 🎉",
        description: "Check your inbox for your free transformation guide!",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <section id="newsletter" className="py-20 bg-gradient-to-br from-primary/20 via-secondary to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.15),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-primary" size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              You're In! 🔥
            </h2>
            <p className="text-xl text-muted-foreground">
              Check your email for your free guide and weekly insights on masculine development.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-primary/20 via-secondary to-primary/10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles size={18} />
              <span className="text-sm font-semibold">Join 10,000+ Men Transforming Their Lives</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Weekly Insights on
              <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2">
                Mindset, Wealth & Purpose
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join the MaleMindCollective newsletter for exclusive strategies, success stories, 
              and actionable tips to elevate every area of your life.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold mb-2">Free Transformation Guide</h4>
              <p className="text-sm text-muted-foreground">Get our "30-Day Mindset Reset" guide instantly</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold mb-2">Weekly Insights</h4>
              <p className="text-sm text-muted-foreground">Actionable strategies delivered every Tuesday</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold mb-2">Exclusive Content</h4>
              <p className="text-sm text-muted-foreground">Subscriber-only tips and early access</p>
            </div>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 text-lg px-6 bg-background/80 backdrop-blur-sm"
              />
              <Button 
                type="submit" 
                disabled={isLoading} 
                variant="hero"
                size="lg"
                className="h-14 px-8 text-lg shadow-glow"
              >
                {isLoading ? "Joining..." : "Join the Collective"}
              </Button>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              🔒 No spam. Unsubscribe anytime. Your email is safe with us.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
