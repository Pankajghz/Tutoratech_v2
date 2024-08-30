const About = () => {
  return (
    <>
      <div className="about-main">
        {/* Image and Heading */}
        <div className="about-img-heading relative contactus-image">
          <img
            src="/Images/AboutUs.jpg"
            className="h-56 md:h-80 w-full object-cover"
            alt="A collection of courses offered"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-white">
              About Us
            </h1>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center about-mission py-8">
          <div className="about-mission-content md:w-1/2 p-4 text-center">
            <h2 className="hidden md:block text-4xl font-semibold mb-4 text-purple-700">
              Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to empower individuals with the skills and
              knowledge necessary to excel in their careers. We believe in
              providing accessible, high-quality education that bridges the gap
              between learning and real-world application. By fostering a
              community of learners and professionals, we aim to create an
              environment where everyone has the opportunity to grow and
              succeed.
            </p>
          </div>
          <div className="about-mission-img md:w-1/3 p-4 text-center">
            <h2 className="md:hidden text-4xl font-semibold mb-4 text-purple-700">
              Mission
            </h2>
            <img
              src="/Images/mission.jpg"
              className="w-full h-auto"
              alt="Mission"
            />
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="flex flex-col md:flex-row items-center justify-center about-wwr py-8 bg-gray-100">
          <div className="about-wwr-img md:w-1/3 p-4 text-center">
            <h2 className="md:hidden text-4xl font-semibold mb-4 text-purple-700">
              Who We Are
            </h2>
            <img
              src="/Images/wwr.jpg"
              className="w-full h-auto"
              alt="Who We Are"
            />
          </div>
          <div className="about-wwr-content md:w-1/2 p-4 text-center">
            <h2 className="hidden md:block text-4xl font-semibold mb-4 text-purple-700">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Tutoratech, we have a dedicated team of educators, industry
              experts, and professionals who are passionate about helping
              individuals achieve their career goals. With our diverse
              backgrounds and extensive experience, we have the capability to
              offer a wide range of courses and services tailored to different
              learning needs. Our commitment to excellence and belief in the
              transformative power of education are at the core of everything we
              do.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center about-vision py-8">
          <div className="about-vision-content md:w-1/2 p-4 text-center">
            <h2 className="hidden md:block text-4xl font-semibold mb-4 text-purple-700">
              Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to be a top provider of innovative and accessible
              education solutions that help people get jobs and grow in their
              careers. We are dedicated to building a global community of
              learners who have the skills and knowledge to succeed in a
              constantly changing world. By using the latest technology and
              industry insights, we continuously improve our offerings to meet
              the needs of our students and the demands of the job market.
            </p>
          </div>
          <div className="about-vision-img md:w-1/3 p-4 text-center">
            <h2 className="md:hidden text-4xl font-semibold mb-4 text-purple-700">
              Vision
            </h2>
            <img
              src="/Images/vision.jpg"
              className="w-full h-auto"
              alt="Vision"
            />
          </div>
        </div>

        {/* Our Team Section */}
        <div className="flex flex-col md:flex-row items-center justify-center about-team py-8 bg-gray-100">
          <div className="about-wwr-team md:w-1/3 p-4 text-center">
            <h2 className="md:hidden text-4xl font-semibold mb-4 text-purple-700">
              Our Team
            </h2>
            <img
              src="/Images/team.jpg"
              className="w-full h-auto"
              alt="Our Team"
            />
          </div>
          <div className="about-wwr-team md:w-1/2 p-4 text-center">
            <h2 className="hidden md:block text-4xl font-semibold mb-4 text-purple-700">
              Our Team
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our team of passionate educators, skilled professionals, and
              industry experts is dedicated to making a positive impact on our
              students. We work together to provide a comprehensive learning
              experience, offering services like expert courses, hands-on
              internships, resume writing, mock interviews, job referrals, and
              career guidance. Our goal is to equip students with the skills and
              opportunities they need to succeed in today’s competitive job
              market.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
