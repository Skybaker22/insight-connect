import { X } from "lucide-react";

const failures = [
  "No LLM-specific test suites (RAG, canaries, injection)",
  "No reproducible evidence packs for security reviews",
  "No post-incident workflow (triage → contain → remediate → verify)",
  "No CI/CD release gating for model changes",
];

export function WhyFailSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Why existing tools fail
          </h2>
          <div className="space-y-4">
            {failures.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-destructive/20"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="h-4 w-4 text-destructive" />
                </div>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
