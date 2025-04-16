
import React, { useState } from 'react';
import { CustomButton } from './ui/custom-button';
import { User, Mail, Link, Check, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// Form field type
interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  icon: React.ReactNode;
  error: string;
  valid: boolean;
  options?: { value: string; label: string }[];
}

// Skill categories
const skillCategories = [
  { value: "", label: "Select your primary skill" },
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
  { value: "writing", label: "Writing & Content" },
  { value: "video", label: "Video & Animation" },
  { value: "audio", label: "Audio & Music" },
  { value: "other", label: "Other" }
];

const SignUpForm = () => {
  // Form state
  const [formFields, setFormFields] = useState<FormField[]>([
    {
      id: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Your full name",
      value: "",
      icon: <User className="w-5 h-5 text-gray-400" />,
      error: "",
      valid: false
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "your.email@example.com",
      value: "",
      icon: <Mail className="w-5 h-5 text-gray-400" />,
      error: "",
      valid: false
    },
    {
      id: "skillCategory",
      label: "Skill Category",
      type: "select",
      placeholder: "Select your primary skill",
      value: "",
      icon: <User className="w-5 h-5 text-gray-400" />,
      options: skillCategories,
      error: "",
      valid: false
    },
    {
      id: "portfolioLink",
      label: "Portfolio Link (Optional)",
      type: "url",
      placeholder: "https://yourportfolio.com",
      value: "",
      icon: <Link className="w-5 h-5 text-gray-400" />,
      error: "",
      valid: true // Optional field, starts as valid
    }
  ]);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Validate a single field
  const validateField = (field: FormField, value: string): { valid: boolean; error: string } => {
    switch (field.id) {
      case "fullName":
        if (!value.trim()) return { valid: false, error: "Name is required" };
        if (value.trim().length < 3) return { valid: false, error: "Name must be at least 3 characters" };
        return { valid: true, error: "" };
        
      case "email":
        if (!value.trim()) return { valid: false, error: "Email is required" };
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return { valid: false, error: "Please enter a valid email" };
        return { valid: true, error: "" };
        
      case "skillCategory":
        if (!value) return { valid: false, error: "Please select a skill category" };
        return { valid: true, error: "" };
        
      case "portfolioLink":
        // Optional, but if provided must be a valid URL
        if (!value) return { valid: true, error: "" };
        const urlRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
        if (!urlRegex.test(value)) return { valid: false, error: "Please enter a valid URL" };
        return { valid: true, error: "" };
        
      default:
        return { valid: true, error: "" };
    }
  };

  // Handle input changes
  const handleChange = (id: string, value: string) => {
    setFormFields(prev => 
      prev.map(field => {
        if (field.id === id) {
          const { valid, error } = validateField(field, value);
          return { ...field, value, valid, error };
        }
        return field;
      })
    );
  };

  // Check if form is valid
  const isFormValid = (): boolean => {
    return formFields.every(field => field.valid);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields again
    const validatedFields = formFields.map(field => {
      const { valid, error } = validateField(field, field.value);
      return { ...field, valid, error };
    });
    
    setFormFields(validatedFields);
    
    // Check if form is valid
    if (validatedFields.every(field => field.valid)) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormFields(prev => 
            prev.map(field => ({
              ...field,
              value: "",
              error: "",
              valid: field.id === "portfolioLink" ? true : false
            }))
          );
        }, 3000);
      }, 1500);
    }
  };

  // Render form input
  const renderInput = (field: FormField) => {
    const baseInputClasses = "w-full pl-10 pr-4 py-3 rounded-md border focus:outline-none focus:ring-2 transition-all duration-300";
    const validationClasses = field.value ? 
      (field.valid ? "border-green-400 focus:border-green-500 focus:ring-green-200" : "border-red-400 focus:border-red-500 focus:ring-red-200") : 
      "border-gray-300 focus:border-gigflow-purple focus:ring-gigflow-purple-light";
    
    switch (field.type) {
      case "select":
        return (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {field.icon}
            </div>
            <select
              id={field.id}
              className={cn(baseInputClasses, validationClasses)}
              value={field.value}
              onChange={(e) => handleChange(field.id, e.target.value)}
            >
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            {renderValidationIcon(field)}
          </div>
        );
      
      default:
        return (
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {field.icon}
            </div>
            <input
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
              className={cn(baseInputClasses, validationClasses)}
              value={field.value}
              onChange={(e) => handleChange(field.id, e.target.value)}
            />
            {renderValidationIcon(field)}
          </div>
        );
    }
  };

  // Render validation icon
  const renderValidationIcon = (field: FormField) => {
    if (!field.value) return null;
    
    return (
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        {field.valid ? (
          <Check className="w-5 h-5 text-green-500" />
        ) : (
          <AlertCircle className="w-5 h-5 text-red-500" />
        )}
      </div>
    );
  };

  // Render success message
  const renderSuccessMessage = () => (
    <div className="p-6 bg-green-50 rounded-lg border border-green-200 text-center animate-fade-in">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-xl font-bold text-green-800 mb-2">Sign Up Successful!</h3>
      <p className="text-green-700">Thank you for joining GigFloww. We'll be in touch soon!</p>
    </div>
  );

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join GigFloww Today</h2>
            <p className="text-xl text-gray-600">
              Start connecting with creative opportunities tailored to your skills
            </p>
          </div>
          
          <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-100">
            {submitted ? (
              renderSuccessMessage()
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formFields.map((field) => (
                  <div key={field.id} className="space-y-2">
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                      {field.label}
                    </label>
                    {renderInput(field)}
                    {field.error && (
                      <p className="text-sm text-red-500 mt-1 animate-fade-in">{field.error}</p>
                    )}
                    {field.value && field.valid && (
                      <p className="text-sm text-green-500 mt-1 animate-fade-in">Looks good!</p>
                    )}
                  </div>
                ))}
                
                <div className="mt-8">
                  <CustomButton
                    type="submit"
                    variant={isFormValid() ? "primary" : "disabled"}
                    className="w-full"
                    disabled={!isFormValid() || isSubmitting}
                    isLoading={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Sign Up Now"}
                  </CustomButton>
                </div>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  By signing up, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
