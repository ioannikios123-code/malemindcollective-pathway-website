import { Users, Award, Globe, TrendingUp } from "lucide-react";

const MediaMentions = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Men Coached" },
    { icon: Globe, value: "35+", label: "Countries Reached" },
    { icon: Award, value: "5", label: "Pillars of Growth" },
    { icon: TrendingUp, value: "95%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-10 border-y border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 font-medium">
          Trusted by Men Worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-smooth cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="text-primary" size={20} />
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground block leading-none">
                  {s.value}
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  {s.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaMentions;
