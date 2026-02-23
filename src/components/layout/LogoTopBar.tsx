import logoSrc from '../../assets/images/logo.png';

interface LogoTopBarProps {
  isLanding?: boolean;
}

export function LogoTopBar({ isLanding = false }: LogoTopBarProps) {
  if (isLanding) {
    return (
      <div className="flex flex-col items-center gap-2">
        <img
          src={logoSrc}
          alt="Carolina Rojas"
          className="w-[187px] h-[135px] object-contain"
          draggable={false}
        />
        <span className="font-montserrat text-h1 font-medium text-black">Carolina Rojas</span>
        <span className="font-montserrat text-regular text-black">Diseño y Construcción</span>
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center gap-3">
      <img
        src={logoSrc}
        alt="Carolina Rojas"
        className="w-[45px] h-[45px] object-contain"
        draggable={false}
      />
      <div className="w-px h-[50px] bg-black" aria-hidden="true" />
      <div className="flex flex-col gap-[2px]">
        <span className="font-montserrat text-h2 font-medium text-black">Carolina Rojas</span>
        <span className="font-montserrat text-small text-black">Diseño y Construcción</span>
      </div>
    </div>
  );
}
