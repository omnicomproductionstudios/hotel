
'use client'

import Link from "next/link"

export default function Activities(){
    return(
        <>
        <div className="activities space">
            <div className="container">
                <div className="activity">
                    <div className="row align-items-center g-0">
                        <div className="col-md-6">
                            <div className="box">
                                <h3>Royal Destination Weddings</h3>
                                <p>Planning a royal destination wedding near Delhi that offers the perfect blend of luxury, tradition, and convenience. The Fort Unchagaon, by Aspen blends it up all with a lavish heritage colonial palace, sprawling lawn spaces, grand banquet hall, multiple venues for functions and exquisite décor theme tailored as per your theme.</p>
                                <Link href="/" className="cta">Read More</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="/images/acti1.jpg" alt="activity" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="activities two space">
            <div className="container">
                <div className="title">
                    <h2>Things to do at Unchagoan</h2>
                </div>
                <div className="activity">
                    <div className="row align-items-center g-0">
                        <div className="col-md-6">
                            <img src="/images/acti2.jpg" alt="activity" />
                        </div>
                        <div className="col-md-6">
                            <div className="box">
                                <h3>Activity</h3>
                                <p>As a boutique resort near Delhi, we offer a curated selection of activities for all age groups. From indoor and outdoor sports to a variety of traditional and team-building setups, we have ensured there is never a dull moment during your stay with us.</p>
                                <Link href="/" className="cta">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="activity">
                    <div className="row align-items-center g-0">
                        <div className="col-md-6">
                            <div className="box">
                                <h3>Pre wedding photoshoot</h3>
                                <p>Looking to capture your best memories before you wedding? Well, Pre-wedding photography at Fort Unchagaon offers a perfect blend of history and romance. Couples can capture timeless moments against grand arches, rustic walls, and serene courtyards. The fort’s scenic surroundings, including the nearby Ganges River and lush landscapes, add natural beauty to the shoot.</p>
                                <Link href="/" className="cta">Read More</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="/images/acti3.jpg" alt="activity" />
                        </div>
                    </div>
                </div>
                <div className="activity">
                    <div className="row align-items-center g-0">
                        <div className="col-md-6">
                            <img src="/images/acti4.jpg" alt="activity" />
                        </div>
                        <div className="col-md-6">
                            <div className="box">
                                <h3>Day Picnics & Trips</h3>
                                <p>Planning a quick day trip with friends and family? The Fort Unchagaon offers a one-of-a-kind experience, blending a heritage tour, exciting activities, and some of the finest cuisine, making it an ideal destination for day picnics near Delhi.</p>
                                <Link href="/" className="cta">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="activity">
                    <div className="row align-items-center g-0">
                        <div className="col-md-6">
                            <div className="box">
                                <h3>Wildlife at Mudfort</h3>
                                <p>Planning a quick day trip with friends and family? The Fort Unchagaon offers a one-of-a-kind experience, blending a heritage tour, exciting activities, and some of the finest cuisine, making it an ideal destination for day picnics near Delhi.</p>
                                <Link href="/" className="cta">Read More</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="/images/acti5.jpg" alt="activity" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="resort-feci space">
                <div className="container">
                <div className="faci">
                <div className="title mb-2">
                    <h2>RESORT FACILITIES</h2>
                </div>
                <p>The melody of the leaves and the gentle breathe of the mango trees soothes all who visit the Mango Tree Resort. All the facilities are furnished for a comfortable and poised experience.</p>
                <p>Inspired by the rich landscape of the deciduous mango orchids, the Mango Tree Resorts welcomes you to a tranquil sanctuary. At the resort, we offer a wide range of facilities ranging from a swimming pool to a recreation area. Poolside service, light meals, and snacks are also available.</p>
            </div>
            <div className="row g-0">
                <div className="col-lg-3 col-6">
                    <div className="box">
                        <img src="images/f1.jpg" alt="" />
                        <p>Swimming Pool</p>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="box">
                        <img src="images/f2.jpg" alt="" />
                        <p>Recreation Room</p>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="box">
                        <img src="images/f3.jpg" alt="" />
                        <p>Wedding Area</p>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="box">
                        <img src="images/f4.jpg" alt="" />
                        <p>Play Zone</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}