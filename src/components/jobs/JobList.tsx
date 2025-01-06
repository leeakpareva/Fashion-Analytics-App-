import React from 'react';
import JobCard from './JobCard';
import { Job } from '../../types/job';

interface JobListProps {
  jobs: Job[];
}

const JobList = ({ jobs }: JobListProps) => {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;