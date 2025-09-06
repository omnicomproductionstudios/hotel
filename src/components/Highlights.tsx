'use client'

import { CarFront, Castle, Footprints, HandPlatter, PartyPopper, TentTree, Warehouse, WavesLadder } from "lucide-react"

export default function Highlights(){
    return(
        <div className="highlights space_bottom">
            <div className="container">
                <div className="title">
                    <h2>Property Highlights</h2>
                    <p>It&apos;s not just a stay, Live the experience</p>
                </div>
                <div className="row g-5">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="box">
                            <Castle />
                            <p>280+ year-old royal heritage fort</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="box">
                            <CarFront />
                            <p>Just 90 mins drive from Delhi NCR </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="box">
                            <Warehouse />
                            <p>Spacious rooms with old-world charm</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="box">
                            <PartyPopper />
                            <p>Lush lawns for weddings & celebrations</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="box">
                            <HandPlatter />
                            <p>Restaurant & heritage-style lounge</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="box">
                            <WavesLadder />
                            <p>Outdoor pool and leisure spaces</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="box">
                            <Footprints />
                            <p>Enjoy bird watching and nature walks</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="box">
                            <TentTree />
                            <p>Ideal for family trips and corporate retreats</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}