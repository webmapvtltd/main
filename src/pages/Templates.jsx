import React, { useState } from 'react';

export default function Templates() {
  const allTemplates = [
    { id: 1, title: "Elegant Wedding", type: "Marriage", cost: 5000, img: "/images/marriage1.jpg" },
    { id: 2, title: "Royal Theme", type: "Marriage", cost: 7000, img: "/images/marriage2.jpg" },
    { id: 3, title: "Colorful Birthday", type: "Birthday", cost: 3000, img: "/images/birthday1.jpg" },
    { id: 4, title: "Minimal Birthday", type: "Birthday", cost: 2500, img: "/images/birthday2.jpg" },
    { id: 5, title: "Warm Welcome", type: "New Home", cost: 4500, img: "/images/newhome1.jpg" },
    { id: 6, title: "Modern Design", type: "New Home", cost: 6000, img: "/images/newhome2.jpg" },
    { id: 7, title: "Traditional Puja", type: "Puja", cost: 4000, img: "/images/puja1.jpg" },
    { id: 8, title: "Elegant Ceremony", type: "Puja", cost: 5500, img: "/images/puja2.jpg" },
  ];

  const [typeFilter, setTypeFilter] = useState("All");
  const [costFilter, setCostFilter] = useState("All");

  const filterTemplates = () => {
    let filteredTemplates = allTemplates;

    if (typeFilter !== "All") {
      filteredTemplates = filteredTemplates.filter(
        (template) => template.type === typeFilter
      );
    }

    if (costFilter !== "All") {
      if (costFilter === "Below 4000") {
        filteredTemplates = filteredTemplates.filter(
          (template) => template.cost < 4000
        );
      } else if (costFilter === "4000 to 6000") {
        filteredTemplates = filteredTemplates.filter(
          (template) => template.cost >= 4000 && template.cost <= 6000
        );
      } else if (costFilter === "Above 6000") {
        filteredTemplates = filteredTemplates.filter(
          (template) => template.cost > 6000
        );
      }
    }

    return filteredTemplates;
  };

  const displayedTemplates = filterTemplates();

  return (
    <main className="flex-grow bg-gray-100">
      <header className="bg-navy-800 text-white py-16 text-center">
        <h1 className="text-4xl font-bold text-gold-400">Explore Our Templates</h1>
        <p className="mt-4 text-lg">Find the perfect template for your special occasion!</p>
      </header>

      <section className="container mx-auto py-12 px-6">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Filter by Type:</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="p-2 border rounded w-full md:w-auto"
            >
              <option value="All">All</option>
              <option value="Marriage">Marriage</option>
              <option value="Birthday">Birthday</option>
              <option value="New Home">New Home</option>
              <option value="Puja">Puja</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Filter by Cost:</label>
            <select
              value={costFilter}
              onChange={(e) => setCostFilter(e.target.value)}
              className="p-2 border rounded w-full md:w-auto"
            >
              <option value="All">All</option>
              <option value="Below 4000">Below ₹4000</option>
              <option value="4000 to 6000">₹4000 - ₹6000</option>
              <option value="Above 6000">Above ₹6000</option>
            </select>
          </div>
        </div>

        {/* Display Templates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedTemplates.length > 0 ? (
            displayedTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={template.img}
                  alt={template.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{template.title}</h3>
                  <p className="text-lg text-gray-700 mb-2">{template.type}</p>
                  <p className="text-gray-600 mb-4">Cost: ₹{template.cost}</p>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
                    Preview
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              No templates match your filters.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
