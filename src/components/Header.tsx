'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site_header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Logo */}
          <Link href="/" className="navbar-brand">
            <Image
              src="/images/logo-black.png"
              alt="Logo"
              width={110}
              height={106}
              priority
            />
          </Link>

          {/* Navbar toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link ${pathname === '/' ? 'active' : ''}`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/about"
                  className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/rooms/heritage"
                  className={`nav-link ${pathname.startsWith("/rooms") ? 'active' : ''}`}
                >
                  Rooms
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/restaurant"
                  className={`nav-link ${pathname === '/restaurant' ? 'active' : ''}`}
                >
                  Restaurant
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/gallery"
                  className={`nav-link ${pathname === '/gallery' ? 'active' : ''}`}
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/activity"
                  className={`nav-link ${pathname === '/activity' ? 'active' : ''}`}
                >
                  Activities
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/blog"
                  className={`nav-link ${pathname.startsWith("/blog") ? 'active' : ''}`}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contact"
                  className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/booking" className="nav-link cta">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}