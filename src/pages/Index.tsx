import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { WhyNowSection } from "@/components/home/WhyNowSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { ProductSection } from "@/components/home/ProductSection";
import { SecurityGlobe } from "@/components/home/SecurityGlobe";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <WhyNowSection />
      <SolutionSection />
      <ApproachSection />
      <ProductSection />
      <SecurityGlobe />
      <CTASection />
    </Layout>
  );
};

export default Index;
