import React from 'react';

export default function Packages() {
  const packages = [
    // 30 Days Packages
    {
      id: 1,
      name: "Basic 30 Days",
      price: 3000,
      duration: "30 Days",
      pages: 3,
      features: [
        "Event listing for 30 days",
        "3 custom-designed pages",
        "Basic SEO setup",
        "Contact form integration",
      ],
      bgColor: "bg-pink-100",
    },
    {
      id: 2,
      name: "Standard 30 Days",
      price: 5000,
      duration: "30 Days",
      pages: 5,
      features: [
        "Event listing for 30 days",
        "5 custom-designed pages",
        "Basic SEO setup",
        "Contact form and gallery",
      ],
      bgColor: "bg-blue-200",
    },
    {
      id: 3,
      name: "Premium 30 Days",
      price: 7000,
      duration: "30 Days",
      pages: 8,
      features: [
        "Event listing for 30 days",
        "8 custom-designed pages",
        "SEO & analytics setup",
        "Photo gallery and booking form",
      ],
      bgColor: "bg-yellow-200",
    },

    // 60 Days Packages
    {
      id: 4,
      name: "Basic 60 Days",
      price: 5500,
      duration: "60 Days",
      pages: 5,
      features: [
        "Event listing for 60 days",
        "5 custom-designed pages",
        "Basic SEO setup",
        "Gallery and contact form",
      ],
      bgColor: "bg-green-100",
    },
    {
      id: 5,
      name: "Standard 60 Days",
      price: 8500,
      duration: "60 Days",
      pages: 7,
      features: [
        "Event listing for 60 days",
        "7 custom-designed pages",
        "Advanced SEO setup",
        "RSVP forms and photo gallery",
        "Contact form with booking feature",
      ],
      bgColor: "bg-teal-200",
    },
    {
      id: 6,
      name: "Premium 60 Days",
      price: 12000,
      duration: "60 Days",
      pages: 10,
      features: [
        "Event listing for 60 days",
        "10 custom-designed pages",
        "Advanced SEO and analytics setup",
        "Custom RSVP system and gallery",
        "Social media integration",
      ],
      bgColor: "bg-orange-200",
    },

    // 90 Days Packages
    {
      id: 7,
      name: "Basic 90 Days",
      price: 8000,
      duration: "90 Days",
      pages: 7,
      features: [
        "Event listing for 90 days",
        "7 custom-designed pages",
        "SEO setup",
        "Gallery and contact form",
        "Event reminder setup",
      ],
      bgColor: "bg-purple-100",
    },
    {
      id: 8,
      name: "Standard 90 Days",
      price: 12000,
      duration: "90 Days",
      pages: 10,
      features: [
        "Event listing for 90 days",
        "10 custom-designed pages",
        "Advanced SEO setup",
        "RSVP and photo gallery",
        "Custom contact and booking forms",
      ],
      bgColor: "bg-indigo-200",
    },
    {
      id: 9,
      name: "Premium 90 Days",
      price: 15000,
      duration: "90 Days",
      pages: 12,
      features: [
        "Event listing for 90 days",
        "12 custom-designed pages",
        "Premium SEO & analytics",
        "Advanced booking and RSVP system",
        "Social media and email marketing integration",
      ],
      bgColor: "bg-red-200",
    },
  ];

  return (
    <main className="flex-grow bg-gray-100">
      <header className="bg-navy-800 text-white  py-16 text-center">
        <h1 className="text-4xl font-bold text-gold-400">Our Event Website Packages</h1>
        <p className="mt-4 text-lg">Choose a package based on your event duration and requirements.</p>
      </header>

      <section className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-lg shadow-lg p-6 ${pkg.bgColor} hover:shadow-2xl transition-shadow duration-300`}
            >
              <h2 className="text-2xl font-bold mb-4">{pkg.name}</h2>
              <p className="text-gray-700 text-lg font-semibold mb-4">
                ₹{pkg.price} / {pkg.duration}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Number of Pages:</strong> {pkg.pages}
              </p>
              <ul className="mb-6 space-y-2">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="text-gray-700 flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Select Package
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
