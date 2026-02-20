import logoSrc from '../../assets/images/logo.png';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-[10px] w-full ${className ?? ''}`}
    >
      <img
        src={logoSrc}
        alt="Carolina Rojas - Diseño y Construcción"
        className="w-[187px] h-[135px] object-contain"
        draggable={false}
      />
    </div>
  );
}
