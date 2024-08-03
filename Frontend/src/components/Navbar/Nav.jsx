import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 py-4 px-6 md:px-12 lg:px-24">
      <div className="flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-extrabold text-white">
          InterviewHelp
        </div>
        <button
          onClick={handleMenuToggle}
          className="text-white md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        <div className="hidden md:flex md:items-center md:space-x-8">
          <ul className="flex space-x-6">
            <li className="cursor-pointer px-3 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 text-white font-medium">
              About Us
            </li>
            <li className="cursor-pointer px-3 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 text-white font-medium">
              Services
            </li>
            <li className="cursor-pointer px-3 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 text-white font-medium">
              Pricing
            </li>
            <li className="cursor-pointer px-3 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 text-white font-medium">
              Contact Us
            </li>
          </ul>
        </div>
      </div>
      <div className={`mt-4 md:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-4">
          <li className="cursor-pointer px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 text-white font-medium">
            About Us
          </li>
          <li className="cursor-pointer px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 text-white font-medium">
            Services
          </li>
          <li className="cursor-pointer px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 text-white font-medium">
            Pricing
          </li>
          <li className="cursor-pointer px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 text-white font-medium">
            Contact Us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
