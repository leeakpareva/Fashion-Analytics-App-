import React from 'react';
import { Code, Lightbulb } from 'lucide-react';

const ProfileSection = () => {
  return (
    <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-8 mb-16">
      <h2 className="text-3xl font-bold text-white mb-6">Project Lead</h2>
      
      <div className="space-y-8">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-xl font-bold text-white">Leslie Akpareva, MA, MBA</h3>
            <p className="text-purple-400">Technology Program Director</p>
          </div>
          
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              A visionary leader with 17 years of experience driving transformational projects across diverse industries, including fintech, blockchain, AI, energy, logistics, and fashion. Leslie combines strategic planning, program governance, and advanced technology integration to deliver innovative solutions that align with organizational goals and industry trends.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4 flex items-start gap-3">
                <Code className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">AI & Web3 Talent Platform</h4>
                  <p className="text-gray-400 text-sm">Creator and lead developer of the platform, incorporating AI-driven features and Web3-secured functionalities.</p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">NAVADA Initiative</h4>
                  <p className="text-gray-400 text-sm">Leading the initiative to merge creativity and technology through advanced digital assistance.</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-white font-semibold mb-4">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['Blockchain Architecture', 'AI Solutions', 'Program Management', 'Strategic Planning', 'Technology Integration', 'Innovation Leadership'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;