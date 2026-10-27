import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import missionImg from "@/assets/about-mission.jpg";

const whoFor = [
  "You feel stuck, directionless or unsure who you're becoming",
  "You struggle with confidence, discipline or self-doubt",
  "You're going through a transition — career, relationships or identity",
  "You're ready to take responsibility and put in honest work",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Mission */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Our mission</p>
          <h2 className="text-3xl md:text-5xl mb-6 leading-tight">
            Too many men are left to figure life out alone.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Male Mind Collective exists to give men guidance, structure and a place to grow —
            in mindset, spirit, body, finances and character. No hype, no shortcuts. Just
            steady work toward becoming the man you want to be.
          </p>
        </div>

        {/* Founder + who it's for */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <img
            src={missionImg}
            alt="Men in conversation during a mentorship session"
            className="rounded-lg w-full h-auto object-cover aspect-[4/3]"
            loading="lazy"
          />

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">From the founder</p>
            <h3 className="text-2xl md:text-3xl mb-5">Why I started this</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I started Male Mind Collective because I've seen how many men feel lost and
              abandoned — without mentors, without direction and without anyone asking how
              they're really doing. I've walked my own path of growth, and I want to offer the
              guidance I wish more men had.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My approach balances personal growth with responsibility: real confidence,
              healthy relationships, discipline and financial stability — built on your values.
            </p>

            <h4 className="text-lg mb-4">This is for you if</h4>
            <ul className="space-y-3 mb-8">
              {whoFor.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2.5 h-px w-4 bg-primary shrink-0" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" asChild>
                <a href="#intake">Book a Free Discovery Call</a>
              </Button>
              <Button variant="outline" className="border-primary/30" asChild>
                <Link to="/founder">Read my story</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
