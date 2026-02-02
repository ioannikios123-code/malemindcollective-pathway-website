const Stats = () => {
  const stats = [
    { value: "10,000+", label: "Men Transformed", sublabel: "Across 45+ countries" },
    { value: "95%", label: "Success Rate", sublabel: "Client satisfaction" },
    { value: "500+", label: "5-Star Reviews", sublabel: "Verified testimonials" },
    { value: "24/7", label: "Support Access", sublabel: "Never face challenges alone" },
  ];

  return (
    <section className="py-16 bg-primary/5 border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
