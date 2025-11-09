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
          <div className="p-6 max-w-lg text-left">
            <p className="text-gray-700 text-[16px] leading-relaxed mb-4">
              Amazing service. They deliver on time and are super responsive in
              communication. Highly recommended.
            </p>

            <div className="flex gap-1 mb-3">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl opacity-40">★</span>
            </div>

            <h3 className="font-semibold text-[18px] text-black">
              Sarah Mitchell
            </h3>
            <p className="text-gray-500 text-[14px]">Marketing Specialist</p>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div className="p-6 max-w-lg text-left">
            <p className="text-gray-700 text-[16px] leading-relaxed mb-4">
              If you want quality work without drama, just hire them. They
              exceeded expectations.
            </p>

            <div className="flex gap-1 mb-3">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
            </div>

            <h3 className="font-semibold text-[18px] text-black">
              Emily Taylor
            </h3>
            <p className="text-gray-500 text-[14px]">Business Owner</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
