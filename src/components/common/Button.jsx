// Reacr
import { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { FaArrowRight } from "react-icons/fa";

// Default
export default function Button() {
  return <button>Fix bug</button>;
}

// Contact Button
export function ContactBtn({ name }) {
  return (
    <>
      <Link
      to="/about"
        className="bg-transparent border outline-none border-black rounded-full py-3.5 px-7 flex items-center gap-2 hover:bg-[var(--main-color)] hover:border-transparent transition-all
        font-[600] text-[14px] leading-4
        "
        style={{ fontFamily: "var(--font-sora)" }}
        id="nav-btn"
      >
        {name}
        <FaArrowRight className="-rotate-45" />
      </Link>
    </>
  );
}

// TalkBtn
export function TalkBtn({ hoverbg, hovercolor, color, bg }) {
  return (
    <div
      className="grid place-items-center bg-[var(--main-color)] text-center rounded-full md:ml-10
      lg:w-[172px] lg:h-[172px] sm:w-[140px] w-[120px] sm:h-[140px] h-[120px] relative z-50
      "
      id="talk-btn"
      style={{
        "--btn-bg": bg,
        "--btn-color": color,
        "--btn-hover-bg": hoverbg,
        "--btn-hover-color": hovercolor,
      }}
    >
      <span className="relative z-20 font-[600] text-[16px] font-[var[(--font-figtree)]]">
        Lets
        <br />
        Talk With us
        <Link to="/about" className="grid place-items-center mt-2">
          <FaArrowRight className="-rotate-45" />
        </Link>
      </span>
    </div>
  );
}

// CommonBtn Like Learn More or Read More
export function CommonBtn({ border, color, name, hoverColor, hoverBorder }) {
  


  const [hover, setHover] = useState();
  return (
    <>
      <button
        className="bg-transparent outline-none rounded-full text-center flex items-center justify-center gap-2 hover:bg-[var(--main-color)] transition-all
        font-[600] text-[14px] leading-4
        "
        style={{
          fontFamily: "var(--font-sora)",
          border: hover ? hoverBorder : border,
          color: hover ? hoverColor : color,
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        id="CommonBtn"
      >
        {name}
        <FaArrowRight className="-rotate-45" />
      </button>
    </>
  );
}
