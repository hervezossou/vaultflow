import { HeroSection } from "./components/sections/hero-section";
import { LogoSection } from "./components/sections/logo-section";
import { FeaturesSection } from "./components/sections/features-section";
import { CallToAction } from "./components/sections/call-to-action";
import { Footer } from "./components/layout/footer";

export default function App() {
  return (
    <>
      <main className="bg-dark-purple min-h-screen flex flex-col items-center gap-5">
        <HeroSection />
        <LogoSection />
        <FeaturesSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
