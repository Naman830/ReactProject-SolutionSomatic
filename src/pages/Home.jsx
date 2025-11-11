// Images
import heroImg from "../assests/images/heroImg.png";
import Hero1 from "../assests/images/hero-1.jpg";
import Hero2 from "../assests/images/hero-2.jpg";
import Hero3 from "../assests/images/hero-3.jpg";
import HomeService from "../assests/images/service-home.jpg";

// Icons
import Service1 from "../assests/icons/service-1.png";
import Service2 from "../assests/icons/service-2.png";
import Service3 from "../assests/icons/service-3.png";
import Service4 from "../assests/icons/service-4.png";

// Imports
import { TalkBtn } from "../components/common/Button";
import {
  AboutUs,
  BlogComponent,
  CtaComponent,
  ProjectsComponent,
} from "../components/CommonPages/Pages";
import { ServiceCard } from "../components/Card/Card";
import Testimonial from "../components/CommonPages/Testimonial";

const Home = () => {
  return (
    // Hero Section
    <>
      <section className="w-full md:py-16 py-8 bg-white">
        <div className="lg:container w-full mx-auto px-4">
          <div className="home-hero  grid grid-cols-1 md:grid-cols-12 relative mb-13 ">
            <div className="col-span-12 md:col-span-7 lg:col-span-7 md:relative md:block grid place-items-center ">
              <span
                className="xl:text-[54px] lg:text-[40px] sm:text-[30px] sm:leading-[59.4px] font-[var[(--font-figtree)]] font-[600] text-black relative xl:mb-7 lg:mb-5 mb-3  pl-20 block
              text-[26px] leading-[30px]
              "
                id="expertDriven"
              >
                Expert-Driven
              </span>
              <h1
                className="xl:text-[134px] lg:text-[90px] sm:text-[74px] font-[800] font-[var[(--font-figtree)]] xl:leading-[120px] lg:leading-[94px] sm:leading-[74px] uppercase 
            text-[54px] leading-[64px] mb[12px]
            "
              >
                Digital
                <br />
                <span className="bg-[var(--main-color)] xl:leading-24 inline-block lg:leading-18 sm:leading-14 leading-10">SOLUTIONS.</span>
              </h1>
              <figure className="hero-1-figure absolute lg:-top-[30px] md:-top-[0px] md:-right-[6px] top-0 right-0 xl:w-[210px] md:w-[130px] w-[100px]">
                <img src={heroImg} alt="" />
              </figure>
            </div>

            <div className="col-span-12 md:block grid place-items-center  md:col-span-5 lg:col-span-5 xl:pl-24 md:pl-8">
              <p className="font-[var[(--font-sora)]] font-[400] xl:text-[20px] lg:text-[18px] text-[16px] sm:leading-[31px] leading-[24px] md:-mt-[14px] xl:pb-14 pb-4">
                Leverage the knowledge of seasoned professionals to craft
                impactful digital strategies. We deliver results-focused
                solutions tailored to your business goals.
              </p>

              <TalkBtn
                bg="#c2ff83"
                color="#000000"
                hoverbg="#000000"
                hovercolor="white"
              />
            </div>
          </div>

          <div className="hero-img flex items-center justify-center relative sm:flex-row flex-col lg:gap-12 sm:gap-8 gap-10">
            <figure className="overflow-hidden rounded-4xl">
              <img src={Hero1} alt="" />
            </figure>

            <figure className="overflow-hidden rounded-4xl">
              <img src={Hero2} alt="" />
            </figure>

            <figure className="overflow-hidden rounded-4xl">
              <img src={Hero3} alt="" />
            </figure>
          </div>
        </div>
      </section>

    {/* About Section */}
      <section>
        <AboutUs />
      </section>

      {/* Service Section */}
      <section className="w-full md:py-16 py-8 bg-white">
        <div className="lg:container w-full mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto sm:mb-24 mb-14">
            <span className="font-[var[(--font-sora)]] font-[600] text-2xl mb-4 block">
              What We Do
            </span>
            <h2 className="font-[var[(--font-figtree)]] font-[800] lg:text-7xl md:text-6xl sm:text-5xl text-4xl">
              Explore Our Full Range of Expert Digital{" "}
              <span className="bg-[var(--main-color)]">Services</span>
            </h2>
          </div>

          {/* 1 */}
          <div className="max-w-full font-[var[(--font-figtree)]]">
            <ServiceCard
              serviceIcon={Service1}
              serviceName="Branding & Design"
              servicePara="Cohesive brand systems that tell your unique story. We craft logos, guidelines,
and assets to define your visual voice."
              serviceHiddenImage={HomeService}
            />
          </div>
          {/* 2 */}
          <div className="max-w-full font-[var[(--font-figtree)]]">
            <ServiceCard
              serviceIcon={Service2}
              serviceName="Web Design & Development"
              servicePara="Modern, responsive websites tailored to your brand & goals. We build fast, user-
friendly sites that drive engagement & conversions."
              serviceHiddenImage={HomeService}
            />
          </div>
          {/* 3 */}
          <div className="max-w-full font-[var[(--font-figtree)]]">
            <ServiceCard
              serviceIcon={Service3}
              serviceName="Digital Marketing"
              servicePara="Targeted strategies to grow your online presence and reach. We manage SEO,
social media, PPC, and more for real results."
              serviceHiddenImage={HomeService}
            />
          </div>
          {/* 4 */}
          <div className="max-w-full font-[var[(--font-figtree)]]">
            <ServiceCard
              serviceIcon={Service4}
              serviceName="Graphic Design"
              servicePara="Striking visuals that capture attention and build recognition. From logos to social
content, we bring your brand to life."
              serviceHiddenImage={HomeService}
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <ProjectsComponent />

      {/* Cta */}
      <CtaComponent />

      {/* Testimonial */}
      <Testimonial />

      {/* Blog */}
      <BlogComponent />
    </>
  );
};

export default Home;
