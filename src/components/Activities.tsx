
'use client'

import Link from "next/link"

export default function Activities(){
    return(
        <div className="activities space">
            <div className="container">
                <div className="title text-center">
                    <span>Activities</span>
                    <h2>Introducing Our Activities</h2>
                </div>
                <div className="activity">
                    <div className="row align-items-center g-0">
                        <div className="col-md-6">
                            <img src="images/activity1.jpg" alt="activity" />
                        </div>
                        <div className="col-md-6">
                            <div className="box">
                                <span>Works & Meetings</span>
                                <h3>Stylish Meeting Spaces</h3>
                                <p>The hotel offers three intimate meeting rooms, each accommodating up to ten guests for formal meetings. Equipped with wireless Internet access, speakerphone and tables with chairs.</p>
                                <Link href="/" className="cta">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="activity">
                    <div className="row align-items-center g-0">
                        <div className="col-md-6">
                            <div className="box">
                                <span>Wellness</span>
                                <h3>Spa, Massage, Sauna</h3>
                                <p>In the hotel spa center we offer an exceptional well-being experience combining our expertise, high technology and breathtaking results.</p>
                                <Link href="/" className="cta">Read More</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="images/activity2.jpg" alt="activity" />
                        </div>
                    </div>
                </div>
                <div className="activity">
                    <div className="row align-items-center g-0">
                        <div className="col-md-6">
                            <img src="images/activity3.jpg" alt="activity" />
                        </div>
                        <div className="col-md-6">
                            <div className="box">
                                <span>Training Spaces</span>
                                <h3>Workout & Yoga Rooms</h3>
                                <p>Our fitness centre includes a fully equipped gym, yoga room and dance studio. Maintain your fitness routine during the trip over the stunning views of the city.</p>
                                <Link href="/" className="cta">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}