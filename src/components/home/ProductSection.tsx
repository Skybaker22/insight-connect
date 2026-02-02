import { 
  Shield, 
  AlertTriangle,
  Lock,
  Wrench,
  CheckCircle,
  FileSignature
} from "lucide-react";

const steps = [
  { icon: AlertTriangle, title: "Triage", desc: "Prioritize by severity" },
  { icon: Lock, title: "Contain", desc: "Apply safe mode or gates" },
  { icon: Wrench, title: "Remediate", desc: "Follow playbooks to fix" },
  { icon: CheckCircle, title: "Verify", desc: "Re-run tests to confirm" },
  { icon: FileSignature, title: "Sign-off", desc: "Document and approve" },
];

export function ProductSection() {
  return (
    <section id="product" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Incident Response
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Leakage Response Workflow
          </h2>
          <p className="text-lg text-muted-foreground">
            When issues are detected, a structured workflow guides your team from triage to verified remediation.
          </p>
        </div>
        
        {/* Workflow Stepper */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border" />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {steps.map((item, i) => (
                <div key={i} className="relative text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-card border border-border mb-4 mx-auto hover:border-accent/30 transition-all hover:shadow-lg">
                    <item.icon className="h-8 w-8 text-accent" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
