import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
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

      toast({
        title: "Success! 🎉",
        description: "You're now subscribed to our newsletter. Check your inbox for exclusive content!",
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

  return (
    <div className="p-6 bg-gradient-card rounded-lg border border-primary/20 shadow-premium">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-primary/10 p-2 rounded-lg">
          <Mail className="text-primary" size={20} />
        </div>
        <h4 className="font-semibold text-primary">Join Our Newsletter</h4>
      </div>
      <p className="text-muted-foreground text-sm mb-4">
        Get weekly insights, exclusive content, and early access to new programs and services.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" disabled={isLoading} variant="default">
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
};
