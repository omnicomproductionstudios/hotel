'use client'

import Link from "next/link"
type HeroProps = {
  bgImage: string;
};

export default function HomeHero({ bgImage }: HeroProps){
    return(
        <div className="homeHero" style={{backgroundImage: `url(${bgImage})`,}}>
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