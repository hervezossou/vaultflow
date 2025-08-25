import { LogoSection } from "./components/sections/logo-section";
import { FeaturesSection } from "./components/sections/features-section";

export default function App() {
  return (
    <>
      <main className="bg-dark-purple min-h-screen flex flex-col items-center gap-5 px-5 lg:px-10">
        <LogoSection />
        <FeaturesSection />
      </main>
    </>
  );
}
