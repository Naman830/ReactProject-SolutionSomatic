import { Link } from "react-router-dom";
import logo from "../../assests/logos/logo.png";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import NavButton from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="flex items-center justify-between py-4 px-64 fixed min-w-full bg-white">
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="img-fluid" />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-16" id="navLinks">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Services</Link>
        <Link to="/pages">Pages</Link>
        <Link to="/blog">Blogs</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <div className="flex items-center justify-center gap-2.5">

        <NavButton />

        <div id="menu">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={24}
            color="#000"
          />
        </div>
      </div>

       {/* Right-Side Drawer Menu */}
      <div
        className={`fixed top-22  h-full max-h-max rounded-2xl gap-3 bg-white shadow-2xl z-50 flex flex-col items-start w-full max-w-lvh px-8 py-10 transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]l ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        }`}
      >
        <Link to="/" onClick={closeMenu} className="text-lg hover:text-[var(--main-color)] transition">Home</Link>
        <Link to="/about" onClick={closeMenu} className="text-lg hover:text-[var(--main-color)] transition">About</Link>
        <Link to="/service" onClick={closeMenu} className="text-lg hover:text-[var(--main-color)] transition">Services</Link>
        <Link to="/pages" onClick={closeMenu} className="text-lg hover:text-[var(--main-color)] transition">Pages</Link>
        <Link to="/blog" onClick={closeMenu} className="text-lg hover:text-[var(--main-color)] transition">Blogs</Link>
        <Link to="/projects" onClick={closeMenu} className="text-lg hover:text-[var(--main-color)] transition">Projects</Link>
      </div>
    </nav>
  );
}
