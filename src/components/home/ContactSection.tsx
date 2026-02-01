import { Mail, Calendar } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Have questions? Want to discuss your use case? We'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="mailto:info@zrotrustai.com"
              className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">Email us</h4>
                <p className="text-muted-foreground">info@zrotrustai.com</p>
              </div>
            </a>
            
            <a
              href="mailto:info@zrotrustai.com?subject=Schedule%20a%20Demo"
              className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">Schedule a call</h4>
                <p className="text-muted-foreground">Book a 30-minute demo</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
