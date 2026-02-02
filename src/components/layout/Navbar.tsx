import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#approach", label: "Approach" },
  { href: "#product", label: "Product" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="h-7 w-7 text-accent transition-all" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              ZROTrust<span className="text-accent">.AI</span>
            </span>
          </Link>

          {/* Centered Pill Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 px-2 py-1.5 bg-muted rounded-full border border-border">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full transition-colors hover:bg-background"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="mailto:info@zrotrustai.com"
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              Contact
            </a>
            <a
              href="https://calendly.com/zrotrustai-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
            <div className="container px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    scrollToSection(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border space-y-2">
                <a
                  href="mailto:info@zrotrustai.com"
                  className="flex items-center justify-center w-full py-3 text-foreground border border-border rounded-full transition-colors font-medium hover:bg-muted"
                >
                  Contact Us
                </a>
                <a
                  href="https://calendly.com/zrotrustai-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors font-medium"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
