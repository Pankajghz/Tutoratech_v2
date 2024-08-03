import { FaUserPlus, FaListAlt, FaTasks, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src="../public/Images/HowItWork.png"
            alt="How it works illustration"
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
            How it Works?
          </h2>
          <div className="space-y-6">
            <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <FaUserPlus className="text-2xl text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold">Sign up</h3>
                <p>create a profile to get started</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <FaListAlt className="text-2xl text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold">Choose a Service</h3>
                <p>Select the service that fits your needs</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <FaTasks className="text-2xl text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold">Follow the Steps</h3>
                <p>Complete the guided process for each service</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
              <FaCheckCircle className="text-2xl text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold">Achieve your Goals</h3>
                <p>Reach your career objectives with our support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
