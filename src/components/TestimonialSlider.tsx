
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

// Testimonial data structure
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  expertise: string;
}

// Sample testimonial data
const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "UI Designer",
    company: "PixelPerfect",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    quote: "GigFloww changed how I find design projects. The platform matches me with clients who truly value my aesthetic and approach. It's been amazing for my freelance career!",
    rating: 5,
    expertise: "5+ years experience"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Full Stack Developer",
    company: "CodeCraft",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "As a developer, finding quality gigs used to be challenging. GigFloww's matching algorithm connects me with projects that perfectly align with my tech stack and interests.",
    rating: 5,
    expertise: "7+ years experience"
  },
  {
    id: 3,
    name: "Alexa Rivera",
    role: "Content Strategist",
    company: "ContentWave",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "The verification process for clients gives me peace of mind when accepting new projects. I can focus on my writing without worrying about payment issues.",
    rating: 4,
    expertise: "3+ years experience"
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Motion Designer",
    company: "Animate Studio",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    quote: "The specialized nature of GigFloww means clients understand the creative process. I've found long-term relationships with clients who appreciate motion design.",
    rating: 5,
    expertise: "6+ years experience"
  },
  {
    id: 5,
    name: "Emily Tanaka",
    role: "Digital Marketer",
    company: "GrowthGenius",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    quote: "The platform's focus on creative professionals means my skills are valued appropriately. I've been able to steadily increase my rates as I build my reputation here.",
    rating: 5,
    expertise: "4+ years experience"
  }
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);

  // Function to go to previous slide
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  // Function to go to next slide
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = window.setTimeout(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex, isPaused]);

  // Handle touch events for mobile swiping
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left, go to next slide
      nextSlide();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right, go to previous slide
      prevSlide();
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gigflow-pastel-purple to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from creative professionals who have found success on our platform
          </p>
        </div>
        
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Modern Card Layout */}
          <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
              {/* Testimonial Content */}
              <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <Quote className="text-gigflow-purple w-12 h-12 opacity-20 mb-2" />
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light animate-fade-in">
                    "{testimonialData[activeIndex].quote}"
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          "w-4 h-4",
                          i < testimonialData[activeIndex].rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        )} 
                      />
                    ))}
                  </div>
                  
                  <h4 className="font-bold text-lg">{testimonialData[activeIndex].name}</h4>
                  <p className="text-gray-600">
                    {testimonialData[activeIndex].role}, {testimonialData[activeIndex].company}
                  </p>
                </div>
              </div>
              
              {/* Image Section */}
              <div className="md:col-span-4 bg-gigflow-purple relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gigflow-purple/90 to-gigflow-accent-purple/70 z-10"></div>
                <img 
                  src={testimonialData[activeIndex].avatar} 
                  alt={testimonialData[activeIndex].name}
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay" 
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white font-medium">
                    {testimonialData[activeIndex].expertise}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4 z-20">
            <button 
              onClick={prevSlide}
              className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-gigflow-purple w-6" : "bg-gray-300"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
