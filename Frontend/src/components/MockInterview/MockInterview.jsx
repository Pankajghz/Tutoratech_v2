import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const MockInterview = () => {
  const people = [
    {
      name: "Amit Sharma",
      company: "Tata Consultancy Services",
      role: "Senior Program Manager (SDE-III)",
      skills: "Project Management, Systems Analysis",
      about:
        "An experienced project manager with over 18 years at TCS, Amit specializes in managing large-scale IT projects and implementing innovative solutions for clients.",
    },
    {
      name: "Neha Patel",
      company: "Infosys",
      role: "Lead Software Engineer (SDE-II)",
      skills: "Software Development, Cloud Solutions",
      about:
        "A skilled software engineer with 15 years of experience at Infosys, Neha focuses on cloud solutions and enterprise software development.",
    },
    {
      name: "Rajiv Gupta",
      company: "Wipro",
      role: "Principal Data Scientist",
      skills: "Data Analytics, Business Intelligence",
      about:
        "A data analytics expert with a decade of experience at Wipro, Rajiv excels in transforming data into actionable insights to drive business decisions.",
    },
    {
      name: "Priya Singh",
      company: "HCL Technologies",
      role: "Senior UI/UX Designer",
      skills: "UI/UX Design, Frontend Development",
      about:
        "With a strong background in UI/UX design, Priya has led several successful projects at HCL Technologies, enhancing user experience and engagement.",
    },
    {
      name: "Ravi Kumar",
      company: "Tech Mahindra",
      role: "Product Manager (PM)",
      skills: "Product Management, Agile Methodologies",
      about:
        "An accomplished product manager at Tech Mahindra, Ravi has extensive experience in leading product development teams and driving agile transformations.",
    },
    {
      name: "Sonia Mehta",
      company: "IBM India",
      role: "Senior AI Engineer",
      skills: "Artificial Intelligence, Cloud Computing",
      about:
        "Sonia is an AI and cloud computing specialist with over 20 years at IBM India, focusing on developing cutting-edge solutions for complex business problems.",
    },
  ];

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-4 text-center">
        Mock Interviews with Industry Experts
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Participating in mock interviews with experienced professionals can be a
        game-changer for your career. It helps you gain valuable insights into
        industry standards, improve your interview skills, and build confidence.
        By receiving constructive feedback from experts, you can enhance your
        strengths and address areas for improvement, making you better prepared
        for real-world job interviews.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {people.map((person, index) => (
          <div
            key={index}
            className="p-6 bg-white border rounded-lg shadow-lg max-w-md mx-auto hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col justify-between"
          >
            <div>
              <div className="grid grid-cols-4 gap-4 items-center">
                <div className="col-span-1 flex justify-center">
                  <FaUserTie className="text-6xl text-purple-700" />
                </div>
                <div className="col-span-3">
                  <h2 className="text-xl font-bold text-gray-800">
                    {person.name}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Company:</strong> {person.company}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Role:</strong> {person.role}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Skills:</strong> {person.skills}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-md font-semibold text-purple-700">
                  About the Expert
                </h3>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  {person.about}
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Link
                to="/contact"
                className="bg-purple-700 text-white px-5 py-2 rounded-full hover:bg-purple-800 hover:scale-105 transition-transform duration-200"
              >
                Schedule
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockInterview;
