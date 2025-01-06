import React from 'react';
import { Building } from 'lucide-react';
import { Button } from '../ui/button';

interface EmployerCTAProps {
  onEmployerClick: () => void;
}

const EmployerCTA = ({ onEmployerClick }: EmployerCTAProps) => {
  return (
    <Button
      variant="outline"
      className="w-full md:w-auto flex items-center gap-2 border-purple-500/50 hover:border-purple-500"
      onClick={onEmployerClick}
    >
      <Building className="w-4 h-4" />
      <span>Employers</span>
    </Button>
  );
};

export default EmployerCTA;