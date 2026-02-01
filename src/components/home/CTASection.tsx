import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

interface CTASectionProps {
  onOpenDemo: () => void;
}

export function CTASection({ onOpenDemo }: CTASectionProps) {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative max-w-4xl mx-auto">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent rounded-3xl" />
          
          <div className="relative bg-card rounded-2xl border border-border/50 p-8 lg:p-12 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Get a release-ready risk score—<span className="text-gradient">before production.</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join enterprises that ship GenAI with confidence. Evidence-driven safety, not just alerts.
            </p>
            
            <Button
              size="lg"
              onClick={onOpenDemo}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 h-12 mb-10"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            {/* Contact options */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-6">Or reach out directly</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="mailto:info@zrotrustai.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>info@zrotrustai.com</span>
                </a>
                <a
                  href="mailto:info@zrotrustai.com?subject=Schedule%20a%20Demo"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule a call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
