interface TextProps {
  children: React.ReactNode;
}

export default function Text({ children }: TextProps) {
  return <p>{children}</p>;
}
