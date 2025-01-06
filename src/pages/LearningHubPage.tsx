import React from 'react';
import VideoGrid from '../components/learning/VideoGrid';
import LockedContent from '../components/learning/LockedContent';
import AccessCodeModal from '../components/learning/AccessCodeModal';
import { useAccessCode } from '../hooks/useAccessCode';
import { VideoLesson } from '../types/learning';

const lessons: VideoLesson[] = [
  {
    id: '1',
    title: 'Introduction to Machine Learning',
    videoUrl: '#',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop',
    duration: '45:00'
  },
  {
    id: '2',
    title: 'Neural Networks Fundamentals',
    videoUrl: '#',
    thumbnail: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=450&fit=crop',
    duration: '38:15'
  },
  {
    id: '3',
    title: 'Smart Contracts & Web3',
    videoUrl: '#',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop',
    duration: '52:30'
  }
];

const LearningHubPage = () => {
  const { isLocked, showModal, error, setShowModal, validateCode } = useAccessCode();

  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">Learning Hub</h1>
          <p className="text-gray-400 max-w-3xl">
            Access our comprehensive library of video lessons, taught by industry experts.
            Master AI and blockchain technology at your own pace.
          </p>
        </div>

        {isLocked ? (
          <LockedContent onUnlock={() => setShowModal(true)} />
        ) : (
          <VideoGrid lessons={lessons} />
        )}

        <AccessCodeModal 
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={validateCode}
          error={error}
        />
      </div>
    </div>
  );
};

export default LearningHubPage;