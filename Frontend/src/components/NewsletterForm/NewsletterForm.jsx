import { FaEnvelopeOpenText } from "react-icons/fa";

const NewsletterForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8  max-w-4xl mx-auto my-8">
      <div className="flex-shrink-0 flex justify-center items-center text-blue-500 text-6xl md:text-7xl">
        <FaEnvelopeOpenText />
      </div>
      <div className="flex-1 mt-6 md:mt-0 md:ml-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Stay updated with the latest news, exclusive content, deals, and more
          delivered straight to your inbox!
        </p>
        <form className="flex flex-col md:flex-row items-center">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full md:w-64 p-3 border border-gray-300 rounded-lg mb-3 md:mb-0 md:mr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full md:w-auto p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
