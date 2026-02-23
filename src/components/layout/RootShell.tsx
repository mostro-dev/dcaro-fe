import { Outlet, useLocation } from 'react-router-dom';

import { LogoTopBar } from './LogoTopBar';
import { Navbar } from './Navbar';

type NavbarActiveItem = 'about' | 'projects' | 'contact' | null;

function deriveActiveItem(pathname: string): NavbarActiveItem {
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/projects')) return 'projects';
  if (pathname.startsWith('/contact')) return 'contact';
  return null;
}

export function RootShell() {
  const { pathname } = useLocation();
  const isLanding = pathname === '/';
  const activeItem = deriveActiveItem(pathname);

  return (
    <>
      <LogoTopBar isLanding={isLanding} />
      <Navbar activeItem={activeItem} isLanding={isLanding} />
      <Outlet />
    </>
  );
}
