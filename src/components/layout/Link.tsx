import { type AnchorHTMLAttributes } from 'react';

type LinkVariant = 'normal' | 'hover' | 'selected' | 'visited';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  children: React.ReactNode;
  href: string;
}

const VARIANT_CLASSES: Record<LinkVariant, string> = {
  normal: 'font-montserrat text-regular font-normal text-black',
  hover: 'font-montserrat text-regular font-medium text-black',
  selected: 'font-montserrat text-regular font-medium text-red',
  visited: 'font-montserrat text-regular font-normal text-red opacity-75',
};

export function Link({ variant = 'normal', children, href, className, ...rest }: LinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center whitespace-nowrap transition-colors duration-200 ${VARIANT_CLASSES[variant]} ${className ?? ''}`}
      {...rest}
    >
      {children}
    </a>
  );
}
