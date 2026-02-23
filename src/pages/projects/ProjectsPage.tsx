import { Link } from 'react-router-dom';

import { Footer } from '../../components/layout/Footer';
import { LogoTopBar } from '../../components/layout/LogoTopBar';
import { Navbar } from '../../components/layout/Navbar';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <div className="flex flex-col flex-1">
          <Link to="/" className="px-5 pt-5 inline-block self-start" aria-label="Go to home">
            <LogoTopBar />
          </Link>
          <main className="flex-1">
            <div>
              <h1>Projects page works!</h1>
            </div>
          </main>
        </div>
        <aside>
          <Navbar activeItem="projects" />
        </aside>
      </div>
      <Footer />
    </div>
  );
}
