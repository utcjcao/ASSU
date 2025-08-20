"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DropdownMenu from "../common/DropdownMenu";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        isMobileMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItemClasses = "hover:text-pink transition-colors duration-300";
  const activeNavItemClasses = "text-pink";

  // Helper function to check if a route is active
  const isRouteActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Helper function to check if a subroute is active
  const isSubrouteActive = (href: string) => {
    return pathname === href;
  };

  const aboutItems = [
    { label: "About ASSU", href: "/about/assu" },
    { label: "ASSU Executives", href: "/about/executive" },
    { label: "ASSU Staff", href: "/about/staff" },
  ];

  const courseUnionsItems = [
    { label: "Course Unions", href: "/course-unions" },
    { label: "Unions", href: "/course-unions/unions" },
    { label: "Resources for Unions", href: "/course-unions/union-resources" },
  ];

  const getInvolvedItems = [
    { label: "Upcoming Events", href: "/get-involved/upcoming" },
    { label: "Our Initiatives", href: "/get-involved/initiatives" },
    { label: "Current Projects", href: "/get-involved/current" },
  ];

  const awardsGrantsItems = [
    { label: "ASSU Awards", href: "/awards-and-grants/awards" },
    { label: "ASSU Grants", href: "/awards-and-grants/grants" },
  ];

  const servicesResourcesItems = [
    {
      label: "Office Services",
      href: "/services-and-resources/office-services",
    },
    { label: "Past Test Library", href: "/services-and-resources/tests" },
    {
      label: "Free Academic Resources",
      href: "/services-and-resources/resources",
    },
    { label: "Documents", href: "/services-and-resources/documents" },
    { label: "Academic Handbook", href: "/services-and-resources/handbook" },
    { label: "Useful Links", href: "/services-and-resources/misc" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-gray-lighter px-3 sm:px-4 md:px-6 lg:px-8 xl:pl-50 xl:pr-8 py-3 sm:py-4 md:py-6 lg:py-8 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/assulogo.webp"
            alt="ASSU Logo"
            width={100}
            height={100}
            className="w-14 sm:w-16 md:w-18 lg:w-20 xl:w-24 transition-all duration-300"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="mobile-menu-button p-2 text-gray-darker hover:text-pink transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <ul className="desktop-nav items-center space-x-3 lg:space-x-5 xl:space-x-8">
          <li>
            <DropdownMenu
              label="About ASSU"
              href="/about"
              items={aboutItems}
              className={`${navItemClasses} ${
                isRouteActive("/about") ? activeNavItemClasses : ""
              }`}
              isActive={isRouteActive("/about")}
              isSubrouteActive={isSubrouteActive}
            />
          </li>
          <li>
            <DropdownMenu
              label="Course Unions"
              href="/course-unions"
              items={courseUnionsItems}
              className={`${navItemClasses} ${
                isRouteActive("/course-unions") ? activeNavItemClasses : ""
              }`}
              isActive={isRouteActive("/course-unions")}
              isSubrouteActive={isSubrouteActive}
            />
          </li>
          <li>
            <DropdownMenu
              label="Get Involved"
              href="/get-involved"
              items={getInvolvedItems}
              className={`${navItemClasses} ${
                isRouteActive("/get-involved") ? activeNavItemClasses : ""
              }`}
              isActive={isRouteActive("/get-involved")}
              isSubrouteActive={isSubrouteActive}
            />
          </li>
          <li
            className={`${navItemClasses} ${
              isRouteActive("/gallery") ? activeNavItemClasses : ""
            }`}
          >
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <DropdownMenu
              label="Awards & Grants"
              href="/awards-and-grants"
              items={awardsGrantsItems}
              className={`${navItemClasses} ${
                isRouteActive("/awards-and-grants") ? activeNavItemClasses : ""
              }`}
              isActive={isRouteActive("/awards-and-grants")}
              isSubrouteActive={isSubrouteActive}
            />
          </li>
          <li>
            <DropdownMenu
              label="Services & Resources"
              href="/services-and-resources"
              items={servicesResourcesItems}
              className={`${navItemClasses} ${
                isRouteActive("/services-and-resources")
                  ? activeNavItemClasses
                  : ""
              }`}
              isActive={isRouteActive("/services-and-resources")}
              isSubrouteActive={isSubrouteActive}
            />
          </li>
          {/* <li className={navItemClasses}>
            <Link href="/news">News</Link>
          </li> */}
          <li
            className={`${navItemClasses} ${
              isRouteActive("/contact-us") ? activeNavItemClasses : ""
            }`}
          >
            <Link href="/contact-us">Contact Us</Link>
          </li>
          {/* <li className={navItemClasses}>
            <Link href="/faq">FAQ</Link>
          </li> */}
        </ul>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed right-0 top-0 h-full w-80 bg-gray-lighter shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-sans text-gray-darker">Menu</h2>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-gray-darker hover:text-pink transition-colors"
                  aria-label="Close mobile menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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

              {/* Mobile navigation items will go here */}
              <div className="space-y-4">
                {/* About ASSU */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-sans text-gray-darker mb-2">
                    About ASSU
                  </h3>
                  <div className="space-y-2 ml-4">
                    {aboutItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-sm hover:text-pink transition-colors ${
                          isSubrouteActive(item.href)
                            ? "text-pink font-semibold"
                            : "text-gray-dark"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Course Unions */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-sans text-gray-darker mb-2">
                    Course Unions
                  </h3>
                  <div className="space-y-2 ml-4">
                    {courseUnionsItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-sm hover:text-pink transition-colors ${
                          isSubrouteActive(item.href)
                            ? "text-pink font-semibold"
                            : "text-gray-dark"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Get Involved */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-sans text-gray-darker mb-2">
                    Get Involved
                  </h3>
                  <div className="space-y-2 ml-4">
                    {getInvolvedItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-sm hover:text-pink transition-colors ${
                          isSubrouteActive(item.href)
                            ? "text-pink font-semibold"
                            : "text-gray-dark"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div className="border-b border-gray-200 pb-4">
                  <Link
                    href="/gallery"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-sans hover:text-pink transition-colors ${
                      isRouteActive("/gallery")
                        ? "text-pink font-semibold"
                        : "text-gray-darker"
                    }`}
                  >
                    Gallery
                  </Link>
                </div>

                {/* Awards & Grants */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-sans text-gray-darker mb-2">
                    Awards & Grants
                  </h3>
                  <div className="space-y-2 ml-4">
                    {awardsGrantsItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-sm hover:text-pink transition-colors ${
                          isSubrouteActive(item.href)
                            ? "text-pink font-semibold"
                            : "text-gray-dark"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Services & Resources */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-sans text-gray-darker mb-2">
                    Services & Resources
                  </h3>
                  <div className="space-y-2 ml-4">
                    {servicesResourcesItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-sm hover:text-pink transition-colors ${
                          isSubrouteActive(item.href)
                            ? "text-pink font-semibold"
                            : "text-gray-dark"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact Us */}
                <div className="pb-4">
                  <Link
                    href="/contact-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-sans hover:text-pink transition-colors ${
                      isRouteActive("/contact-us")
                        ? "text-pink font-semibold"
                        : "text-gray-darker"
                    }`}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
