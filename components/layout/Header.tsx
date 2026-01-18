"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import DropdownMenu from "../common/DropdownMenu";
import MobileSidebar from "./MobileSidebar";
import type { NavGroup } from "./nav";
import { useSidebar } from "@/components/ui/sidebar";

// --- small hooks -------------------------------------------------------------

function useScrolled(threshold = 0) {
  const [scrolled, set] = useState(false);
  useEffect(() => {
    const onScroll = () => set(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function useBodyLock(locked: boolean) {
  // simple: toggle overflow; avoids complex fixed/top dance
  useEffect(() => {
    if (!locked) return;
    const { scrollY } = window;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
      window.scrollTo(0, scrollY);
    };
  }, [locked]);
}

// --- data --------------------------------------------------------------------

const NAV: NavGroup[] = [
  {
    type: "dropdown",
    label: "About ASSU",
    href: "/about",
    items: [
      { label: "ASSU Executives", href: "/about/executives" },
      { label: "ASSU Staff", href: "/about/staff" },
      { label: "Documents", href: "/about/documents" },
    ],
  },
  {
    type: "dropdown",
    label: "Course Unions",
    href: "/course-unions",
    items: [
      { label: "Resources for Unions", href: "/course-unions/union-resources" },
    ],
  },
  {
    type: "dropdown",
    label: "Get Involved",
    href: "/get-involved",
    items: [
      { label: "Upcoming Events", href: "/get-involved/upcoming" },
      { label: "Our Initiatives", href: "/get-involved/initiatives" },
      { label: "Current Projects", href: "/get-involved/current" },
    ],
  },
  {
    type: "dropdown",
    label: "Awards & Grants",
    href: "/awards-and-grants",
    items: [
      { label: "ASSU Awards", href: "/awards-and-grants/awards" },
      { label: "ASSU Grants", href: "/awards-and-grants/grants" },
    ],
  },
  {
    type: "dropdown",
    label: "Services & Resources",
    href: "/services-and-resources",
    items: [
      {
        label: "Office Services",
        href: "/services-and-resources/office-services",
      },
      { label: "Past Test Library", href: "/services-and-resources/tests" },
      {
        label: "Free Academic Resources",
        href: "/services-and-resources/resources",
      },
      { label: "Academic Handbook", href: "/services-and-resources/handbook" },
      { label: "Useful Links", href: "/services-and-resources/misc" },
    ],
  },
  {
    type: "link",
    label: "Contact Us",
    href: "/contact-us",
  },
];

// --- component ---------------------------------------------------------------

export default function Header() {
  const pathname = usePathname();
  const isScrolled = useScrolled(0);
  const { setOpenMobile, openMobile } = useSidebar();
  useBodyLock(openMobile);

  const onToggle = useCallback(() => {
    setOpenMobile(!openMobile);
  }, [setOpenMobile, openMobile]);

  // unified active checker
  const isActive = useCallback(
    (href: string, exact = false) =>
      exact
        ? pathname === href
        : href === "/"
        ? pathname === "/"
        : pathname.startsWith(href),
    [pathname]
  );

  const navItemClasses = "hover:text-pink transition-colors duration-300";
  const activeNavItemClasses = "text-pink";

  // memoized nav (stable reference for children)
  const nav = useMemo(() => NAV, []);

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
        aria-label="Primary"
      >
        <Link
          href="/"
          className="flex-shrink-0"
          aria-label="Go to ASSU homepage"
        >
          <Image
            src="/images/assulogo.webp"
            alt="ASSU - Arts and Science Students' Union logo"
            width={70}
            height={70}
            className="w-14 sm:w-16 md:w-18 lg:w-20 xl:w-24 transition-all duration-300"
            priority
          />
        </Link>

        {/* Mobile button */}
        <div className="mobile-menu-button">
          <button
            onClick={onToggle}
            className="p-2 text-gray-darker hover:text-pink"
            aria-label="Toggle mobile navigation menu"
            aria-expanded={openMobile}
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
        </div>

        <ul className="desktop-nav items-center space-x-3 lg:space-x-5 xl:space-x-8 pr-6 sm:pr-10">
          {nav.map((g) => (
            <li key={g.href}>
              {g.type === "dropdown" ? (
                <DropdownMenu
                  label={g.label}
                  href={g.href}
                  items={g.items}
                  className={`${navItemClasses} ${
                    isActive(g.href) ? activeNavItemClasses : ""
                  }`}
                  isActive={isActive(g.href)}
                  isSubrouteActive={(href: string) => isActive(href, true)}
                />
              ) : (
                <Link
                  href={g.href}
                  className={`${navItemClasses} ${
                    isActive(g.href, true) ? activeNavItemClasses : ""
                  }`}
                  aria-current={isActive(g.href, true) ? "page" : undefined}
                >
                  {g.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <MobileSidebar
        nav={nav}
        isRouteActive={(href: string) => isActive(href)}
        isSubrouteActive={(href: string) => isActive(href, true)}
      />
    </header>
  );
}
