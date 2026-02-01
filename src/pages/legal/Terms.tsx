import { Layout } from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: February 1, 2026</p>
            
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using ZROTrust.AI's services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Description of Service</h2>
                <p>
                  ZROTrust.AI provides a privacy evidence layer for GenAI systems, including risk scoring, 
                  evidence generation, and security testing tools for enterprise AI applications.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. Account Registration</h2>
                <p>
                  To use certain features of our services, you may need to create an account. You are responsible 
                  for maintaining the confidentiality of your account credentials and for all activities that 
                  occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Acceptable Use</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Use our services for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Reverse engineer or attempt to derive source code from our services</li>
                  <li>Use our services to process data you don't have rights to</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our services are owned by ZROTrust.AI and are 
                  protected by intellectual property laws. You may not copy, modify, distribute, or create 
                  derivative works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Data Processing</h2>
                <p>
                  Our services may process data you provide for the purpose of analysis and risk assessment. 
                  We handle all data in accordance with our Privacy Policy and applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Service Availability</h2>
                <p>
                  We strive to provide reliable services but do not guarantee uninterrupted access. We may 
                  modify, suspend, or discontinue services at any time with reasonable notice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, ZROTrust.AI shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages arising from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">9. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless ZROTrust.AI from any claims, damages, or expenses 
                  arising from your use of our services or violation of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">10. Termination</h2>
                <p>
                  We may terminate or suspend your access to our services at any time for violation of these 
                  terms or for any other reason with reasonable notice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">11. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with applicable laws, without 
                  regard to conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We will provide notice of significant 
                  changes by posting the updated terms on our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">13. Contact</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:{" "}
                  <a href="mailto:legal@zrotrust.ai" className="text-primary hover:underline">
                    legal@zrotrust.ai
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
