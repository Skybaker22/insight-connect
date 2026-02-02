import { Database, Bot, ArrowRight, Check } from "lucide-react";

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Our Solution
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            A <span className="text-gradient">Privacy Evidence Layer</span>
            <br />for GenAI
          </h2>
          <p className="text-lg text-muted-foreground">
            Risk, evidence, and release readiness for sensitive data usage in regulated industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Card */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Database className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Safe-to-Train / Index
            </h3>
            <p className="text-muted-foreground mb-6">
              Certify your data before it enters your models
            </p>
            <ul className="space-y-3">
              {[
                "Scan training data for PII, PHI, secrets",
                "Quantify memorization risk before fine-tuning",
                "Validate RAG corpus integrity",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Card */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Bot className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Safe-to-Use
            </h3>
            <p className="text-muted-foreground mb-6">
              Certify system behavior after deployment
            </p>
            <ul className="space-y-3">
              {[
                "Probe for prompt injection vulnerabilities",
                "Test for context leakage and data exfiltration",
                "Continuous regression testing on changes",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
