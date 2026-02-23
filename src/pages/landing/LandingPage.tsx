import { Link } from 'react-router-dom';

import { LogoTopBar } from '../../components/layout/LogoTopBar';
import { NavbarItem } from '../../components/layout/NavbarItem';

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <LogoTopBar isLanding />

      <nav className="flex w-full justify-between px-[50px] mt-3 max-w-[350px]">
        <Link to="/about">
          <NavbarItem innerText="About" isActive={false} />
        </Link>
        <Link to="/projects">
          <NavbarItem innerText="Projects" isActive={false} />
        </Link>
        <Link to="/contact">
          <NavbarItem innerText="Contact" isActive={false} />
        </Link>
      </nav>
    </div>
  );
}
