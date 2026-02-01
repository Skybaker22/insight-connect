import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { DemoModal } from "@/components/DemoModal";
import { 
  ArrowRight, 
  Database, 
  Search, 
  Settings, 
  Bot, 
  FileText,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  XCircle
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Database,
    title: "Connect corpora + data pipelines",
    description: "Integrate your training data sources, RAG stores, and data pipelines. ZROTrust connects to your existing infrastructure.",
  },
  {
    number: "02",
    icon: Search,
    title: "Scan + quantify risk",
    description: "Run LLM-specific test suites: PII/PHI detection, secrets scanning, memorization canaries, and more.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Apply policy actions",
    description: "Set thresholds for PASS/WARN/BLOCK. Configure automated gates and containment actions.",
  },
  {
    number: "04",
    icon: Bot,
    title: "Probe deployed behavior",
    description: "Test live systems for prompt injection, context leakage, and data exfiltration vulnerabilities.",
  },
  {
    number: "05",
    icon: FileText,
    title: "Generate evidence",
    description: "Produce reproducible, redacted evidence packs for security reviews and compliance documentation.",
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Continuous regression",
    description: "Automatically re-run tests on model, prompt, or corpus changes. Catch regressions before production.",
  },
];

const HowItWorks = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <Layout>
        {/* Hero */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How <span className="text-gradient">ZROTrust.AI</span> works
              </h1>
              <p className="text-lg text-muted-foreground">
                A six-step pipeline from data ingestion to continuous monitoring. 
                Evidence-driven safety for every stage of your GenAI lifecycle.
              </p>
            </div>
          </div>
        </section>

        {/* Pipeline Steps */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="relative flex gap-6 group"
                  >
                    {/* Connector Line */}
                    {i < steps.length - 1 && (
                      <div className="absolute left-[27px] top-16 w-0.5 h-full bg-border group-hover:bg-primary/30 transition-colors" />
                    )}
                    
                    {/* Step Number */}
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-card border border-border/50 flex items-center justify-center text-primary font-bold group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-card rounded-xl border border-border/50 p-6 group-hover:border-primary/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CI/CD Gate Callout */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">CI/CD Release Gating</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Integrate ZROTrust into your deployment pipeline. Automatically gate releases based on risk score thresholds.
                </p>
              </div>
              
              {/* Gate Visualization */}
              <div className="bg-card rounded-xl border border-border/50 p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-sm font-medium text-muted-foreground">Pipeline: model-v2.4.1</div>
                  <div className="text-sm text-muted-foreground">Commit: a3f8d2e</div>
                </div>
                
                {/* Pipeline Flow */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  <div className="flex items-center gap-3 px-4 py-3 bg-background rounded-lg border border-border">
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-sm font-medium">Build</span>
                  </div>
                  <ArrowRight className="hidden md:block h-5 w-5 text-muted-foreground" />
                  <div className="flex items-center gap-3 px-4 py-3 bg-background rounded-lg border border-border">
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-sm font-medium">Test</span>
                  </div>
                  <ArrowRight className="hidden md:block h-5 w-5 text-muted-foreground" />
                  <div className="flex items-center gap-3 px-4 py-3 bg-primary/10 rounded-lg border border-primary/30">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary">ZROTrust Scan</span>
                  </div>
                  <ArrowRight className="hidden md:block h-5 w-5 text-muted-foreground" />
                  <div className="flex items-center gap-3 px-4 py-3 bg-background rounded-lg border border-border">
                    <div className="w-3 h-3 rounded-full bg-muted" />
                    <span className="text-sm font-medium text-muted-foreground">Deploy</span>
                  </div>
                </div>
                
                {/* Outcomes */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4 text-center">Possible outcomes:</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <div>
                        <p className="font-semibold text-green-400">PASS</p>
                        <p className="text-xs text-muted-foreground">Deploy proceeds</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                      <AlertTriangle className="h-5 w-5 text-yellow-400" />
                      <div>
                        <p className="font-semibold text-yellow-400">WARN</p>
                        <p className="text-xs text-muted-foreground">Review required</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                      <XCircle className="h-5 w-5 text-destructive" />
                      <div>
                        <p className="font-semibold text-destructive">BLOCK</p>
                        <p className="text-xs text-muted-foreground">Deploy halted</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              See it in action
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get a personalized walkthrough of ZROTrust.AI for your use case.
            </p>
            <Button size="lg" onClick={() => setIsDemoOpen(true)}>
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </Layout>
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
};

export default HowItWorks;
