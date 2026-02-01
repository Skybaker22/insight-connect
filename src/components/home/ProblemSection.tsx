import { Database, Bot } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI systems are becoming <span className="text-gradient">critical infrastructure.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Enterprises need more than alerts and red flags—they need evidence. We're building the privacy evidence layer that lets organizations ship GenAI with confidence, proving safety at every stage of the lifecycle.
          </p>
          <p className="text-muted-foreground">
            Training data refreshes, RAG corpora change, prompts and tools evolve—and behavior shifts.
            Security teams need answers to two fundamental questions.
          </p>
        </div>
        
        {/* Two Big Questions */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div className="relative bg-card rounded-xl p-6 lg:p-8 border border-border/50 hover:border-primary/30 transition-colors group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-t-xl" />
            <Database className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              "Is this data safe to train / index on?"
            </h3>
            <p className="text-muted-foreground">
              Before data enters your models, you need evidence that it won't leak PII, secrets, or proprietary information.
            </p>
          </div>
          
          <div className="relative bg-card rounded-xl p-6 lg:p-8 border border-border/50 hover:border-primary/30 transition-colors group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-t-xl" />
            <Bot className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              "Is the deployed system safe after release?"
            </h3>
            <p className="text-muted-foreground">
              After deployment, you need continuous evidence that your system behavior hasn't regressed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
