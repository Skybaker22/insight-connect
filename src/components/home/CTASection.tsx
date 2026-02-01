import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onOpenDemo: () => void;
}

export function CTASection({ onOpenDemo }: CTASectionProps) {
  return (
    <section className="py-16 lg:py-24">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={onOpenDemo}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 h-12"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-semibold text-base px-8 h-12"
              >
                <Link to="/product">View Product</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
