const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      title: "Senior Backend Developer",
      company: "TCS",
      quote:
        "I am very thankful to the TutoraTech platform for providing me with an 8-week internship, during which I learned Node.js and its applications. This experience significantly helped me in successfully switching my job.",
    },
    {
      name: "Priya Sharma",
      title: "Technical Lead",
      company: "Infosys",
      quote:
        "I was searching for a job, but whenever I applied, I wasn't getting responses or interviews. I felt stuck until I realized that my resume wasn't strong enough. Then, a friend suggested Tutoratech, which helped me get an opportunity for an online assessment, and eventually, I got selected.",
    },
    {
      name: "Anil Kapoor",
      title: "Consultant - Java Developer",
      company: "HCL",
      quote:
        "I'm extremely grateful for Tutoratech's mock interview services and the expert feedback. It allowed me to pinpoint my areas for improvement, which I addressed, and ultimately led to me receiving an offer from HCL.",
    },
    {
      name: "Sneha Patel",
      title: "Front-End developer",
      company: "Capgemini",
      quote:
        "I found Tutoratech's web development course to be incredibly helpful in landing my job at Capgemini. The course provided practical skills and valuable insights that made a real difference in my job search. I truly appreciate the support and recommend it to anyone looking to advance in web development.",
    },
    {
      name: "Sunil Gupta",
      title: "Data Engineer",
      company: "Wipro",
      quote:
        "I was having a hard time getting interview opportunities during my job search until I came across Tutoratech. Their referral service really helped me get a chance, and I’m grateful for their support.",
    },
    {
      name: "Rina Desai",
      title: "API Developer",
      company: "Tech Mahindra",
      quote:
        "I was having a hard time getting interview opportunities during my job search until I came across Tutoratech. Their referral service really helped me get a chance, and I’m grateful for their support.",
    },
  ];

  return (
    <div className="py-24 px-6 lg:px-32 bg-purple-50 -mt-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-600">
          Our success is measured by your success.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 hover:border-solid hover:border-2 hover:border-gray-500"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-gray-500">
                {testimonial.title}, {testimonial.company}
              </p>
            </div>
            <p className="text-gray-600 italic">{testimonial.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
