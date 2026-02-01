import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Activity, FileCheck, Truck } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

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
                variant="outline"
                size="lg"
                className="font-semibold text-base px-8 h-12"
                onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Product
              </Button>
            </div>
          </div>
          
          {/* Right Content - Dashboard Screenshot */}
          <div className="relative animate-fade-up animation-delay-500" style={{ perspective: '1000px' }}>
            <div 
              className="relative rounded-xl border border-border/50 overflow-hidden shadow-2xl shadow-primary/20"
              style={{ 
                transform: 'rotateY(-5deg) rotateX(2deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Screen bezel effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-10" />
              <img 
                src={dashboardMockup} 
                alt="ZROTrust.AI Dashboard - Overview of AI security posture with risk scores, scan results, and response workflows"
                className="w-full h-auto"
                loading="eager"
                decoding="async"
              />
            </div>
            
            {/* Floating glow beneath */}
            <div 
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/30 blur-2xl rounded-full"
              style={{ transform: 'translateX(-50%) rotateX(80deg)' }}
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
