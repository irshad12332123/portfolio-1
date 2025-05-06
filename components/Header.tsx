"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname(); // to highlight active link

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/user.png" alt="Logo" width={40} height={40} />
        <span className="font-bold text-xl tracking-wide"> Irshad</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`hover:text-blue-400 transition-colors ${
              pathname === item.href ? "text-blue-400 font-semibold" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
