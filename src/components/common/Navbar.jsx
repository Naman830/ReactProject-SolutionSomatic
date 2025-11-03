import { Link } from "react-router-dom";
import logo from '../../assests/logos/logo.png'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 fixed min-w-full bg-white">
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="img-fluid"/>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-3" id="navLinks">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Services</Link>
        <Link to="/pages">Pages</Link>
        <Link to="/blog">Blogs</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <div>
        <button className="bg-transparent border border-black rounded-2xl py-3.5 px-9 grid place-items-center hover:bg-[var(--main-color)] transition-all">Contact Us</button>
      </div>
    </nav>
  );
}
