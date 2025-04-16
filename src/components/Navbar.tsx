import React, { useState, useEffect } from 'react';
import { CustomButton } from './ui/custom-button';
import { Menu, X, ChevronDown, Code, Paintbrush, Megaphone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLink {
  name: string;
  href: string;
  dropdown?: { name: string; href: string; icon: React.ReactNode }[];
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#hero' },
  { 
    name: 'Services', 
    href: '#services',
    dropdown: [
      { name: 'Development', href: '#dev-services', icon: <Code className="w-5 h-5" /> },
      { name: 'Design', href: '#design-services', icon: <Paintbrush className="w-5 h-5" /> },
      { name: 'Marketing', href: '#marketing-services', icon: <Megaphone className="w-5 h-5" /> },
    ]
  },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');
        if (sectionTop < 100 && sectionTop >= -100 && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          <span className="text-gigflow-purple">Gig</span>
          <span className="text-gigflow-accent-purple">Floww</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                {link.dropdown ? (
                  <div className="flex items-center justify-center">
                    <button 
                      onClick={() => toggleDropdown(link.name)}
                      style={{
                        position: 'relative',
                        paddingLeft: '0.75rem',
                        paddingRight: '0.75rem',
                        '--tw-text-opacity': '1' as any
                      }}
                      className={cn(
                        "flex items-center gap-1",
                        activeSection === link.href.slice(1) ? "text-gigflow-purple" : "text-gray-900"
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        activeDropdown === link.name ? "rotate-180" : ""
                      )} />
                    </button>
                    
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50 animate-fade-in">
                        <ul className="py-2">
                          {link.dropdown.map((item) => (
                            <li key={item.name}>
                              <a 
                                href={item.href} 
                                className="flex items-center px-4 py-3 hover:bg-gigflow-pastel-purple text-gray-700 hover:text-gigflow-purple transition-colors"
                              >
                                <span className="mr-3 text-gigflow-purple">{item.icon}</span>
                                <div>
                                  <span className="font-medium">{item.name}</span>
                                  <p className="text-xs text-gray-500">Explore {item.name.toLowerCase()} opportunities</p>
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <a 
                    href={link.href} 
                    style={{
                      position: 'relative',
                      paddingLeft: '0.75rem',
                      paddingRight: '0.75rem',
                      '--tw-text-opacity': '1' as any
                    }}
                    className={cn(
                      activeSection === link.href.slice(1) ? "text-gigflow-purple" : "text-gray-900"
                    )}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <CustomButton variant="primary" size="sm">Join Now</CustomButton>
        </div>

        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-700 p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name} className="py-2">
                  {link.dropdown ? (
                    <div>
                      <button 
                        onClick={() => toggleDropdown(link.name)}
                        className="flex items-center justify-between w-full py-2 text-gray-700"
                      >
                        {link.name}
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          activeDropdown === link.name ? "rotate-180" : ""
                        )} />
                      </button>
                      
                      {activeDropdown === link.name && (
                        <div className="mt-2 ml-4 border-l-2 border-gigflow-purple pl-4 animate-fade-in">
                          <ul className="space-y-2">
                            {link.dropdown.map((item) => (
                              <li key={item.name}>
                                <a 
                                  href={item.href} 
                                  className="flex items-center py-2 text-gray-700 hover:text-gigflow-purple"
                                  onClick={toggleMenu}
                                >
                                  <span className="mr-3 text-gigflow-purple">{item.icon}</span>
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a 
                      href={link.href} 
                      className="block py-2 text-gray-700 hover:text-gigflow-purple"
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CustomButton variant="primary" className="w-full">Join Now</CustomButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
