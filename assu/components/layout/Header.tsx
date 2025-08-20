"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DropdownMenu from "../common/DropdownMenu";
import MobileSidebar from "./MobileSidebar";

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
    { label: "ASSU Executives", href: "/about/executives" },
    { label: "ASSU Staff", href: "/about/staff" },
  ];

  const courseUnionsItems = [
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
      role="banner"
      aria-label="Main navigation header"
    >
      <nav
        className="flex justify-between items-center max-w-7xl mx-auto"
        role="navigation"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="flex-shrink-0"
          aria-label="Go to ASSU homepage"
        >
          <Image
            src="/images/assulogo.webp"
            alt="ASSU - Arts and Science Students' Union logo"
            width={100}
            height={100}
            className="w-14 sm:w-16 md:w-18 lg:w-20 xl:w-24 transition-all duration-300"
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className={`mobile-menu-button p-2 text-gray-darker hover:text-pink ${
            isMobileMenuOpen ? "hidden" : ""
          }`}
          aria-label="Toggle mobile navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-haspopup="true"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <ul
          className="desktop-nav items-center space-x-3 lg:space-x-5 xl:space-x-8"
          role="menubar"
          aria-label="Main navigation menu"
        >
          <li role="none">
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
          <li role="none">
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
          <li role="none">
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
            role="none"
            className={`${navItemClasses} ${
              isRouteActive("/gallery") ? activeNavItemClasses : ""
            }`}
          >
            <Link
              href="/gallery"
              role="menuitem"
              aria-current={isRouteActive("/gallery") ? "page" : undefined}
            >
              Gallery
            </Link>
          </li>
          <li role="none">
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
          <li role="none">
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
            role="none"
            className={`${navItemClasses} ${
              isRouteActive("/contact-us") ? activeNavItemClasses : ""
            }`}
          >
            <Link
              href="/contact-us"
              role="menuitem"
              aria-current={isRouteActive("/contact-us") ? "page" : undefined}
            >
              Contact Us
            </Link>
          </li>
          {/* <li className={navItemClasses}>
            <Link href="/faq">FAQ</Link>
          </li> */}
        </ul>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <MobileSidebar
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          aboutItems={aboutItems}
          courseUnionsItems={courseUnionsItems}
          getInvolvedItems={getInvolvedItems}
          awardsGrantsItems={awardsGrantsItems}
          servicesResourcesItems={servicesResourcesItems}
          isRouteActive={isRouteActive}
          isSubrouteActive={isSubrouteActive}
        />
      )}
    </header>
  );
}
