import { Text } from '@shared/ui/typography';
import type { ProcessStep } from '../model/types';

type StepCardProps = {
  step: ProcessStep;
};

export function StepCard({ step }: StepCardProps) {
  return (
    <article className="card-surface flex flex-col gap-3 p-6">
      <Text variant="h1" tone="accent">
        {step.number}
      </Text>
      <Text variant="strong" tone="primary" as="h3">
        {step.title}
      </Text>
      <Text variant="body-m" tone="muted" as="p">
        {step.description}
      </Text>
    </article>
  );
}
