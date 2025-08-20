"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import DropdownMenu from "../common/DropdownMenu";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`sticky top-0 z-50 bg-gray-lighter pl-50 pr-8 py-8 transition-shadow duration-300 ${
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
            className="w-auto"
          />
        </Link>

        <ul className="flex items-center space-x-8">
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
    </header>
  );
}
