import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const navLinkClass = ({ isActive }) =>
    `font-[400px]  text-[14px] font-[var(--font-figtree)] transition-all leading[21px] text-white
    ${isActive ? "hover:text-[var(--main-color)]" : ""}`;
  return (
    <footer className="w-full h-full bg-black pt-16">
      <div className="max-w-7xl m-auto">
        <div className="flex items-center justify-between py-8">
          <h1
            id="footer-heading"
            className="text-[170px] font-bold text-white font-[var(--font-figtree)]  hover:text-[var(--main-color)] transition-all"
          >
            Nuvia
          </h1>

          <div className="flex items-center flex-col">
            <div
              className="flex items-center justify-between text-white py-3.5"
              id="footer-number"
            >
              <h2 className="text-[30px]  text-white font-[var(--font-figtree)] font-bold hover:text-[var(--main-color)] transition-all">
                +5689 2589 6325
              </h2>
              <div className="w-px h-8 bg-gray-700 mx-14"></div>

              <h2 className="text-[30px]  text-white font-[var(--font-figtree)] font-bold hover:text-[var(--main-color)] transition-all">
                hello@nuvia.com
              </h2>
            </div>

            <h1 className="text-[30px]  text-white font-[var(--font-figtree)] font-bold ">
              121 King Street Melbourne, 3000, Australia
            </h1>
          </div>
        </div>
        <div className="w-full h-0.5 bg-gray-700 m-auto"></div>

        <div className="flex items-center justify-between text-white py-10">
          <div
            className="flex items-center justify-center gap-0"
            id="navLinks"
          >
            
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <div className="w-px h-4 bg-white mx-5.5"></div>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
              <div className="w-px h-4 bg-white mx-6"></div>
            <NavLink to="/service" className={navLinkClass}>
              Services
            </NavLink>
              <div className="w-px h-4 bg-white mx-6"></div>
            <NavLink to="/pages" className={navLinkClass}>
              Pages
            </NavLink>
              <div className="w-px h-4 bg-white mx-6"></div>
            <NavLink to="/blog" className={navLinkClass}>
              Blogs
            </NavLink>
              <div className="w-px h-4 bg-white mx-6"></div>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
          </div>

          <div className="flex items-center justify-between gap-10">
            <div className="text-[14px] font-[var(--font-figtree)] font-[400px] text-white">
              <p>Copyright © 2025 Nuvia. All Rights Reserved.</p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <a
                href="#"
                className="hover:text-[var(--black-color)] hover:bg-[var(--main-color)] ease-in hover:border-[var(--main-color)] hover:-translate-y-1 duration-350 py-3.5 px-3.5 border-2 border-white rounded-full text-[22px] "
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="hover:text-[var(--black-color)] hover:bg-[var(--main-color)] ease-in hover:border-[var(--main-color)] hover:-translate-y-1 duration-350 py-3.5 px-3.5 border-2 border-white rounded-full text-[22px] "
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-[var(--black-color)] hover:bg-[var(--main-color)] ease-in hover:border-[var(--main-color)] hover:-translate-y-1 duration-350 py-3.5 px-3.5 border-2 border-white rounded-full text-[22px] "
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
