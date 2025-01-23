// pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="flex-grow bg-gray-100">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16 text-center">
        <h1 className="text-4xl font-bold text-gold-400">About Webma - Event Websites Tailored to Your Needs</h1>
        <p className="mt-4 text-lg">
          Turning your special moments into stunning digital experiences. At Webma, we believe in creating memorable websites that celebrate every event.
        </p>
      </section>

      {/* Who We Are Section */}
      <section className="container mx-auto py-12 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-800">Who We Are</h2>
          <p className="text-gray-600 mt-4">
            At Webma, we specialize in creating custom event websites for every occasion. From 
            weddings and birthdays to corporate gatherings and anniversaries, we help you share your 
            story with a beautifully designed website tailored to your needs. We are passionate about 
            offering personalized solutions that reflect your unique celebration.
          </p>
        </div>

        {/* Our Mission, Vision, Why Choose Us, Expertise Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to empower individuals and organizations by delivering high-quality, personalized 
              websites that make their events unforgettable. We provide seamless online experiences that enhance your 
              event and help create lasting memories.
            </p>
          </div>

          <div className="bg-white rounded shadow p-6">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Our vision is to become India's leading provider of event-based websites, where every special 
              moment is celebrated and shared online with elegance and simplicity. We strive to bring innovation to 
              the digital celebration space, making every event unforgettable.
            </p>
          </div>

          <div className="bg-white rounded shadow p-6">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Why Choose Us?</h3>
            <p className="text-gray-600">
              We combine creativity, technology, and a deep understanding of your needs to create 
              websites that are not only functional but also visually stunning. Our team ensures that your 
              event website captures the essence of your celebration while providing a user-friendly 
              experience for all visitors.
            </p>
          </div>

          <div className="bg-white rounded shadow p-6">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Our Expertise</h3>
            <p className="text-gray-600">
              With a team of experienced developers and designers, we deliver websites that are 
              fast, responsive, and tailored to meet your specific requirements. Our expertise spans 
              event website design, custom functionality, and mobile optimization to ensure your event 
              is accessible to all audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Service Information Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-6">Our Services</h2>
          <p className="text-gray-600 mb-8">
            At Webma, we provide a range of services designed to make your event website stand out. 
            These services include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded shadow">
              <h4 className="text-xl font-bold text-navy-800 mb-4">Custom Web Design</h4>
              <p className="text-gray-600">
                We create custom-designed websites that reflect the theme and style of your event, 
                ensuring a unique and memorable digital experience.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow">
              <h4 className="text-xl font-bold text-navy-800 mb-4">Event Registration & RSVP</h4>
              <p className="text-gray-600">
                Simplify the event planning process with built-in registration and RSVP features, 
                making it easy for your guests to confirm attendance.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow">
              <h4 className="text-xl font-bold text-navy-800 mb-4">Event Gallery & Media Sharing</h4>
              <p className="text-gray-600">
                Share photos, videos, and event updates in a beautifully organized gallery, keeping 
                your guests engaged and connected throughout the event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 mb-8">
            Hear from our happy clients who trusted Webma to create beautiful and functional event websites:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-bold text-navy-800 mb-4">Sanjay & Priya - Wedding</h4>
              <p className="text-gray-600">
                "Webma made our wedding so much more memorable with their beautiful website! It was 
                easy for our guests to RSVP and access all the details they needed."
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-bold text-navy-800 mb-4">Raj & Simran - Anniversary</h4>
              <p className="text-gray-600">
                "Our anniversary website exceeded our expectations. It was the perfect way to share 
                our celebration with loved ones near and far."
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-bold text-navy-800 mb-4">XYZ Corp - Corporate Event</h4>
              <p className="text-gray-600">
                "We turned to Webma for our corporate event, and they delivered a seamless, professional 
                website that kept our attendees engaged and informed throughout the event."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-6">Our Process</h2>
          <p className="text-gray-600 mb-8">
            Our team follows a simple, yet effective process to deliver a perfect event website every time:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded shadow">
              <h4 className="text-xl font-bold text-navy-800 mb-4">Step 1: Discovery</h4>
              <p className="text-gray-600">
                We begin by understanding your needs, preferences, and event details to create a 
                design that matches your vision.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow">
              <h4 className="text-xl font-bold text-navy-800 mb-4">Step 2: Design & Development</h4>
              <p className="text-gray-600">
                Our team works to bring your vision to life with a beautiful, responsive website 
                that is easy to navigate and visually stunning.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow">
              <h4 className="text-xl font-bold text-navy-800 mb-4">Step 3: Launch & Support</h4>
              <p className="text-gray-600">
                After rigorous testing, we launch the website and provide ongoing support to ensure 
                everything runs smoothly on your big day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-6">Let’s Make Your Event Unforgettable</h2>
          <p className="text-gray-600 mb-8">
            Whether it’s a grand wedding, a fun birthday party, or a professional event, Webma 
            ensures your online presence is just as special as the occasion itself. Our expert team 
            is ready to help you design and launch your perfect event website.
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
