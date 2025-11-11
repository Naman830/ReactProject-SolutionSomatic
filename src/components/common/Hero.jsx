import { Link } from "react-router-dom";
import SubBanner from '../../assests/images/sub-banner-vector.png'

export default function Hero({ heading, paragraph, pageName }) {
    return(
  <section className="w-full md:py-24 py-16 bg-gray-50">
    <div className="lg:container w-full mx-auto px-4">
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <h1 className="inline-block bg-[var(--main-color)] leading-28 text-[144px] font-[800] text-black uppercase mb-5">
            {heading}
          </h1>
          <p className="text-[18px] leading-7 font-[400] text-[#aaa] mb-6 ">
            {paragraph}
          </p>
          <div className="inline-block ">
            <ol className="px-4 py-5 min-w-48 rounded-3xl flex items-center justify-center gap-4 bg-white">
              <li className="text-[14px] font-[600] leading-4">
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
        <div className="col-span-4 ">{SubBanner}</div>
      </div>
    </div>
  </section>
    )
}
