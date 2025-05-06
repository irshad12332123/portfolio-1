import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link href="/">Home</Link> |
        <Link href="/projects">Projects</Link> |
        <Link href="/about">About</Link> |
        <Link href="/contact">Contact</Link>
      </nav>
      <main>{children}</main>
      <footer>© 2025 Md Irshad</footer>
    </>
  );
}
