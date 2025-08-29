
import GalleryPage from "@/components/GalleryPage"
import HomeHero from "@/components/HomeHero"
import Link from "next/link"


const page = () => {
  return (
    <>
      <HomeHero bgImage="/images/activity1.jpg"/>
      <div className="space">
        <div className="container">
        <div className="gallery_tabs">
          <Link href="#resort">Resort</Link>
          <Link href="#rooms">Rooms</Link>
          <Link href="#outdoor">Outdoor</Link>
          <Link href="#indoor">Indoor</Link>
          <Link href="#pool">Swimming Pool</Link>
        </div>
        <div className="title my-5" id="resort">
            <h2>The Resort</h2>
        </div>
        <div className="masonry">
          <GalleryPage src="/images/room.jpg" alt="room"/>
          <GalleryPage src="/images/room1.jpg" alt="room1"/>
          <GalleryPage src="/images/activity1.jpg" alt="room"/>
          <GalleryPage src="/images/activity2.jpg" alt="room"/>
          <GalleryPage src="/images/activity3.jpg" alt="room"/>
          <GalleryPage src="/images/room5.jpg" alt="room"/>
        </div>
        <div className="title my-5" id="rooms">
            <h2>The Rooms</h2>
        </div>
        <div className="masonry">
          <GalleryPage src="/images/room.jpg" alt="room"/>
          <GalleryPage src="/images/room1.jpg" alt="room1"/>
          <GalleryPage src="/images/activity1.jpg" alt="room"/>
          <GalleryPage src="/images/activity2.jpg" alt="room"/>
          <GalleryPage src="/images/activity3.jpg" alt="room"/>
          <GalleryPage src="/images/room5.jpg" alt="room"/>
        </div>
        <div className="title my-5" id="outdoor">
            <h2>The Outdoor</h2>
        </div>
        <div className="masonry">
          <GalleryPage src="/images/room.jpg" alt="room"/>
          <GalleryPage src="/images/room1.jpg" alt="room1"/>
          <GalleryPage src="/images/activity1.jpg" alt="room"/>
          <GalleryPage src="/images/activity2.jpg" alt="room"/>
          <GalleryPage src="/images/activity3.jpg" alt="room"/>
          <GalleryPage src="/images/room5.jpg" alt="room"/>
        </div>
        <div className="title my-5" id="indoor">
            <h2>The Indoor</h2>
        </div>
        <div className="masonry">
          <GalleryPage src="/images/room.jpg" alt="room"/>
          <GalleryPage src="/images/room1.jpg" alt="room1"/>
          <GalleryPage src="/images/activity1.jpg" alt="room"/>
          <GalleryPage src="/images/activity2.jpg" alt="room"/>
          <GalleryPage src="/images/activity3.jpg" alt="room"/>
          <GalleryPage src="/images/room5.jpg" alt="room"/>
        </div>
        <div className="title my-5" id="pool">
            <h2>Swimming Pool</h2>
        </div>
        <div className="masonry">
          <GalleryPage src="/images/room.jpg" alt="room"/>
          <GalleryPage src="/images/room1.jpg" alt="room1"/>
          <GalleryPage src="/images/activity1.jpg" alt="room"/>
          <GalleryPage src="/images/activity2.jpg" alt="room"/>
          <GalleryPage src="/images/activity3.jpg" alt="room"/>
          <GalleryPage src="/images/room5.jpg" alt="room"/>
        </div>
      </div>
      </div>
    </>
  )
}

export default page