import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Interview Help</h2>
          <ul className="flex space-x-8">
            <li>
              <a href="#contact-us" className="hover:underline text-lg">
                Contact us
              </a>
            </li>
            <li>
              <a href="#terms-conditions" className="hover:underline text-lg">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:underline text-lg">
                FAQs
              </a>
            </li>
            <li className="flex items-center space-x-4">
              <a href="#Linkedin" className="hover:underline text-2xl">
                <FaLinkedin />
              </a>
              <a href="#Instagram" className="hover:underline text-2xl">
                <FaInstagram />
              </a>
              <a href="#Whatsapp" className="hover:underline text-2xl">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-lg mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur. Fermentum in nisi sed dui
            cras ut eu odio nec. Aliquam tellus dolor dui euismod dignissim
            rhoncus tempus etiam. Quam eu volutpat maecenas interdum ut amet
            convallis vitae dis. Enim pretium felis arcu sapien vivamus non.
            Tortor dolor vel quam feugiat orci aenean nulla enim nullam. Sed
            tortor ac vel non integer volutpat et ut diam. Rhoncus feugiat
            vulputate risus fermentum vel vel. Sagittis mi sem fringilla et
            augue.
          </p>
        </div>
        <div className="text-center border-t border-white pt-4">
          <p>&copy; 2024 Interview Help | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
