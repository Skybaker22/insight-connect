import { TrendingUp, Scale, Repeat, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    text: "RAG + agents ship fast; leakage risk grows faster",
  },
  {
    icon: Scale,
    text: "Standards and regulation raise audit expectations",
  },
  {
    icon: Repeat,
    text: "Organizations need repeatable release gates + evidence artifacts",
  },
  {
    icon: ArrowRight,
    text: "Shift from ad-hoc redaction to continuous testing + response workflows",
  },
];

export function WhyNowSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Security teams need an <span className="text-gradient">operating model</span> for GenAI.
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            The pace of AI deployment has outstripped security's ability to keep up. It's time for systematic, evidence-driven safety.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border/50"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground/90">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
