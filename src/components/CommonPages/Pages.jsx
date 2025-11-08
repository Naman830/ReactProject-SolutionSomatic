import AboutImg1 from "../../assests/images/AboutUs-1.png";
import AboutImg2 from "../../assests/images/AboutUs-2.png";
import AboutImg3 from "../../assests/images/AboutUs-3.png";
import { CommonBtn } from "../common/Button";

export default function PageBug() {
  return <h1 className="text-9xl">FIX BUG FROM PAGES</h1>;
}

export function AboutUs() {
  return (
    <div className="relative py-32 bg-black w-full overflow-hidden">
      <figure className="absolute bottom-0 left-0 ">
        <img src={AboutImg1} alt="About us image" 
        className="lg:w-full md:w-90 w-60"/>
      </figure>
      <figure className="absolute lg:top-32 lg:left-80 md:top-20 md:left-64 top-0 left-36">
        <img src={AboutImg2} alt=""/>
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
                  md:text-5xl sm:text-4xl text-3xl
                  lg:leading-[70px] md:leading-[60px] leading-[42px]
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

            <div className="grid grid-cols-12 items-center lg:mx-0 lg:text-left text-center mx-auto  max-w-3xl " id="About-Stats">
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
