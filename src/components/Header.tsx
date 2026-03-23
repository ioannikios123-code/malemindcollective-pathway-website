import { Button } from "@/components/ui/button";
import { Menu, X, User, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const primaryNav = [
    { name: "Home", href: "/#home", type: "section" },
    { name: "About", href: "/#about", type: "section" },
    { name: "Services", href: "/#services", type: "section" },
    { name: "Coaching", href: "/coaching", type: "page" },
    { name: "Courses", href: "/courses", type: "page" },
  ];

  const moreNav = [
    { name: "Mastermind", href: "/mastermind", type: "page" },
    { name: "Success Stories", href: "/success-stories", type: "page" },
    { name: "Founder", href: "/founder", type: "page" },
    { name: "Blog", href: "/blog", type: "page" },
    { name: "Contact", href: "/#contact", type: "section" },
  ];

  const allNav = [...primaryNav, ...moreNav];

  const handleSectionClick = (href: string) => {
    const sectionId = href.replace("/#", "");
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
    setIsMoreOpen(false);
  };

  const renderNavItem = (item: { name: string; href: string; type: string }) => {
    if (item.type === "section") {
      return (
        <button
          key={item.name}
          onClick={() => handleSectionClick(item.href)}
          className="text-foreground hover:text-primary transition-smooth text-sm font-medium"
        >
          {item.name}
        </button>
      );
    }
    return (
      <Link
        key={item.name}
        to={item.href}
        className="text-foreground hover:text-primary transition-smooth text-sm font-medium"
        onClick={() => setIsMenuOpen(false)}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            MaleMindCollective
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {primaryNav.map(renderNavItem)}

            {/* More dropdown */}
            <div ref={moreRef} className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-smooth text-sm font-medium"
              >
                More <ChevronDown size={14} className={`transition-transform ${isMoreOpen ? "rotate-180" : ""}`} />
              </button>
              {isMoreOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                  {moreNav.map((item) => (
                    item.type === "section" ? (
                      <button
                        key={item.name}
                        onClick={() => handleSectionClick(item.href)}
                        className="block w-full text-left px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted/50 transition-smooth"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted/50 transition-smooth"
                        onClick={() => setIsMoreOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>

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
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border bg-background">
            <div className="flex flex-col space-y-3 pt-4">
              {allNav.map((item) =>
                item.type === "section" ? (
                  <button
                    key={item.name}
                    onClick={() => handleSectionClick(item.href)}
                    className="text-foreground hover:text-primary transition-smooth text-left text-sm"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-smooth text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
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
