import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    reason: "",
    Message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataWithKey = {
      ...formData,
      access_key: "13cf2e20-a86e-48ad-8f1f-556c115f6222",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataWithKey),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Your message has been sent!");
        setFormData({
          name: "",
          contactNumber: "",
          email: "",
          reason: "",
          message: "",
        }); // Reset form after submission
      } else {
        toast.error("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-r from-purple-100 to-purple-300 py-16 px-6 lg:px-32 gap-12 items-center">
      {/* Text Section */}
      <div className="flex-1 text-center lg:text-left max-w-lg mx-auto">
        <h3 className="text-5xl font-bold text-purple-800 mb-6">
          Get in Touch
        </h3>
        <p className="text-gray-700 mb-8 text-lg">
          We’re here to help and answer any questions you may have. Whether you
          need assistance, have a question about our services, or just want to
          share your thoughts, feel free to reach out. Your feedback is
          important to us, and we strive to provide the best possible support
          and service.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="flex-1 bg-white rounded-lg shadow-xl p-10 max-w-lg mx-auto">
        <h3 className="text-4xl font-bold text-purple-800 mb-6">Email Us</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Rohan"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-600"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Contact Number
            </label>
            <input
              type="number"
              name="contactNumber"
              id="contactNumber"
              placeholder="+9499975571"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-600"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-600"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reason
            </label>
            <input
              type="text"
              name="reason"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Reason for contact"
              value={formData.reason}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              rows="4"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-700 text-white font-medium rounded-lg shadow-md hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Support;
