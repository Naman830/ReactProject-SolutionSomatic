import Hero from "../components/common/Hero";
import { AboutUs, BlogComponent } from "../components/CommonSection/Sections";
import whoImage1 from "../assests/images/who-we-are-img.jpg";
import { CommonBtn } from "../components/common/Button";
import { AboutCard } from "../components/Card/Card";
import { TeamCard } from "../components/Card/Card";
import aboutImage1 from "../assests/images/About-card-1.png";
import aboutImage2 from "../assests/images/About-card-2.png";
import aboutImage3 from "../assests/images/About-card-3.png";
import aboutImage4 from "../assests/images/About-card-4.png";
import TeamMember1 from "../assests/images/team-person1.jpg";
import TeamMember2 from "../assests/images/team-person2.jpg";
import TeamMember3 from "../assests/images/team-person3.jpg";
import TeamMember4 from "../assests/images/team-person4.jpg";

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
      {/* Solutions We Provide */}
      <section className="w-full md:py-24 py-8 bg-[#f9f9f9]">
        <div className="lg:container w-full mx-auto xl:px-4 lg:px-0 px-4">
          <div className="solution-title text-center text-black mb-14">
            <span className="inline-block md:text-[20px] md:leading:leading-7 text-[16px] leading-6 font-[600] mb-6">
              Solutions We Provide
            </span>
            <h2 className="xl:text-7xl md:text-6xl text-4xl font-[800] max-w-5xl m-auto">
              Our Commitment to Tailored, Impactful{" "}
              <span className="inline-block xl:leading-14 md:leading-12 leading-10 bg-[var(--main-color)]">
                Solutions
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-12 xl:gap-10 gap-5 w-full">
            <div className="lg:col-span-3 col-span-12">
              <AboutCard
                aboutImage={aboutImage1}
                aboutName="Tailored Strategies"
                aboutPara="We don’t believe in one-size- fits-all. Every solution is built around your specific goals and challenges."
              />
            </div>
            <div className="lg:col-span-3 col-span-12">
              <AboutCard
                aboutImage={aboutImage2}
                aboutName="Scalable Technology"
                aboutPara="From startups to enterprise platforms, we use the latest tools to build fast, secure, and scalable solutions."
              />
            </div>
            <div className="lg:col-span-3 col-span-12">
              <AboutCard
                aboutImage={aboutImage3}
                aboutName="Transparent Collaboration"
                aboutPara="We keep communication clear and workflows seamless, so you’re involved at every step of the project."
              />
            </div>
            <div className="lg:col-span-3 col-span-12">
              <AboutCard
                aboutImage={aboutImage4}
                aboutName="User-Centered Design"
                aboutPara="Our designs focus on usability, clarity, and real user behavior — ensuring better engagement and conversions."
              />
            </div>
          </div>
        </div>
      </section>
      {/* Fixed Images */}
      <div className="aboutFixedImg w-full relative"></div>
      {/* Our Team */}
      <section className="w-full md:py-24 py-8 bg-[#f9f9f9]">
        <div className="lg:container w-full mx-auto xl:px-4 lg:px-0 px-4">
          <div className="text-center text-black mb-14">
            <span className="inline-block md:text-[20px] md:leading:leading-7 text-[16px] leading-6 font-[600] mb-6">
              Our Team
            </span>
            <h2 className="xl:text-7xl md:text-6xl text-4xl font-[800] max-w-5xl m-auto">
              Meet the{" "}
              <span className="inline-block xl:leading-14 md:leading-12 leading-10 bg-[var(--main-color)]">
                Experts
              </span>{" "}
              Behind Our Tailored Solutions
            </h2>
          </div>

          <div className="grid grid-cols-12 xl:gap-10 gap-5 w-full sm:px-0 px-16">
            <div className="lg:col-span-3 sm:col-span-6 col-span-12">
              <TeamCard
                teamImage={TeamMember1}
                teamName="Emma Collins"
                teamRole="Creative Director"
              />
            </div>
            <div className="lg:col-span-3 sm:col-span-6 col-span-12">
              <TeamCard
                teamImage={TeamMember2}
                teamName="James Bennett "
                teamRole="Lead UX Designer"
              />
            </div>
            <div className="lg:col-span-3 sm:col-span-6 col-span-12">
              <TeamCard
                teamImage={TeamMember3}
                teamName="Sophie Turner"
                teamRole="Digital Strategist"
              />
            </div>
            <div className="lg:col-span-3 sm:col-span-6 col-span-12">
              <TeamCard
                teamImage={TeamMember4}
                teamName="Daniel Harris"
                teamRole="Front-End Developer"
              />
            </div>
          </div>
        </div>
      </section>
      {/* BLOG SECTION */}
      <BlogComponent />
    </>
  );
}

export default About;
