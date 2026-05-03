import { Container } from '@shared/ui/container';
import { SectionHeading } from '@shared/ui/section-heading';
import { features } from '../model/features.data';
import { FeatureCard } from './FeatureCard';
import { formatNumber } from '@shared/lib';

export function FeaturesSection() {
  return (
    <Container as="section" aria-labelledby="features-heading" className="flex flex-col gap-8">
      <SectionHeading eyebrow="Преимущества" title="Почему Кортекс?" id="features-heading" />

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {features.map((feature, index) => (
          <li key={feature.title}>
            <FeatureCard item={feature} number={formatNumber(index)} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
