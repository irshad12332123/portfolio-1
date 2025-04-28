import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Created by [Your Name]",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <Link href="/">Home</Link> |<Link href="/about">About</Link> |
          <Link href="/projects">Projects</Link> |
          <Link href="/contact">Contact</Link>
        </nav>
        <main style={{ padding: "1rem" }}>{children}</main>
        <footer
          style={{
            padding: "1rem",
            borderTop: "1px solid #ccc",
            textAlign: "center",
          }}
        >
          © 2025 [Your Name]
        </footer>
      </body>
    </html>
  );
}
