import { ArrowRight } from 'lucide-react';
import { Badge } from '@shared/ui/badge';
import { PrimaryButton } from '@shared/ui/primary-button';
import { SecondaryButton } from '@shared/ui/secondary-button';
import { Text } from '@shared/ui/typography';

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-8 text-center">
      <Badge>ИИ-симулятор технического интервью</Badge>

      <h1 className="font-jura font-medium tracking-[-2px] text-primary text-[40px] leading-[1.05] sm:text-[52px] md:text-display">
        Подготовься к собеседованию в ИТ
        <br />
        <span className="text-accent">с помощью ИИ</span>
      </h1>

      <Text variant="body-l" tone="secondary" as="p" className="max-w-[570px]">
        Пройдите интервью в формате реального отбора и получите объективную оценку своей подготовки
      </Text>

      <div className="mt-2 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
        <PrimaryButton className="w-full sm:w-auto">
          Начать бесплатно
          <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
        </PrimaryButton>
        <SecondaryButton className="w-full sm:w-auto">Как это работает</SecondaryButton>
      </div>
    </section>
  );
}
