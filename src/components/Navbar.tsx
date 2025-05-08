import { useState } from "react";
import main from "../assets/main.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between p-4 md:px-12 relative">
      <div className="flex items-center space-x-4">
        <img src={main} alt="Logo" className="w-40 h-10 object-contain" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 text-sm md:text-base justify-center items-center">
        <li className=" paragraph nav-item">Services</li>
        <li className="paragraph nav-item">About Us</li>
        <li className="paragraph nav-item">Portfolio</li>
        <li className="paragraph nav-item">Blog</li>
        <li className="paragraph nav-item">FAQ</li>
        <button className=" title main-button ml-6 hidden md:block">
          Book a call
        </button>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white text-black flex flex-col items-center py-4 space-y-4 shadow-md md:hidden z-50">
          <li className="paragraph nav-item">Services</li>
          <li className="paragraph nav-item">About Us</li>
          <li className="paragraph nav-item">Portfolio</li>
          <li className="paragraph nav-item">Blog</li>
          <li className="paragraph nav-item">FAQ</li>
          <button className=" title main-button">Book a call</button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
