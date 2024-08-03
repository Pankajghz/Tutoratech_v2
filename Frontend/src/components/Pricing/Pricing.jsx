const plans = [
  {
    name: "Basic",
    price: "$0/Month",
    features: [
      "Basic Resume Templates",
      "Limited Mock Interviews",
      "Community Support",
    ],
  },
  {
    name: "Professional",
    price: "$29/Month",
    features: [
      "Advanced Resume Templates",
      "Unlimited Mock Interviews",
      "Expert Referrals",
    ],
  },
  {
    name: "Premium",
    price: "$59/Month",
    features: [
      "Customized Resume Templates",
      "Personalized Mock & Interviews",
      "Exclusive Referrals and Support",
    ],
  },
];

const PricingCard = ({ plan }) => {
  return (
    <div className="pricing-card bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{plan.name}</h3>
      <p className="text-xl font-semibold text-blue-500 mb-6">{plan.price}</p>
      <ul className="text-gray-600 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg
              className="w-5 h-5 text-blue-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out">
        Choose Plan
      </button>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className="pricing-plans-section py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Choose the Right Plan for You
      </h2>
      <div className="pricing-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
