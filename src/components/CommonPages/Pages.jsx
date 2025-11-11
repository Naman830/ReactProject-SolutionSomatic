import { useState } from "react";
// About us
import AboutImg1 from "../../assests/images/AboutUs-1.png";
import AboutImg2 from "../../assests/images/AboutUs-2.png";
import AboutImg3 from "../../assests/images/AboutUs-3.png";
// Projects
import ProjectImg1 from "../../assests/images/project-1.jpg";
import ProjectImg2 from "../../assests/images/project-2.jpg";
import ProjectImg3 from "../../assests/images/project-3.jpg";
import ProjectImg4 from "../../assests/images/project-4.jpg";

// Blog

import Blog1 from "../../assests/images/Blog-1.jpg";
import Blog2 from "../../assests/images/Blog-2.jpg";
import Blog3 from "../../assests/images/Blog-3.jpg";

// Import
import { CommonBtn, TalkBtn } from "../common/Button";

// icon
import { BlogCard, ProjectCard } from "../Card/Card";

// Image
import Halflogo from "../../assests/logos/half-logo.png";

export default function PageBug() {
  return <h1 className="text-9xl">FIX BUG FROM PAGES</h1>;
}

// About us Components
export function AboutUs() {
  return (
    <div className="relative py-32 bg-black w-full overflow-hidden">
      <figure className="absolute bottom-0 left-0 ">
        <img
          src={AboutImg1}
          alt="About us image"
          className="lg:w-full md:w-90 w-60"
        />
      </figure>
      <figure className="absolute lg:top-32 lg:left-80 md:top-20 md:left-64 top-0 left-36">
        <img src={AboutImg2} alt="" />
      </figure>

      <figure className="absolute lg:bottom-24 bottom-44 lg:right-36 right-4">
        <img src={AboutImg3} alt="" />
      </figure>

      <div className="AboutUs-Container lg:container mx-auto px-4  ">
        <div className="grid grid-cols-12 items-center">
          <div className="lg:col-span-3 col-span-0"></div>

          <div className="lg:col-span-9 col-span-12">
            <div className="flex items-center justify-between mb-12 flex-wrap text-center">
              <span
                className="xl:text-[22px] lg:text-[20px] sm:text-[18px] sm:leading-[30px] font-[var[(--font-figtree)]] font-[600] text-white relative xl:mb-7 lg:mb-5 mb-3 mt-4 pl-12 block
              text-[16px] leading-[20px]
              "
                id="AboutUs-text"
              >
                About us
              </span>
              <CommonBtn
                name={"Learn More"}
                border="2px solid white"
                color="white"
                hoverBorder="2px solid transparent"
                hoverColor="black"
              />
            </div>

            <h3
              className="
                  font-[var[(--font-figtree)]] font-bold
                  md:text-[50px] md:leading-16 sm:text-4xl text-3xl
                 text-white mb-16 
                 lg:text-left
                 text-center
                  "
            >
              “Inspiring{" "}
              <span className="text-[var(--main-color)]">Brands</span> to Dream
              Boldly, <span className="text-[var(--main-color)]">Design</span>{" "}
              Intelligently, and Connect Meaningfully — Where Imagination Meets
              Innovation and Tech Drives{" "}
              <span className="text-[var(--main-color)]">Transformation</span>”
            </h3>

            <div
              className="grid grid-cols-12 items-center lg:mx-0 lg:text-left text-center mx-auto  max-w-3xl "
              id="About-Stats"
            >
              <div className="col-span-4 border-r-[1px] border-r-white lg:mr-10">
                <span>96</span>
                <span>+</span>
                <p>Sussecful projects</p>
              </div>
              <div className="col-span-4 border-r-[1px] border-r-white lg:mr-10">
                <span>30</span>
                <span>+</span>
                <p>Sussecful projects</p>
              </div>
              <div className="col-span-4">
                <span>17</span>
                <span>+</span>
                <p>Sussecful projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Project Components
export function ProjectsComponent() {
  return (
    <section className="w-full md:py-16 py-8 bg-gray-50">
      <div className="lg:container w-full mx-auto px-4">
        <div className="grid grid-cols-12 mb-12">
          <div className="lg:col-span-8 col-span-12">
            <div className="text-left">
              <span className="font-[var[(--font-sora)]] font-[600] sm:text-[20px] text-[16px] sm:leading-6 leading-5 mb-5 block">
                Digital Showcase
              </span>
              <h2 className="font-[var[(--font-figtree)]] lg:text-7xl md:text-6xl text-5xl font-[800] mb-5 md:leading-22 sm:leading-18 leading-14">
                Our <span className="bg-[var(--main-color)] inline-block lg:leading-14 md:leading-12 sm:leading-10 leading-8">Portfolio</span> of
                Expert Digital Solution
              </h2>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12 grid place-items-center">
            <div className="text-left ">
              <p className="font-[var[(--font-sora)]] font-[400] md:text-[20px]  text-16px md:leading-9 leading-7">
                Explore our curated portfolio showcasing innovative digital
                solutions. See how we bring creativity and technology together
                to drive success.
              </p>
            </div>
          </div>
        </div>

        {/* Part-2 */}

        <div className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-12">
            <div className="projectDiv md:col-span-5 col-span-12">
              <ProjectCard
                projectImage={ProjectImg1}
                projectShowcaseName1="Responsive"
                projectShowcaseName2="Design"
                showcaseHeading="Innovative Website Design"
              />
            </div>

            <div className="projectDiv md:col-span-7 col-span-12">
              <ProjectCard
                projectImage={ProjectImg2}
                projectShowcaseName1="Logo"
                projectShowcaseName2="Strategy"
                showcaseHeading="Brand Identity Makeover"
              />
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="projectDiv md:col-span-7 col-span-12">
                <ProjectCard
                  projectImage={ProjectImg3}
                  projectShowcaseName1="Dashboard"
                  projectShowcaseName2="UIDesign"
                  showcaseHeading="Smart Dashboard Design"
                />
            </div>
            <div className="projectDiv md:col-span-5 col-span-12">
                <ProjectCard
                  projectImage={ProjectImg4}
                  projectShowcaseName1="App"
                  projectShowcaseName2="Interface"
                  showcaseHeading="Custom Mobile App"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA COMPONENTS
export function CtaComponent() {
  return (
    <div className="relative py-32 bg-black w-full overflow-hidden">
      <figure className="absolute bottom-0 right-0">
        <img
          src={AboutImg1}
          alt="About us image"
          className="lg:w-full md:w-90 w-60 scale-x-[-1]"
        />
      </figure>

      <figure className="absolute lg:top-24 lg:right-[400px] md:top-20 md:right-64 top-0 right-36">
        <img src={AboutImg2} alt="" />
      </figure>

      <figure className="absolute lg:bottom-24 bottom-9 lg:left-14 left-4">
        <img src={AboutImg3} alt="" />
      </figure>

      <figure className="absolute left-0 top-14">
        <img src={Halflogo} alt="" />
      </figure>

      <div className="AboutUs-Container lg:container mx-auto px-4 lg:text-left text-center ">
        <div className="grid grid-cols-12 items-center">
          <div className="lg:col-span-9 col-span-12 relative">
            <span className="block font-[var[(--font-figtree)]] font-[800] xl:text-[144px] xl:leading-[130px] lg:text-9xl md:text-8xl sm:text-7xl text-6xl text-white lg:mb-7 mb-4">
              PROJECT IN
              <br />
              <span className="block text-[var(--main-color)]">MIND?</span>
            </span>

            <p className="font-[var[(--font-sora)]] font-[400] lg:text-[20px] sm:text-[18px] text-[16px]lg:leading-[27px] sm:leading-6 leading-5 text-white max-w-2xl block lg:mx-0 mx-auto">
              Have a digital project idea you want to bring to life? Let’s
              collaborate and turn your vision into a powerful solution.
            </p>

            <div className="xl:absolute 2xl:right-[23.5%] 2xl:bottom-[8%] xl:right-[10%] xl:bottom-[8%] xl:ml-0 xl:mt-0 mt-5 lg:block flex justify-center items-center -ml-10">
              <TalkBtn
                bg="#c2ff83"
                color="#000000"
                hoverbg="white"
                hovercolor="black"
              />
            </div>
          </div>
          <div className="lg:col-span-3 col-span-0"></div>
        </div>
      </div>
    </div>
  );
}

// Blog COMPONENTS
export function BlogComponent() {
  return (
    <section className="w-full md:py-16 py-8 bg-[#F9F9F9]">
      <div className="lg:container w-full mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto md:mb-8 mb-6">
          <span className="font-[var[(--font-sora)]] font-[600] lg:text-[20px] lg:leading-5 text-[18px] leading-4 block lg:mb-5 mb-3">Latest Blog</span>
          <h2 className="font-[var[(--font-figtree)]] font-[800] xl:text-7xl md:text-6xl text-5xl  ">Stay Updated with Our Digital Solutions  <span className="bg-[var(--main-color)]">Blog</span></h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-4 col-span-6">
            <BlogCard 
            BlogImage={Blog1}
            BlogDate="By Admin | Nov 10, 2025"
            BlogName="The Future of Web Design: Trends to Watch in 2025"
            />
          </div>
          <div className="lg:col-span-4 col-span-6">
            <BlogCard 
             BlogImage={Blog2}
            BlogDate="By Admin | Nov 10, 2025"
            BlogName="The Future of Web Design: Trends to Watch in 2025"
            />
          </div>
          <div className="lg:col-span-4 col-span-6">
            <BlogCard 
             BlogImage={Blog3}
            BlogDate="By Admin | Nov 10, 2025"
            BlogName="The Future of Web Design: Trends to Watch in 2025"
            />
          </div>

        </div>
      </div>
    </section>
  );
}


