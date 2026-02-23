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
      className={
        isLanding ? 'flex flex-row justify-between' : 'flex flex-col items-end justify-between px-5'
      }
      aria-label="Main navigation"
    >
      {NAV_ITEMS.map(({ key, label, to }) => (
        <Link key={key} to={to}>
          <NavbarItem innerText={label} isActive={activeItem === key} />
        </Link>
      ))}
    </nav>
  );
}
