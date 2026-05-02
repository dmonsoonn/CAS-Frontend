type LogoProps = {
  size?: number;
  className?: string;
};

export function Logo({ size = 52, className }: LogoProps) {
  return (
    <img
      src="/logo_kortex.svg"
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      draggable={false}
    />
  );
}
