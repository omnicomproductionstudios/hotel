
'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link"
import { CookingPot, BedDouble, Wifi, Bath, LandPlot } from 'lucide-react';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';



export default function Activities(){
    return(
        <>
        <div className="activities space">
            <div className="container">
                <div className="activity">
                    <div className="row align-items-center g-0">
                        <div className="col-md-6">
                            <div className="box">
                                <h3>Royal Destination Wedding</h3>
                                <p>Make your wedding truly unforgettable at The Mud Fort Kuchesar, a palatial destination wedding venue just 90 minutes from Delhi NCR. With sprawling lawns, grand courtyards, and bespoke services, the fort offers a majestic backdrop for weddings, anniversaries, and royal celebrations that blend history with heartfelt moments.</p>
                                <Link href="/" className="cta">Read More</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="/images/gallery/31.jpg" alt="activity" />
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
                        <Swiper modules={[Pagination, Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false }} slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                    clickable: true,
                                    }} className="mySwiper">

                                    <SwiperSlide>
                                        <img src="/images/gallery/20.jpg" alt="activity" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/images/gallery/24.jpg" alt="activity" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/images/acti6.jpg" alt="activity" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/images/gallery/17.jpg" alt="activity" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/images/gallery/28.jpg" alt="activity" />
                                    </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-md-6">
                            <div className="box">
                                <h3>Activities at Mud Fort</h3>
                                <p>From team-building activities to pottery making and swimming, The Mud Fort offers experiences that blend fun and heritage. Guests can enjoy outdoor games, cultural workshops, and traditional village activities—making it a perfect getaway for families, corporates, and groups.</p>
                                <Link href="/" className="cta">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="activity">
                    <div className="row align-items-center g-0">
                        <div className="col-md-6">
                            <div className="box">
                                <h3>Pre-Wedding Photoshoot</h3>
                                <p>Turn your love story into timeless memories with a pre-wedding photoshoot at The Mud Fort Kuchesar. With heritage courtyards, lush gardens, and rustic fort walls, it’s one of the most charming pre-wedding photoshoot places near Delhi NCR, perfect for couples seeking romance framed in history.</p>
                                <Link href="/" className="cta">Read More</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Swiper modules={[Pagination, Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false }} slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                    clickable: true,
                                    }} className="mySwiper">

                                    <SwiperSlide>
                                        <img src="/images/gallery/32.jpg" alt="activity" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/images/gallery/33.jpg" alt="activity" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/images/gallery/34.jpg" alt="activity" />
                                    </SwiperSlide>
                                    
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="activity">
                    <div className="row align-items-center g-0">
                        <div className="col-md-6">
                            <Swiper modules={[Pagination, Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false }} slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                    clickable: true,
                                    }} className="mySwiper">

                                    <SwiperSlide>
                                        <img src="/images/gallery/17.jpg" alt="activity" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/images/acti4.jpg" alt="activity" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/images/gallery/23.jpg" alt="activity" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/images/gallery/26.jpg" alt="activity" />
                                    </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-md-6">
                            <div className="box">
                                <h3>Day Picnic and Trip</h3>
                                <p>Escape the city and plan a refreshing day trip near Delhi at The Mud Fort Kuchesar. From school excursions to family outings and lively kitty parties, the resort offers outdoor fun, farm-fresh meals, and heritage experiences in a tranquil countryside setting.</p>
                                <Link href="/" className="cta">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="activity">
                    <div className="row align-items-center g-0">
                        <div className="col-md-6">
                            <div className="box">
                                <h3>Wildlife at Mud Fort</h3>
                                <p>The countryside around Kuchesar is alive with nature. At The Mud Fort, guests can enjoy wildlife near Delhi NCR with early morning birdwatching, peacocks wandering the lawns, monkey families coming to say hello and glimpses of migratory birds. It&apos;s a heritage stay that connects you with nature&apos;s rhythm</p>
                                <Link href="/" className="cta">Read More</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Swiper modules={[Pagination, Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false }} slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                    clickable: true,
                                    }} className="mySwiper">

                                    <SwiperSlide>
                                        <img src="/images/wild1.jpg" alt="activity" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/images/gallery/16.jpg" alt="activity" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="/images/gallery/10.jpg" alt="activity" />
                                    </SwiperSlide>
                                    
                            </Swiper>
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
                <p>As a top-rated heritage resort near Delhi NCR, The Mud Fort Kuchesar combines 18th-century charm with modern amenities. From a swimming pool, spacious lawns, and cozy lounges to orchards, village experiences, and event spaces, it offers everything for family getaways, destination weddings, or anyone seeking a heritage resort near me with authentic hospitality.</p>
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