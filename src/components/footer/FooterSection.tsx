import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FooterSection = ({ title, children }: FooterSectionProps) => {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {children}
      </ul>
    </div>
  );
};

export default FooterSection;