import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import GoToTop from "../GoToTop/GoToTop";

const Footer = () => {
  return (
    <>
      <GoToTop />
      <footer className="bg-purple-600 text-white py-8 px-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <Link to="/" className="text-2xl font-bold mb-4 md:mb-0">
              Tutoratech
            </Link>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
              <li>
                <Link
                  to="/faqs"
                  className="hover:text-purple-300 text-lg transition"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-purple-300 text-lg transition"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-purple-300 text-lg transition"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-purple-300 text-lg transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="flex justify-center space-x-4 mt-4 md:mt-0">
                <a
                  href="https://www.linkedin.com/company/tutoratech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 text-2xl transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/tutoratech_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 text-2xl transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/+919902082100"
                  target="_blank"
                  rel="noopener noreferrer"
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
            <p>&copy; 2024 Tutoratech | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
