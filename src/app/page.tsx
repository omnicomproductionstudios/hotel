import Activities from "@/components/Activities";
import BestResort from "@/components/BestResort";
import Facilities from "@/components/Facilities";
import HomeForm from "@/components/HomeForm";
import HomeHero from "@/components/HomeHero";
import Prices from "@/components/Prices";
import Rooms from "@/components/Rooms";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeForm />
      <BestResort />
      <Prices />
      <Facilities />
      <Activities />
      <Rooms />
    </>
  );
}
