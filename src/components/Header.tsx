import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Items that link to sections on the home page
  const sectionLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "5 Pillars", href: "/#pillars" },
    { name: "Contact", href: "/#contact" },
  ];

  // Items that link to separate pages
  const pageLinks = [
    { name: "Coaching", href: "/coaching" },
    { name: "Courses", href: "/courses" },
    { name: "Mastermind", href: "/mastermind" },
  ];

  const handleSectionClick = (href: string) => {
    const sectionId = href.replace("/#", "");
    if (location.pathname === "/") {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page first, then scroll
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            MaleMindCollective
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {sectionLinks.slice(0, 3).map((item) => (
              <button
                key={item.name}
                onClick={() => handleSectionClick(item.href)}
                className="text-foreground hover:text-primary transition-smooth text-sm"
              >
                {item.name}
              </button>
            ))}
            {pageLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-smooth text-sm"
              >
                {item.name}
              </Link>
            ))}
            {sectionLinks.slice(3).map((item) => (
              <button
                key={item.name}
                onClick={() => handleSectionClick(item.href)}
                className="text-foreground hover:text-primary transition-smooth text-sm"
              >
                {item.name}
              </button>
            ))}
            
            {user ? (
              <Button variant="hero" size="sm" onClick={() => navigate("/dashboard")} className="gap-2">
                <User size={16} />
                Dashboard
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => navigate("/auth")}>
                  Login
                </Button>
                <Button variant="hero" size="sm" onClick={() => handleSectionClick("/#intake")}>
                  Get Started
                </Button>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border bg-background">
            <div className="flex flex-col space-y-4 pt-4">
              {sectionLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleSectionClick(item.href)}
                  className="text-foreground hover:text-primary transition-smooth text-left"
                >
                  {item.name}
                </button>
              ))}
              {pageLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {user ? (
                <Button variant="hero" size="sm" className="self-start gap-2" onClick={() => { navigate("/dashboard"); setIsMenuOpen(false); }}>
                  <User size={16} />
                  Dashboard
                </Button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="self-start" onClick={() => { navigate("/auth"); setIsMenuOpen(false); }}>
                    Login
                  </Button>
                  <Button variant="hero" size="sm" className="self-start" onClick={() => handleSectionClick("/#intake")}>
                    Get Started
                  </Button>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;