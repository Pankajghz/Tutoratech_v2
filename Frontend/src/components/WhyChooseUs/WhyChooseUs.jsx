const WhyChooseUs = () => {
  return (
    <div className="py-24 px-6 pb-12 mt-10 lg:px-32 bg-gray-50">
      <div className="text-center mb-16">
        <p className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              src: "../public/Images/card_1.svg",
              title: "Personalised Resume Templates",
              description:
                "Create standout resumes tailored to your career goals with our expert templates.",
            },
            {
              src: "../public/Images/card_2.svg",
              title: "Expert Resume Review",
              description:
                "Get professional feedback on your resume to ensure it stands out to employers.",
            },
            {
              src: "../public/Images/card_3.svg",
              title: "Customizable Layouts",
              description:
                "Choose from a variety of customizable layouts to match your personal style.",
            },
            {
              src: "../public/Images/card_4.svg",
              title: "24/7 Customer Support",
              description:
                "Our support team is here to help you with any questions or issues, anytime.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="card flex flex-col items-center  rounded-lg p-8 w-full  outline-none"
            >
              <img src={card.src} alt="Icon" className="w-20 h-20 mb-4" />
              <p className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </p>
              <p className="text-gray-700 text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
