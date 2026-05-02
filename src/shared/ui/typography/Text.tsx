import type { ElementType, ReactNode, HTMLAttributes } from 'react';

export type TextVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'eyebrow'
  | 'label'
  | 'body-l'
  | 'body-m'
  | 'caption'
  | 'strong';

export type TextTone = 'primary' | 'secondary' | 'muted' | 'accent';

const variantClasses: Record<TextVariant, string> = {
  display: 'font-jura font-bold text-display',
  h1: 'font-jura font-bold text-h1',
  h2: 'font-jura font-bold text-h2',
  h3: 'font-jura font-bold text-h3',
  h4: 'font-jura font-bold text-h4',
  eyebrow: 'font-jura font-normal text-eyebrow uppercase',
  label: 'font-jura font-semibold text-label uppercase',
  'body-l': 'font-manrope font-normal text-body-l',
  'body-m': 'font-manrope font-normal text-body-m',
  caption: 'font-manrope font-normal text-caption',
  strong: 'font-manrope font-bold text-body-l',
};

const toneClasses: Record<TextTone, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  muted: 'text-muted',
  accent: 'text-accent',
};

type TextProps = {
  variant: TextVariant;
  tone?: TextTone;
  as?: ElementType;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, 'className' | 'children'>;

export function Text({
  variant,
  tone = 'primary',
  as: Component = 'span',
  className = '',
  children,
  ...rest
}: TextProps) {
  return (
    <Component
      className={`${variantClasses[variant]} ${toneClasses[tone]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}
