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

export function TalkBtn() {
  return (
    <div
    className="grid place-items-center bg-[var(--main-color)] text-center rounded-full"
      id="talk-btn"
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
