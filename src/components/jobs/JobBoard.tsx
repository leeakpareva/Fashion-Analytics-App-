import React from 'react';
import JobFilters from './JobFilters';
import JobList from './JobList';
import { useJobs } from '../../hooks/useJobs';

const JobBoard = () => {
  const { jobs, isLoading, error } = useJobs();

  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">AI & Blockchain Jobs</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <JobFilters />
          <div className="lg:col-span-3">
            {isLoading && <p className="text-gray-400">Loading jobs...</p>}
            {error && <p className="text-red-400">Error loading jobs</p>}
            {jobs && <JobList jobs={jobs} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;