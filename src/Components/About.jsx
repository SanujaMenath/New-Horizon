import React from 'react';
import '../index.css';

const About = () => {
  return (
    <section className="about py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-8">The Company</h2>
        <p className="text-lg leading-relaxed mb-8 text-center">
          Welcome to Bright Achievers Migration Consultant, your trusted partner in educational migration services.
        </p>
        <div className="flex items-start space-x-10">
          <div className="w-1 bg-blue-500"></div>
          <p className="text-lg">
            At Bright Achievers, we simplify your international education journey with services like visa application assistance, school and university selection, and scholarship opportunities.
          </p>
        </div>
        <div className="text-center mt-10">
          <a href="/about_us" className="bg-blue-600 text-white px-6 py-3 rounded-md">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default About;
