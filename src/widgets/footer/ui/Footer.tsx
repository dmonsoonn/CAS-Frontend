import type { ReactNode } from 'react';
import { Logo } from '@shared/ui/logo';
import { Text } from '@shared/ui/typography';

type FooterLinkProps = {
  href: string;
  children: ReactNode;
};

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a href={href} className="focus-ring transition-colors hover:text-primary">
      <Text variant="body-m" tone="muted">
        {children}
      </Text>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-stroke">
      <div className="px-4 sm:px-6">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-4 px-8 py-6 sm:flex-row sm:items-center">
          <a
            href="/"
            className="flex items-center gap-3 outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Logo size={36} />
            <span className="font-unbounded text-body-m font-medium text-primary">Кортекс</span>
          </a>

          <nav className="flex flex-wrap items-center gap-6">
            <FooterLink href="#style-guide">Style Guide</FooterLink>
            <FooterLink href="#privacy">Политика обработки персональных данных</FooterLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}
