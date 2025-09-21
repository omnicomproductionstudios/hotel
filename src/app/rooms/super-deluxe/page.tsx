'use client';
import GalleryPage from "@/components/GalleryPage"
import HomeForm from "@/components/HomeForm"
import HomeHero from "@/components/HomeHero"
import Promotion from "@/components/Promotion";
import SingleSwiper from "@/components/SingleSwiper"
import { AlignHorizontalSpaceBetween, Bed, BedDouble, BriefcaseConveyorBelt, BrushCleaning, Coffee, Dog, Fan, Heater, Toilet, Wifi } from "lucide-react";
import { PhotoProvider } from "react-photo-view"
import Link from "next/link";

function page() {
  return (
    <>
    <HomeHero 
        bgImage="/images/rooms/super-deluxe/super-deluxe.jpg" 
        heading="Super Deluxe Room" 
        subHeading="Check our Latest Seasional Promotions" 
        link="Check All Rooms"
    />
    <HomeForm />

    <section className="room-intro space">
        <div className="container">
            <h2>Your Home Away From Home Amidst Nature</h2>
            <p>
                Nestled in a serene landscape, Themis Farm House in Delhi is the ideal escape from the bustling city life.
                This charming villa features three luxurious rooms, offering a cosy and comfortable stay. Guests can enjoy
                a refreshing dip in the swimming pool and indulge in numerous gaming options, including snooker, foosball,
                net cricket, volleyball, badminton and cycling. Indoor games like chess, ludo, and carrom provide additional
                entertainment. A bar attached to the pool adds to the leisurely experience, while a big garden area offers
                space to relax or enjoy outdoor activities. Perfect for relaxation and recreation, Themis Farm Stay promises
                a tranquil retreat where you can unwind and create lasting memories.
            </p>
        </div>
    </section>    

    <div className="roomsSlider space_bottom">
        <div className="container">
            <div className="row g-0">
                <div className="col-lg-8">
                    <SingleSwiper
                        slidesPerView={1}
                        autoplayDelay={4000}
                        images={[
                            "/images/rooms/super-deluxe/super-deluxe.jpg",
                        ]}
                    />
                </div>
                <div className="col-lg-4">
                    <div className="content">
                        <h2>Rooms</h2>
                        <p>
                            Our Farm Stay in Delhi offers three luxurious rooms within one villa. Each room features a king size bed and AC, 
                            ensuring ultimate comfort. All three rooms boast private balconies. One room houses a bathtub also.
                        </p>
                        <p>
                            Guests share a spacious living room with a large sofa and a 65-inch TV, as well as a fully-equipped kitchenette, 
                            perfect for a relaxing and enjoyable stay in Delhi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="space_bottom">
        <div className="container">
        <div className="room-card">
            <div className="row">
                <div className="col-lg-7">
                    <div className="copy">
                        <h3>Heritage Rooms</h3>
                    <p>
                    Offering a curious mixture of conventional and contemporary living style of 
                    the British era, these 10 rooms are the most favoured heritage rooms around Delhi.
                    </p>

                    <ul>
                        <li><Dog /> Pet Friendly</li>
                        <li><Coffee /> Tea/Coffee maker</li>
                        <li><Toilet />Toiletry Kits</li>
                        <li><BrushCleaning /> Daily Housekeeping</li>
                        <li><BriefcaseConveyorBelt /> Luggage Racks/Wardrobes</li>
                        <li><Heater /> Heating facilities in the room</li>
                        <li><Fan /> Individual Airconditioning units</li>
                        <li><Wifi /> Complimentary Wi-Fi during the stay</li>
                        <li><Bed /> Accommodation on Double/Triple Occupancy</li>
                        <li><BedDouble />Provision of Twin/Double bedded arrangement</li>
                        <li><AlignHorizontalSpaceBetween /> Minimum Living area of 400 Sq.Ft.</li>
                        
                    </ul>
                     <Link href="/" className="cta mt-4">Book Now</Link>
                    </div>
                </div>
                <div className="col-lg-5"><img src="/images/rooms/super-deluxe/super-deluxe.jpg" alt="" /></div>
            </div>
        </div>
    </div>
    </div>


    <div className="container">
        <Promotion />
    </div>

    <div className="space">
        <div className="container">
            <div className="title text-center">
                <h2>Room Gallery</h2>
            </div>
            <div className="masonry">
                <PhotoProvider>
                    <GalleryPage src="/images/rooms/super-deluxe/super-deluxe.jpg" alt="room"/>
                </PhotoProvider>
            </div>
        </div>
    </div>

    </>
  )
}

export default page