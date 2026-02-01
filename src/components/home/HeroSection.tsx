import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Activity, FileCheck, Truck } from "lucide-react";

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
              <Shield className="h-4 w-4" />
              Privacy Evidence Layer
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-up animation-delay-100">
              Privacy Evidence<br />
              <span className="text-gradient">for GenAI.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
              ZROTrust.AI is a go/no-go risk scoring and response platform that certifies data and system behavior—so enterprises ship models without leaking sensitive information.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm font-semibold text-primary mb-8 animate-fade-up animation-delay-300">
              <span className="flex items-center gap-2">
                <Activity className="h-4 w-4" /> Detect
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4" /> Respond
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="flex items-center gap-2">
                <FileCheck className="h-4 w-4" /> Prove
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="flex items-center gap-2">
                <Truck className="h-4 w-4" /> Ship
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up animation-delay-400">
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
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>
          
          {/* Right Content - Product Mockup */}
          <div className="relative animate-fade-up animation-delay-500">
            <div className="relative bg-gradient-card rounded-xl border border-border/50 p-6 lg:p-8 glow-teal">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <div className="w-3 h-3 rounded-full bg-success" />
                </div>
                <span className="text-xs text-muted-foreground">ZROTrust Dashboard</span>
              </div>
              
              {/* Score Card */}
              <div className="bg-background/50 rounded-lg p-4 mb-4 border border-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Risk Score</p>
                    <p className="text-3xl font-bold text-primary">23</p>
                  </div>
                  <div className="px-3 py-1.5 rounded bg-success/20 text-success text-sm font-semibold">
                    PASS
                  </div>
                </div>
              </div>
              
              {/* Evidence Card */}
              <div className="bg-background/50 rounded-lg p-4 mb-4 border border-border/50">
                <p className="text-xs text-muted-foreground mb-2">Evidence Pack</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/80">PII Scan</span>
                    <span className="text-success">✓ Clean</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/80">RAG Context</span>
                    <span className="text-success">✓ No leaks</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/80">Secrets Scan</span>
                    <span className="text-success">✓ Secure</span>
                  </div>
                </div>
              </div>
              
              {/* Workflow Steps */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="text-primary font-medium">Scan</span>
                <span className="text-primary/60">→</span>
                <span className="text-primary font-medium">Analyze</span>
                <span className="text-primary/60">→</span>
                <span className="text-primary font-medium">Evidence</span>
                <span className="text-primary/60">→</span>
                <span className="text-primary font-medium">Gate</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
