import { GoDotFill } from "react-icons/go";
import { CommonBtn } from "../common/Button";

export default function ({
  serviceImg,
  flex,
  paragraph,
  heading,
  serviceIcon,
  listtext1,
  listtext2,
}) {
  return (
    <div className="lg:container w-full mx-auto px-4">
      <div className="grid grid-cols-12" style={{ flexDirection: flex }}>
        <div className="md:col-span-6 col-span-12">
          <div id="serviceImg">
            <figure className="overflow-hidden rounded-4xl">
              <img src={serviceImg} alt="" className="rounded-4xl " />
            </figure>
          </div>
        </div>
        <div className="md:col-span-6 col-span-12">
          <div className="md:pl-16 pt-10">
            <figure className="mb-6">
              <img src={serviceIcon} alt="" />
            </figure>

            <h4 className="lg:mb-6 mb-5  font-[700] lg:text-[42px] leading-11 text-4xl text-black">
              {heading}
            </h4>

            <p className="lg:mb-8 md:mb-5 mb-4 lg:text-[18px] text-[16px] lg:leading-8 leading-7 font-[400] text-black">
              {paragraph}
            </p>

            <ul className="p-0 list-none">
              <li className="font-[600] relative lg:mb-3 mb-2 text-black pl-6 lg:text-[18px] text-[16px] lg:leading-5 leading-4 ">
                <GoDotFill className="absolute  left-0 top-1 text-[14px]"/> {listtext1}
              </li>
              <li className="font-[600] relative lg:mb-3 mb-2 text-black pl-6 lg:text-[18px] text-[16px] lg:leading-5 leading-4 ">
                <GoDotFill className="absolute  left-0 top-1 text-[14px]"/> {listtext2}
              </li>
            </ul>

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
  );
}
