interface FooterProps {
  year?: number;
}

export function Footer({ year = 2026 }: FooterProps) {
  return (
    <footer
      className="flex items-center justify-between w-full px-5 py-3 h-[15px]"
      aria-label="Site footer"
    >
      <span className="font-jura text-small font-normal text-black whitespace-nowrap">{year}</span>

      <span className="font-jura text-xsmall font-normal text-grey whitespace-nowrap">
        {`Built with \u2764\ufe0f by Freddy Orozco`}
      </span>

      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-jura text-small font-normal text-black whitespace-nowrap hover:text-red transition-colors duration-200"
        aria-label="Instagram"
      >
        Ins
      </a>
    </footer>
  );
}
