import { Link } from 'react-router-dom';

import logoSrc from '../../assets/images/logo.png';

interface LogoTopBarProps {
  isLanding?: boolean;
}

export function LogoTopBar({ isLanding = false }: LogoTopBarProps) {
  return (
    <div
      className={`transition-all relative duration-500 ease-in-out ${
        isLanding ? 'h-[161px] mt-20 mb-5' : 'h-[50px]'
      }`}
    >
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
          isLanding ? 'opacity-100' : 'p-0 top-[25px] left-[25px]'
        }`}
      >
        <Link to="/" className="inline-block self-start" aria-label="Go to home">
          <img
            src={logoSrc}
            alt="Carolina Rojas"
            className={`object-contain transition-all duration-700 ${
              isLanding ? 'h-[135px] w-[187px]' : 'h-[50px] w-[50px]'
            }`}
            draggable={false}
          />
        </Link>
      </div>
    </div>
  );
}
