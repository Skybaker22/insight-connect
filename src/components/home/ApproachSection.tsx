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
      "Containment actions (safe mode, gates)",
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
      "PASS / WARN / BLOCK decision",
      "Audit logs & reports",
    ],
  },
];

export function ApproachSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
              className="relative bg-card rounded-xl p-6 lg:p-8 border border-border/50 hover:border-primary/30 transition-all group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <approach.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-1 text-primary">{approach.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{approach.description}</p>
              
              <ul className="space-y-2">
                {approach.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
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
