import { Search, Shield, FileCheck } from "lucide-react";

const approaches = [
  {
    icon: Search,
    title: "Detect",
    description: "LLM-specific test suites",
    items: [
      "PII/PHI detection",
      "RAG quoting & context dumps",
      "Canary memorization",
      "Secrets exposure",
      "Prompt injection",
    ],
  },
  {
    icon: Shield,
    title: "Respond",
    description: "Incident workflows",
    items: [
      "Triage & prioritization",
      "Containment actions",
      "Remediation playbooks",
      "Verify by re-running tests",
    ],
  },
  {
    icon: FileCheck,
    title: "Prove",
    description: "Evidence artifacts",
    items: [
      "Risk score (0–100)",
      "Evidence pack (redacted)",
      "PASS / WARN / BLOCK",
      "Audit logs & reports",
    ],
  },
];

export function ApproachSection() {
  return (
    <section id="approach" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Three-layer approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete framework for GenAI privacy and security.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {approaches.map((approach, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-8 border border-border hover:border-accent/30 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <approach.icon className="h-6 w-6 text-accent" />
              </div>
              
              <h3 className="text-xl font-bold text-accent mb-1">{approach.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{approach.description}</p>
              
              <ul className="space-y-3">
                {approach.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
