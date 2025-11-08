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
        <figure className="absolute bottom-0 left-0">
          <img src={AboutImg1} alt="About us image" />
        </figure>
        <figure className="absolute top-32 left-80">
          <img src={AboutImg2} alt="" />
        </figure>

        <figure className="absolute bottom-24 right-36">
        <img src={AboutImg3} alt="" />
        </figure>

        <div className="AboutUs-Container container mx-auto px-4  ">
          <div className="grid grid-cols-12 items-center">
            <div className="lg:col-span-3 col-span-0">
            </div>

            <div className="lg:col-span-9 col-span-12">
              <div className="float-right">
                <div className="flex items-center justify-between mb-12">
                  <span></span>
                  <CommonBtn 
                  name={"Learn More"}
                  border="2px solid white"
                  color="white"
                  hoverBorder="2px solid transparent"
                  hoverColor="black"
                  />
                </div>
                <h3>

                </h3>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
