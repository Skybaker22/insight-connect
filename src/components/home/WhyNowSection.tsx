import { TrendingUp, Scale, Repeat, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "Speed vs Risk",
    text: "RAG + agents ship fast; leakage risk grows faster",
  },
  {
    icon: Scale,
    title: "Rising Standards",
    text: "Standards and regulation raise audit expectations",
  },
  {
    icon: Repeat,
    title: "Repeatable Gates",
    text: "Organizations need repeatable release gates + evidence artifacts",
  },
  {
    icon: ArrowRight,
    title: "Continuous Testing",
    text: "Shift from ad-hoc redaction to continuous testing + response workflows",
  },
];

export function WhyNowSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Why Now
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Security teams need an
              <br />
              <span className="text-gradient">operating model</span> for GenAI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The pace of AI deployment has outstripped security's ability to keep up. It's time for systematic, evidence-driven safety.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border hover:border-accent/30 transition-all hover:shadow-md"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
