import NextLink from "next/link";

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export default function Link({ children, href }: LinkProps) {
  return (
    <NextLink href={href} className="font-sans text-pink font-bold underline">
      {children}
    </NextLink>
  );
}
