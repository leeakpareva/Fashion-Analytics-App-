import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const FooterLink = ({ href, children, onClick }: FooterLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <li>
      <a 
        href={href}
        onClick={handleClick}
        className="text-gray-400 hover:text-purple-400 transition-colors"
      >
        {children}
      </a>
    </li>
  );
};

export default FooterLink;