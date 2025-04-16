
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

  // Add animation on scroll effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      el.classList.remove('animate-fade-in');
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
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
