import Hero from "../components/common/Hero";
import { AboutUs, BlogComponent } from "../components/CommonSection/Sections";
import whoImage1 from "../assests/images/who-we-are-img.jpg";
import { CommonBtn } from "../components/common/Button";

function About() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero
        heading="About Us"
        paragraph="We craft results-driven digital strategies that turn vision into measurable impact."
        pageName="About"
      />
      {/* WHO WE ARE */}
      <section className="w-full md:py-16 py-8 bg-white">
        <div className="lg:container w-full mx-auto px-4">
          <div className="grid grid-cols-12 grid-col-1">
            <div className="md:col-span-5 col-span-12 who-we-are-1 flex items-center justify-center">
              <figure>
                <img src={whoImage1} alt="" className="rounded-4xl" />
              </figure>
            </div>
            <div className="md:col-span-7 col-span-12 flex items-center justify-center md:text-left text-center">
              <div className="md:pl-8 lg:pt-0 pt-8">
                <span className="md:text[20px] text[18px] md:leading-8 leading-7 font-[600] xl:mb-5 lg:mb-3 mb-2 block ">
                  Who We Are
                </span>

                <h2 className="font-[800] 2xl:text-[72px] 2xl:leading-22 xl:text-6xl lg:text-5xl xl:mb-6 mb-5 text-4xl leading-11">
                  Helping Brands Thrive in a{" "}
                  <span className="bg-[var(--main-color)] inline-block xl:leading-14 md:leading-8 ">
                    Digital-First
                  </span>{" "}
                  World
                </h2>

                <p className="font-[400] xl:text-[22px] xl:leading-7 lg:text-[18px] lg:leading-7 text-[16px] leading-6   xl:mb-5 mb-3 font-[var[(--font-sora)]]">
                  In today’s fast-evolving digital landscape, staying ahead
                  means more than just being online — it means being strategic,
                  innovative, and adaptable. At Nuvia, we help brands navigate
                  this digital-first world with tailored solutions that blend
                  design, technology, and marketing.
                </p>
                               <p className="font-[400] xl:text-[22px] xl:leading-7 lg:text-[18px] lg:leading-7 text-[16px] leading-6   xl:mb-5 mb-3 font-[var[(--font-sora)]]">
                  From building engaging user experiences to executing
                  data-driven strategies, we’re here to ensure your brand not
                  only keeps up — but stands out.
                </p>

                <div className="flex items-center justify-center md:block">
                  <CommonBtn
                    name={"Read More"}
                    border="1px solid black"
                    color="black"
                    hoverBorder="2px solid transparent"
                    hoverColor="white"
                    background="transparent"
                    backgroundHover="black"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <AboutUs />
      {/* BLOG SECTION */}
      <BlogComponent />
    </>
  );
}

export default About;
