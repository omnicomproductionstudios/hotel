import Activities from "@/components/Activities";
import BestResort from "@/components/BestResort";
import Blog from "@/components/Blog";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import HomeForm from "@/components/HomeForm";
import HomeHero from "@/components/HomeHero";
import Prices from "@/components/Prices";
import Rooms from "@/components/Rooms";
import RoomType from "@/components/RoomType";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeForm />
      <BestResort />
      <Prices />
      <Facilities />
      <Rooms />
      <Activities />
      <RoomType />
      <Gallery />
      <Blog />
      <Testimonial />
    </>
  );
}
