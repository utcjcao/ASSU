import Link from "next/link";
import type { NavGroup } from "./nav";

interface MobileSidebarProps {
  nav: NavGroup[];
  isOpen: boolean;
  onClose: () => void;
  isRouteActive: (href: string) => boolean;
  isSubrouteActive: (href: string) => boolean;
}

interface MobileSectionProps {
  label: string;
  href: string;
  items?: Array<{ label: string; href: string }>;
  onClose: () => void;
  isRouteActive: (href: string) => boolean;
  isSubrouteActive: (href: string) => boolean;
}

function MobileSection({
  label,
  href,
  items,
  onClose,
  isRouteActive,
  isSubrouteActive,
}: MobileSectionProps) {
  const hasItems = !!items?.length;
  const sectionId =
    "mobile-section-" + (href.replace(/[^a-z0-9]+/gi, "-") || "root");
  const headingClass = `text-lg font-sans text-gray-darker${
    hasItems ? " mb-2" : ""
  }`;

  return (
    <section
      className={`pb-4 ${hasItems ? "border-b border-gray-200" : ""}`}
      aria-labelledby={sectionId}
    >
      <h3 className={headingClass} id={sectionId}>
        <Link
          href={href}
          onClick={onClose}
          className={`py-2 hover:text-pink transition-colors min-h-11 flex items-center ${
            isRouteActive(href) ? "text-pink" : "text-gray-darker"
          }`}
          aria-current={isRouteActive(href) ? "page" : undefined}
        >
          {label}
        </Link>
      </h3>

      {hasItems ? (
        <div className="space-y-2 ml-4">
          {items!.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`text-sm hover:text-pink transition-colors py-2 min-h-11 flex items-center ${
                isSubrouteActive(item.href) ? "text-pink" : "text-gray-dark"
              }`}
              aria-current={
                isSubrouteActive(item.href) ? "page" : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default function MobileSidebar({
  nav,
  isOpen,
  onClose,
  isRouteActive,
  isSubrouteActive,
}: MobileSidebarProps) {
  if (!isOpen) return null;

  return (
    <div
      className="mobile-menu absolute inset-0 z-[9999]"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      id="mobile-navigation"
    >
      {/* Darkened background overlay */}
      <div
        className="absolute inset-0 opacity-75 bg-black transition-opacity duration-300 z-[9998]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar panel */}
      <aside
        className="absolute right-0 top-0 h-full w-80 bg-gray-lighter shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto will-change-transform z-[10000]"
        role="complementary"
        aria-label="Mobile navigation sidebar"
      >
        <div className="p-6 min-h-full">
          <div className="flex justify-between items-center mb-8">
            <h2
              className="text-xl font-sans text-gray-darker"
              id="mobile-menu-title"
            >
              Menu
            </h2>
            <button
              onClick={onClose}
              className="p-3 text-gray-darker hover:text-pink transition-colors min-w-11 min-h-11 flex items-center justify-center"
              aria-label="Close mobile navigation menu"
              aria-controls="mobile-navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile navigation items */}
          <nav
            className="space-y-4"
            role="navigation"
            aria-labelledby="mobile-menu-title"
          >
            {nav.map((group) =>
              group.type === "dropdown" ? (
                <MobileSection
                  key={group.href}
                  label={group.label}
                  href={group.href}
                  items={group.items}
                  onClose={onClose}
                  isRouteActive={isRouteActive}
                  isSubrouteActive={isSubrouteActive}
                />
              ) : (
                <MobileSection
                  key={group.href}
                  label={group.label}
                  href={group.href}
                  onClose={onClose}
                  isRouteActive={isRouteActive}
                  isSubrouteActive={isSubrouteActive}
                />
              )
            )}
          </nav>
        </div>
      </aside>
    </div>
  );
}
