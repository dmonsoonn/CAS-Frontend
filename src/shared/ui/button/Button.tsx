import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseClasses =
  'inline-flex h-[58px] items-center justify-center rounded-[14px] px-7 ' +
  'font-manrope text-body-l font-medium will-change-transform ' +
  'focus-ring active:scale-[0.98] active:duration-100 ' +
  'disabled:cursor-not-allowed disabled:opacity-50';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'gap-2 text-primary ' +
    'bg-[linear-gradient(165.5deg,var(--color-gradient-start)_0%,var(--color-gradient-end)_100%)] ' +
    'transition-[transform,box-shadow,opacity] duration-[300ms,600ms,300ms] ease-[cubic-bezier(0.22,1,0.36,1)] ' +
    'hover:opacity-95 hover:shadow-[0_8px_28px_-12px_var(--color-gradient-end)]',
  secondary:
    'border border-stroke bg-transparent text-secondary ' +
    'transition-[color,border-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ' +
    'hover:border-primary/25 hover:text-primary',
};

export function Button({ children, variant = 'primary', className = '', ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
