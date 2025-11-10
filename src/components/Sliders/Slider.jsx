import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import SliderTestimonial from "./SliderTestimonial";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderTestimonial
            paragraph="We were impressed by their creativity, professionalism, and problem-
solving skills. They didn’t just build a website; they built a digital experience
that reflects our vision. The project was delivered on time, within budget, and
has already generated measurable results for our business."
            name="Andrew"
            occupation="Digital Marketing Manager"
            star={5}
          />
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <SliderTestimonial
            paragraph="Working with them felt effortless. They understood our goals instantly and delivered a clean, high-performing website that boosted our engagement within weeks. Their communication was clear, and every feature was implemented with precision and care"
            name="Sarah Mitchell"
            occupation="Brand Strategist"
            star={4.5}
          />
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
         <SliderTestimonial
            paragraph="They don’t just take instructions—they think. They suggested smart improvements that increased conversions and made our website faster and easier to manage. Their attention to detail and marketing mindset set them apart from other developers we’ve worked with"
            name="Jonathan Reed"
            occupation="E-Commerce Founder"
            star={1.5}
          />
        </SwiperSlide>

        <SwiperSlide>
         <SliderTestimonial
            paragraph="Our old website was slow, outdated, and hurting our credibility. After their redesign, everything changed. The site loads faster, ranks better, and users actually stay longer. We’ve already seen a noticeable increase in inquiries from the new website."
            name="Priya Sharma"
            occupation="Business Development Head"
            star={4}
          />
        </SwiperSlide>
        
        <SwiperSlide>
         <SliderTestimonial
            paragraph="hey took the time to understand our business and our audience. The final result wasn’t just a website—it became a storytelling platform for our brand. Their creativity and strategic thinking are unmatched. I’d trust them with any future project"
            name="Marcus Allen"
            occupation="Creative Director"
            star={5}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
