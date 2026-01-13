import { Shield, Award, Users, Star, CheckCircle, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const TrustBadges = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    transformations: 0,
    countries: 0,
    rating: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      clients: 2500,
      transformations: 847,
      countries: 35,
      rating: 4.9,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters({
        clients: Math.floor(targets.clients * easeOut),
        transformations: Math.floor(targets.transformations * easeOut),
        countries: Math.floor(targets.countries * easeOut),
        rating: Math.round(targets.rating * easeOut * 10) / 10,
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Users,
      value: `${counters.clients.toLocaleString()}+`,
      label: "Men Transformed",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      value: `${counters.transformations}+`,
      label: "Success Stories",
      color: "text-amber-500",
    },
    {
      icon: Star,
      value: counters.rating.toFixed(1),
      label: "Average Rating",
      color: "text-yellow-500",
    },
    {
      icon: Award,
      value: `${counters.countries}+`,
      label: "Countries Reached",
      color: "text-emerald-500",
    },
  ];

  const badges = [
    { icon: Shield, text: "100% Confidential" },
    { icon: CheckCircle, text: "Money-Back Guarantee" },
    { icon: Award, text: "Certified Coaches" },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Social Proof Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background rounded-xl shadow-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3 bg-background rounded-full border border-border/50 shadow-sm"
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {badge.text}
              </span>
            </div>
          ))}
        </div>

        {/* Credibility Section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
            Trusted by Men Worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { label: "Money-Back Guarantee", desc: "30-Day" },
              { label: "Active Community", desc: "2,500+" },
              { label: "Success Rate", desc: "95%" },
              { label: "Countries", desc: "35+" }
            ].map((item) => (
              <div key={item.label} className="text-center px-4">
                <div className="text-lg font-bold text-primary">{item.desc}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
