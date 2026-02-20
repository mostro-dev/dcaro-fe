import { Link } from 'react-router-dom';
import { Logo } from '../../components/layout/Logo';
import { NavbarItem } from '../../components/layout/NavbarItem';

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Logo />
      </div>

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
