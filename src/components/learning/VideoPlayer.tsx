import React from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail: string;
  title: string;
}

const VideoPlayer = ({ videoUrl, thumbnail, title }: VideoPlayerProps) => {
  return (
    <div className="relative rounded-xl overflow-hidden bg-gray-900">
      <div className="aspect-video relative group">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center transform transition-transform group-hover:scale-110">
            <Play className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};

export default VideoPlayer;