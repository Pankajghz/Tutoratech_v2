import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import GoToTop from "./GoToTop";

const Footer = () => {
  return (
    <>
      <GoToTop />
      <footer className="bg-purple-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <Link to="/" className="text-2xl font-bold mb-4 md:mb-0">
              Tutoratech
            </Link>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
              <li>
                <Link
                  to="/contact"
                  className="hover:text-purple-300 text-lg transition"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <a
                  href="#terms-conditions"
                  className="hover:text-purple-300 text-lg transition"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="hover:text-purple-300 text-lg transition"
                >
                  FAQs
                </a>
              </li>
              <li className="flex justify-center space-x-4 mt-4 md:mt-0">
                <a
                  href="#Linkedin"
                  className="hover:text-purple-300 text-2xl transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#Instagram"
                  className="hover:text-purple-300 text-2xl transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#Whatsapp"
                  className="hover:text-purple-300 text-2xl transition"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>
          <div className="text-lg text-center mb-6">
            <p>
              Providing top-notch resources and support to help you ace your
              interviews and land your dream job.
            </p>
          </div>
          <div className="text-center border-t border-purple-500 pt-4">
            <p>&copy; 2024 Interview Help | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
