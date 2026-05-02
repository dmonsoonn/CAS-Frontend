import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex h-[37.5px] items-center gap-2 rounded-full border border-accent/40 bg-accent/8 px-[17px] py-px">
      <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
      <span className="font-jura text-eyebrow font-normal text-accent tracking-[0.325px]">
        {children}
      </span>
    </span>
  );
}
