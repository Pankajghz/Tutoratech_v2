const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow p-8">
        <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Introduction</h3>
            <p className="mb-4">
              Welcome to Tutoratech! We are committed to ensuring your privacy
              and protecting your personal data. This Privacy Policy explains
              how we gather, use, disclose, and safeguard your personal
              information when you interact with our services. By using our
              services, you consent to the practices described in this policy.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Information We Collect
            </h3>
            <p className="mb-4">
              We may collect various types of personal information from you
              directly or through third parties. This includes:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Contact Details:</strong> Your name, address, email
                address, and phone number.
              </li>
              <li>
                <strong>Educational and Professional Background:</strong> Your
                education history, work experience, resume, academic
                transcripts, and portfolio.
              </li>
              <li>
                <strong>Demographic Information:</strong> Details such as age,
                gender, and other relevant demographic data.
              </li>
              <li>
                <strong>Payment Details:</strong> Information related to any
                payments for our services, if applicable.
              </li>
              <li>
                <strong>Communication Records:</strong> Logs of communications
                between you and Tutoratech.
              </li>
              <li>
                <strong>Feedback and Survey Data:</strong> Responses to feedback
                forms, surveys, or evaluations.
              </li>
              <li>
                <strong>Automatically Collected Information:</strong> Data about
                your device, browsing behavior, and usage patterns through
                cookies and similar technologies.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              How We Use Your Information
            </h3>
            <p className="mb-4">
              We use your personal information for several purposes, including:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Service Management:</strong> Assessing your eligibility
                for our services, processing applications, providing updates,
                and communicating about service details.
              </li>
              <li>
                <strong>Enhancing Our Services:</strong> Collecting feedback,
                analyzing performance, and making improvements.
              </li>
              <li>
                <strong>Marketing and Communication:</strong> Sending
                promotional materials, newsletters, and personalized
                information.
              </li>
              <li>
                <strong>Legal and Compliance:</strong> Adhering to applicable
                laws and regulations, and protecting our rights and property.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Sharing Your Information
            </h3>
            <p className="mb-4">
              We may disclose your personal information in the following
              situations:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Service Providers:</strong> Sharing data with
                third-party providers who help us deliver services and manage
                our website.
              </li>
              <li>
                <strong>Educational Institutions:</strong> Sharing relevant
                information with educational institutions if applicable.
              </li>
              <li>
                <strong>Legal Compliance:</strong> Disclosing data to comply
                with legal requirements or protect our rights.
              </li>
              <li>
                <strong>Business Transfers:</strong> Transferring information in
                the event of a merger, acquisition, or sale of assets.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Your Rights and Choices
            </h3>
            <p className="mb-4">
              You have rights regarding your personal data, including the
              ability to access, correct, or delete your information. You may
              also opt out of receiving marketing communications from us.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Security</h3>
            <p className="mb-4">
              We implement reasonable measures to secure your personal
              information against unauthorized access, disclosure, alteration,
              and destruction.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Children’s Privacy</h3>
            <p className="mb-4">
              Our services are not intended for children under 16. We do not
              knowingly collect information from anyone under this age without
              parental consent.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Policy Updates</h3>
            <p className="mb-4">
              We may update this Privacy Policy to reflect changes in our
              practices or legal requirements. We will notify you of significant
              changes.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="mb-4">
              For any questions or concerns about this Privacy Policy or our
              data practices, please reach out to us:
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info_hr@tutoratech.com"
                className="text-purple-600 hover:underline"
              >
                info_hr@tutoratech.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+919902082100"
                className="text-purple-600 hover:underline"
              >
                +91 9902082100
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
