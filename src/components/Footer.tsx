
import React from 'react';
import { CustomButton } from './ui/custom-button';
import { Instagram, Twitter, Linkedin, Facebook, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <a href="#" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                <span className="text-gigflow-purple">Gig</span>
                <span className="text-gigflow-accent-purple">Floww</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6">
              Connecting creative professionals with meaningful gig opportunities tailored to their skills and aspirations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gigflow-purple transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gigflow-purple transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gigflow-purple transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gigflow-purple transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gigflow-purple transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#dev-services" className="text-gray-400 hover:text-white transition-colors">Development</a></li>
              <li><a href="#design-services" className="text-gray-400 hover:text-white transition-colors">Design</a></li>
              <li><a href="#marketing-services" className="text-gray-400 hover:text-white transition-colors">Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Writing & Content</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates and opportunities delivered to your inbox.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gigflow-purple"
              />
              <CustomButton variant="primary" className="w-full">
                Subscribe
              </CustomButton>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500">© {new Date().getFullYear()} GigFloww. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              <li><a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
