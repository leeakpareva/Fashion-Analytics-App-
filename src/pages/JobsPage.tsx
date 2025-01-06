import React from 'react';
import JobBoard from '../components/jobs/JobBoard';
import LockedContent from '../components/jobs/LockedContent';
import AccessCodeModal from '../components/jobs/AccessCodeModal';
import { useAccessCode } from '../hooks/useAccessCode';

const JobsPage = () => {
  const { isLocked, showModal, error, setShowModal, validateCode } = useAccessCode();

  return (
    <div className="min-h-screen bg-black">
      {isLocked ? (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">AI & Blockchain Jobs</h2>
            <LockedContent onUnlock={() => setShowModal(true)} />
          </div>
        </div>
      ) : (
        <JobBoard />
      )}

      <AccessCodeModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={validateCode}
        error={error}
      />
    </div>
  );
};

export default JobsPage;