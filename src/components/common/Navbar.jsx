import { Link, NavLink } from "react-router-dom";
import logo from "../../assests/logos/logo.png";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import NavButton from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    `transition-all text-black font-400 text-[14px] leading[21px] ${
      isActive ? "bg-[var(--main-color)] font-bold" : ""
    }`;
  const menuDropdownClass = ({ isActive }) =>
    `text-lg  hover:font-bold font-[var(--font-figtree)] transition ${
      isActive ? "font-bold" : ""
    }`;

  return (
    <nav className="flex items-center justify-between py-4 px-64 fixed min-w-full z-[1000] bg-white">
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="img-fluid" />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-16" id="navLinks">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="/service" className={navLinkClass}>
          Services
        </NavLink>
        <NavLink to="/pages" className={navLinkClass}>
          Pages
        </NavLink>
        <NavLink to="/blog" className={navLinkClass}>
          Blogs
        </NavLink>
        <NavLink to="/projects" className={navLinkClass}>
          Projects
        </NavLink>
      </div>
      <div className="flex items-center justify-center gap-2.5">
        <NavButton name="Contact us" />

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
        className={`fixed top-[90px] left-4 right-4 md:left-10 md:right-10 bg-white shadow-2xl z-[100] flex flex-col items-start gap-6 px-6 py-10 rounded-3xl transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-[100vh] opacity-0"
        }`}
      >
        <NavLink to="/" onClick={closeMenu} className={menuDropdownClass}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeMenu} className={menuDropdownClass}>
          About
        </NavLink>
        <NavLink
          to="/service"
          onClick={closeMenu}
          className={menuDropdownClass}
        >
          Services
        </NavLink>
        <NavLink to="/pages" onClick={closeMenu} className={menuDropdownClass}>
          Pages
        </NavLink>
        <NavLink to="/blog" onClick={closeMenu} className={menuDropdownClass}>
          Blogs
        </NavLink>
        <NavLink
          to="/projects"
          onClick={closeMenu}
          className={menuDropdownClass}
        >
          Projects
        </NavLink>
      </div>
    </nav>
  );
}
