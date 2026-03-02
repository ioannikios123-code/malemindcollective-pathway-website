const MediaMentions = () => {
  const mentions = [
    { name: "Forbes", initial: "F" },
    { name: "Entrepreneur", initial: "E" },
    { name: "GQ", initial: "GQ" },
    { name: "Men's Health", initial: "MH" },
    { name: "Business Insider", initial: "BI" },
    { name: "The Art of Manliness", initial: "AM" },
  ];

  return (
    <section className="py-10 border-y border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 font-medium">
          As Featured In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {mentions.map((m) => (
            <div
              key={m.name}
              className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-smooth cursor-default"
            >
              <span className="text-2xl md:text-3xl font-bold tracking-tight text-foreground font-serif">
                {m.initial}
              </span>
              <span className="hidden sm:inline text-sm text-muted-foreground font-medium">
                {m.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaMentions;
