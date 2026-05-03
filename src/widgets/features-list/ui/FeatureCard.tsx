import { Text } from '@shared/ui/typography';
import type { NumberedItem } from '@shared/types';

type FeatureCardProps = {
  item: NumberedItem;
  number: string;
};

export function FeatureCard({ item, number }: FeatureCardProps) {
  return (
    <article className="card-surface flex flex-col gap-4 p-8">
      <div className="flex h-[28px] items-center justify-between gap-4">
        <Text variant="strong-xl" tone="primary" as="h3">
          {item.title}
        </Text>
        <Text variant="h3" tone="accent" className="leading-[28px] opacity-70">
          {number}
        </Text>
      </div>
      <span className="block h-px w-full bg-stroke" aria-hidden="true" />
      <Text variant="body-m" tone="muted" as="p">
        {item.description}
      </Text>
    </article>
  );
}
