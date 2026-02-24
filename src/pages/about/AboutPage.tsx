import { useEffect, useState } from 'react';

import { Footer } from '../../components/layout/Footer';

export default function AboutPage() {
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
            About me
          </h1>

          <div
            className={`transition-all duration-1000 ease-out delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="font-montserrat text-regular text-black mb-4">
              Hi, I&apos;m Carolina — architect, designer, and space storyteller.
            </p>

            <p className="font-montserrat text-regular text-black mb-4">
              Crafting meaningful spaces in Colombia and beyond.
            </p>

            <p className="font-montserrat text-regular text-black mb-4">
              From <span className="text-red">concept to completion</span>, I design thoughtful
              environments that respond to people, place, and purpose.
            </p>

            <p className="font-montserrat text-regular text-black">
              Because great design doesn&apos;t end when the project is finished —{' '}
              <span className="text-red">it evolves with the people who inhabit it.</span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
