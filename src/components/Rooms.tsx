'use client'

import Link from "next/link"
import { ChevronRight } from 'lucide-react';

export default function Rooms(){
    return(
        <div className="rooms space">
            <div className="container">
                <div className="title text-center">
                    <span>Book your stay</span>
                    <h2>Book your stay and<br/>relaxin luxury hotel</h2>
                </div>
                <div className="row g-5">
                    <div className="col-md-4">
                        <div className="room">
                            <img src="images/room1.jpg" alt="room" />
                            <div className="content">
                                <h3>Royal Suite</h3>
                                <div className="price">
                                    $199 / Night
                                </div>
                                <ul>
                                    <li>90 m2</li>
                                    <li>4 Guests</li>
                                    <li>3 Beds</li>
                                    <li>3 Bathrooms</li>
                                </ul>
                                <p>The dark wood panelling and furnishings, red-draped fourposter bed, and black stone bathroom evoke the charm of a secluded Sierra Nevada.</p>
                                <Link href="/rooms/royal-suite" className="cta">Discover More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="room">
                            <img src="images/room.jpg" alt="room" />
                            <div className="content">
                                <h3>Premier Room</h3>
                                <div className="price">
                                    $199 / Night
                                </div>
                                <ul>
                                    <li>90 m2</li>
                                    <li>4 Guests</li>
                                    <li>3 Beds</li>
                                    <li>3 Bathrooms</li>
                                </ul>
                                <p>The dark wood panelling and furnishings, red-draped fourposter bed, and black stone bathroom evoke the charm of a secluded Sierra Nevada.</p>
                                <Link href="/rooms/royal-suite" className="cta">Discover More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="room">
                            <img src="images/room.jpg" alt="room" />
                            <div className="content">
                                <h3>Skyline Suite</h3>
                                <div className="price">
                                    $199 / Night
                                </div>
                                <ul>
                                    <li>90 m2</li>
                                    <li>4 Guests</li>
                                    <li>3 Beds</li>
                                    <li>3 Bathrooms</li>
                                </ul>
                                <p>The dark wood panelling and furnishings, red-draped fourposter bed, and black stone bathroom evoke the charm of a secluded Sierra Nevada.</p>
                                <Link href="/rooms/royal-suite" className="cta">Discover More</Link>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}