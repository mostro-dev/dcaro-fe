import { useEffect, useState } from 'react';

import { Footer } from '../../components/layout/Footer';

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="flex-1">
        <div className="px-5 pt-8 flex flex-col gap-6">
          <h1
            className={`font-montserrat text-h1 font-medium text-black transition-all duration-500 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Coming soon...
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
