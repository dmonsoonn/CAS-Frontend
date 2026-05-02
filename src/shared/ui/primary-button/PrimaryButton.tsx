import type { ButtonHTMLAttributes, ReactNode } from 'react';

type PrimaryButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function PrimaryButton({ children, className = '', ...rest }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={
        'inline-flex h-[58px] items-center justify-center gap-2 rounded-[14px] px-7 ' +
        'font-manrope text-body-l font-medium text-primary will-change-transform ' +
        'bg-[linear-gradient(165.5deg,var(--color-gradient-start)_0%,var(--color-gradient-end)_100%)] ' +
        'transition-[transform,box-shadow,opacity] duration-[300ms,600ms,300ms] ease-[cubic-bezier(0.22,1,0.36,1)] ' +
        'hover:opacity-95 hover:shadow-[0_8px_28px_-12px_var(--color-gradient-end)] ' +
        'focus-ring ' +
        'active:scale-[0.98] active:duration-100 ' +
        'disabled:cursor-not-allowed disabled:opacity-50 ' +
        className
      }
    >
      {children}
    </button>
  );
}
