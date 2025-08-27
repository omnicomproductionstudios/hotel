'use client'

import { BedSingle, CarFront, ChefHat, MapPinHouse, School, SquareStar, TramFront, WavesLadder } from "lucide-react"

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
                            <BedSingle />
                            <p>Stay in Heritage Rooms depicting the British era</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="box">
                            <CarFront />
                            <p>Just 90 Mins from Delhi/NCR on NH-24</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="box">
                            <SquareStar />
                            <p>State of an art infrastructure with all modern amenities</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="box">
                            <ChefHat />
                            <p>Multi Cuisine Restaurant and open dining areas</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="box">
                            <WavesLadder />
                            <p>Swimming Pool and array of activities</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="box">
                            <MapPinHouse />
                            <p>Ideal for Theme Destination Wedding</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="box">
                            <School />
                            <p>Spacious conference hall with all amenities</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="box">
                            <TramFront />
                            <p>Suitable for day picnic and excursions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}