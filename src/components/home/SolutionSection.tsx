import { Database, Bot, ArrowRight } from "lucide-react";

export function SolutionSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A <span className="text-gradient">Privacy Evidence Layer</span> for GenAI.
          </h2>
          <p className="text-lg text-muted-foreground">
            Risk, evidence, and release readiness for sensitive data usage in regulated industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-all" />
            <div className="relative bg-card rounded-xl p-8 border border-border/50 h-full">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Database className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Certify Safe-to-Train /<br />Safe-to-Index data
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-1" />
                  <span>Scan training data for PII, PHI, secrets</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-1" />
                  <span>Quantify memorization risk before fine-tuning</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-1" />
                  <span>Validate RAG corpus integrity</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-all" />
            <div className="relative bg-card rounded-xl p-8 border border-border/50 h-full">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Bot className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Certify Safe-to-Use<br />system behavior
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-1" />
                  <span>Probe for prompt injection vulnerabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-1" />
                  <span>Test for context leakage and data exfiltration</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-1" />
                  <span>Continuous regression testing on changes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
