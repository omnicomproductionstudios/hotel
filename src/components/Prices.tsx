'use client'

import Link from "next/link"

export default function Prices(){
    return(
        <div className="prices space_bottom">
            <div className="container">
                <div className="title text-center">
                    <span>Our room prices</span>
                    <h2>The Best Room Prices</h2>
                </div>
                <div className="row g-5">
                    <div className="col-md-4">
                        <div className="price_box">
                            <h3>Small Room</h3>
                            <h4><span>$</span> 52,00 <span>/ night</span></h4>
                            <ul>
                                <li><img src="images/check.svg" alt="" /> Free Wi-Fi</li>
                                <li><img src="images/check.svg" alt="" /> Air conditioning</li>
                                <li><img src="images/check.svg" alt="" /> Flat-screen TV</li>
                                <li><img src="images/check.svg" alt="" /> Mini-fridge</li>
                                <li><img src="images/check.svg" alt="" /> Private bathroom</li>
                            </ul>
                            <Link href="/" className="cta">Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="price_box two">
                            <h3>Extra Suite</h3>
                            <h4><span>$</span> 52,00 <span>/ night</span></h4>
                            <ul>
                                <li><img src="images/check.svg" alt="" /> Free Wi-Fi</li>
                                <li><img src="images/check.svg" alt="" /> Air conditioning</li>
                                <li><img src="images/check.svg" alt="" /> Flat-screen TV</li>
                                <li><img src="images/check.svg" alt="" /> Mini-fridge</li>
                                <li><img src="images/check.svg" alt="" /> Private bathroom</li>
                            </ul>
                            <Link href="/" className="cta">Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="price_box three">
                            <h3>Apartment</h3>
                            <h4><span>$</span> 52,00 <span>/ night</span></h4>
                            <ul>
                                <li><img src="images/check.svg" alt="" /> Free Wi-Fi</li>
                                <li><img src="images/check.svg" alt="" /> Air conditioning</li>
                                <li><img src="images/check.svg" alt="" /> Flat-screen TV</li>
                                <li><img src="images/check.svg" alt="" /> Mini-fridge</li>
                                <li><img src="images/check.svg" alt="" /> Private bathroom</li>
                            </ul>
                            <Link href="/" className="cta">Read More</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}