'use client'

import { BaggageClaim, Bed, BedDouble, BrushCleaning, Clock4, HandCoins, PhoneCall, RotateCcwKey, School, Shirt, Warehouse, WashingMachine } from "lucide-react"
import Link from "next/link"

export default function Facilities(){
    return(
        <div className="facilities space">
            <div className="container">
                <img src="images/facilities.jpg" className="mb-5" alt="" />
                <div className="title text-center">
                    <span>Services & More</span>
                    <h2>Hotel Facilities</h2>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="faci">
                            <RotateCcwKey />
                            <h3>Smart Key</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="faci">
                            <School />
                            <h3>Room Service</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="faci">
                            <BaggageClaim />
                            <h3>Luggage Store</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="faci">
                            <BrushCleaning />
                            <h3>Daily Sanitation</h3>
                        </div>
                    </div>
                </div>

                <div className="fatured_amenities">
                    <h2 className="title">Featured Amenities on Site</h2>
                    <nav>
                    <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                        <button className="nav-link" id="nav-one-tab" data-bs-toggle="tab" data-bs-target="#nav-one" type="button" role="tab" aria-controls="nav-one" aria-selected="true">Property Amenities (12)</button>
                        <button className="nav-link" id="nav-two-tab" data-bs-toggle="tab" data-bs-target="#nav-two" type="button" role="tab" aria-controls="nav-two" aria-selected="false">Room Amenities (3)</button>
                        <button className="nav-link active" id="nav-three-tab" data-bs-toggle="tab" data-bs-target="#nav-three" type="button" role="tab" aria-controls="nav-three" aria-selected="false">Hotel Services (8)</button>
                        <button className="nav-link" id="nav-four-tab" data-bs-toggle="tab" data-bs-target="#nav-four" type="button" role="tab" aria-controls="nav-four" aria-selected="false">Activities (5)</button>
                        <button className="nav-link" id="nav-five-tab" data-bs-toggle="tab" data-bs-target="#nav-five" type="button" role="tab" aria-controls="nav-five" aria-selected="false">View All (28)</button>
                    </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id="nav-one" role="tabpanel" aria-labelledby="nav-one-tab">
                        <div className="info">
                            <h3>Property Amenities</h3>
                            <div className="row">
                                <div className="col-md-3"><div className="ser"><Shirt /><p>Valet Dry Cleaning</p></div></div>
                                <div className="col-md-3"><div className="ser"><WashingMachine /><p>Same Day Dry Cleaning</p></div></div>
                                <div className="col-md-3"><div className="ser"><Clock4 /><p>24 Hour Room Service</p></div></div>
                                <div className="col-md-3"><div className="ser"><BedDouble /><p>Room Service</p></div></div>
                                <div className="col-md-3"><div className="ser"><PhoneCall /><p>Wake-Up Calls</p></div></div>
                                <div className="col-md-3"><div className="ser"><Bed /><p>Turndown Service</p></div></div>
                                <div className="col-md-3"><div className="ser"><HandCoins /><p>Service Request</p></div></div>
                                <div className="col-md-3"><div className="ser"><BrushCleaning /><p>Daily Housekeeping</p></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-two" role="tabpanel" aria-labelledby="nav-two-tab">
                        <div className="info">
                            <h3>Room Amenities</h3>
                            <div className="row">
                                <div className="col-md-3"><div className="ser"><Shirt /><p>Valet Dry Cleaning</p></div></div>
                                <div className="col-md-3"><div className="ser"><WashingMachine /><p>Same Day Dry Cleaning</p></div></div>
                                <div className="col-md-3"><div className="ser"><Clock4 /><p>24 Hour Room Service</p></div></div>
                                <div className="col-md-3"><div className="ser"><BedDouble /><p>Room Service</p></div></div>
                                <div className="col-md-3"><div className="ser"><PhoneCall /><p>Wake-Up Calls</p></div></div>
                                <div className="col-md-3"><div className="ser"><Bed /><p>Turndown Service</p></div></div>
                                <div className="col-md-3"><div className="ser"><HandCoins /><p>Service Request</p></div></div>
                                <div className="col-md-3"><div className="ser"><BrushCleaning /><p>Daily Housekeeping</p></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade show active" id="nav-three" role="tabpanel" aria-labelledby="nav-three-tab">
                        <div className="info">
                            <h3>Hotel Services On-Site</h3>
                            <div className="row">
                                <div className="col-md-3"><div className="ser"><Shirt /><p>Valet Dry Cleaning</p></div></div>
                                <div className="col-md-3"><div className="ser"><WashingMachine /><p>Same Day Dry Cleaning</p></div></div>
                                <div className="col-md-3"><div className="ser"><Clock4 /><p>24 Hour Room Service</p></div></div>
                                <div className="col-md-3"><div className="ser"><BedDouble /><p>Room Service</p></div></div>
                                <div className="col-md-3"><div className="ser"><PhoneCall /><p>Wake-Up Calls</p></div></div>
                                <div className="col-md-3"><div className="ser"><Bed /><p>Turndown Service</p></div></div>
                                <div className="col-md-3"><div className="ser"><HandCoins /><p>Service Request</p></div></div>
                                <div className="col-md-3"><div className="ser"><BrushCleaning /><p>Daily Housekeeping</p></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-four-tab">
                        <div className="info">
                            <h3>Activities</h3>
                            <div className="row">
                                <div className="col-md-3"><div className="ser"><Shirt /><p>Valet Dry Cleaning</p></div></div>
                                <div className="col-md-3"><div className="ser"><WashingMachine /><p>Same Day Dry Cleaning</p></div></div>
                                <div className="col-md-3"><div className="ser"><Clock4 /><p>24 Hour Room Service</p></div></div>
                                <div className="col-md-3"><div className="ser"><BedDouble /><p>Room Service</p></div></div>
                                <div className="col-md-3"><div className="ser"><PhoneCall /><p>Wake-Up Calls</p></div></div>
                                <div className="col-md-3"><div className="ser"><Bed /><p>Turndown Service</p></div></div>
                                <div className="col-md-3"><div className="ser"><HandCoins /><p>Service Request</p></div></div>
                                <div className="col-md-3"><div className="ser"><BrushCleaning /><p>Daily Housekeeping</p></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-five" role="tabpanel" aria-labelledby="nav-five-tab">
                        <div className="info">
                            <h3>View all Amenities</h3>
                            <div className="row">
                                <div className="col-md-3"><div className="ser"><Shirt /><p>Valet Dry Cleaning</p></div></div>
                                <div className="col-md-3"><div className="ser"><WashingMachine /><p>Same Day Dry Cleaning</p></div></div>
                                <div className="col-md-3"><div className="ser"><Clock4 /><p>24 Hour Room Service</p></div></div>
                                <div className="col-md-3"><div className="ser"><BedDouble /><p>Room Service</p></div></div>
                                <div className="col-md-3"><div className="ser"><PhoneCall /><p>Wake-Up Calls</p></div></div>
                                <div className="col-md-3"><div className="ser"><Bed /><p>Turndown Service</p></div></div>
                                <div className="col-md-3"><div className="ser"><HandCoins /><p>Service Request</p></div></div>
                                <div className="col-md-3"><div className="ser"><BrushCleaning /><p>Daily Housekeeping</p></div></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}