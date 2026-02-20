import { Outlet } from 'react-router-dom';

import { Footer } from '../../components/layout/Footer';

export function LandingLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
