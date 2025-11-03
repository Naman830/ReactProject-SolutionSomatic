import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full h-full bg-black">
      <div className="flex items-center justify-between">
        <h1
          id="footer-heading"
          className="text-9xl text-white hover:text-[var(--main-color)] transition-all"
        >
          Nuvia
        </h1>

        <div className="flex items-center flex-col">
          <div
            className="flex items-center justify-between text-white"
            id="footer-number"
          >
            <h2 className="text-3xl text-white hover:text-[var(--main-color)] transition-all">
              +5689 2589 6325
            </h2>
            <div className="w-px h-8 bg-gray-700 mx-4"></div>

            <h2 className="text-3xl text-white hover:text-[var(--main-color)] transition-all">
              hello@nuvia.com
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-700 m-10"></div>
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center justify-center gap-2" id="navLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Services</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/blog">Blogs</Link>
          <Link to="/projects">Projects</Link>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p>Copyright © 2025 Nuvia. All Rights Reserved.</p>
          </div>
          <div>
            <a href="#" className="hover:text-[var(--main-color)]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[var(--main-color)]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[var(--main-color)]">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
