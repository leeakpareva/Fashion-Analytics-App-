import React from 'react';
import { Award, Users, Globe, Sparkles } from 'lucide-react';
import HowItWorks from '../components/about/HowItWorks';
import ProfileSection from '../components/about/ProfileSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About NAVADA</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empowering the next generation of AI and blockchain innovators through 
            cutting-edge education and real-world experience.
          </p>
        </div>

        <ProfileSection />

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              At NAVADA, we're dedicated to bridging the gap between traditional education 
              and the rapidly evolving world of AI and blockchain technology. Our platform 
              provides accessible, high-quality education that empowers individuals to become 
              leaders in the digital revolution.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              We envision a future where advanced technology education is accessible to everyone, 
              creating a global community of skilled professionals who drive innovation in AI 
              and blockchain technologies.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
            <Award className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
            <p className="text-gray-400">Committed to delivering the highest quality education</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
            <Users className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
            <p className="text-gray-400">Building a supportive network of learners and experts</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
            <Globe className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Global Impact</h3>
            <p className="text-gray-400">Making technology education accessible worldwide</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
            <Sparkles className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-400">Staying at the forefront of technological advancement</p>
          </div>
        </div>

        <HowItWorks />
      </div>
    </div>
  );
};

export default AboutPage;