import Activities from "@/components/Activities";
import BestResort from "@/components/BestResort";
import BlogHome from "@/components/BlogHome";
import Highlights from "@/components/Highlights";
import Gallery from "@/components/Gallery";
import HomeForm from "@/components/HomeForm";
import HomeHero from "@/components/HomeHero";
import Prices from "@/components/Prices";
import RoomType from "@/components/RoomType";
import Testimonial from "@/components/Testimonial";
import Facilities from "@/components/Facilities";
import LightboxGallery from "@/components/Serial";


export default async function Home() {
  return (
    <>
      <HomeHero bgImage="/images/hero1.jpg"/>
      <HomeForm />
      <BestResort />
      <Highlights />
      <Prices />
      <Facilities />
      {/* <Rooms /> */}
      <RoomType />
      <Activities />
      <Gallery />
      <Testimonial />
      <LightboxGallery />
      <BlogHome />
    </>
  );
}
