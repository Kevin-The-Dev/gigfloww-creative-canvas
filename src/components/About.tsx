
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">About GigFloww</span>
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            GigFloww is a specialized platform designed to connect creative professionals with meaningful gig opportunities. We understand the unique challenges of the creative gig economy and have built a space where talent and opportunity meet seamlessly.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to empower creative individuals to thrive in their careers while helping businesses find the perfect talent to bring their visions to life. We believe in fostering a community that values creativity, quality work, and fair opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
