import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { WhyFailSection } from "@/components/home/WhyFailSection";
import { WhyNowSection } from "@/components/home/WhyNowSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { CTASection } from "@/components/home/CTASection";
import { DemoModal } from "@/components/DemoModal";

const Index = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <Layout>
        <HeroSection onOpenDemo={() => setIsDemoOpen(true)} />
        <ProblemSection />
        <WhyFailSection />
        <WhyNowSection />
        <SolutionSection />
        <ApproachSection />
        <CTASection onOpenDemo={() => setIsDemoOpen(true)} />
      </Layout>
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
};

export default Index;
