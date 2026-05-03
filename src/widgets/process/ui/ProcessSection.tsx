import { Container } from '@shared/ui/container';
import { SectionHeading } from '@shared/ui/section-heading';
import { steps } from '../model/steps.data';
import { StepCard } from './StepCard';
import { formatNumber } from '@shared/lib';

export function ProcessSection() {
  return (
    <Container as="section" aria-labelledby="process-heading" className="flex flex-col gap-8">
      <SectionHeading eyebrow="Процесс" title="Как это работает" id="process-heading" />

      <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title}>
            <StepCard item={step} number={formatNumber(index)} />
          </li>
        ))}
      </ol>
    </Container>
  );
}
