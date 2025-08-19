'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header(){

    const pathname = usePathname();

    return(
        <header className="site_header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" href="#"><img src="images/logo-black.png" alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/' ? 'active': ''}`} aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/about' ? 'active': ''}`} href="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/rooms' ? 'active': ''}`} href="#">Rooms</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/restaurant' ? 'active': ''}`} href="#">Restaurant</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/gallery' ? 'active': ''}`} href="#">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/activity' ? 'active': ''}`} href="#">Activities</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/blog' ? 'active': ''}`} href="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname === '/contact' ? 'active': ''}`} href="#">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link cta" href="#">Book Now</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}