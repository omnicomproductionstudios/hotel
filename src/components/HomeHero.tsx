'use client'

import Link from "next/link"

export default function HomeHero(){
    return(
        <div className="homeHero">
            <div className="container">
                <div className="hero-content">
                    <h2>Suites &<br/>Apartments</h2>
                    <p>Check our Latest Seasional Promotions</p>
                    <Link className="cta" href="/">Check All Rooms</Link>
                </div>
            </div>
        </div>
    )
}