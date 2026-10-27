import { Brain, Heart, Dumbbell, Landmark, Shield } from "lucide-react";
import mindsetImg from "@/assets/pillar-mindset.jpg";
import spiritualImg from "@/assets/pillar-spiritual.jpg";
import physicalImg from "@/assets/pillar-physical.jpg";
import wealthImg from "@/assets/pillar-wealth.jpg";
import masculinityImg from "@/assets/pillar-masculinity.jpg";

const pillars = [
  {
    icon: Brain,
    title: "Mindset Mastery",
    image: mindsetImg,
    purpose: "Build a mind that works for you, not against you.",
    challenge: "Self-doubt, overthinking, lack of discipline.",
    growth: "Clear thinking, emotional control and steady confidence.",
  },
  {
    icon: Heart,
    title: "Spiritual Foundation",
    image: spiritualImg,
    purpose: "Ground your life in values, meaning and inner peace.",
    challenge: "Emptiness, restlessness, no sense of purpose.",
    growth: "A clear sense of who you are and what you stand for.",
  },
  {
    icon: Dumbbell,
    title: "Physical Excellence",
    image: physicalImg,
    purpose: "Treat your body as the base for everything else.",
    challenge: "Low energy, poor habits, inconsistency.",
    growth: "Sustainable training, nutrition and daily discipline.",
  },
  {
    icon: Landmark,
    title: "Wealth Mastery & Financial Freedom",
    image: wealthImg,
    purpose: "Build a responsible, long-term relationship with money.",
    challenge: "Debt, no budget, uncertainty about the future.",
    growth: "Budgeting, saving, smart investing and steady progress.",
  },
  {
    icon: Shield,
    title: "Modern Masculinity",
    image: masculinityImg,
    purpose: "Lead with strength, integrity and care.",
    challenge: "Confusion about identity and what it means to be a man today.",
    growth: "Healthy leadership, honest relationships and responsibility.",
  },
];

const Pillars = () => {
  return (
    <section id="pillars" className="py-20 md:py-28 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">The framework</p>
          <h2 className="text-3xl md:text-5xl mb-5 leading-tight">The Five Pillars</h2>
          <p className="text-lg text-muted-foreground">
            Growth in one area supports the others. Every coaching relationship and course is
            built around these five foundations.
          </p>
        </div>

        <div className="space-y-6">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-8 items-center rounded-lg border border-border bg-card/60 p-4 md:p-5"
            >
              <img
                src={p.image}
                alt=""
                loading="lazy"
                className="w-full h-40 md:h-36 object-cover rounded-md"
              />
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-primary tabular-nums">0{i + 1}</span>
                  <p.icon className="text-primary" size={18} aria-hidden />
                  <h3 className="text-xl md:text-2xl">{p.title}</h3>
                </div>
                <p className="text-foreground/90 mb-4">{p.purpose}</p>
                <dl className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Addresses</dt>
                    <dd className="text-muted-foreground">{p.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">You build</dt>
                    <dd className="text-muted-foreground">{p.growth}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a href="#intake" className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold text-center hover:bg-primary/90 transition-colors">
            Start with a free call
          </a>
          <a href="/downloads/mindset-transformation-guide.pdf" download="MaleMindCollective-Mindset-Guide.pdf" className="border border-primary/30 text-foreground px-8 py-3 rounded-md text-center hover:bg-primary/10 transition-colors">
            Download the free mindset guide
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
