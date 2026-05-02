import { Text } from '@shared/ui/typography';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <header className="flex flex-col gap-3">
      <Text variant="eyebrow" tone="accent">
        {eyebrow}
      </Text>
      <Text variant="h2" tone="primary" as="h2" id={id}>
        {title}
      </Text>
    </header>
  );
}
