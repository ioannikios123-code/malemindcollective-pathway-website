import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft, CheckCircle, Play, Target, Zap, Trophy } from "lucide-react";

const ApplyPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    age_range: "",
    relationship_status: "",
    current_income: "",
    health_fitness_level: "",
    biggest_goals: "",
    biggest_struggles: "",
    what_tried_before: "",
    why_interested: "",
    investment_ready: "",
    commitment_level: "",
    how_heard_about_us: "",
    utm_source: searchParams.get("utm_source") || "",
    utm_medium: searchParams.get("utm_medium") || "",
    utm_campaign: searchParams.get("utm_campaign") || "",
    utm_content: searchParams.get("utm_content") || "",
  });

  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 0: return true; // Video step, always can proceed
      case 1: return formData.full_name && formData.email;
      case 2: return formData.age_range && formData.current_income;
      case 3: return formData.biggest_goals && formData.biggest_struggles;
      case 4: return formData.why_interested && formData.commitment_level;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("lead_surveys").insert({
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone || null,
        age_range: formData.age_range || null,
        relationship_status: formData.relationship_status || null,
        current_income: formData.current_income || null,
        health_fitness_level: formData.health_fitness_level || null,
        biggest_goals: formData.biggest_goals,
        biggest_struggles: formData.biggest_struggles,
        what_tried_before: formData.what_tried_before || null,
        why_interested: formData.why_interested,
        investment_ready: formData.investment_ready || null,
        commitment_level: formData.commitment_level || null,
        how_heard_about_us: formData.how_heard_about_us || null,
        utm_source: formData.utm_source || null,
        utm_medium: formData.utm_medium || null,
        utm_campaign: formData.utm_campaign || null,
        utm_content: formData.utm_content || null,
      });

      if (error) throw error;
      
      setStep(5); // Success step
      toast.success("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold">
                Give Us 7 Minutes And We'll Reveal The{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Exact Framework
                </span>{" "}
                We Use To Transform Men Into Their Best Selves
              </h1>
              <p className="text-xl text-muted-foreground">
                Without Sacrificing Your Career, Family Time, Or Starting From Zero
              </p>
            </div>

            <div className="aspect-video bg-secondary/50 rounded-2xl overflow-hidden max-w-4xl mx-auto relative">
              {!showVideo ? (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-gradient-to-br from-primary/20 to-secondary/40"
                  onClick={() => setShowVideo(true)}
                >
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center hover:scale-110 transition-transform">
                    <Play size={36} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <p>Video player placeholder - Upload your training video</p>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 gap-2"
                onClick={() => setStep(1)}
              >
                Start Your Application <ArrowRight size={20} />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
              <div className="flex items-center gap-3 justify-center">
                <Target className="text-primary" size={24} />
                <span className="text-muted-foreground">Clear Direction</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Zap className="text-primary" size={24} />
                <span className="text-muted-foreground">Proven Framework</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Trophy className="text-primary" size={24} />
                <span className="text-muted-foreground">Real Results</span>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8 space-y-6">
              <div className="text-center space-y-2 mb-8">
                <h2 className="text-2xl font-bold">Let's Get To Know You</h2>
                <p className="text-muted-foreground">Start with your basic information</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="full_name">Full Name *</Label>
                  <Input
                    id="full_name"
                    value={formData.full_name}
                    onChange={(e) => updateField("full_name", e.target.value)}
                    placeholder="Enter your full name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8 space-y-6">
              <div className="text-center space-y-2 mb-8">
                <h2 className="text-2xl font-bold">Where Are You Right Now?</h2>
                <p className="text-muted-foreground">Help us understand your current situation</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium">Age Range *</Label>
                  <RadioGroup
                    value={formData.age_range}
                    onValueChange={(value) => updateField("age_range", value)}
                    className="mt-3 grid grid-cols-2 gap-3"
                  >
                    {["18-25", "26-35", "36-45", "46-55", "55+"].map((age) => (
                      <div key={age} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-secondary/50 cursor-pointer">
                        <RadioGroupItem value={age} id={`age-${age}`} />
                        <Label htmlFor={`age-${age}`} className="cursor-pointer">{age}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base font-medium">Current Annual Income *</Label>
                  <RadioGroup
                    value={formData.current_income}
                    onValueChange={(value) => updateField("current_income", value)}
                    className="mt-3 space-y-2"
                  >
                    {[
                      "Under $50,000",
                      "$50,000 - $100,000",
                      "$100,000 - $250,000",
                      "$250,000 - $500,000",
                      "$500,000+"
                    ].map((income) => (
                      <div key={income} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-secondary/50 cursor-pointer">
                        <RadioGroupItem value={income} id={`income-${income}`} />
                        <Label htmlFor={`income-${income}`} className="cursor-pointer">{income}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base font-medium">Relationship Status</Label>
                  <RadioGroup
                    value={formData.relationship_status}
                    onValueChange={(value) => updateField("relationship_status", value)}
                    className="mt-3 grid grid-cols-2 gap-3"
                  >
                    {["Single", "Dating", "Married", "Divorced"].map((status) => (
                      <div key={status} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-secondary/50 cursor-pointer">
                        <RadioGroupItem value={status} id={`status-${status}`} />
                        <Label htmlFor={`status-${status}`} className="cursor-pointer">{status}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base font-medium">Health & Fitness Level</Label>
                  <RadioGroup
                    value={formData.health_fitness_level}
                    onValueChange={(value) => updateField("health_fitness_level", value)}
                    className="mt-3 grid grid-cols-2 gap-3"
                  >
                    {["Needs Improvement", "Average", "Good", "Excellent"].map((level) => (
                      <div key={level} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-secondary/50 cursor-pointer">
                        <RadioGroupItem value={level} id={`fitness-${level}`} />
                        <Label htmlFor={`fitness-${level}`} className="cursor-pointer">{level}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8 space-y-6">
              <div className="text-center space-y-2 mb-8">
                <h2 className="text-2xl font-bold">Your Goals & Challenges</h2>
                <p className="text-muted-foreground">Be honest—this helps us serve you better</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="biggest_goals">What are your biggest goals for the next 12 months? *</Label>
                  <Textarea
                    id="biggest_goals"
                    value={formData.biggest_goals}
                    onChange={(e) => updateField("biggest_goals", e.target.value)}
                    placeholder="Financial freedom, better relationships, physical transformation..."
                    className="mt-2 min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="biggest_struggles">What's your biggest struggle or frustration right now? *</Label>
                  <Textarea
                    id="biggest_struggles"
                    value={formData.biggest_struggles}
                    onChange={(e) => updateField("biggest_struggles", e.target.value)}
                    placeholder="Lack of direction, procrastination, relationship issues..."
                    className="mt-2 min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="what_tried_before">What have you tried before to solve this? (Optional)</Label>
                  <Textarea
                    id="what_tried_before"
                    value={formData.what_tried_before}
                    onChange={(e) => updateField("what_tried_before", e.target.value)}
                    placeholder="Other programs, books, courses..."
                    className="mt-2 min-h-[80px]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8 space-y-6">
              <div className="text-center space-y-2 mb-8">
                <h2 className="text-2xl font-bold">Final Step: Your Commitment</h2>
                <p className="text-muted-foreground">We only work with men who are serious about change</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="why_interested">Why are you interested in working with Male Mind Collective? *</Label>
                  <Textarea
                    id="why_interested"
                    value={formData.why_interested}
                    onChange={(e) => updateField("why_interested", e.target.value)}
                    placeholder="What drew you to us? What do you hope to achieve?"
                    className="mt-2 min-h-[100px]"
                  />
                </div>

                <div>
                  <Label className="text-base font-medium">Are you ready to invest in yourself? *</Label>
                  <RadioGroup
                    value={formData.investment_ready}
                    onValueChange={(value) => updateField("investment_ready", value)}
                    className="mt-3 space-y-2"
                  >
                    {[
                      "Yes, I'm ready to invest whatever it takes",
                      "Yes, but I have a limited budget",
                      "I need to discuss with my partner first",
                      "I'm just exploring options right now"
                    ].map((option) => (
                      <div key={option} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-secondary/50 cursor-pointer">
                        <RadioGroupItem value={option} id={`invest-${option}`} />
                        <Label htmlFor={`invest-${option}`} className="cursor-pointer text-sm">{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base font-medium">How committed are you to making real changes? *</Label>
                  <RadioGroup
                    value={formData.commitment_level}
                    onValueChange={(value) => updateField("commitment_level", value)}
                    className="mt-3 space-y-2"
                  >
                    {[
                      "100% - I'll do whatever it takes",
                      "Very committed - Ready to put in the work",
                      "Somewhat committed - I want to learn more first",
                      "Still deciding if this is right for me"
                    ].map((option) => (
                      <div key={option} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-secondary/50 cursor-pointer">
                        <RadioGroupItem value={option} id={`commit-${option}`} />
                        <Label htmlFor={`commit-${option}`} className="cursor-pointer text-sm">{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="how_heard_about_us">How did you hear about us?</Label>
                  <Input
                    id="how_heard_about_us"
                    value={formData.how_heard_about_us}
                    onChange={(e) => updateField("how_heard_about_us", e.target.value)}
                    placeholder="Instagram, Facebook, YouTube, Friend referral..."
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 5:
        return (
          <div className="text-center space-y-8 py-12">
            <div className="w-24 h-24 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle size={48} className="text-green-500" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Application Submitted!</h2>
              <p className="text-xl text-muted-foreground max-w-lg mx-auto">
                Thank you for applying, {formData.full_name.split(" ")[0]}! Our team will review your application and reach out within 24-48 hours.
              </p>
            </div>
            <div className="space-y-4 pt-4">
              <p className="text-muted-foreground">In the meantime, check out our free resources:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" onClick={() => navigate("/#videos")}>
                  Watch Free Training
                </Button>
                <Button onClick={() => navigate("/")}>
                  Return to Homepage
                </Button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {step > 0 && step < 5 && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Step {step} of {totalSteps - 1}</span>
              <span className="text-sm font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      )}

      <div className={`container mx-auto px-4 py-8 ${step > 0 && step < 5 ? "pt-28" : ""}`}>
        {renderStep()}

        {step > 0 && step < 5 && (
          <div className="flex justify-between max-w-2xl mx-auto mt-8">
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              className="gap-2"
            >
              <ArrowLeft size={16} /> Back
            </Button>
            
            {step < 4 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="gap-2"
              >
                Continue <ArrowRight size={16} />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="gap-2"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"} 
                {!isSubmitting && <ArrowRight size={16} />}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyPage;