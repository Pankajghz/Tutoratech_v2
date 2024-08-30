import { Link } from "react-router-dom";

const Internship = () => {
  const card_1 = [
    {
      title: "Web Development",
      description:
        "Learn to build and maintain websites and web applications using various technologies and frameworks.",
    },
    {
      title: "Data Analytics",
      description:
        "Analyze and interpret complex data to help make informed business decisions using tools and techniques.",
    },
    {
      title: "Programming Language",
      description:
        "Master popular programming languages like Python, Java, and C++ to develop software and applications.",
    },
    {
      title: "UI/UX Design",
      description:
        "Design user interfaces and enhance user experiences with a focus on usability and aesthetics.",
    },
    {
      title: "Digital Marketing",
      description:
        "Explore strategies for online marketing including SEO, content marketing, and social media management.",
    },
    {
      title: "Business Analyst",
      description:
        "Gain skills in analyzing business processes, identifying improvements, and supporting strategic decisions.",
    },
  ];

  const card_2 = [
    {
      title: "Android Development",
      description:
        "Develop mobile applications for Android devices using Java and Kotlin.",
    },
    {
      title: "Data Science",
      description:
        "Utilize statistical methods and machine learning techniques to extract insights from data.",
    },
    {
      title: "Artificial Intelligence and Machine Learning",
      description:
        "Explore advanced topics in AI and ML, including neural networks and deep learning.",
    },
    {
      title: "Cyber Security",
      description:
        "Learn to protect systems and data from cyber threats and understand various security protocols.",
    },
    {
      title: "React Native",
      description:
        "Build cross-platform mobile apps using React Native, leveraging your web development skills for mobile.",
    },
    {
      title: "Flutter Development",
      description:
        "Create natively compiled applications for mobile, web, and desktop from a single codebase using Flutter.",
    },
    {
      title: "Stock Market",
      description:
        "Understand stock market fundamentals, trading strategies, and investment principles.",
    },
    {
      title: "System Design",
      description:
        "Design scalable and efficient systems, focusing on architecture, performance, and scalability.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 md:px-12">
      {/* Internship Heading */}
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between mb-12">
        <div className="md:w-7/12 p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4">
            Internship and Certification
          </h1>
          <p className="text-sm md:text-lg text-gray-600 leading-relaxed md:pr-40 md:font-semibold">
            Our two-month internship program includes six weeks of comprehensive
            training, followed by a two-week project to apply your skills. Upon
            successful completion, participants will receive a certification.
            The internship duration may be adjusted based on individual
            progress.
          </p>
        </div>
        <div className="md:w-5/12 p-4 flex justify-center">
          <img
            src="/Images/training.jpg"
            className="w-full h-auto rounded-lg shadow-lg"
            alt="Team"
          />
        </div>
      </div>

      {/* Beginner Friendly */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-700 mb-6 text-center">
          Beginner Friendly
        </h2>
        <div className="relative">
          <div className="overflow-x-scroll flex space-x-6 py-8">
            {card_1.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md p-6 w-64 h-64 flex-shrink-0 flex flex-col items-center justify-between text-center transition-transform transform hover:border-2 hover:border-gray-500"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600">{card.description}</p>
                </div>
                <div className="w-full">
                  <Link
                    to="/contact"
                    className="bg-purple-700 text-white px-12 py-2 rounded-3xl hover:bg-purple-800 transition duration-300 w-full text-center"
                  >
                    Enroll
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white p-3 rounded-full shadow-md hover:bg-purple-800 transition duration-300">
            &rarr;
          </button>
        </div>
      </div>

      {/* Intermediate Internship */}
      <div>
        <h2 className="text-3xl font-semibold text-purple-700 mb-6 text-center">
          Intermediate Internships
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {card_2.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center justify-between text-center transition-transform transform hover:border-2 hover:border-gray-500"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
              <div className="w-full my-6">
                <Link
                  to="/contact"
                  className="bg-purple-700 text-white px-16 py-2  rounded-3xl hover:bg-purple-800 transition duration-300 w-full text-center"
                >
                  Enroll
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internship;
