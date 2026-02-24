import { useEffect, useState } from 'react';

import { Footer } from '../../components/layout/Footer';

export default function ContactPage() {
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
            Contact me!
          </h1>
          <div
            className={`transition-all duration-1000 ease-out delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="hidden font-montserrat text-regular text-black mb-4">
              Send me an email at{' '}
              <a href="mailto:contacto@dcaro.co" className="text-red">
                contacto@dcaro.co
              </a>
              .
            </p>
            <p className="font-montserrat text-regular text-black">
              Follow me on my{' '}
              <a href="https://www.instagram.com/dcaro.co/" className="text-red" target="_blank">
                Instagram account!
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
