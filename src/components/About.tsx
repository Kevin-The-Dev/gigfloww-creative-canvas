
import React from 'react';
import { Users, Target, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
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
        
        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-transform duration-300 hover:-translate-y-2 animate-on-scroll">
            <div className="w-14 h-14 bg-gigflow-pastel-purple rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-gigflow-purple" />
            </div>
            <h3 className="text-xl font-bold mb-4">Community-Driven</h3>
            <p className="text-gray-600">We've built a supportive community where creative professionals can connect, collaborate, and grow together.</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-transform duration-300 hover:-translate-y-2 animate-on-scroll">
            <div className="w-14 h-14 bg-gigflow-pastel-green rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Opportunity Focused</h3>
            <p className="text-gray-600">Our smart matching technology ensures you only see opportunities that align with your skills and career goals.</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 transform transition-transform duration-300 hover:-translate-y-2 animate-on-scroll">
            <div className="w-14 h-14 bg-gigflow-pastel-blue rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-gigflow-accent-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4">Trust & Quality</h3>
            <p className="text-gray-600">We maintain high standards through our vetting process for both clients and creative professionals.</p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-32 h-64 bg-gigflow-pastel-purple rounded-r-full opacity-20 -z-10"></div>
      <div className="absolute top-1/4 right-0 w-24 h-48 bg-gigflow-pastel-orange rounded-l-full opacity-20 -z-10"></div>
    </section>
  );
};

export default About;
