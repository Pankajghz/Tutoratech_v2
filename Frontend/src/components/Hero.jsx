import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center h-[calc(100vh-5rem)] mt-10 md:mt-0 font-inter">
      <div className="flex flex-col justify-center h-full px-6 pb-16 md:pb-0 md:px-10 w-full md:w-1/2">
        <h1 className="text-3xl md:text-6xl font-bold leading-snug md:leading-tight">
          Learn, Upgrade, and Upskill to Get Ahead in Your Career
        </h1>
        <p className="text-base md:text-lg font-medium text-gray-600 mt-4 mb-6 md:mb-10">
          Explore our comprehensive programs designed to elevate your skills and
          help you excel in the competitive job market.
        </p>
        <Link
          to="/contact"
          className="bg-purple-700 text-white font-bold py-3 px-6 rounded w-full sm:w-auto md:w-1/2 text-center"
        >
          Explore Now
        </Link>
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-full">
        <img
          src="/Images/image.png"
          alt="Coding Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
