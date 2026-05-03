import { ArrowRight } from 'lucide-react';
import { Badge } from '@shared/ui/badge';
import { Button } from '@shared/ui/button';
import { Container } from '@shared/ui/container';
import { Text } from '@shared/ui/typography';

export function Hero() {
  return (
    <Container as="section" className="flex flex-col items-center gap-6 text-center">
      <Badge>ИИ-симулятор технического интервью</Badge>

      <Text variant="display-hero" tone="primary" as="h1">
        Подготовься к собеседованию в ИТ
        <br />
        <span className="text-accent">с помощью ИИ</span>
      </Text>

      <Text variant="body-l" tone="secondary" as="p" className="max-w-[570px]">
        Пройдите интервью в формате реального отбора и получите объективную оценку своей подготовки
      </Text>

      <div className="mt-2 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
        <Button variant="primary" className="w-full sm:w-auto">
          Начать бесплатно
          <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
        </Button>
        <Button variant="secondary" className="w-full sm:w-auto">
          Как это работает
        </Button>
      </div>
    </Container>
  );
}
