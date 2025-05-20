import { HeroSection } from "@/components/ui/hero-section";
import { FeatureSection } from "@/components/ui/feature-section";
import { SupportSection } from "@/components/ui/support-section";
import { CustomerStorySection } from "@/components/ui/customer-story-section";
import { CallToAction } from "@/components/ui/call-to-action";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SupportSection/>
        <CustomerStorySection/>
        <CallToAction/>
      </article>
    </>
  );
}
