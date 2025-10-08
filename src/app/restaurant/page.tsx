"use client";

import BuffetSection from "@/components/BuffetSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import HomeHero from "@/components/HomeHero";
import ThreeSlider from "@/components/ThreeSlider";
import Link from "next/link";

const page = () => {
  const foodImages = [
    "/images/restaurant/daal-makhni.webp",
    "/images/restaurant/daal-makhni.webp",
    "/images/restaurant/daal-makhni.webp",
    "/images/restaurant/daal-makhni.webp",
    "/images/restaurant/daal-makhni.webp",
  ];

  const buffetData = [
    {
      title: "Buffet Food",
      sections: [
        {
          title: "Breakfast",
          icon: "https://www.rurbanresort.com/assets/images/icons/next-day.svg",
          time: "9:30 AM to 10:30 AM",
          items: [
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-Food-1.png",
              label: "Stuff parantha with curd & achaar*",
            },
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-Food-2.png",
              label: "Bajra/makka ki roti*",
            },
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-Food-3.png",
              label: "Puri aloo*",
            },
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-Food-5.png",
              label: "Poha",
            },
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-Food-6.png",
              label: "Tea",
            },
          ],
          defaultOpen: true,
        },
        {
          title: "Lunch",
          icon: "https://www.rurbanresort.com/assets/images/icons/lunch-food.svg",
          time: "2:30 PM Till 03:30 PM",
          description:
            "Just drilled through some heavy weight activities that got your tummy growling? Treat yourself with a buffet with variety of dishes to choose from",
          items: [
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-Dallunch.jpg",
              label: "Dal*",
            },
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-rajma-new.jpg",
              label: "Rajma*",
            },
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-choley-near-delhi.jpg",
              label: "Chole*",
            },
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-rice.jpg",
              label: "Rice",
            },
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-Salad.jpg",
              label: "Salad",
            },
          ],
        },
        {
          title: "Drinks",
          icon: "https://www.rurbanresort.com/assets/images/icons/welcome-drink.svg",
          items: [
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-Shikanji.jpg",
              label: "Shikanji",
            },
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-water.jpg",
              label: "Water",
            },
          ],
        },
      ],
    },
    {
      title: "Evening Buffet",
      sections: [
        {
          title: "Evening Tea",
          icon: "https://www.rurbanresort.com/assets/images/icons/high-tea.svg",
          time: "5:00 PM To 5:30 PM",
          items: [
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-Cookies.jpg",
              label: "Cookies*",
            },
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-Mix-Pakodi.jpg",
              label: "Mix Pakodi*",
            },
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-tea-Drink.png",
              label: "Tea",
            },
          ],
        },
        {
          title: "Dinner",
          icon: "https://www.rurbanresort.com/assets/images/icons/lunch-food.svg",
          time: "9:00 PM Till 10:00 PM",
          description:
            "Treat yourself with a buffet with variety of dishes to choose from",
          items: [
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-Dallunch.jpg",
              label: "Dal*",
            },
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-rajma-new.jpg",
              label: "Rajma*",
            },
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-choley-near-delhi.jpg",
              label: "Chole*",
            },
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-rice.jpg",
              label: "Rice",
            },
            {
              img: "https://www.rurbanresort.com/assets/images/rasoi/family-trip-near-delhi-Salad.jpg",
              label: "Salad",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <HomeHero
        bgImage="/images/restaurant/banner.webp"
        heading={<>Restaurant</>}
        subHeading=" "
        link=""
      />

      <section className="py-5">
        <div className="container">
          <div className="title">
            <h2>
              Dine at Karma Lakelands: One of the Best Places to Eat in Gurgaon
            </h2>
            <p>
              Karma Lakelands aims to offer phenomenal culinary gratification at
              its restaurants. Offering three of the best places to eat in
              Gurgaon and an option to choose your preferred location for
              private dining, this is a dining experience you will not forget!
              To know more about our restaurants, drool at the foodgasmic
              pictures, and to keep up to date, follow us on our Instagram page.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <ThreeSlider images={foodImages} title="Restaurant Specialties" />
      </section>
      <section>
        <div className="container pb-5">
          {buffetData.map((section, index) => (
            <BuffetSection
              key={index}
              title={section.title}
              sections={section.sections}
            />
          ))}
        </div>
      </section>

      <section>
        {/* ✅ Render Buffet Sections dynamically */}
        {buffetData.map((section, index) => (
          <BuffetSection
            key={index}
            title={section.title}
            sections={section.sections}
          />
        ))}

        {/* ✅ Render Disclaimer Section */}
        <DisclaimerSection
          title="Note"
          items={[
            "Food is included in the price of your package. However, extra price may be charged for some food items/ drinks.",
            "The Menu is subject to change without prior notice and may vary based on season.",
            "Food is available only during the time mentioned above. Guests are requested to follow the schedule for all meals in order for us to serve you without any sense of urgency.",
            "Rurban Resort management however, reserves the right to decline services or levy additional charges in case the guests do not avail of their meals within prescribed time slots.",
            "Please make the attendant aware of your allergies, if any.",
            "Outside food shall not be allowed.",
            "*Any one available at Chef’s Selection.",
          ]}
        />
      </section>
    </>
  );
};

export default page;
