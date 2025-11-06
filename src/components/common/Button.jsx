import { FaArrowRight } from "react-icons/fa";

export default function NavButton({ name }) {
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
