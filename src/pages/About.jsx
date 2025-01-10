// pages/About.js
import React from 'react';
import {Link} from 'react-router-dom'

export default function About() {
  return (
    <main className="flex-grow bg-gray-100">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16 text-center">
        <h1 className="text-4xl font-bold text-gold-400">About Webma</h1>
        <p className="mt-4 text-lg">
          Turning your special moments into stunning digital experiences.
        </p>
      </section>

      {/* Who We Are Section */}
      <section className="container mx-auto py-12 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-800">Who We Are</h2>
          <p className="text-gray-600 mt-4">
            At Webma, we specialize in creating custom event websites for every occasion. From 
            marriage and birthdays to anniversaries and corporate events, we help you share your 
            story with a beautifully designed website tailored to your needs.
          </p>
        </div>

        {/* Our Mission, Vision, Why Choose Us, Expertise Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower individuals and organizations by delivering high-quality, personalized 
              websites that make their events unforgettable.
            </p>
          </div>

          <div className="bg-white rounded shadow p-6">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become India's leading provider of event-based websites, where every special 
              moment is celebrated and shared online with elegance and simplicity.
            </p>
          </div>

          <div className="bg-white rounded shadow p-6">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Why Choose Us?</h3>
            <p className="text-gray-600">
              We combine creativity, technology, and a deep understanding of your needs to create 
              websites that are not only functional but also visually stunning.
            </p>
          </div>

          <div className="bg-white rounded shadow p-6">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Our Expertise</h3>
            <p className="text-gray-600">
              With a team of experienced developers and designers, we deliver websites that are 
              fast, responsive, and tailored to meet your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-6">Let's Make Your Event Unforgettable</h2>
          <p className="text-gray-600 mb-8">
            Whether it’s a grand wedding, a fun birthday party, or a professional event, Webma 
            ensures your online presence is just as special as the occasion itself.
          </p>
          {/* CTA Button */}
          <Link to="/contact">
            <button className="px-6 py-3 bg-gold-400 text-navy-800 font-bold rounded-full hover:bg-gold-500 transition duration-300">
              Get in Touch
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
