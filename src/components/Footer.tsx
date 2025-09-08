const Footer = () => {
  return (
    <footer className="bg-secondary/40 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              MaleMindCollective
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering men to master the 5 pillars of excellence: Mindset, Spirituality, 
              Physicality, Wealth Building, and Modern Masculinity.
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 MaleMindCollective. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-smooth">
                Home
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-smooth">
                About
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-smooth">
                Services
              </a>
              <a href="#pillars" className="block text-muted-foreground hover:text-primary transition-smooth">
                5 Pillars
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                1-on-1 Coaching
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Digital Courses
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Masterclasses
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                Group Programs
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-smooth">
                90-Day Challenge
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            Disclaimer: Results may vary. The testimonials and examples shown are exceptional 
            results and are not intended to guarantee that anyone will achieve the same results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;