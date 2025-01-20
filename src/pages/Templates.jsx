import React, { useState } from "react";
import allTemplates from "../assets/data/templates.json";

export default function Templates() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [costFilter, setCostFilter] = useState("All");

  const calculateCost = (pages) => {
    if (pages <= 3) return 5000;
    if (pages <= 10) return 10000;
    return 15000; // Custom templates for 10+ pages
  };

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
          (template) => calculateCost(template.pages) < 4000
        );
      } else if (costFilter === "4000 to 6000") {
        filteredTemplates = filteredTemplates.filter(
          (template) =>
            calculateCost(template.pages) >= 4000 &&
            calculateCost(template.pages) <= 6000
        );
      } else if (costFilter === "Above 6000") {
        filteredTemplates = filteredTemplates.filter(
          (template) => calculateCost(template.pages) > 6000
        );
      }
    }

    return filteredTemplates;
  };

  const displayedTemplates = filterTemplates();

  return (
    <main className="flex-grow bg-gray-100">
      <header className="bg-navy-800 text-white py-16 text-center">
        <h1 className="text-4xl font-bold text-gold-400">
          Explore Our Templates
        </h1>
        <p className="mt-4 text-lg">
          Find the perfect template for your special occasion!
        </p>
      </header>

      <section className="container mx-auto py-12 px-6">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Filter by Type:
            </label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="p-2 border rounded w-full md:w-auto"
            >
              <option value="All">All</option>
              <option value="Marriage">Marriage</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Filter by Cost:
            </label>
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
                <div className="w-full h-48 bg-gray-200 flex justify-center items-center">
                  {/* Show Image if available, else use icon */}
                  {template.img ? (
                    <img
                      src={template.img}
                      alt={template.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl text-gray-600">📄</span> // Icon Placeholder
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{template.title}</h3>
                  <p className="text-lg text-gray-700 mb-2">{template.type}</p>
                  <p className="text-gray-600 mb-4">
                    Cost: ₹{calculateCost(template.pages)}
                  </p>
                  <ul className="mt-4 text-gray-600">
                    {template.features.map((feature, index) => (
                      <li key={index} className="list-disc ml-6">
                        {feature}
                      </li>
                    ))}
                  </ul>
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

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>For more details or customizations, feel free to <a href="https://wa.me/917667025267" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">WhatsApp us</a>.</p>
      </footer>
    </main>
  );
}
