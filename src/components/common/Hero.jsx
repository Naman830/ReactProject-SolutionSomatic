import { Link } from "react-router-dom";
import subBanner from '../../assests/images/subBanner.png'

export default function Hero({ heading, paragraph, pageName }) {
    return(
  <section className="w-full lg:py-20 md:py-14 py-10 bg-gray-50">
    <div className="lg:container w-full mx-auto px-4">
      <div className="grid grid-cols-12">
        <div className="md:col-span-8 col-span-12 py-10  md:text-left text-center">
          <h1 className="inline-block bg-[var(--main-color)] xl:leading-26 xl:text-[144px]
          lg:text-[100px] lg:leading-20 xl:mb-8 lg:mb-6 text-[70px] leading-13  mb-4 
          font-[800] text-black uppercase">
            {heading}
          </h1>
          <p className="md:text-[18px] text-[16px] leading-5 md:leading-7  font-[400] text-black mb-7 max-w-2xl">
            {paragraph}
          </p>
          <div className="inline-block ">
            <ol className="px-4 py-2.5 min-w-42  rounded-3xl flex items-center justify-center gap-4 bg-white">
              <li className="text-[14px] font-[600] leading-4 hover:underline">
                <Link to="/">Home</Link>
              </li>
                <li>
                    /
                </li>
              <li className="text-[14px] font-[600] leading-4">
                {pageName}
              </li>
            </ol>
          </div>
        </div>
        <div className="md:col-span-4 col-span-12 flex items-center justify-center">
            <figure >
                <img src={subBanner} alt="" className="xl:w-full lg:w-[250px] md:w-[200px] w-[180px]"/>
            </figure>
            </div>
      </div>
    </div>
  </section>
    )
}
