// React
import { NavLink } from "react-router-dom";

// Icons
import Icon from "./Icon";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// Logo
import Footerlogo from "../../assests/logos/footer-logo.png";

export default function Footer() {
  const navLinkClass = ({ isActive }) =>
    `font-[400]  text-[14px] font-[var(--font-figtree)] transition-all leading[21] text-white
    ${isActive ? "hover:text-[var(--main-color)]" : ""}`;
  return (
    <footer className="w-full h-full bg-black pt-20 relative px-7">
      <div className="flex flex-row">

        {/* Logo */}
        <img
          src={Footerlogo}
          alt=""
          className="max-w-full 2xl:h-60  xl:h-40 2xl:mt-14 xl:mt-18
        lg:h-26 lg:mt-14 md:h-18 md:mt-14 h-14
      "
          id="footer-logo-image"
        />

        {/* Upper footer  */}
        <div className="w-full xl:max-w-[1200px] max-w-full m-auto ">
          {/* Left side */}
          <div className="flex items-center justify-between md:py-8 pb-8 md:flex-row flex-col">
            <h1
              id="footer-heading"
              className="2xl:text-[170px] xl:text-[130px] md:text-[80px] text-[60px] font-bold text-white font-[var[(--font-figtree)]]  hover:text-[var(--main-color)] transition-all"
            >
              Nuvia
            </h1>

            <div className="flex items-center flex-col">
              <div
                className="flex items-center justify-between text-white py-3.5"
                id="footer-number"
              >
                <h2 className="xl:text-[30px] lg:text-[25px] sm:text-[22px] text-[20px] text-white font-[var[(--font-figtree)]] font-bold hover:text-[var(--main-color)] transition-all text-center">
                  +5689 2589 6325
                </h2>
                <div className="w-1 h-8 bg-gray-700 lg:mx-14 sm:mx-6 mx-3"></div>

                <h2 className="xl:text-[30px] lg:text-[25px] sm:text-[22px] text-[20px] text-white font-[var[(--font-figtree)]] font-bold hover:text-[var(--main-color)] transition-all text-center">
                  hello@nuvia.com
                </h2>
              </div>

              <h1 className="xl:text-[30px] lg:text-[25px] text-[22px] text-white font-[var[(--font-figtree)]] font-bold text-center">
                121 King Street Melbourne, 3000, Australia
              </h1>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full h-0.5 bg-gray-700 m-auto"></div>

          {/* Bottom of Footer */}

          <div className="flex items-center justify-between text-white lg:py-10 py-8 lg:flex-row flex-col gap-4 ">
            {/* Links */}
            <div
              className="flex items-center justify-center flex-wrap"
              id="footLinks"
            >
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <div className="w-0.5 h-4 bg-white sm:mx-4 mx-2"></div>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              <div className="w-0.5 h-4 bg-white sm:mx-4 mx-2"></div>
              <NavLink to="/service" className={navLinkClass}>
                Services
              </NavLink>
              <div className="w-0.5 h-4 bg-white sm:mx-4 mx-2"></div>
              <NavLink to="/pages" className={navLinkClass}>
                Pages
              </NavLink>
              <div className="w-0.5 h-4 bg-white sm:mx-4 mx-2"></div>
              <NavLink to="/blog" className={navLinkClass}>
                Blogs
              </NavLink>
              <div className="w-0.5 h-4 bg-white sm:mx-4 mx-2"></div>
              <NavLink to="/projects" className={navLinkClass}>
                Projects
              </NavLink>
            </div>
            {/* Copywright */}
            <div className="flex items-center justify-between lg:gap-10 lg:flex-row flex-col gap-4">
              <div className="text-[14px] font-[var[(--font-figtree)]] font-[400px] text-white text-center">
                <p>Copyright © 2025 Nuvia. All Rights Reserved.</p>
              </div>
              <div className="flex items-center justify-center gap-4">
                {/* Facebook */}
                <Icon
                  color="white"
                  bgColor="transparent"
                  border="2px solid white"
                  hoverColor="black"
                  hoverBg="var(--main-color)"
                  hoverBorder="2px solid transparent"
                >
                  <FaFacebookF />
                </Icon>

                {/* Instagram */}
                <Icon
                  color="white"
                  bgColor="transparent"
                  border="2px solid white"
                  hoverColor="black"
                  hoverBg="var(--main-color)"
                  hoverBorder="2px solid transparent"
                >
                  <FaInstagram />
                </Icon>

                {/* LinkedIn */}
                <Icon
                  color="white"
                  bgColor="transparent"
                  border="2px solid white"
                  hoverColor="black"
                  hoverBg="var(--main-color)"
                  hoverBorder="2px solid transparent"
                >
                  <FaLinkedinIn />
                </Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
