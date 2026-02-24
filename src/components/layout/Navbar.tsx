import { Link } from 'react-router-dom';

import { NavbarItem } from './NavbarItem';

type NavbarActiveItem = 'about' | 'projects' | 'contact' | null;

interface NavbarProps {
  activeItem: NavbarActiveItem;
  isLanding?: boolean;
}

const NAV_ITEMS: { key: NavbarActiveItem; label: string; to: string }[] = [
  { key: 'about', label: 'About', to: '/about' },
  { key: 'projects', label: 'Projects', to: '/projects' },
  { key: 'contact', label: 'Contact', to: '/contact' },
];

export function Navbar({ activeItem, isLanding = false }: NavbarProps) {
  return (
    <nav
      className={`transition-all flex duration-500 ease-in-out relative ${isLanding ? 'h-4' : 'h-[83px]'}`}
      aria-label="Main navigation"
    >
      <ul
        className={`w-full transition-all flex flex-wrap justify-center gap-12 ease-in-out absolute right-0 ${isLanding ? 'duration-1000' : 'w-[100px] right-0 duration-500'}`}
      >
        {NAV_ITEMS.map(({ key, label, to }) => (
          <li
            className={`transition-all duration-500 ease-in-out${isLanding ? 'w-auto' : 'w-[60px]'}`}
          >
            <Link key={key} to={to}>
              <NavbarItem innerText={label} isActive={activeItem === key} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
