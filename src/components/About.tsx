
import React from 'react';
import { Users, Target, Shield, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 
            bg-gradient-to-r from-gigflow-purple to-gigflow-accent-purple 
            bg-clip-text text-transparent">
            Empowering Creative Professionals
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            GigFloww is your gateway to a thriving creative ecosystem, designed to transform how talented professionals connect with groundbreaking opportunities.
          </p>
        </div>
        
        {/* Modern Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Collaborative Network",
              description: "Join a vibrant community of creatives driving innovation across industries.",
              color: "bg-gigflow-pastel-purple",
              iconColor: "text-gigflow-purple"
            },
            {
              icon: Target,
              title: "Precision Matching",
              description: "Our AI-powered platform connects you with projects that perfectly align with your skills.",
              color: "bg-gigflow-pastel-green",
              iconColor: "text-green-600"
            },
            {
              icon: Shield,
              title: "Secure & Transparent",
              description: "Experience seamless, fair, and protected professional interactions.",
              color: "bg-gigflow-pastel-blue",
              iconColor: "text-gigflow-accent-blue"
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 
                transition-all duration-300 hover:shadow-xl hover:-translate-y-2 
                hover:border-gigflow-purple/20 overflow-hidden"
            >
              <div className={`absolute -top-6 -right-6 w-24 h-24 ${item.color} rounded-full 
                opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              
              <div className={`w-16 h-16 ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                <item.icon className={`w-8 h-8 ${item.iconColor}`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              
              <a href="#" className="inline-flex items-center text-gigflow-purple font-semibold 
                group/link hover:text-gigflow-accent-purple transition-colors">
                Learn More 
                <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-32 h-64 
        bg-gigflow-pastel-purple rounded-r-full opacity-20 -z-10 animate-pulse"></div>
      <div className="absolute top-1/4 right-0 w-24 h-48 
        bg-gigflow-pastel-orange rounded-l-full opacity-20 -z-10 animate-pulse"></div>
    </section>
  );
};

export default About;
