import { NavbarItem } from './NavbarItem';

type NavbarActiveItem = 'about' | 'projects' | 'contact' | null;

interface NavbarProps {
  activeItem: NavbarActiveItem;
}

const NAV_ITEMS: { key: NavbarActiveItem; label: string }[] = [
  { key: 'about', label: 'About' },
  { key: 'projects', label: 'Projects' },
  { key: 'contact', label: 'Contact' },
];

export function Navbar({ activeItem }: NavbarProps) {
  return (
    <nav
      className="flex flex-col items-end justify-between px-5"
      aria-label="Main navigation"
    >
      {NAV_ITEMS.map(({ key, label }) => (
        <NavbarItem
          key={key}
          innerText={label}
          isActive={activeItem === key}
        />
      ))}
    </nav>
  );
}
