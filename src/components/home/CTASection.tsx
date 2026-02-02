import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Get Started
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get a release-ready risk score
            <br />
            <span className="text-gradient">before production</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join enterprises that ship GenAI with confidence. Evidence-driven safety, not just alerts.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/zrotrustai-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
            >
              Schedule a Call
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="mailto:info@zrotrustai.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-foreground border border-border rounded-full hover:bg-muted transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
