// Icon
import { MdSend } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Newsletter() {
  return (
    <section className="w-full md:py-30 py-24 bg-[var(--main-color)]">
      <div className="lg:container w-full mx-auto px-4">
        <div className="flex items-center justify-between lg:flex-row flex-col">
          <h2 className="font-[var[(--font-figtree)]] font-[800] xl:text-7xl md:text-6xl text-5xl lg:text-left text-center mb-6 lg:max-w-full max-w-2xl">
            Stay Tuned & Subscribe to Our{" "}
            <span className="text-white bg-black inline-block lg:leading-14 md:leading-12 sm:leading-10 leading-8">Newsletter</span>
          </h2>

          <div className="">
            <form action="">
              <div className="relative" id="newletterForm">
                <input
                  type="text"
                  placeholder="Enter Email Adress"
                  name="email"
                  className=" relative text-[16px] xl:min-w-[530px] sm:min-w-[390px] min-w-[340px]
                  xl:h-16 h-14 leading-5 font-[400] text-[#aaa] bg-white rounded-4xl py-3 pl-9 pr-4
                  mb-5 w-full border-[1px] border-transparent overflow-visible outline-none
                  
                  " 
                />
                <button className="
                  text-2xl text-white hover:text-black hover:bg-[var(--main-color)] bg-black rounded-full border-none absolute right-2 sm:top-1.5 top-2.5 overflow-visible outline-none
                  -rotate-45 grid place-items-center

                  xl:w-14 xl:h-14 sm:w-12 sm:h-12 w-10 h-10
                  " >
                  <MdSend />
                </button>
              </div>
              <div id="checkBox" className="flex items-center gap-2">
                <input type="checkbox" id="term" />
                <label htmlFor="term" className="text-[16px] leading-5 font-[500] text-black">
                  I agree to the <Link to="/" className="relative pointer hover:underline">Privacy Policy.</Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
