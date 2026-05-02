import { SectionHeading } from '@shared/ui/section-heading';
import { steps } from '../model/steps.data';
import { StepCard } from './StepCard';

export function ProcessSection() {
  return (
    <section
      aria-labelledby="process-heading"
      className="mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-8"
    >
      <SectionHeading eyebrow="Процесс" title="Как это работает" id="process-heading" />

      <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li key={step.id}>
            <StepCard step={step} />
          </li>
        ))}
      </ol>
    </section>
  );
}
