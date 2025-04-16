
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'disabled';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    children, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false, 
    disabled, 
    icon,
    iconPosition = 'left',
    type = 'button',
    ...props 
  }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none";
    
    const variants = {
      primary: "bg-gigflow-purple hover:bg-gigflow-purple-dark text-white shadow-sm",
      secondary: "bg-white border border-gigflow-purple text-gigflow-purple-dark hover:bg-gigflow-pastel-purple",
      outline: "bg-transparent border border-gray-300 text-gray-700 hover:border-gigflow-purple hover:text-gigflow-purple",
      accent: "bg-gigflow-accent-purple text-white hover:bg-opacity-90",
      disabled: "bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const isDisabled = disabled || isLoading;
    
    return (
      <button
        className={cn(
          baseStyles,
          variants[isDisabled ? 'disabled' : variant],
          sizes[size],
          className
        )}
        disabled={isDisabled}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        
        {!isLoading && icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )}
        
        <span>{children}</span>
        
        {!isLoading && icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export { CustomButton };
