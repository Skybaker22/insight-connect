import { Mail, Calendar } from "lucide-react";

export function CTASection() {
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
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@zrotrustai.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto"
              >
                <Mail className="h-5 w-5" />
                info@zrotrustai.com
              </a>
              <a
                href="https://calendly.com/zrotrustai-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto"
              >
                <Calendar className="h-5 w-5" />
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}