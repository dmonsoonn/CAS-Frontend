import { Text } from '@shared/ui/typography';
import type { NumberedItem } from '@shared/types';

type StepCardProps = {
  item: NumberedItem;
  number: string;
};

export function StepCard({ item, number }: StepCardProps) {
  return (
    <article className="card-surface flex flex-col gap-3 p-6">
      <Text variant="h1" tone="accent">
        {number}
      </Text>
      <Text variant="strong-tight" tone="primary" as="h3">
        {item.title}
      </Text>
      <Text variant="body-tight" tone="muted" as="p">
        {item.description}
      </Text>
    </article>
  );
}
