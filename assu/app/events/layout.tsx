export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <main>{children}</main>
    </div>
  );
}
