import type { ElementType, HTMLAttributes, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, 'className' | 'children'>;

export function Container({
  children,
  as: Component = 'div',
  className = '',
  ...rest
}: ContainerProps) {
  return (
    <Component {...rest} className={`mx-auto w-full max-w-[1136px] ${className}`.trim()}>
      {children}
    </Component>
  );
}
