import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Reset form fields
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrorMessage("");
    setFormSubmitted(false);
  };

  // Validate phone number (10 digits)
  const validatePhoneNumber = (phone) => /^[0-9]{10}$/.test(phone);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(formData.phone)) {
      setErrorMessage("Please enter a valid 10-digit phone number.");
      return;
    }
    try {
      await emailjs.send(
        "service_u5ckh5d", // Replace with your EmailJS Service ID
        "template_kisotji", // Replace with your EmailJS Template ID
        formData,
        "VGmDC9SpMfIUqYyyu" // Replace with your EmailJS User ID
      );
      setFormSubmitted(true);
      handleReset(); // Reset the form after successful submission
      toast.success("Your message was sent successfully!"); // Success toast
    } catch (error) {
      console.error("Email sending failed:", error);
      setErrorMessage("Failed to send your message. Please try again later.");
      toast.error("Failed to send your message. Please try again later or directly connect with us via phone or email in the footer."); // Error toast
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-navy-700 to-navy-800 py-10 px-4">
      <div className="container mx-auto max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-navy-800 mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-700 mb-6">
          Have a question or want to know more? We'd love to hear from you!
        </p>
        {formSubmitted && (
          <div className="text-center text-gold-400 font-semibold mb-4">
            Thank you for reaching out! We'll get back to you soon.
          </div>
        )}
        {errorMessage && (
          <div className="text-center text-red-500 font-semibold mb-4">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number."
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-gray-700 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="py-3 px-6 bg-gold-400 text-navy-800 font-bold rounded-lg hover:bg-gold-500 transition duration-300"
            >
              Send Message
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="py-3 px-6 bg-gray-300 text-navy-800 font-bold rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      <ToastContainer /> 
    </div>
  );
}
