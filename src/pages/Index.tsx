import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import TestimonialSlider from '@/components/TestimonialSlider';
import SignUpForm from '@/components/SignUpForm';
import Footer from '@/components/Footer';

const Index = () => {
  // Implement smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <TestimonialSlider />
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default Index;
