
import React from 'react';
import FeatureCard from './FeatureCard';
import { Search, Clock, Award, Shield, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        <div className="text-center mb-16 animate-fade-in">
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
              className="animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
        
        {/* Modern Services Sections */}
        <div className="mt-24 space-y-24">
          {/* Development Services */}
          <div id="dev-services" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-gigflow-pastel-blue to-white rounded-3xl overflow-hidden shadow-xl animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-10 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                  <span className="inline-block bg-gigflow-purple/10 text-gigflow-purple font-semibold rounded-full px-4 py-1 text-sm mb-6">
                    Development
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Build Something Amazing</h3>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Connect with businesses seeking skilled developers for web, mobile, and software projects. 
                    Our platform specializes in matching developers with projects that match their technical stack and experience level.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gigflow-purple"></div>
                      <span>Web & Mobile Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gigflow-purple"></div>
                      <span>Backend & API Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gigflow-purple"></div>
                      <span>Game & AR/VR Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gigflow-purple"></div>
                      <span>AI & Machine Learning</span>
                    </div>
                  </div>
                  
                  <a href="#" className="inline-flex items-center text-gigflow-purple font-medium mt-auto group">
                    <span>Browse development gigs</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                
                <div className="aspect-video lg:aspect-auto lg:h-auto order-1 lg:order-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gigflow-purple/20 to-transparent z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                    alt="Development services" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Design Services */}
          <div id="design-services" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-gigflow-pastel-purple to-white rounded-3xl overflow-hidden shadow-xl animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto lg:h-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-l from-gigflow-accent-purple/20 to-transparent z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
                    alt="Design services" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  />
                </div>
                
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  <span className="inline-block bg-gigflow-accent-purple/10 text-gigflow-accent-purple font-semibold rounded-full px-4 py-1 text-sm mb-6">
                    Design
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Craft Stunning Experiences</h3>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Find exciting design projects that showcase your creative talents. From branding to UI/UX design, 
                    our platform connects designers with clients who value quality creative work.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gigflow-accent-purple"></div>
                      <span>UI/UX & Product Design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gigflow-accent-purple"></div>
                      <span>Graphic & Brand Design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gigflow-accent-purple"></div>
                      <span>Motion & 3D Design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gigflow-accent-purple"></div>
                      <span>Illustration & Visual Art</span>
                    </div>
                  </div>
                  
                  <a href="#" className="inline-flex items-center text-gigflow-accent-purple font-medium mt-auto group">
                    <span>Explore design projects</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Marketing Services */}
          <div id="marketing-services" className="scroll-mt-24">
            <div className="bg-gradient-to-br from-gigflow-pastel-orange to-white rounded-3xl overflow-hidden shadow-xl animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-10 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                  <span className="inline-block bg-gigflow-accent-orange/10 text-gigflow-accent-orange font-semibold rounded-full px-4 py-1 text-sm mb-6">
                    Marketing
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Drive Growth & Engagement</h3>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Apply your marketing expertise to help businesses grow. Our platform connects marketing professionals
                    with companies seeking to improve their digital presence and reach.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gigflow-accent-orange"></div>
                      <span>Content & Social Media</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gigflow-accent-orange"></div>
                      <span>SEO & SEM Campaigns</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gigflow-accent-orange"></div>
                      <span>Email & Video Marketing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gigflow-accent-orange"></div>
                      <span>Growth & Acquisition</span>
                    </div>
                  </div>
                  
                  <a href="#" className="inline-flex items-center text-gigflow-accent-orange font-medium mt-auto group">
                    <span>Discover marketing opportunities</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                
                <div className="aspect-video lg:aspect-auto lg:h-auto order-1 lg:order-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gigflow-accent-orange/20 to-transparent z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80" 
                    alt="Marketing services" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
