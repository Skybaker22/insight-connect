import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: February 1, 2026</p>
            
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p>
                  ZROTrust.AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Contact information (name, email, company, role)</li>
                  <li>Usage data and analytics</li>
                  <li>Technical information (IP address, browser type, device information)</li>
                  <li>Information you provide through our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Analyze usage patterns to improve user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. This includes encryption, 
                  access controls, and regular security assessments.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes for which 
                  it was collected, including to satisfy legal, accounting, or reporting requirements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Cookies</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">8. Third-Party Services</h2>
                <p>
                  We may use third-party services for analytics, hosting, and other purposes. These services 
                  have their own privacy policies and we encourage you to review them.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">9. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:{" "}
                  <a href="mailto:privacy@zrotrust.ai" className="text-primary hover:underline">
                    privacy@zrotrust.ai
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

export default Privacy;
