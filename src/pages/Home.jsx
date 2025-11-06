import React from "react";
import heroImg from "../assests/images/heroImg.png";
import { TalkBtn } from "../components/common/Button";

const Home = () => {
  return (
    <section className="w-full md:py-16 py-8 bg-white">
      <div className="lg:container w-full mx-auto px-4">
        <div className="home-hero  grid grid-cols-1 md:grid-cols-12 relative">
          <div className="col-span-12 md:col-span-7 lg:col-span-7 md:relative md:block grid place-items-center ">
            <span
              className="xl:text-[54px] lg:text-[40px] sm:text-[30px] sm:leading-[59.4px] font-[var[(--font-figtree)]] font-[600] text-black relative xl:mb-7 lg:mb-5 mb-3  pl-20 block
              text-[26px] leading-[30px]
              "
              id="expertDriven"
            >
              Expert-Driven
            </span>

            <h1 className="xl:text-[134px] lg:text-[90px] sm:text-[74px] font-[800] font-[var[(--font-figtree)]] xl:leading-[150px] lg:leading-[90px] sm:leading-[74px] uppercase 
            text-[54px] leading-[64px] mb[12px]
            ">
              Digital
              <br />
              <span className="bg-[var(--main-color)]">SOLUTIONS.</span>
            </h1>

            <figure className="absolute lg:-top-[30px] md:-top-[0px] md:-right-[6px] top-0 right-0 xl:w-[210px] md:w-[130px] w-[100px]">
              <img src={heroImg} alt="" />
            </figure>
          </div>

          <div className="col-span-12 md:block grid place-items-center  md:col-span-5 lg:col-span-5 xl:pl-24 md:pl-8">
            <p className="font-[var[( --font-sora)]] font-[400] sm:text-[18px] text-[16px] sm:leading-[31px] leading-[24px] md:-mt-[14px] xl:pb-9 pb-4">
              Leverage the knowledge of seasoned professionals to craft
              impactful digital strategies. We deliver results-focused solutions
              tailored to your business goals.
            </p>

            <TalkBtn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
