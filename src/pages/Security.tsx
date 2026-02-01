import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { DemoModal } from "@/components/DemoModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Shield, Eye, Lock, Clock, Server, FileX, CheckCircle } from "lucide-react";

const securityFeatures = [
  {
    icon: Eye,
    title: "Redaction by default",
    description: "Sensitive data is redacted before storage. Evidence packs contain findings and risk scores, not raw prompts or PII.",
  },
  {
    icon: Lock,
    title: "Role-based access control",
    description: "Fine-grained permissions for teams. Control who can view findings, trigger scans, or modify policies.",
  },
  {
    icon: Shield,
    title: "Comprehensive audit logs",
    description: "Complete traceability: who did what, when. Every action is logged and timestamped.",
  },
  {
    icon: Clock,
    title: "Configurable retention",
    description: "Choose 30, 90, or 180-day retention policies. Align with your compliance requirements.",
  },
  {
    icon: FileX,
    title: '"Never store raw prompts" option',
    description: "For maximum data minimization, enable zero-storage mode. Analysis happens in-memory only.",
  },
  {
    icon: Server,
    title: "Deployment flexibility",
    description: "SaaS available now. Private deployment and on-premises options coming soon for regulated industries.",
  },
];

const faqItems = [
  {
    question: "Does ZROTrust.AI store my prompts or training data?",
    answer: "By default, we only store redacted findings and risk scores—never raw prompts or training data. You can enable 'zero-storage mode' for in-memory-only analysis where nothing is persisted.",
  },
  {
    question: "What compliance frameworks do you support?",
    answer: "Our evidence packs are designed to support SOC 2, HIPAA, GDPR, and industry-specific requirements. We provide audit-ready documentation that maps to common compliance controls.",
  },
  {
    question: "Can I run ZROTrust in my own infrastructure?",
    answer: "Currently we offer a SaaS deployment. Private deployment and on-premises options are on our roadmap for enterprises with strict data residency requirements. Contact us to discuss your needs.",
  },
  {
    question: "How do you handle API keys and credentials?",
    answer: "All credentials are encrypted at rest and in transit. We use short-lived tokens where possible and support integration with your existing secrets management (Vault, AWS Secrets Manager, etc.).",
  },
  {
    question: "What happens if ZROTrust detects a vulnerability?",
    answer: "Findings are prioritized by severity and routed through our response workflow. You can configure automated containment actions (safe mode, deployment gates) and follow structured remediation playbooks.",
  },
  {
    question: "Do you have SOC 2 certification?",
    answer: "We are currently pursuing SOC 2 Type II certification. Contact us for our current security documentation and third-party assessment reports.",
  },
];

const Security = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <Layout>
        {/* Hero */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                Enterprise Security
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Security & Trust
              </h1>
              <p className="text-lg text-muted-foreground">
                We help you secure your AI systems. Here's how we secure ours.
              </p>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Operational Controls</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {securityFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Our Commitments</h2>
              <div className="space-y-4">
                {[
                  "We never use your data to train our own models",
                  "We never share your data with third parties",
                  "We support data residency requirements",
                  "We provide transparent security documentation",
                  "We conduct regular third-party security assessments",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border/50"
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Security FAQ</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-card rounded-lg border border-border/50 px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Questions about security?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Our team is happy to discuss your security requirements and share detailed documentation.
            </p>
            <Button size="lg" onClick={() => setIsDemoOpen(true)}>
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </Layout>
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
};

export default Security;
