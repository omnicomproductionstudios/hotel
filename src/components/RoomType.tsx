'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link"
import { CookingPot, BedDouble, Wifi, Bath, LandPlot } from 'lucide-react';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


const rooms = [
  {
    id: 1,
    title: "Premier Room with Private Lawn",
    desc: "Spacious room with a private lawn, ideal for relaxation and small gatherings. Elegant interiors with serene garden views for a peaceful stay.",
    img: "/images/room.jpg",
    features: [
      { icon: <LandPlot />, text: "350 Square Feet" },
      { icon: <Bath />, text: "Premium Bath Amenities" },
      { icon: <Wifi />, text: "Wifi Connectivity" },
      { icon: <BedDouble />, text: "King Size Bed" },
      { icon: <CookingPot />, text: "Breakfast" },
    ],
  },
  {
    id: 2,
    title: "Luxury Suite with Garden View",
    desc: "Elegant interiors with serene garden views for a peaceful stay. Spacious room with a private lawn, ideal for relaxation and small gatherings.",
    img: "/images/room1.jpg",
    features: [
      { icon: <LandPlot />, text: "500 Square Feet" },
      { icon: <Bath />, text: "Luxury Bath Amenities" },
      { icon: <Wifi />, text: "High-Speed Wifi" },
      { icon: <BedDouble />, text: "Queen Size Bed" },
      { icon: <CookingPot />, text: "Complimentary Breakfast" },
    ],
  },
  {
    id: 3,
    title: "Luxury Premier with Garden View",
    desc: "Elegant interiors with serene garden views for a peaceful stay.",
    img: "/images/room3.jpg",
    features: [
      { icon: <LandPlot />, text: "500 Square Feet" },
      { icon: <Bath />, text: "Luxury Bath Amenities" },
      { icon: <Wifi />, text: "High-Speed Wifi" },
      { icon: <BedDouble />, text: "Queen Size Bed" },
      { icon: <CookingPot />, text: "Complimentary Breakfast" },
    ],
  },
]

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

                    {rooms.map((room) => (
                        <SwiperSlide key={room.id}>
                        <div className="each_room">
                            <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <img src={room.img} alt={room.title} />
                            </div>
                            <div className="col-lg-6">
                                <h2>{room.title}</h2>
                                <p>{room.desc}</p>
                                <ul>
                                {room.features.map((f, idx) => (
                                    <li key={idx}>{f.icon} {f.text}</li>
                                ))}
                                </ul>
                                <Link href="/" className="cta">Book Now</Link>
                            </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}

                    
                </Swiper>
            </div>
        </div>
      
    </>
  );
}
