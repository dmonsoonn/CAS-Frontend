import { SectionHeading } from '@shared/ui/section-heading';
import { InterviewSetupForm } from '@features/interview-setup';

export function StartInterviewSection() {
  return (
    <section
      aria-labelledby="start-heading"
      className="mx-auto w-full max-w-[1136px] rounded-2xl border border-stroke bg-card p-8 sm:p-[33px]"
    >
      <div className="flex flex-col gap-8">
        <SectionHeading eyebrow="Старт" title="Начните прямо сейчас" id="start-heading" />
        <InterviewSetupForm />
      </div>
    </section>
  );
}
