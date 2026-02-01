import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { WhyNowSection } from "@/components/home/WhyNowSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { ProductSection } from "@/components/home/ProductSection";
import { ContactSection } from "@/components/home/ContactSection";
import { CTASection } from "@/components/home/CTASection";
import { DemoModal } from "@/components/DemoModal";

const Index = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <Layout>
        <HeroSection onOpenDemo={() => setIsDemoOpen(true)} />
        <ProblemSection />
        <WhyNowSection />
        <SolutionSection />
        <ApproachSection />
        <ProductSection />
        <ContactSection />
        <CTASection onOpenDemo={() => setIsDemoOpen(true)} />
      </Layout>
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
};

export default Index;
