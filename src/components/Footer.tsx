'use client'

import { Facebook, Instagram, Mail, PhoneCall, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer(){
    return(
    <footer className="site_footer py-5"> 
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img src="images/logo-black.png" width="110px" alt="" />
                    <p>Kuchesar~Siyana Road, Kuchesar, Uttar Pradesh 245402</p>
                    <ul>
                        <li><Link href="/"><PhoneCall /> +91 9871587150 </Link></li>
                        <li><Link href="/"><Mail /> info@mudfortkuchesar.com</Link></li>
                    </ul>
                </div>   
                <div className="col-md-6">
                    <h3>Explore</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li><Link href="/history">History</Link></li>
                                <li><Link href="/about-aspen">About Aspen</Link></li>
                                <li><Link href="/property-highlights">Property Highlights</Link></li>
                                <li><Link href="/accommodation">Accommodation</Link></li>
                                <li><Link href="/activities">Activities</Link></li>
                                <li><Link href="/experiences">Experiences</Link></li>
                                <li><Link href="/gallery">Gallery</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                 <li><Link href="/destination-weddings">Destination Weddings</Link></li>
                                <li><Link href="/advertising-shoots">Advertising Shoots</Link></li>
                                <li><Link href="/places-to-visit-near-delhi">Places to Visit near Delhi</Link></li>
                                <li><Link href="/luxury-resorts-near-delhi">Luxury Resorts near Delhi</Link></li>
                                <li><Link href="/special-offers">Special Offers</Link></li>
                                <li><Link href="/holi-packages">Holi Packages</Link></li>
                                <li><Link href="/pre-wedding-shoot">Pre Wedding Shoot</Link></li>
                                <li><Link href="/day-piknic-package">Day Piknic Package</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                </div> 
                <div className="col-md-3">
                    <h3>Social</h3>
                    <ul className="social">
                        <li><Link href="/"><Facebook /></Link></li>
                        <li><Link href="/"><Youtube /></Link></li>
                        <li><Link href="/"><Instagram /></Link></li>
                    </ul>
                </div>
            </div>    
        </div> 
    </footer>
    )
}