"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavBar() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "С 8-Марта" },
    { href: "/arailym", label: "Арайлым" },
    { href: "/adina", label: "Адина" },
    { href: "/karlygash", label: "Карлыгаш" },
  ]

  return (
    <nav className="flex gap-8 text-gray-300">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`hover:text-pink-300 transition-colors ${
            pathname === link.href ? "bg-pink-300/20 text-pink-300 px-4 py-1 rounded-full" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

