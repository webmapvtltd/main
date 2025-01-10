// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="flex-grow bg-gray-100">
      {/* Hero Section */}
      <header className="bg-navy-800 text-white py-16 text-center">
        <h1 className="text-4xl font-bold text-gold-400">Welcome to Webma</h1>
        <p className="mt-4 text-lg">
          Crafting custom websites for your memorable events – marriages, birthdays, and more!
        </p>
        <Link to="/services">
          <button className="mt-6 px-6 py-3  bg-gold-400 text-navy-800 font-bold rounded shadow hover:bg-gray-200 transition duration-300">
            Explore Our Services
          </button>
        </Link>
      </header>

      {/* Why Choose Us Section */}
      <section className="container mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-navy-800 mb-6">Why Choose Webma?</h2>
        <p className="text-gray-600 mb-8">
          We specialize in creating unique websites tailored to your event's needs, ensuring a
          seamless and memorable online presence for your special occasions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Marriage Websites Card */}
          <div className="bg-white rounded shadow-lg p-6">
            <h3 className="text-xl font-bold text-navy-800 mb-2">Marriage Websites</h3>
            <p className="text-gray-600 mb-4">
              Share your love story, wedding details, and invite guests with a stunning marriage website.
            </p>
            <Link to="/services">
              <button className="px-4 py-2 bg-gold-400 text-navy-800 rounded hover:bg-gold-500 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>

          {/* Birthday Websites Card */}
          <div className="bg-white rounded shadow-lg p-6">
            <h3 className="text-xl font-bold text-navy-800 mb-2">Birthday Websites</h3>
            <p className="text-gray-600 mb-4">
              Make your birthday special with a personalized website to share memories and event details.
            </p>
            <Link to="/services">
              <button className="px-4 py-2 bg-gold-400 text-navy-800 rounded hover:bg-gold-500 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>

          {/* Custom Events Card */}
          <div className="bg-white rounded shadow-lg p-6">
            <h3 className="text-xl font-bold text-navy-800 mb-2">Custom Events</h3>
            <p className="text-gray-600 mb-4">
              Whether it's an anniversary, baby shower, or corporate event, we've got you covered!
            </p>
            <Link to="/services">
              <button className="px-4 py-2 bg-gold-400 text-navy-800 rounded hover:bg-gold-500 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-800 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Let's Make Your Event Unforgettable</h2>
        <p className="text-lg mb-8">
          Whether it’s a grand wedding, a fun birthday party, or a professional event, Webma 
          ensures your online presence is just as special as the occasion itself.
        </p>
        <Link to="/contact">
          <button className="px-6 py-3 bg-gold-400 text-navy-800 font-bold rounded-full hover:bg-gold-500 transition duration-300">
            Get in Touch
          </button>
        </Link>
      </section>
    </main>
  );
}
