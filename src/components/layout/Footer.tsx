export function Footer() {
  const year = 2026;
  return (
    <footer
      className="mt-auto flex items-center justify-between w-full px-5 py-5 h-[15px]"
      aria-label="Site footer"
    >
      <span className="font-jura text-small font-normal text-black whitespace-nowrap">{year}</span>

      <span className="font-jura text-small font-normal text-grey whitespace-nowrap">
        {`Built with \u2764\ufe0f by Freddy Orozco`}
      </span>

      <a
        href="https://www.instagram.com/dcaro.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-red transition-colors duration-200"
        aria-label="Instagram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </footer>
  );
}
