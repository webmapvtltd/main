// components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-navy-800 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <div className="flex justify-center items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-gold-400 p-2">
            <Link to="/">
              <img src="icon.png" alt="Logo" className="h-10 w-auto md:h-12" />
            </Link>
          </h1>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gold-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-gold-400">
              About
            </Link>
            <Link to="/services" className="hover:text-gold-400">
              Services
            </Link>
            {/* <Link to="/packages" className="hover:text-gold-400">
              Packages
            </Link> */}
            <Link to="/templates" className="hover:text-gold-400">
              Templates
            </Link>

            <Link to="/contact" className="hover:text-gold-400">
              Contact
            </Link>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-gold-400 text-navy-800 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gold-500 transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-700">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li>
              <Link to="/" className="hover:text-gold-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gold-400">
                Services
              </Link>
            </li>
            {/* <li>
              <Link to="/packages" className="hover:text-gold-400">
                Packages
              </Link>
            </li> */}
            <li>
              <Link to="/templates" className="hover:text-gold-400">
                Templates
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
