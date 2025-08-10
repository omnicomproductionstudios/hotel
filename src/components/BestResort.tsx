'use client'

import Link from "next/link"

export default function BestResort(){
    return(
        <div className="best_resort space">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6">
                        <img src="images/best-resort.png" alt="Best Resort" />
                    </div>
                    <div className="col-md-5">
                        <span>Enjoy your Stay</span>
                        <h2>Luxury furnished serviced apartments in Times Square</h2>
                        <p>Located in Times Square, CozyStay apartment hotel provide a peaceful, private retreat in the heart of one of the world’s most iconic cities. Experience a sophisticated blend of professional services and home comforts. We proudly offers a full range of complimentary amenities and services that provide you with everything you need for an inspiring stay.</p>
                        <Link href="/" className="cta">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}