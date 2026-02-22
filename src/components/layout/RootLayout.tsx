import { Link, Outlet, useLocation } from 'react-router-dom';

import { Footer } from './Footer';
import { Logo } from './Logo';
import { Navbar } from './Navbar';

type NavbarActiveItem = 'about' | 'projects' | 'contact' | null;

function getActiveItem(pathname: string): NavbarActiveItem {
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/projects')) return 'projects';
  if (pathname.startsWith('/contact')) return 'contact';
  return null;
}

export function RootLayout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="flex flex-col flex-1">
          <Link to="/" className="px-5 pt-5 inline-block self-start" aria-label="Go to home">
            <Logo />
          </Link>
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
        <aside>
          <Navbar activeItem={getActiveItem(pathname)} />
        </aside>
      </div>
      <Footer />
    </div>
  );
}
