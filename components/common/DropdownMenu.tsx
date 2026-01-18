import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  label: string;
  href: string;
  items: DropdownItem[];
  className?: string;
  isActive?: boolean;
  isSubrouteActive?: (href: string) => boolean;
}

export default function DropdownMenu({
  label,
  href,
  items,
  className = "",
  isActive = false,
  isSubrouteActive = () => false,
}: DropdownMenuProps) {
  return (
    <div className="relative group">
      {/* Main menu item that triggers the dropdown */}
      <Link
        href={href}
        className={`
          hover:text-pink 
          transition-colors 
          duration-300 
          ${className}
          ${isActive ? "text-pink" : ""}
        `}
      >
        {label}
      </Link>

      {/* Dropdown menu that appears on hover */}
      <ul
        className={`
        absolute 
        top-full 
        left-0 
        mt-2 
        bg-[rgb(243,243,243)] 
        py-2 
        pl-3 
        -ml-3 
        min-w-[200px] 
        z-50 
        opacity-0 
        invisible 
        group-hover:opacity-100 
        group-hover:visible 
        transition-all 
        duration-200 
      `}
      >
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={`
                block 
                py-1
                text-gray-darker 
                hover:text-pink 
                transition-colors 
                duration-200
                ${isSubrouteActive(item.href) ? "text-pink" : ""}
              `}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
