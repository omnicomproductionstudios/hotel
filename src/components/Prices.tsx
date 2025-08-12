'use client'

import { Check } from "lucide-react"
import Link from "next/link"

export default function Prices(){
    return(
        <div className="prices space">
            <div className="container">
                <div className="title text-center">
                    <span>Our room prices</span>
                    <h2>The Best Room Prices</h2>
                </div>
                <div className="row align-items-center g-5">
                    <div className="col-md-4">
                        <div className="price_box">
                            <h3>Small Room</h3>
                            <h4><span>$</span> 52,00 / night</h4>
                            <ul>
                                <li><Check /> Vestibulum maximus el</li>
                                <li><Check /> Quisque vulputate conse</li>
                                <li><Check /> Nunc dictum ligula mollis</li>
                                <li><Check /> Sed vitae tortor sed diam</li>
                            </ul>
                            <Link href="/" className="cta">Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="price_box two">
                            <h3>Extra Suite</h3>
                            <h4><span>$</span> 78,00 / night</h4>
                            <ul>
                                <li><Check /> Vestibulum maximus el</li>
                            <li><Check /> Quisque vulputate conse</li>
                            <li><Check /> Nunc dictum ligula mollis</li>
                            <li><Check /> Sed vitae tortor sed diam</li>
                            </ul>
                            <Link href="/" className="cta">Read More</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="price_box three">
                            <h3>Apartment</h3>
                            <h4><span>$</span> 95,00 <span>/ night</span></h4>
                            <ul>
                                <li><Check /> Vestibulum maximus el</li>
                            <li><Check /> Quisque vulputate conse</li>
                            <li><Check /> Nunc dictum ligula mollis</li>
                            <li><Check /> Sed vitae tortor sed diam</li>
                            </ul>
                            <Link href="/" className="cta">Read More</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}