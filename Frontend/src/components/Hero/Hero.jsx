import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:justify-between mb-12 px-6 lg:px-16 xl:px-24 md:pt-12">
      <div className="md:w-7/12 pb-16 items-center">
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-purple-800 mb-6 leading-tight md:leading-tight xl:leading-snug">
          Learn, Upgrade, and Upskill to Get Ahead in Your Career
        </h1>
        <p className="text-sm md:text-lg xl:text-xl text-gray-700 leading-relaxed mb-8">
          Explore our comprehensive programs designed to elevate your skills and
          help you excel in the competitive job market.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-purple-800 hover:bg-purple-900 text-white font-bold py-3 px-8 rounded-md shadow-md transition-all duration-300 ease-in-out"
        >
          Explore Now
        </Link>
      </div>
      <div className="md:w-5/12 p-4 flex justify-center">
        <img src="/Images/image.png" className="w-full h-auto" alt="Team" />
      </div>
    </div>
  );
};

export default Hero;
