import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Function to handle link clicks and close the mobile menu
  const handleLinkClick = () => {
    setMenuOpen(false);
    setServicesOpen(false); // Close services dropdown as well
  };

  return (
    <nav className="flex items-center justify-between h-20 px-6 md:px-12 lg:px-20 border-b border-gray-200 bg-white shadow-md rounded-sm">
      <Link to="/" className="text-purple-700 text-3xl font-bold">
        Tutoratech
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200 ${
              isActive ? "text-purple-700" : "text-black"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200 ${
              isActive ? "text-purple-700" : "text-black"
            }`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200 ${
              isActive ? "text-purple-700" : "text-black"
            }`
          }
        >
          Courses
        </NavLink>
        <div className="relative">
          <button
            className="flex items-center text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200"
            onClick={() => setServicesOpen(!servicesOpen)}
            aria-expanded={servicesOpen}
            aria-controls="services-menu"
          >
            Services <IoMdArrowDropdown className="ml-1" />
          </button>
          {servicesOpen && (
            <div
              id="services-menu"
              className="absolute mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-sm z-50"
            >
              <Link
                to="/internship"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Training and Internship
              </Link>
              <Link
                to="/resume"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Resume Writing and Review
              </Link>
              <Link
                to="/mock-interview"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Mock Interview
              </Link>
              <Link
                to="/referrals"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Job Referrals
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Career Guidance
              </Link>
            </div>
          )}
        </div>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200 ${
              isActive ? "text-purple-700" : "text-black"
            }`
          }
        >
          Contact Us
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl text-purple-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        {menuOpen ? <IoMdClose /> : <IoMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute left-0 top-20 w-full h-auto bg-white flex-col justify-center items-center z-20 shadow-lg p-10`}
      >
        <Link
          to="/"
          className="text-lg text-gray-700 mb-6 hover:text-purple-700 transition-colors duration-200"
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          to="/courses"
          className="text-lg text-gray-700 mb-6 hover:text-purple-700 transition-colors duration-200"
          onClick={handleLinkClick}
        >
          Courses
        </Link>
        <Link
          to="/about"
          className="text-lg text-gray-700 mb-6 hover:text-purple-700 transition-colors duration-200"
          onClick={handleLinkClick}
        >
          About Us
        </Link>
        <div className="flex flex-col items-center">
          <button
            className="text-lg text-gray-700 mb-6 hover:text-purple-700 transition-colors duration-200"
            onClick={() => setServicesOpen(!servicesOpen)}
            aria-expanded={servicesOpen}
            aria-controls="mobile-services-menu"
          >
            Services <IoMdArrowDropdown />
          </button>
          {servicesOpen && (
            <div
              id="mobile-services-menu"
              className="flex flex-col items-center w-full"
            >
              <Link
                to="/internship"
                className="text-lg text-gray-700 mb-4 hover:text-purple-700 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Training and Internship
              </Link>
              <Link
                to="/resume"
                className="text-lg text-gray-700 mb-4 hover:text-purple-700 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Resume Writing and Review
              </Link>
              <Link
                to="/mock-interview"
                className="text-lg text-gray-700 mb-4 hover:text-purple-700 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Mock Interview
              </Link>
              <Link
                to="/job-referrals"
                className="text-lg text-gray-700 mb-4 hover:text-purple-700 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Job Referrals
              </Link>
              <Link
                to="/contact"
                className="text-lg text-gray-700 mb-4 hover:text-purple-700 transition-colors duration-200"
                onClick={handleLinkClick}
              >
                Career Guidance
              </Link>
            </div>
          )}
        </div>
        <Link
          to="/contact"
          className="text-lg text-gray-700 mb-6 hover:text-purple-700 transition-colors duration-200"
          onClick={handleLinkClick}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
