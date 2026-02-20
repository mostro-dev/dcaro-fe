interface NavbarItemProps {
  innerText: string;
  isActive: boolean;
}

export function NavbarItem({ innerText, isActive }: NavbarItemProps) {
  return (
    <div
      className="flex flex-col items-start justify-center gap-[2px]"
      aria-current={isActive ? 'page' : undefined}
    >
      <span className="font-montserrat text-h2 font-medium text-black whitespace-nowrap text-right">
        {innerText}
      </span>
      {isActive && <div className="w-full h-px bg-red" aria-hidden="true" />}
    </div>
  );
}
