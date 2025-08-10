'use client'

import Link from "next/link"

export default function HomeHero(){
    return(
        <div className="homeHero">
            <div className="container">
                <div className="text-center">
                    <h2>Suites & Apartments</h2>
                    <p>Check out latest seasonal promotions</p>
                    <Link className="cta" href="/">Check All Rooms</Link>
                </div>
            </div>
        </div>
    )
}