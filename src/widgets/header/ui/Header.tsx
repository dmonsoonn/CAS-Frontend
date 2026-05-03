import { Logo } from '@shared/ui/logo';
import { Container } from '@shared/ui/container';

export function Header() {
  return (
    <Container
      as="header"
      className="
        relative flex h-[84px] items-center justify-between
        rounded-2xl border border-stroke-accent px-6
        shadow-[0_0_11px_rgba(80,55,140,0.35),inset_0_0_16px_rgba(80,55,140,0.08)]
      "
    >
      <a
        href="/"
        className="flex items-center gap-3 outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-accent"
      >
        <Logo size={52} />
        <span className="font-unbounded text-body-l font-medium tracking-wide text-primary">
          КОРТЕКС
        </span>
      </a>

      <nav>
        <a
          href="#login"
          className="
            relative font-manrope text-body-l text-primary
            transition-colors hover:text-accent
            after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent
            after:transition-[width] after:duration-200 hover:after:w-full
            focus-ring
          "
        >
          Войти
        </a>
      </nav>
    </Container>
  );
}
