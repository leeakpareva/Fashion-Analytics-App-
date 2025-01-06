import React from 'react';

interface NavLinkProps {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavLink = ({ text, isActive, onClick }: NavLinkProps) => (
  <button 
    onClick={onClick}
    className={`block w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
      isActive 
        ? 'text-purple-400 bg-purple-900/20' 
        : 'text-gray-400 hover:text-purple-400 hover:bg-purple-900/10'
    }`}
  >
    {text}
  </button>
);

export default NavLink;