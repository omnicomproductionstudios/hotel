'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link"
import { CookingPot, BedDouble, Wifi, Bath, LandPlot } from 'lucide-react';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function RoomType() {
  return (
    <>
    <div className="room_type space">
            <div className="container">
                <div className="title">
                    <h2>All Room Type</h2>
                    {/* <p>What people say about us</p> */}
                </div>
                <Swiper modules={[Pagination, Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false }} slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                        clickable: true,
                        }} className="mySwiper">
                    <SwiperSlide>
                        <div className="each_room">
                            <div className="row g-5 align-items-center">
                                <div className="col-md-6">
                                    <img src="images/room5.jpg" alt="room" />
                                </div>
                                <div className="col-md-6">
                                    <h2>Premier Room with Private Lawn</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quae, aperiam sint, voluptatem animi at accusantium dignissimos qui ipsum modi perspiciatis dolor dolores, voluptates quasi. Illo voluptate error minima accusantium.</p>
                                    <ul>
                                        <li><LandPlot /> 350 Square Feet</li>
                                        <li><Bath /> Premium Bath Amenities</li>
                                        <li><Wifi />Wifi Connectivity</li>
                                        <li><BedDouble /> King Size Bed</li>
                                        <li><CookingPot /> Brefkfast</li>
                                    </ul>
                                    <Link href="/" className='cta'>Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="each_room">
                            <div className="row g-5 align-items-center">
                                <div className="col-md-6">
                                    <img src="images/room5.jpg" alt="room" />
                                </div>
                                <div className="col-md-6">
                                    <h2>Premier Room with Private Lawn</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quae, aperiam sint, voluptatem animi at accusantium dignissimos qui ipsum modi perspiciatis dolor dolores, voluptates quasi. Illo voluptate error minima accusantium.</p>
                                    <ul>
                                        <li><LandPlot /> 350 Square Feet</li>
                                        <li><Bath /> Premium Bath Amenities</li>
                                        <li><Wifi />Wifi Connectivity</li>
                                        <li><BedDouble /> King Size Bed</li>
                                        <li><CookingPot /> Brefkfast</li>
                                    </ul>
                                    <Link href="/" className='cta'>Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="each_room">
                            <div className="row g-5 align-items-center">
                                <div className="col-md-6">
                                    <img src="images/room5.jpg" alt="room" />
                                </div>
                                <div className="col-md-6">
                                    <h2>Premier Room with Private Lawn</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quae, aperiam sint, voluptatem animi at accusantium dignissimos qui ipsum modi perspiciatis dolor dolores, voluptates quasi. Illo voluptate error minima accusantium.</p>
                                    <ul>
                                        <li><LandPlot /> 350 Square Feet</li>
                                        <li><Bath /> Premium Bath Amenities</li>
                                        <li><Wifi />Wifi Connectivity</li>
                                        <li><BedDouble /> King Size Bed</li>
                                        <li><CookingPot /> Brefkfast</li>
                                    </ul>
                                    <Link href="/" className='cta'>Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="each_room">
                            <div className="row g-5 align-items-center">
                                <div className="col-md-6">
                                    <img src="images/room5.jpg" alt="room" />
                                </div>
                                <div className="col-md-6">
                                    <h2>Premier Room with Private Lawn</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quae, aperiam sint, voluptatem animi at accusantium dignissimos qui ipsum modi perspiciatis dolor dolores, voluptates quasi. Illo voluptate error minima accusantium.</p>
                                    <ul>
                                        <li><LandPlot /> 350 Square Feet</li>
                                        <li><Bath /> Premium Bath Amenities</li>
                                        <li><Wifi />Wifi Connectivity</li>
                                        <li><BedDouble /> King Size Bed</li>
                                        <li><CookingPot /> Brefkfast</li>
                                    </ul>
                                    <Link href="/" className='cta'>Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
      
    </>
  );
}
