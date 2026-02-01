import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { DemoModal } from "@/components/DemoModal";
import { CheckCircle, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    description: "For pilot teams exploring GenAI safety",
    price: "Contact us",
    features: [
      "Single model/application",
      "Core test suites (PII, secrets, injection)",
      "Basic evidence packs",
      "Email support",
      "30-day data retention",
    ],
    cta: "Start Pilot",
    highlighted: false,
  },
  {
    name: "Team",
    description: "For teams with multiple AI systems",
    price: "Contact us",
    features: [
      "Multiple models/applications",
      "Full test suite library",
      "Custom test configurations",
      "CI/CD integration",
      "Priority support",
      "90-day data retention",
      "Role-based access control",
    ],
    cta: "Contact Sales",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced requirements",
    price: "Custom",
    features: [
      "Unlimited models/applications",
      "Custom test suite development",
      "Advanced policy engine",
      "SSO integration",
      "Dedicated support",
      "180-day+ data retention",
      "Custom integrations",
      "On-call SLA",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <Layout>
        {/* Hero */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pricing
              </h1>
              <p className="text-lg text-muted-foreground">
                Simple, transparent pricing that scales with your needs. Start with a pilot and expand as you grow.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`relative bg-card rounded-xl border ${
                    tier.highlighted
                      ? "border-primary/50 ring-1 ring-primary/20"
                      : "border-border/50"
                  } p-6 lg:p-8 flex flex-col`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-1">{tier.name}</h2>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{tier.price}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    onClick={() => setIsDemoOpen(true)}
                    variant={tier.highlighted ? "default" : "outline"}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </div>
              ))}
            </div>
            
            {/* Pilot Note */}
            <div className="max-w-2xl mx-auto mt-12 text-center">
              <div className="bg-card rounded-lg border border-primary/20 p-6">
                <p className="text-primary font-medium mb-2">Pilot program available</p>
                <p className="text-sm text-muted-foreground">
                  Not sure which plan is right for you? Start with a 30-day pilot to evaluate ZROTrust.AI with your specific use case.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Talk to our team about your requirements and get a customized proposal.
            </p>
            <Button size="lg" onClick={() => setIsDemoOpen(true)}>
              Contact Sales
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </Layout>
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
};

export default Pricing;
