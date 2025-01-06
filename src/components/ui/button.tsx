import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  children: React.ReactNode;
}

export const Button = ({ variant = 'default', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded-full font-medium transition-all duration-200";
  const variants = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-purple-600 text-purple-600 hover:bg-purple-600/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};