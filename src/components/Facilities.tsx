'use client'

import Link from "next/link"

export default function Facilities(){
    return(
        <div className="facilities space">
            <div className="container">
                <div className="title text-center pb-4">
                    <span>Highlights</span>
                    <h2>Property Highlights</h2>
                    <p>It&apos;s not just a stay, Live the experience</p>
                </div>
                <div className="row g-5">
                    <div className="col-md-4">
                        <div className="box">
                            <img src="images/room-f1.png" alt="icon" />
                            <div className="content">
                                <h3>Airport Pick-up Service</h3>
                                <p>Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box">
                            <img src="images/room-f2.png" alt="icon" />
                            <div className="content">
                                <h3>Housekeeper Services</h3>
                                <p>Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box">
                            <img src="images/room-f3.png" alt="icon" />
                            <div className="content">
                                <h3>Wifi & Internet</h3>
                                <p>Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box">
                            <img src="images/room-f4.png" alt="icon" />
                            <div className="content">
                                <h3>Laundry Services</h3>
                                <p>Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box">
                            <img src="images/room-f5.png" alt="icon" />
                            <div className="content">
                                <h3>Breakfast in Bed</h3>
                                <p>Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box">
                            <img src="images/room-f6.png" alt="icon" />
                            <div className="content">
                                <h3>Private Parking Space</h3>
                                <p>Lorem ipsum proin gravida velit auctor alueut aenean sollicitu din, lorem auci elit consequat ipsutissem niuis sed odio sit amet a sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}