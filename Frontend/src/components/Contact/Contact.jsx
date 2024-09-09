import { MdEmail, MdPhone, MdWhatsapp } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "13cf2e20-a86e-48ad-8f1f-556c115f6222");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast.success("Form submitted successfully!");
        event.target.reset(); // Reset the form on successful submission
      } else {
        toast.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative contactus-hero text-white">
        <img
          src="/Images/ContactUs.jpg"
          className="h-64 md:h-96 w-full object-cover"
          alt="Contact Us"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center">
            Get In Touch
          </h1>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="bg-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-start space-y-12 md:space-y-0 md:space-x-12 px-4 md:px-12">
          {/* Contact Info */}
          <div className="contact-info flex flex-col md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600">
              Feel free to reach out to us through any of the following methods:
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <MdEmail className="text-3xl mr-4 text-purple-600" />
                <span className="text-lg text-gray-700">
                  info_hr@tutoratech.com
                </span>
              </div>
              <div className="flex items-center">
                <MdPhone className="text-3xl mr-4 text-purple-600" />
                <span className="text-lg text-gray-700">9902082100</span>
              </div>
              <div className="flex items-center">
                <MdWhatsapp className="text-3xl mr-4 text-green-500" />
                <span className="text-lg text-gray-700">9902082100</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                Follow Us
              </h3>
              <ul className="flex space-x-6 mt-4 text-purple-600">
                <li>
                  <a
                    href="#Linkedin"
                    className="hover:text-purple-400 text-3xl transition"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="#Instagram"
                    className="hover:text-purple-400 text-3xl transition"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form bg-gray-50 p-8 md:w-1/2 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your email address"
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
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      <ToastContainer />
    </>
  );
};

export default Contact;
