import {
  MdManageAccounts,
  MdOutlineSchool,
  MdInsertChart,
  MdGroup,
  MdAssignment,
  MdEvent,
} from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { GoCrossReference } from "react-icons/go";

const WhyChooseUs = () => {
  const cards = [
    {
      icon: <MdManageAccounts className="text-6xl text-gray-700" />,
      title: "Training and Internship",
      description:
        "Gain practical experience with tailored training and internships for real-world challenges.",
    },
    {
      icon: <IoNewspaperOutline className="text-6xl text-gray-700" />,
      title: "Personalized Resume Writing",
      description:
        "Get a resume that highlights your strengths and aligns with your career goals.",
    },
    {
      icon: <MdInsertChart className="text-6xl text-gray-700" />,
      title: "Mock Interviews",
      description:
        "Prepare effectively with mock interviews and receive feedback to enhance performance.",
    },
    {
      icon: <GoCrossReference className="text-6xl text-gray-700" />,
      title: "Referral Assistance",
      description:
        "Access our network for referrals to gain a competitive edge in your job search.",
    },
    {
      icon: <MdOutlineSchool className="text-6xl text-gray-700" />,
      title: "Career Guidance",
      description:
        "Receive expert advice to navigate your career path and achieve long-term success.",
    },
    {
      icon: <MdGroup className="text-6xl text-gray-700" />,
      title: "Growth Community",
      description:
        "Join a community dedicated to personal growth, networking, and collaboration.",
    },
    {
      icon: <MdAssignment className="text-6xl text-gray-700" />,
      title: "Capstone Projects",
      description:
        "Showcase your skills with real-world projects for a strong portfolio and job applications.",
    },
    {
      icon: <MdEvent className="text-6xl text-gray-700" />,
      title: "Hackathons",
      description:
        "Challenge yourself in hackathons that foster innovation and collaboration with peers.",
    },
  ];

  return (
    <div className="py-24 px-6 lg:px-32 bg-gray-50 -mt-24 md:-mt-0">
      <div className="text-center mb-16">
        <p className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card flex flex-col items-center bg-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <p className="text-xl font-semibold text-purple-700 mb-2">
                {card.title}
              </p>
              <p className="text-gray-600 text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
