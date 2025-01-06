import React from 'react';

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const Stat = ({ icon, value, label }: StatProps) => (
  <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105">
    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-purple-900/50">
      {icon}
    </div>
    <p className="mt-4 text-2xl font-semibold text-white">{value}</p>
    <p className="mt-2 text-sm text-gray-400">{label}</p>
  </div>
);

export default Stat;