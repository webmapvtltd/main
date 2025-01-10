// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gold-400">
              Webma
            </h1>
            <p className="text-lg mt-2">Creating memorable websites for your special events</p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-gold-400 mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/" className="hover:text-gold-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold-400">About</Link></li>
              <li><Link to="/services" className="hover:text-gold-400">Services</Link></li>
              <li><Link to="/packages" className="hover:text-gold-400">Packages</Link></li>
              <li><Link to="/templates" className="hover:text-gold-400">Templates</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400">Contact</Link></li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-gold-400 mb-4">Contact Us</h3>
            <ul>
              <li>Email: <a href="mailto:webmasender@gmail.com" className="hover:text-gold-400">webmasender@gmail.com</a></li>
              <li>Phone: <a href="tel:+917667025267" className="hover:text-gold-400">+91 7667 025267</a></li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 text-center">
          <Link to="/contact" className="inline-block bg-gold-400 text-navy-800 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gold-500 transition duration-300">
            Get Started
          </Link>
        </div>

        {/* Social Media */}
        {/* <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gold-400 mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com/webma" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-white">
              <i className="fab fa-facebook-square text-2xl"></i>
            </a>
            <a href="https://twitter.com/webma" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-white">
              <i className="fab fa-twitter-square text-2xl"></i>
            </a>
            <a href="https://instagram.com/webma" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-white">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Webma. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
