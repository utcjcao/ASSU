import React from "react";
import Link from "@/components/common/Link";

export interface LinkItem {
  title: string;
  href: string;
  description: string;
}

export interface LinkSectionProps {
  header: string;
  links: LinkItem[];
  isArrowFilled?: boolean;
  className?: string;
}

export default function LinkSection({
  header,
  links,
  isArrowFilled = false,
  className = "",
}: LinkSectionProps) {
  return (
    <div className={className}>
      {/* Main layout container */}
      <div className="flex h-full mb-6">
        {/* Left side - Header and Arrow */}
        <div className="flex flex-col justify-between w-45">
          {/* Header at top left */}
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] leading-tight">
            {header}
          </h2>

          {/* Arrow at bottom left */}
          <div className="mt-auto">
            {isArrowFilled ? (
              // Filled arrow
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                className="text-pink fill-current"
              >
                <path
                  d="M8 4v4H1v8h7v4l10-8z"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              // Unfilled arrow
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                className="text-pink stroke-current fill-none"
              >
                <path
                  d="M8 4v4H1v8h7v4l10-8z"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Vertical divider */}
        <div className="w-px bg-gray-500 ml-4 mr-6"></div>

        {/* Right side - Links */}
        <div className="flex-1">
          <div className="space-y-6">
            {links.map((link, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={link.href}>{link.title}</Link>
                </h3>
                <p className="text-[var(--color-text-primary)] leading-relaxed text-sm">
                  {link.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
