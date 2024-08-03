// Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This is an amazing service! Highly recommend it.",
    role: "CEO, Company",
  },
  {
    name: "Jane Smith",
    feedback: "Fantastic experience, the team is very professional.",
    role: "Marketing Director, Business Inc.",
  },
  {
    name: "Alice Johnson",
    feedback: "A top-notch solution that exceeded our expectations.",
    role: "Product Manager, TechCorp",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white text-blue-800 py-12">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-50 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <p className="text-lg font-semibold mb-4">
                {testimonial.feedback}
              </p>
              <div className="flex flex-col items-center">
                <span className="text-blue-700 font-semibold text-xl">
                  {testimonial.name}
                </span>
                <span className="text-blue-500">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
