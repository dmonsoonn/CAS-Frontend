import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex h-9 items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4">
      <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
      <span className="font-jura text-eyebrow font-normal text-accent tracking-wide">
        {children}
      </span>
    </span>
  );
}
