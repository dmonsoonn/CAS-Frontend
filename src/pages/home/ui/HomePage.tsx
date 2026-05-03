import { Header } from '@widgets/header';
import { Hero } from '@widgets/hero';
import { FeaturesSection } from '@widgets/features-list';
import { ProcessSection } from '@widgets/process';
import { StartInterviewSection } from '@widgets/start-interview';
import { Footer } from '@widgets/footer';

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-base">
      <div className="flex flex-1 flex-col gap-16 px-4 pb-16 pt-6 sm:px-6">
        <Header />

        <main className="flex flex-col gap-16">
          <Hero />
          <FeaturesSection />
          <ProcessSection />
          <StartInterviewSection />
        </main>
      </div>

      <Footer />
    </div>
  );
}
