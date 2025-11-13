import { GoDotFill } from "react-icons/go";
import { CommonBtn } from "../common/Button";

export default function ServiceCardRow({
  serviceImg,
  paragraph,
  heading,
  serviceIcon,
  listtext1,
  listtext2,
}) {
  return (
    <div className="lg:container w-full mx-auto px-4 " >
      <div className="grid grid-cols-12 " >
        <div className="md:col-span-6 col-span-12 grid place-items-center">
          <div id="serviceImg">
            <figure className="overflow-hidden rounded-4xl">
              <img src={serviceImg} alt="" className="rounded-4xl " />
            </figure>
          </div>
        </div>
        <div className="md:col-span-6 col-span-12 md:text-left text-center ">
          <div className="md:pl-16 pt-10">
            <figure className="xl:mb-6 mb-3 md:block grid place-items-center">
              <img src={serviceIcon} alt="" />
            </figure>

            <h4 className="xl:mb-6 lg:mb-5 mb-3  font-[700] lg:text-[42px] leading-11 text-4xl text-black">
              {heading}
            </h4>

            <p className="xl:mb-8 lg:mb-5 mb-4  lg:text-[18px] text-[16px] lg:leading-8 leading-7 font-[400] text-black">
              {paragraph}
            </p>

            <ul className="p-0 list-none lg:mb-8 mb-6 md:max-w-full max-w-3xs mx-auto">
              <li className="font-[600] relative lg:mb-3 mb-2 text-black md:pl-6 pl-2 lg:text-[18px] text-[16px] lg:leading-5 leading-4 ">
                <GoDotFill className="absolute  left-0 md:top-1 top-0.5 text-[14px]" />{" "}
                {listtext1}
              </li>
              <li className="font-[600] relative lg:mb-3 mb-2 text-black md:pl-6 pl-2 lg:text-[18px] text-[16px] lg:leading-5 leading-4 ">
                <GoDotFill className="absolute  left-0 md:top-1 top-0.5 text-[14px]" />{" "}
                {listtext2}
              </li>
            </ul>

            <div className="md:block grid place-items-center">
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
  );
}

export function ServiceCardReverse({
  serviceImg,
  paragraph,
  heading,
  serviceIcon,
  listtext1,
  listtext2,
}) {
  return (
    <div className="lg:container w-full mx-auto px-4 " >
      <div className="grid grid-cols-12 " >
        <div className="md:col-span-6 col-span-12 md:text-left text-center ">
          <div className="md:pr-16 pt-10">
            <figure className="xl:mb-6 mb-3 md:block grid place-items-center">
              <img src={serviceIcon} alt="" />
            </figure>

            <h4 className="xl:mb-6 lg:mb-5 mb-3  font-[700] lg:text-[42px] leading-11 text-4xl text-black">
              {heading}
            </h4>

            <p className="xl:mb-8 lg:mb-5 mb-4  lg:text-[18px] text-[16px] lg:leading-8 leading-7 font-[400] text-black">
              {paragraph}
            </p>

            <ul className="p-0 list-none lg:mb-8 mb-6 md:max-w-full max-w-3xs mx-auto">
              <li className="font-[600] relative lg:mb-3 mb-2 text-black md:pl-6 pl-2 lg:text-[18px] text-[16px] lg:leading-5 leading-4 ">
                <GoDotFill className="absolute  left-0 md:top-1 top-0.5 text-[14px]" />{" "}
                {listtext1}
              </li>
              <li className="font-[600] relative lg:mb-3 mb-2 text-black md:pl-6 pl-2 lg:text-[18px] text-[16px] lg:leading-5 leading-4 ">
                <GoDotFill className="absolute  left-0 md:top-1 top-0.5 text-[14px]" />{" "}
                {listtext2}
              </li>
            </ul>

            <div className="md:block grid place-items-center">
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
        <div className="md:col-span-6 col-span-12 grid place-items-center">
          <div id="serviceImg">
            <figure className="overflow-hidden rounded-4xl">
              <img src={serviceImg} alt="" className="rounded-4xl " />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}