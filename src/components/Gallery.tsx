'use client'

import Link from "next/link"


export default function Gallery(){
    return(
        <div className="gallery space_bottom">
            <div className="container">
                <div className="text-center title">
                    <h2>Gallery</h2>
                    <p>Check out latest seasonal promotions</p>
                </div>

                <div className="gallery">
                    <div className="row g-4">
                        <div className="col-lg-8 col-md-6">
                            <div className="image">
                                <Link href="/gallery">
                                    <img src="/images/room.jpg" alt="image" />
                                    <div className="copy">
                                        <span>Premium Cottage</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="image">
                                <Link href="/gallery">
                                    <img src="/images/room1.jpg" alt="image" />
                                    <div className="copy">
                                        <span>Reception</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="image">
                                <Link href="/gallery">
                                    <img src="/images/room4.jpg" alt="image" />
                                    <div className="copy">
                                        <span>Restaurant</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="image">
                                <Link href="/gallery">
                                    <img src="/images/room3.jpg" alt="image" />
                                    <div className="copy">
                                        <span>Swimming Pool</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="image">
                                <Link href="/gallery">
                                    <img src="/images/acti2.jpg" alt="image" />
                                    <div className="copy">
                                        <span>Play Zone</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}