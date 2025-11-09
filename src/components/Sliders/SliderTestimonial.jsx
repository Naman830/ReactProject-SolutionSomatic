import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function SliderTestimonial({
  paragraph,
  name,
  occupation,
  star,
}) {
  function renderStar(safeStar) {
    let stars = [];
    let totalStars = 5;

    let safeTotalStar = Math.min(safeStar, totalStars);

    let fullStars = Math.floor(safeTotalStar);
    let hasHalfStar = safeTotalStar % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="text-yellow-400 text-xl" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-400 text-xl" />
      );
    }

    while (stars.length < totalStars) {
      stars.push(
        <FaRegStar
          key={`empty-${stars.length}`}
          className="text-yellow-400 text-xl"
        />
      );
    }

    return stars;
  }

  return (
    <div className="mt-5 md:max-w-full lg:px-0 px-10 text-left ">
      <p className="font-[var[(--font-sora)]] font-[400] md:text-[18px] md:leading-7 text-[16px] leading-6 text-black max-w-2xl mb-5">
        "{paragraph}"
      </p>

      <div className="flex gap-1 mb-3">{renderStar(star)}</div>

      <h3 className="font-[var[(--font-figtree)]] font-[700] md:text-[20px] md:leading-7 text-[18px] leading-6 ">
        {name}{" "}
      </h3>
      <p className="text-gray-500 text-[14px]">{occupation}</p>
    </div>
  );
}
