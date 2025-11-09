import React from "react";
import TestiImageCenter from "../../assests/icons/testimonial-center.png";
import TestiRoundedImg from "../../assests/images/testimonialRounded.png";
import TestiImage1 from "../../assests/images/testi-1.png";
import TestiImage2 from "../../assests/images/testi-2.png";
import TestiImage3 from "../../assests/images/testi-3.png";

const Testimonial = () => {
  return (
    <section className="w-full md:py-16 py-8 bg-gray-50">
      <div className="lg:container w-full mx-auto px-4">
        <div className="grid grid-cols-12">
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <div
              className="relative xl:top-1.5 top-0 xl:left-5 left-0 xl:h-[410px] xl:w-[410px] 
                lg:h-[380px] lg:w-[380px] h-[320px] w-[320px] lg:mb-0 mb-12
                z-10 rounded-full border-2  border-gray-400 border-none"
            >
              <figure className=" ">
                <img src={TestiImageCenter} alt="" />
              </figure>
              <figure className="testimonialImageHover absolute top-2 left-[18px]">
                <img src={TestiImage1} alt="" />
              </figure>

              <figure className="testimonialImageHover absolute top-28 -right-9">
                <img src={TestiImage2} alt="" />
              </figure>

              <figure className="testimonialImageHover absolute -bottom-8 left-[60px]">
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
          <div className="xl:col-span-7 lg:col-span-6 col-span-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
