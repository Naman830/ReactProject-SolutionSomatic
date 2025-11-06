import React from "react";
import heroImg from "../assests/images/heroImg.png";
import {TalkBtn}  from "../components/common/Button";

const Home = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-7 lg:col-span-7 relative">
            <span
              className="text-[54px] leading-[59.4px] font-[var[(--font-figtree)]] font-[600] text-black relative mb-8 pl-20"
              id="expertDriven"
            >
              Expert-Driven
            </span>

            <h1 className="text-[144px] font-[800] font-[var[(--font-figtree)]] leading-[150px] uppercase ">
              Digital
              <br />
              <span className="bg-[var(--main-color)]">Solution.</span>
            </h1>

            <figure className="absolute -top-[45px] -right-[6px]">
              <img src={heroImg} alt="" />
            </figure>
          </div>

          <div className="md:col-span-5 lg:col-span-5 pl-24">
            <p className="font-[var[( --font-sora)]] font-[400] text-[18px] leading-[31px] -mt-[14px] pb-9">
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
