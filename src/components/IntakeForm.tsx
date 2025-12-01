import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ClipboardList } from "lucide-react";

const IntakeForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    goals: "",
    challenges: "",
    experience: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Temporary solution until authentication is implemented
      const tempUserId = crypto.randomUUID();
      
      const { error } = await supabase.from("intake_forms").insert({
        user_id: tempUserId,
        email: formData.email,
        full_name: formData.fullName,
        phone: formData.phone || null,
        goals: formData.goals || null,
        challenges: formData.challenges || null,
        additional_info: formData.experience || null,
        form_type: "consultation",
      });

      if (error) throw error;

      toast({
        title: "Form Submitted! 🎉",
        description: "We'll review your information and get back to you within 24 hours.",
      });
      
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        goals: "",
        challenges: "",
        experience: "",
      });
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

  return (
    <section id="intake" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Card className="bg-gradient-card border-border shadow-premium">
          <CardHeader className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ClipboardList className="text-primary" size={32} />
            </div>
            <CardTitle className="text-3xl mb-4">
              Book Your Free Discovery Call
            </CardTitle>
            <CardDescription className="text-lg">
              Let's discuss your goals, challenges, and how I can help you achieve the transformation 
              you're looking for. This is a no-pressure conversation to see if we're a good fit.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium mb-2">
                  What are your top 3 goals? *
                </label>
                <Textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  required
                  rows={4}
                  placeholder="Example: Build muscle, increase income, improve confidence..."
                />
              </div>

              <div>
                <label htmlFor="challenges" className="block text-sm font-medium mb-2">
                  What are your biggest challenges right now? *
                </label>
                <Textarea
                  id="challenges"
                  value={formData.challenges}
                  onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                  required
                  rows={4}
                  placeholder="Be honest about what's holding you back..."
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium mb-2">
                  Previous Experience with Self-Development
                </label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  rows={3}
                  placeholder="Have you worked with coaches before? What programs have you tried?"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isLoading} 
                variant="hero" 
                size="lg" 
                className="w-full"
              >
                {isLoading ? "Submitting..." : "Submit Application"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to receive emails and messages from 
                MaleMindCollective about programs and services.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IntakeForm;
