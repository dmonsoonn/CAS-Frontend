import type { ProcessStep } from './types';

export const steps: ProcessStep[] = [
  {
    id: '1',
    number: '01',
    title: 'Специальность и грейд',
    description: 'Укажите позицию, на которую претендуете.',
  },
  {
    id: '2',
    number: '02',
    title: 'Интервью с ИИ',
    description: 'Отвечайте на вопросы — как на реальном собеседовании.',
  },
  {
    id: '3',
    number: '03',
    title: 'Обратная связь',
    description: 'ИИ оценит ответы и покажет, что нужно подтянуть.',
  },
  {
    id: '4',
    number: '04',
    title: 'Повторение',
    description: 'Отслеживайте прогресс и улучшайте результат.',
  },
];
