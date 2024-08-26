import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between h-20 px-6 md:px-12 lg:px-20 border-b border-gray-200 bg-white shadow-md rounded-sm">
      <Link to="/" className="text-purple-700 text-3xl font-bold ">
        Tutoratech
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12">
        <Link
          to="/"
          className="text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
        >
          About Us
        </Link>
        <Link
          to="/courses"
          className="text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
        >
          Courses
        </Link>
        <div className="relative">
          <button
            className="flex items-center text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services <IoMdArrowDropdown className="ml-1" />
          </button>
          {servicesOpen && (
            <div className="absolute mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-sm z-50">
              <Link
                to="/internship"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
              >
                Training and Internship
              </Link>
              <Link
                to="/resume-writing-and-review"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
              >
                Resume Writing and Review
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
              >
                Mock Interview
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
              >
                Job Referrals
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
              >
                Job Openings
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
              >
                Career Guidance
              </Link>
            </div>
          )}
        </div>
        <Link
          to="/contact"
          className="text-lg text-gray-700 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl text-purple-700 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoMdClose /> : <IoMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute left-0 top-20 w-full h-auto bg-white flex-col justify-center items-center z-20 shadow-lg p-10`}
      >
        <Link
          to="/"
          className="text-lg text-gray-700 mb-6 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/courses"
          className="text-lg text-gray-700 mb-6 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
        >
          Courses
        </Link>
        <Link
          to="/about"
          className="text-lg text-gray-700 mb-6 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
        >
          About Us
        </Link>
        <div className="flex flex-col items-center">
          <button
            className="text-lg text-gray-700 mb-6 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services <IoMdArrowDropdown />
          </button>
          {servicesOpen && (
            <div className="flex flex-col items-center w-full">
              <Link
                to="/internship"
                className="text-lg text-gray-700 mb-4 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
              >
                Internship
              </Link>
              <Link
                to="/resume-writing-and-review"
                className="text-lg text-gray-700 mb-4 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
              >
                Resume Writing and Review
              </Link>
              <Link
                to="/mock-interview"
                className="text-lg text-gray-700 mb-4 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
              >
                Mock Interview
              </Link>
              <Link
                to="/job-referrals"
                className="text-lg text-gray-700 mb-4 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
              >
                Job Referrals
              </Link>
              <Link
                to="/job-openings"
                className="text-lg text-gray-700 mb-4 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
              >
                Job Openings
              </Link>
              <Link
                to="/career-guidance"
                className="text-lg text-gray-700 mb-4 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
              >
                Career Guidance
              </Link>
            </div>
          )}
        </div>
        <Link
          to="/contact"
          className="text-lg text-gray-700 mb-6 hover:text-purple-700 transition-colors duration-200 cursor-pointer"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
