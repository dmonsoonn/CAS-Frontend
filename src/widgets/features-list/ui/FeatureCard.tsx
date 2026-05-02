import { Text } from '@shared/ui/typography';
import type { ProductFeature } from '../model/types';

type FeatureCardProps = {
  feature: ProductFeature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className="card-surface flex flex-col gap-4 p-8">
      <div className="flex items-start justify-between gap-4">
        <Text variant="strong" tone="primary" as="h3">
          {feature.title}
        </Text>
        <Text variant="h3" tone="accent" className="opacity-70">
          {feature.number}
        </Text>
      </div>
      <span className="block h-px w-full bg-stroke" aria-hidden="true" />
      <Text variant="body-m" tone="muted" as="p">
        {feature.description}
      </Text>
    </article>
  );
}
