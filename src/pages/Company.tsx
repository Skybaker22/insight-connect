import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { DemoModal } from "@/components/DemoModal";
import { ArrowRight, Target, Shield, Zap, User } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trust",
    description: "We build products that enterprises can trust with their most sensitive data. Security is foundational, not an afterthought.",
  },
  {
    icon: Target,
    title: "Rigor",
    description: "Evidence-driven decisions. Reproducible results. We don't make claims we can't prove.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "AI moves fast. Security teams need tools that keep pace without slowing down innovation.",
  },
];

const founders = [
  {
    name: "Timo",
    role: "CEO",
    bio: "Experienced enterprise security leader with background in building security products for Fortune 500 companies. Previously led security engineering at major cloud providers.",
  },
  {
    name: "Vishnu",
    role: "CTO",
    bio: "ML infrastructure expert with deep experience in building production AI systems. Previously built ML platforms serving billions of predictions at scale.",
  },
];

const Company = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <Layout>
        {/* Hero */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About ZROTrust.AI
              </h1>
              <p className="text-xl text-muted-foreground">
                Making GenAI safety <span className="text-primary">measurable</span> and <span className="text-primary">provable</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                AI systems are becoming critical infrastructure. Enterprises need more than alerts and red flags—they need 
                <strong className="text-foreground"> evidence</strong>. We're building the privacy evidence layer that 
                lets organizations ship GenAI with confidence, proving safety at every stage of the lifecycle.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {values.map((value, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-xl p-6 border border-border/50 text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Leadership</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {founders.map((founder, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-xl p-6 border border-border/50"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{founder.name}</h3>
                        <p className="text-sm text-primary">{founder.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{founder.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Backed By */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Backed By</h2>
              <p className="text-muted-foreground mb-8">
                We're backed by leading investors and advisors in enterprise security and AI.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="px-6 py-4 bg-card rounded-lg border border-border/50 text-muted-foreground">
                  Investor logos coming soon
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join us
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We're building the future of AI security. Interested in joining the team or partnering with us?
            </p>
            <Button size="lg" onClick={() => setIsDemoOpen(true)}>
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </Layout>
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
};

export default Company;
