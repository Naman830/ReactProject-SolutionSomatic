import React from "react";
import TestiImageCenter from "../../assests/icons/testimonial-center.png";
import TestiRoundedImg from "../../assests/images/testimonialRounded.png";
import TestiImage1 from "../../assests/images/testi-1.png";
import TestiImage2 from "../../assests/images/testi-2.png";
import TestiImage3 from "../../assests/images/testi-3.png";
import TestimonialSlider from "../Sliders/Slider";

const Testimonial = () => {
  return (
    <section className="w-full md:py-32 py-8 bg-white">
      <div className="lg:container w-full mx-auto px-4">
        <div className="grid grid-cols-12">
          <div className="xl:col-span-5 lg:col-span-6 col-span-12 lg:inline flex items-center justify-center">
            <div
              className="relative xl:top-1.5 top-0 xl:left-5 left-0 xl:h-[410px] xl:w-[410px] 
                lg:h-[380px] lg:w-[380px] h-[320px] w-[320px] lg:mb-0 mb-12
                z-10 rounded-full border-2  border-gray-400 border-none
               
                "
            >
              <figure className=" ">
                <img src={TestiImageCenter} alt="" />
              </figure>
              <figure className="testimonialImageHover absolute top-2 left-[18px] lg:w-auto  w-20 h-20">
                <img src={TestiImage1} alt="" />
              </figure>

              <figure className="testimonialImageHover absolute top-28 -right-9  lg:w-auto w-20 h-20">
                <img src={TestiImage2} alt="" />
              </figure>

              <figure className="testimonialImageHover absolute -bottom-4 left-[60px]  lg:w-auto w-20 h-20">
                <img src={TestiImage3} alt="" />
              </figure>

              <figure className="testimonialImageHover absolute lg:top-1 -top-1 right-[72px] ">
                <img src={TestiRoundedImg} alt="" />
              </figure>

              <figure className="testimonialImageHover absolute bottom-3 lg:right-[60px] right-[45px] ">
                <img src={TestiRoundedImg} alt="" />
              </figure>

              <figure className="testimonialImageHover absolute lg:top-[245px] top-[140px] -left-[20px] ">
                <img src={TestiRoundedImg} alt="" />
              </figure>
            </div>
          </div>
          <div className="xl:col-span-7 lg:col-span-6 col-span-12 lg:text-left lg:px-0 px-10 text-center">
            <div>
              <span className="block font-[var[(--font-sora)]] font-[600] md:text-[20px] text-[16px] md:leading-6 leading-4 mb-4 text-black">
                Testimonial
              </span>
              <h1 className="font-[var[(--font-figtree)]] font-[800] xl:text-7xl lg:text-6xl text-5xl text-black">
                Hear From{" "}
                <span className="bg-[var(--main-color)] inline-block lg:leading-14 md:leading-12 sm:leading-10 leading-8">Clients</span>
                {" "}
                Who
                Trusted Us
              </h1>
            </div>

           <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
