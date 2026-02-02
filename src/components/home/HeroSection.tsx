import { Shield, Activity, FileCheck, Truck } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Announcement Banner */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
            <Shield className="h-4 w-4" />
            <span>Privacy Evidence Layer for GenAI</span>
          </div>
        </div>
        
        {/* Hero Content - Centered */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-up animation-delay-100">
            The platform for
            <br />
            <span className="text-gradient">secure, certified AI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Go/no-go risk scoring and response platform that certifies data and system behavior—so enterprises ship models without leaking sensitive information.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-up animation-delay-300">
            <a
              href="https://calendly.com/zrotrustai-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
            >
              Get Started
            </a>
            <a
              href="mailto:info@zrotrustai.com"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-foreground border border-border rounded-full hover:bg-muted transition-colors"
            >
              Contact Us
            </a>
          </div>
          
          {/* Feature Pills */}
          <div className="flex items-center justify-center gap-3 flex-wrap animate-fade-up animation-delay-400">
            {[
              { icon: Activity, label: "Detect" },
              { icon: Shield, label: "Respond" },
              { icon: FileCheck, label: "Prove" },
              { icon: Truck, label: "Ship" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-muted-foreground"
              >
                <item.icon className="h-4 w-4 text-accent" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
        
        {/* Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto animate-fade-up animation-delay-500">
          <div className="relative rounded-2xl border border-border overflow-hidden shadow-xl bg-card">
            {/* Browser Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-background rounded-md text-xs text-muted-foreground border border-border">
                  dashboard.zrotrust.ai
                </div>
              </div>
            </div>
            <img 
              src={dashboardMockup} 
              alt="ZROTrust.AI Dashboard - Overview of AI security posture with risk scores, scan results, and response workflows"
              className="w-full h-auto"
              loading="eager"
              decoding="async"
            />
          </div>
          
          {/* Decorative shadows */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-foreground/5 blur-2xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
