import Link from "next/link";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  aboutItems: Array<{ label: string; href: string }>;
  courseUnionsItems: Array<{ label: string; href: string }>;
  getInvolvedItems: Array<{ label: string; href: string }>;
  awardsGrantsItems: Array<{ label: string; href: string }>;
  servicesResourcesItems: Array<{ label: string; href: string }>;
  isRouteActive: (href: string) => boolean;
  isSubrouteActive: (href: string) => boolean;
}

export default function MobileSidebar({
  isOpen,
  onClose,
  aboutItems,
  courseUnionsItems,
  getInvolvedItems,
  awardsGrantsItems,
  servicesResourcesItems,
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
            {/* About ASSU */}
            <section
              className="border-b border-gray-200 pb-4"
              aria-labelledby="about-section"
            >
              <h3
                id="about-section"
                className="text-lg font-sans text-gray-darker mb-2"
              >
                <Link
                  href="/about"
                  onClick={onClose}
                  className={`py-2 hover:text-pink transition-colors min-h-11 flex items-center ${
                    isRouteActive("/about") ? "text-pink" : ""
                  }`}
                >
                  About ASSU
                </Link>
              </h3>
              <div className="space-y-2 ml-4">
                {aboutItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={onClose}
                    className={`text-sm hover:text-pink transition-colors py-2 min-h-11 flex items-center ${
                      isSubrouteActive(item.href)
                        ? "text-pink"
                        : "text-gray-dark"
                    }`}
                    aria-current={
                      isSubrouteActive(item.href) ? "page" : undefined
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>
            {/* Course Unions */}
            <section
              className="border-b border-gray-200 pb-4"
              aria-labelledby="course-unions-section"
            >
              <h3
                id="course-unions-section"
                className="text-lg font-sans text-gray-darker mb-2"
              >
                <Link
                  href="/course-unions"
                  onClick={onClose}
                  className={`py-2 hover:text-pink transition-colors min-h-11 flex items-center ${
                    isRouteActive("/course-unions") ? "text-pink" : ""
                  }`}
                >
                  Course Unions
                </Link>
              </h3>
              <div className="space-y-2 ml-4">
                {courseUnionsItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={onClose}
                    className={`text-sm hover:text-pink transition-colors py-2 min-h-11 flex items-center ${
                      isSubrouteActive(item.href)
                        ? "text-pink"
                        : "text-gray-dark"
                    }`}
                    aria-current={
                      isSubrouteActive(item.href) ? "page" : undefined
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>
            {/* Get Involved */}
            <section
              className="border-b border-gray-200 pb-4"
              aria-labelledby="get-involved-section"
            >
              <h3
                id="get-involved-section"
                className="text-lg font-sans text-gray-darker mb-2"
              >
                <Link
                  href="/get-involved"
                  onClick={onClose}
                  className={`py-2 hover:text-pink transition-colors min-h-11 flex items-center ${
                    isRouteActive("/get-involved") ? "text-pink" : ""
                  }`}
                >
                  Get Involved
                </Link>
              </h3>
              <div className="space-y-2 ml-4">
                {getInvolvedItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={onClose}
                    className={`text-sm hover:text-pink transition-colors py-2 min-h-11 flex items-center ${
                      isSubrouteActive(item.href)
                        ? "text-pink"
                        : "text-gray-dark"
                    }`}
                    aria-current={
                      isSubrouteActive(item.href) ? "page" : undefined
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>
            {/* Gallery
            <section className="border-b border-gray-200 pb-4">
              <Link
                href="/gallery"
                onClick={onClose}
                className={`text-lg font-sans hover:text-pink transition-colors py-2 min-h-11 flex items-center ${
                  isRouteActive("/gallery") ? "text-pink" : "text-gray-darker"
                }`}
                aria-current={isRouteActive("/gallery") ? "page" : undefined}
              >
                Gallery
              </Link>
            </section> */}
            {/* Awards & Grants */}
            <section
              className="border-b border-gray-200 pb-4"
              aria-labelledby="awards-grants-section"
            >
              <h3
                id="awards-grants-section"
                className="text-lg font-sans text-gray-darker mb-2"
              >
                <Link
                  href="/awards-and-grants"
                  onClick={onClose}
                  className={`py-2 hover:text-pink transition-colors min-h-11 flex items-center ${
                    isRouteActive("/awards-and-grants") ? "text-pink" : ""
                  }`}
                >
                  Awards & Grants
                </Link>
              </h3>
              <div className="space-y-2 ml-4">
                {awardsGrantsItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={onClose}
                    className={`text-sm hover:text-pink transition-colors py-2 min-h-11 flex items-center ${
                      isSubrouteActive(item.href)
                        ? "text-pink"
                        : "text-gray-dark"
                    }`}
                    aria-current={
                      isSubrouteActive(item.href) ? "page" : undefined
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>
            {/* Services & Resources */}
            <section
              className="border-b border-gray-200 pb-4"
              aria-labelledby="services-resources-section"
            >
              <h3
                id="services-resources-section"
                className="text-lg font-sans text-gray-darker mb-2"
              >
                <Link
                  href="/services-and-resources"
                  onClick={onClose}
                  className={`py-2 hover:text-pink transition-colors min-h-11 flex items-center ${
                    isRouteActive("/services-and-resources") ? "text-pink" : ""
                  }`}
                >
                  Services & Resources
                </Link>
              </h3>
              <div className="space-y-2 ml-4">
                {servicesResourcesItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={onClose}
                    className={`text-sm hover:text-pink transition-colors py-2 min-h-11 flex items-center ${
                      isSubrouteActive(item.href)
                        ? "text-pink"
                        : "text-gray-dark"
                    }`}
                    aria-current={
                      isSubrouteActive(item.href) ? "page" : undefined
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>
            {/* Contact Us */}
            <section className="pb-4">
              <Link
                href="/contact-us"
                onClick={onClose}
                className={`text-lg font-sans hover:text-pink transition-colors py-2 min-h-11 flex items-center ${
                  isRouteActive("/contact-us")
                    ? "text-pink"
                    : "text-gray-darker"
                }`}
                aria-current={isRouteActive("/contact-us") ? "page" : undefined}
              >
                Contact Us
              </Link>
            </section>
          </nav>
        </div>
      </aside>
    </div>
  );
}
