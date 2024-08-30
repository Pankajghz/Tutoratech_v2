import { FaBuilding, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Referrals = () => {
  const jobReferrals = [
    {
      package: "6 - 12 LPA",
      location: "Bangalore Urban",
      title: "Associate Software Engineer",
      skills: ["SQL", "API", "DBMS"],
      company: "Clarivate",
    },
    {
      package: "7 - 9 LPA",
      location: "Bangalore Urban",
      title: "Associate Engineer",
      skills: ["Oracle", "JAVA", "UNIX", "SAP"],
      company: "Cognizant",
    },
    {
      package: "20 - 30 LPA",
      location: "Chennai",
      title: "Frontend Developer",
      skills: ["HTML", "CSS", "SQL", "Javascript"],
      company: "PayPal",
    },
    {
      package: "10 - 20 LPA",
      location: "Bangalore Urban",
      title: "Software Engineering Professional",
      skills: ["Troubleshoot", "Debugging", "Agile"],
      company: "BT Group",
    },
    {
      package: "5 - 8 LPA",
      location: "Hyderabad",
      title: "Data Analyst",
      skills: ["Python", "SQL", "Tableau"],
      company: "Tata Consultancy Services",
    },
    {
      package: "15 - 22 LPA",
      location: "Pune",
      title: "Backend Developer",
      skills: ["Node.js", "Express", "MongoDB"],
      company: "Infosys",
    },
    {
      package: "8 - 15 LPA",
      location: "Delhi",
      title: "UI/UX Designer",
      skills: ["Figma", "Sketch", "Adobe XD"],
      company: "Wipro",
    },
    {
      package: "18 - 25 LPA",
      location: "Mumbai",
      title: "DevOps Engineer",
      skills: ["AWS", "Docker", "Kubernetes"],
      company: "Accenture",
    },
  ];

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-4 text-center">
        Exciting Job Opportunities Await
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Our curated list of job referrals includes some of the best
        opportunities available in the market today. Whether you are looking to
        step into a new role or advance your career, these positions offer
        competitive packages and are with leading companies across various
        industries. Explore these openings to find your next career move and get
        ahead in your professional journey.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {jobReferrals.map((job, index) => (
          <div
            key={index}
            className="p-6 bg-white border rounded-lg shadow-lg max-w-sm mx-auto hover:shadow-2xl transition-shadow duration-300 ease-in-out relative flex flex-col justify-between"
          >
            <div>
              <p className="text-sm text-gray-600">
                Package: <span className="font-medium">{job.package}</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Job Location:{" "}
                <span className="font-medium">{job.location}</span>
              </p>
              <h2 className="text-xl font-semibold text-gray-800 mt-4">
                {job.title}
              </h2>
              <div className="mt-4">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <FaBuilding className="text-2xl text-purple-700" />
                <span className="ml-2 text-sm font-medium text-gray-700">
                  {job.company}
                </span>
              </div>
              <Link
                to="/contact"
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-800 hover:scale-105 transition-transform duration-200 flex items-center"
              >
                <FaEye className="mr-2" /> View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referrals;
