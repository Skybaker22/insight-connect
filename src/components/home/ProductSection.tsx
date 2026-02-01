import { 
  Shield, 
  ChevronRight
} from "lucide-react";

export function ProductSection() {
  return (
    <section id="product" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Shield className="h-4 w-4" />
            Incident Response
          </div>
          <h2 className="text-3xl font-bold mb-4">Leakage Response Workflow</h2>
          <p className="text-muted-foreground">
            When issues are detected, a structured workflow guides your team from triage to verified remediation.
          </p>
        </div>
        
        {/* Workflow Stepper */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {[
              { step: 1, title: "Triage", desc: "Prioritize findings by severity" },
              { step: 2, title: "Contain", desc: "Apply safe mode or gates" },
              { step: 3, title: "Remediate", desc: "Follow playbooks to fix" },
              { step: 4, title: "Verify", desc: "Re-run tests to confirm" },
              { step: 5, title: "Sign-off", desc: "Document and approve" },
            ].map((item, i) => (
              <div key={i} className="flex-1 relative">
                <div className="bg-card rounded-lg p-4 border border-border/50 h-full">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {i < 4 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 h-6 w-6 text-muted-foreground z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
