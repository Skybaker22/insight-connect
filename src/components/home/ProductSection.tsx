import { 
  CheckCircle, 
  Shield, 
  ChevronRight,
  ClipboardCheck
} from "lucide-react";

export function ProductSection() {
  return (
    <>
      {/* Workflow Section */}
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

      {/* Audit Logs Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <ClipboardCheck className="h-4 w-4" />
                Compliance
              </div>
              <h2 className="text-3xl font-bold mb-4">Audit Logs & Reports</h2>
              <p className="text-muted-foreground mb-6">
                Complete audit trail of every scan, decision, and action. Generate reports for security reviews and compliance requirements.
              </p>
              <ul className="space-y-3">
                {["Who did what, when—full traceability", "Configurable retention (30/90/180 days)", "Export for external auditors", "Integration with SIEM tools"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Audit Log Mockup */}
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { time: "2m ago", action: "Scan completed", user: "CI Pipeline", status: "success" },
                  { time: "15m ago", action: "Report generated", user: "System", status: "success" },
                  { time: "1h ago", action: "Policy updated", user: "jane@company.com", status: "info" },
                  { time: "3h ago", action: "Finding resolved", user: "mike@company.com", status: "success" },
                ].map((log, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-background rounded border border-border">
                    <div className={`w-2 h-2 rounded-full ${log.status === 'success' ? 'bg-success' : 'bg-primary'}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{log.action}</p>
                      <p className="text-xs text-muted-foreground">{log.user}</p>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">{log.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
