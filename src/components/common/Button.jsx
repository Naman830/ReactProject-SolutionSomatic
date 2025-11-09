import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Button() {
  return <button>Fix bug</button>;
}

export function NavButton({ name }) {
  return (
    <>
      <button
        className="bg-transparent border outline-none border-black rounded-full py-3.5 px-7 flex items-center gap-2 hover:bg-[var(--main-color)] hover:border-transparent transition-all
        "
        style={{ fontFamily: "var(--font-sora)" }}
        id="nav-btn"
      >
        {name}
        <FaArrowRight className="-rotate-45" />
      </button>
    </>
  );
}

export function TalkBtn({hoverbg, hovercolor, color, bg}) {
  const [hover, setHover] = useState();
  return (
    <div
      className="grid place-items-center bg-[var(--main-color)] text-center rounded-full md:ml-10"
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

export function CommonBtn({ border, color, name, hoverColor, hoverBorder }) {
  const [hover, setHover] = useState();
  return (
    <>
      <button
        className="bg-transparent outline-none rounded-full text-center flex items-center justify-center gap-2 hover:bg-[var(--main-color)] transition-all
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
