import { Container } from '@shared/ui/container';
import { SectionHeading } from '@shared/ui/section-heading';
import { InterviewSetupForm } from '@features/interview-setup';

export function StartInterviewSection() {
  return (
    <Container
      as="section"
      aria-labelledby="start-heading"
      className="rounded-2xl border border-stroke bg-card p-8"
    >
      <div className="flex flex-col gap-8">
        <SectionHeading eyebrow="Старт" title="Начните прямо сейчас" id="start-heading" />
        <InterviewSetupForm />
      </div>
    </Container>
  );
}
