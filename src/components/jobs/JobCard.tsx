import React from 'react';
import { Briefcase, MapPin, Banknote } from 'lucide-react';
import { Job } from '../../types/job';

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-white">{job.title}</h3>
          <p className="text-purple-400 mt-1">{job.company}</p>
        </div>
        <img 
          src={job.companyLogo} 
          alt={`${job.company} logo`} 
          className="w-12 h-12 rounded-lg object-cover"
        />
      </div>
      
      <div className="mt-4 flex flex-wrap gap-4 text-gray-400">
        <div className="flex items-center">
          <Briefcase className="w-4 h-4 mr-2" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center">
          <Banknote className="w-4 h-4 mr-2" />
          <span>{job.salary}</span>
        </div>
      </div>
      
      <p className="mt-4 text-gray-300">{job.description}</p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span 
            key={skill}
            className="px-3 py-1 rounded-full text-sm bg-purple-900/50 text-purple-300"
          >
            {skill}
          </span>
        ))}
      </div>
      
      <button className="mt-6 w-full bg-purple-600 text-white px-4 py-2 rounded-md font-medium transition-all duration-200 hover:bg-purple-700 hover:scale-105">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;