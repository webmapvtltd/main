// pages/Services.js
import React from 'react';
import {Link} from 'react-router-dom'


export default function Services() {
  const services = [
    {
      id: 1,
      name: "Wedding Website Design",
      description: "Custom-designed websites for weddings, including event details, RSVP, gift registries, and photo galleries.",
      icon: "💍",
      bgColor: "bg-pink-100",
    },
    {
      id: 2,
      name: "Birthday Party Website Design",
      description: "Create a vibrant and interactive website for birthday events with event countdowns, guestbook, and photo galleries.",
      icon: "🎉",
      bgColor: "bg-blue-100",
    },
    {
      id: 3,
      name: "Corporate Event Website Design",
      description: "Professional websites for corporate events such as conferences, product launches, and seminars with booking systems and attendee management.",
      icon: "🏢",
      bgColor: "bg-green-100",
    },
    {
      id: 4,
      name: "Baby Shower Website Design",
      description: "Elegant websites for baby showers, featuring event schedules, guest list management, and gift registries.",
      icon: "👶",
      bgColor: "bg-yellow-100",
    },
    {
      id: 5,
      name: "Puja and Religious Ceremony Websites",
      description: "Websites for religious events like pujas, featuring event schedules, donation features, and guest registration.",
      icon: "🕉️",
      bgColor: "bg-orange-100",
    },
    {
      id: 6,
      name: "Custom Event Website Design",
      description: "We create custom websites for any kind of event, from anniversaries to new home celebrations, tailored to your needs.",
      icon: "🎊",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <main className="flex-grow bg-gray-100">
      {/* Header Section */}
      <header className="bg-navy-800 text-white  py-16 text-center">
        <h1 className="text-4xl font-bold text-gold-400 ">Our Event Website Services</h1>
        <p className="mt-4 text-lg">
          From weddings to corporate events, we create the perfect website for your event.
        </p>
      </header>

      {/* Services Section */}
      <section className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded shadow-lg p-6 ${service.bgColor} hover:shadow-xl transition-shadow`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold text-navy-800 mb-4">{service.name}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-800 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to Create Your Event Website?</h2>
        <p className="text-lg mb-8">
          Get in touch with us to create a custom website that brings your event to life!
        </p>
        <Link to="/contact">
          <button className="px-6 py-3 bg-gold-400 text-navy-800 font-bold rounded-full hover:bg-gold-500 transition duration-300">
            Contact Us
          </button>
        </Link>
      </section>
    </main>
  );
}
