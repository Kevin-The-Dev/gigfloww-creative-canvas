
import React from 'react';
import FeatureCard from './FeatureCard';
import { Search, Clock, Award, Shield } from 'lucide-react';

const featureData = [
  {
    icon: <Search className="w-7 h-7 text-gigflow-purple" />,
    title: "Smart Matching",
    description: "Our AI-powered system connects you with gigs that match your unique skills and preferences.",
    color: "purple"
  },
  {
    icon: <Clock className="w-7 h-7 text-gigflow-accent-orange" />,
    title: "Flexible Scheduling",
    description: "Find opportunities that fit your lifestyle with our flexible gig scheduling system.",
    color: "orange"
  },
  {
    icon: <Award className="w-7 h-7 text-green-600" />,
    title: "Verified Clients",
    description: "Work with confidence knowing all clients on our platform are thoroughly vetted.",
    color: "green"
  },
  {
    icon: <Shield className="w-7 h-7 text-gigflow-accent-blue" />,
    title: "Secure Payments",
    description: "Our escrow system ensures you always get paid for your completed work.",
    color: "blue"
  }
];

const Features = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why creative professionals choose GigFloww to advance their careers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color as 'purple' | 'orange' | 'green' | 'blue'}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
        
        {/* Services Sections */}
        <div className="mt-24 space-y-24">
          {/* Development Services */}
          <div id="dev-services" className="scroll-mt-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                  alt="Development services" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">Development Services</h3>
                <p className="text-lg text-gray-700">
                  Connect with businesses seeking skilled developers for web, mobile, and software projects. 
                  Our platform specializes in matching developers with projects that match their technical stack and experience level.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gigflow-purple"></span>
                    <span>Web & Mobile Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gigflow-purple"></span>
                    <span>Backend & API Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gigflow-purple"></span>
                    <span>Game & AR/VR Development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Design Services */}
          <div id="design-services" className="scroll-mt-24">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
                  alt="Design services" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">Design Services</h3>
                <p className="text-lg text-gray-700">
                  Find exciting design projects that showcase your creative talents. From branding to UI/UX design, 
                  our platform connects designers with clients who value quality creative work.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gigflow-accent-purple"></span>
                    <span>UI/UX & Product Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gigflow-accent-purple"></span>
                    <span>Graphic & Brand Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gigflow-accent-purple"></span>
                    <span>Motion & 3D Design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Marketing Services */}
          <div id="marketing-services" className="scroll-mt-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80" 
                  alt="Marketing services" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold gradient-text">Marketing Services</h3>
                <p className="text-lg text-gray-700">
                  Apply your marketing expertise to help businesses grow. Our platform connects marketing professionals
                  with companies seeking to improve their digital presence and reach.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gigflow-accent-orange"></span>
                    <span>Content & Social Media Marketing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gigflow-accent-orange"></span>
                    <span>SEO & SEM Campaigns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gigflow-accent-orange"></span>
                    <span>Email & Video Marketing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
