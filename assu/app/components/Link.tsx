import NextLink from "next/link";

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export default function Link({ children, href }: LinkProps) {
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  // For external links, use a regular anchor tag with proper security attributes
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink font-bold underline"
        tabIndex={0}
      >
        {children}
      </a>
    );
  }

  // For internal links, use Next.js Link
  return (
    <NextLink
      href={href}
      className="text-pink font-bold underline"
      tabIndex={0}
    >
      {children}
    </NextLink>
  );
}
