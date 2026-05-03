import { SectionHeading } from '@shared/ui/section-heading';
import { features } from '../model/features.data';
import { FeatureCard } from './FeatureCard';
import { formatNumber } from '@shared/lib';

export function FeaturesSection() {
  return (
    <section
      aria-labelledby="features-heading"
      className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-8"
    >
      <SectionHeading eyebrow="Преимущества" title="Почему Кортекс?" id="features-heading" />

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {features.map((feature, index) => (
          <li key={feature.title}>
            <FeatureCard item={feature} number={formatNumber(index)} />
          </li>
        ))}
      </ul>
    </section>
  );
}
