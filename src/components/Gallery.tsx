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
                                    <img src="/images/gallery/2.jpg" alt="room"/>
                                    <div className="copy">
                                        <span>Resort</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="image">
                                <Link href="/gallery">
                                    <img src="/images/gallery/1.jpg" alt="room"/>
                                    <div className="copy">
                                        <span>Rooms</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="image">
                                <Link href="/gallery">
                                    <img src="/images/gallery/17.jpg" alt="room"/>
                                    <div className="copy">
                                        <span>Outdoor</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="image">
                                <Link href="/gallery">
                                    <img src="/images/gallery/27.jpg" alt="room"/>
                                    <div className="copy">
                                        <span>Indoor</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="image">
                                <Link href="/gallery">
                                    <img src="/images/gallery/12.jpg" alt="room"/>
                                    <div className="copy">
                                        <span>Swimming Pool</span>
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