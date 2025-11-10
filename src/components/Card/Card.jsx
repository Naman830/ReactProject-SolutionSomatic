// Icon
import { FaArrowRight } from "react-icons/fa";

// Imports 
import { CommonBtn } from "../common/Button";
import { Link } from "react-router-dom";

// Default
export default function DefaultCard() {
  return <h1>Default card check error in Card.jsx</h1>;
}



// Service card
export function ServiceCard({
  serviceIcon,
  serviceName,
  servicePara,
  serviceHiddenImage,
}) {
  return (
    <div className="services xl:h-56 lg:h-44 gap-5 items-center relative border-t-[1px] border-[#dfdfdf]
    xl:py-2.5 xl:pl-10 py-5 px-2.5 hover:rounded-3xl hover:bg-[var(--main-color)] hover:border-[var[(--main-color)]]
    ">
      <figure id="serviceImg" className="sm:block hidden">
        <img src={serviceIcon} alt="" />
      </figure>
      <div className="inner-service-div md:gap-7 items-center">
        <div className="">
          <h4 className="sm:text-[42px] text-[36px] sm:leading-[42px] leading-[36px] font-bold mb-4">
            {serviceName}
          </h4>
          <p className="text=[18px] leading-[30px] font-[var[(--font-sora)]] font-[400]">
            {servicePara}
          </p>
        </div>
        <div className="relative" id="serviceHiddenImage">
          <figure className="w-full opacity-0 invisible z-10  absolute
          2xl:-top-44 2xl:left-2/4 lg:block hidden
          ">
            <img src={serviceHiddenImage} alt="" className="rounded-4xl" />
          </figure>
        </div>
        <div className="">
          <Link
          to="/projects"
            href="#"
            className="lg:h-20 lg:min-w-20 md:h-16 md:min-w-16 h-12 min-w-12 inline-flex items-center justify-center md:text-2xl text-[18px] transition-all ease-in-out bg-transparent border-[1px] border-black rounded-full font-[400] 
            "
          >
            <FaArrowRight className="-rotate-45" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// Project Card
export function ProjectCard({
  projectShowcaseName1,
  projectShowcaseName2,
  showcaseHeading,
  projectImage,
}) {
  return (
    <div className="float-left sm:p-10 p-4" id="projectCard">
      <figure className="rounded-[35px] mb-3.5">
        <img src={projectImage} alt="" />
      </figure>

      <div className="flex items-center justify-between">
        <div className=" inline">
          <span className="bg-white text-black py-1.5 px-5 rounded-2xl text-[14px] leading-5 font-[500] mb-3.5 inline ">{projectShowcaseName1}</span>
          <span className="bg-white text-black py-1.5 px-5 rounded-2xl text-[14px] leading-5 font-[500] mb-3.5 inline ml-2.5 ">{projectShowcaseName2}</span>
          <h5 className="font-[var[(--font-figtree)]] font-[700] lg:text-4xl text-3xl mt-2">{showcaseHeading}</h5>
        </div>
        <a
          href="#"
          className="projectArrow  lg:h-16 lg:min-w-16 md:h-14 md:min-w-14 h-10 min-w-10 inline-flex items-center justify-center md:text-2xl text-[16px] transition-all ease-in-out bg-transparent border-[1px] border-black rounded-full font-[400]"
        >
          <FaArrowRight className="-rotate-45" />
        </a>
      </div>
    </div>
  );
}

// Blog Card
export function BlogCard({ BlogImage, BlogDate, BlogName }) {
  return (
    <div className="w-full rounded-4xl bg-white xl:p-6 p-4">
      <figure className="BlogFigure rounded-3xl mb-3.5 ">
        <img src={BlogImage} alt="BlogImage" className="rounded-3xl" />
      </figure>

      <div className="px-3 ">
        <span className="block text-[16px] leading-6 font-[400] text-[#aaa] mb-2">
          {BlogDate}
        </span>
        <a
          href=""
          className="font=[var[(--font-sora)]] md:text-[24px] text-[20px] md:leading-7 leading-6 font-[600] mb-4 block hover:underline"
        >
          {" "}
          {BlogName}
        </a>
        <CommonBtn
          name={"Read More"}
          border="2px solid black"
          color="black"
          hoverBorder="2px solid transparent"
          hoverColor="black"
        />
      </div>
    </div>
  );
}