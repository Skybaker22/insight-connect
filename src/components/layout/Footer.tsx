import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const footerLinks = {
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold tracking-tight text-foreground">
                ZROTrust<span className="text-accent">.AI</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Privacy evidence for GenAI. Certify data and system behavior before production.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:info@zrotrustai.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    info@zrotrustai.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ZROTrust.AI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Making GenAI safety measurable and provable.
          </p>
        </div>
      </div>
    </footer>
  );
}
