import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <>
      <section className="relative">
        <img
          src="/Images/courses.jpg"
          className="h-80 w-full object-cover"
          alt="A collection of courses offered"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center text-white leading-tight">
            Our Courses
          </h1>
        </div>
      </section>

      <section className="p-12 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 hover:scale-105 hover:border-solid hover:border-2 hover:border-gray-500"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                {course.title}
              </h2>
              <p className="text-gray-700 mb-6">{course.description}</p>
              <div className="flex justify-end">
                <Link
                  to="/contact"
                  className="bg-purple-700 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-800 transition duration-300"
                  aria-label={`Learn more about the ${course.title} course`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

const courses = [
  {
    title: "Web Development",
    description:
      "Learn full-stack web development with the MERN stack—MongoDB, Express.js, React, and Node.js. This course covers building responsive frontends, managing databases, and creating powerful backend APIs, equipping you to handle real-world projects with confidence.",
  },
  {
    title: "Android Development",
    description:
      "Become an Android developer by learning to build intuitive, high-performance apps using Kotlin and Java. This course covers everything from UI design to backend integration, preparing you to create seamless mobile experiences.",
  },
  {
    title: "Data Analytics",
    description:
      "Turn raw data into actionable insights with our Data Analytics course. Learn data visualization, statistical analysis, and data modeling using Python, R, and SQL, and gain the skills to make data-driven decisions in any industry.",
  },
  {
    title: "Data Science",
    description:
      "Master data science by exploring machine learning, data mining, and big data technologies. This course covers Python and popular libraries like TensorFlow, teaching you to analyze complex datasets and build predictive models.",
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    description:
      "Delve into AI and Machine Learning by exploring neural networks and deep learning. This course provides hands-on experience with real-world applications, preparing you for careers in automation, AI-driven decision-making, and more.",
  },
  {
    title: "Cyber Security",
    description:
      "Protect the digital world with our Cyber Security course. Learn about network security, ethical hacking, and risk management, equipping you with the skills to defend against cyber threats and safeguard digital assets.",
  },
  {
    title: "Programming Language",
    description:
      "Learn the fundamentals of programming languages and their applications. This course covers various programming paradigms, syntax, and best practices, equipping you with the skills to tackle different programming challenges.",
  },
  {
    title: "UI/UX Design",
    description:
      "Design visually stunning and user-friendly digital experiences with our UI/UX Design course. Learn principles of interface design, wireframing, and user experience to create seamless and engaging digital products.",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your brand's online presence with our Digital Marketing course. Covering SEO, content marketing, social media strategy, and analytics, this course equips you to create campaigns that drive engagement and conversions.",
  },
  {
    title: "Human Resources",
    description:
      "Explore HR strategies with our Human Resources course. Learn about talent acquisition, employee engagement, and performance management, making you ready to impact organizations positively and strategically.",
  },
  {
    title: "Car Design",
    description:
      "Fuel your passion for automotive design with our Car Design course. Learn about vehicle aesthetics, ergonomics, and 3D modeling, preparing you for a creative career in the automotive industry.",
  },
  {
    title: "Stock Market",
    description:
      "Gain confidence in the stock market with our comprehensive course. Learn basic trading principles, advanced strategies, and market analysis techniques to make informed investment decisions and manage portfolios effectively.",
  },
];

export default Courses;
