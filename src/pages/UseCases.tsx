import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { DemoModal } from "@/components/DemoModal";
import { ArrowRight, FileText, Bot, Database, Shield, CheckCircle } from "lucide-react";

const useCases = [
  {
    icon: FileText,
    title: "Regulated RAG over internal documents",
    challenge: "Enterprises need to build RAG systems over sensitive documents—legal contracts, HR records, financial data—without risking disclosure.",
    certifies: [
      "Training corpus scanned for PII/PHI before indexing",
      "RAG retrieval tested for context leakage",
      "Prompt injection resistance validated",
      "Evidence pack for compliance review",
    ],
    outcome: "Ship a RAG application with documented proof that sensitive data won't leak through retrieval or generation.",
  },
  {
    icon: Bot,
    title: "Agent/tool workflows with permissions",
    challenge: "AI agents with access to tools, APIs, and internal systems create complex permission boundaries that are hard to secure.",
    certifies: [
      "Tool invocation patterns tested for abuse",
      "Permission boundary validation",
      "Data exfiltration resistance",
      "Audit trail for all agent actions",
    ],
    outcome: "Deploy agents that respect permission boundaries with evidence that sensitive operations are protected.",
  },
  {
    icon: Database,
    title: "Fine-tuning on proprietary datasets",
    challenge: "Fine-tuning models on company data risks memorization of sensitive information that can be extracted later.",
    certifies: [
      "Training data scanned for sensitive content",
      "Memorization canary tests",
      "Model output probing for data leakage",
      "Before/after evidence comparison",
    ],
    outcome: "Fine-tune with confidence that proprietary data won't be recoverable from model outputs.",
  },
  {
    icon: Shield,
    title: "Enterprise AI procurement readiness",
    challenge: "Security teams need to assess and document AI system safety before procurement or deployment approval.",
    certifies: [
      "Standardized security assessment",
      "Risk quantification and scoring",
      "Policy compliance validation",
      "Vendor-agnostic evaluation",
    ],
    outcome: "Accelerate procurement with consistent, documented security assessments for any AI system.",
  },
];

const UseCases = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <Layout>
        {/* Hero */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Use Cases
              </h1>
              <p className="text-lg text-muted-foreground">
                How enterprises use ZROTrust.AI to ship GenAI safely in regulated environments.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-8">
              {useCases.map((useCase, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/30 transition-colors"
                >
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <useCase.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl lg:text-2xl font-bold mb-2">{useCase.title}</h2>
                        <p className="text-muted-foreground">{useCase.challenge}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-semibold text-primary mb-3">What ZROTrust certifies:</h3>
                        <ul className="space-y-2">
                          {useCase.certifies.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="md:border-l md:border-border md:pl-6">
                        <h3 className="text-sm font-semibold text-primary mb-3">Outcome:</h3>
                        <p className="text-muted-foreground">{useCase.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Have a different use case?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We work with enterprises across industries. Let's discuss your specific requirements.
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

export default UseCases;
