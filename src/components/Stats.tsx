import React from 'react';
import { Users, BookOpen, Building, Award } from 'lucide-react';
import Stat from './ui/Stat';

const Stats = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <Stat
            icon={<Users className="h-6 w-6 text-purple-500" />}
            value="10,000+"
            label="Active Learners"
          />
          <Stat
            icon={<BookOpen className="h-6 w-6 text-purple-500" />}
            value="200+"
            label="Expert-Led Courses"
          />
          <Stat
            icon={<Building className="h-6 w-6 text-purple-500" />}
            value="500+"
            label="Partner Companies"
          />
          <Stat
            icon={<Award className="h-6 w-6 text-purple-500" />}
            value="95%"
            label="Success Rate"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;