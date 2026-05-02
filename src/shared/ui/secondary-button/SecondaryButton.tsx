import type { ButtonHTMLAttributes, ReactNode } from 'react';

type SecondaryButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function SecondaryButton({ children, className = '', ...rest }: SecondaryButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={
        'inline-flex h-[58px] items-center justify-center rounded-[14px] border border-stroke bg-transparent px-7 ' +
        'font-manrope text-body-l font-medium text-secondary will-change-transform ' +
        'transition-[color,border-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ' +
        'hover:border-primary/25 hover:text-primary ' +
        'focus-ring ' +
        'active:scale-[0.98] active:duration-100 ' +
        className
      }
    >
      {children}
    </button>
  );
}
