import React from 'react';
import VideoPlayer from './VideoPlayer';
import { VideoLesson } from '../../types/learning';

interface VideoGridProps {
  lessons: VideoLesson[];
}

const VideoGrid = ({ lessons }: VideoGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lessons.map((lesson) => (
        <VideoPlayer
          key={lesson.id}
          videoUrl={lesson.videoUrl}
          thumbnail={lesson.thumbnail}
          title={lesson.title}
        />
      ))}
    </div>
  );
};

export default VideoGrid;