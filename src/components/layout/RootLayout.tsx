import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

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
        <main className="flex-1">
          <Outlet />
        </main>
        <aside>
          <Navbar activeItem={getActiveItem(pathname)} />
        </aside>
      </div>
      <Footer />
    </div>
  );
}
