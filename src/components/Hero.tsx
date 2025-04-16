
import React from 'react';
import { CustomButton } from './ui/custom-button';
import { ArrowRight, MousePointer } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden pattern-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight animate-fade-in">
              <span className="gradient-text">Your Creative Gig Journey</span><br />
              <span>Starts Here</span>
            </h1>
            
            <p className="text-xl text-gray-600 md:text-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Connect with opportunities that match your creative skills and aspirations.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CustomButton 
                size="lg" 
                variant="primary"
                icon={<ArrowRight className="animate-pulse" />}
                iconPosition="right"
                className="group"
              >
                <span className="group-hover:translate-x-1 transition-transform inline-block">Join Now</span>
              </CustomButton>
              
              <CustomButton 
                size="lg" 
                variant="outline"
              >
                Explore Gigs
              </CustomButton>
            </div>
            
            <div className="animate-fade-in hidden lg:flex items-center gap-2 text-sm text-gray-500" style={{ animationDelay: '0.8s' }}>
              <MousePointer className="w-4 h-4 animate-bounce" />
              <span>Scroll down to learn more</span>
            </div>
          </div>
          
          {/* Hero Illustration */}
          <div className="w-full lg:w-1/2 float-animation">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gigflow-pastel-purple rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-10 -right-10 w-24 h-24 bg-gigflow-pastel-orange rounded-full opacity-60 animate-spin-slow"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                alt="Creative professionals working together" 
                className="rounded-xl shadow-xl max-w-full object-cover relative z-10 border-8 border-white animate-fade-in hover-scale"
                style={{ animationDelay: '0.4s' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,224C384,235,480,213,576,181.3C672,149,768,107,864,101.3C960,96,1056,128,1152,149.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
