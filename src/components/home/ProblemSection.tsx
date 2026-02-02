import { Database, Bot, ArrowRight } from "lucide-react";

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            The Challenge
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            AI systems are becoming
            <br />
            <span className="text-gradient">critical infrastructure</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprises need more than alerts—they need evidence. We're building the privacy evidence layer that lets organizations ship GenAI with confidence.
          </p>
        </div>
        
        {/* Two Big Questions */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all hover:shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Database className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
              "Is this data safe to train / index on?"
            </h3>
            <p className="text-muted-foreground mb-4">
              Before data enters your models, you need evidence that it won't leak PII, secrets, or proprietary information.
            </p>
            <div className="flex items-center gap-2 text-accent font-medium text-sm">
              Learn more
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
          
          <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all hover:shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Bot className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
              "Is the deployed system safe after release?"
            </h3>
            <p className="text-muted-foreground mb-4">
              After deployment, you need continuous evidence that your system behavior hasn't regressed.
            </p>
            <div className="flex items-center gap-2 text-accent font-medium text-sm">
              Learn more
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
