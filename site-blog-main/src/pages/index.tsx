import { HeroSection } from "@/components/ui/hero-section";
import { FeatureSection } from "@/components/ui/feature-section";
import { SupportSection } from "@/components/ui/support-section";
import { CustomerStorySection } from "@/components/ui/customer-story-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SupportSection/>
        <CustomerStorySection/>
      </article>
    </>
  );
}
