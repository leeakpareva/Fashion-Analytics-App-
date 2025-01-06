import React from 'react';
import { UserPlus, BookOpen, Award, Briefcase, Building2, LineChart, Users, Rocket } from 'lucide-react';
import HowItWorksStep from './HowItWorksStep';

const HowItWorks = () => {
  return (
    <div className="py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">How It Works: AI & Web3 Talent Platform</h2>
        <p className="text-gray-400 mb-12 max-w-3xl">
          Our comprehensive platform connects learners with opportunities through cutting-edge technology and expert-led education.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <HowItWorksStep step={1} title="Get Started" Icon={UserPlus}>
            <h4 className="text-white font-medium">Sign Up & Personalize</h4>
            <ul className="list-disc list-inside">
              <li>Students: Create a profile, set learning goals, and explore available courses</li>
              <li>Employers: Register your organization, set hiring preferences, and subscribe to a plan</li>
            </ul>
          </HowItWorksStep>

          <HowItWorksStep step={2} title="Learn & Grow" Icon={BookOpen}>
            <ul className="list-disc list-inside">
              <li>Access your Interactive Dashboard</li>
              <li>Participate in Live Sessions</li>
              <li>Work on projects in the Project Workspace</li>
              <li>Connect with peers via Discussion Forums</li>
              <li>Earn Web3-Secured Certificates</li>
            </ul>
          </HowItWorksStep>

          <HowItWorksStep step={3} title="Assess Your Skills" Icon={Award}>
            <ul className="list-disc list-inside">
              <li>Take Assessment Quizzes during courses</li>
              <li>Monitor progress with the Competency Tracker</li>
              <li>Build your professional Portfolio</li>
            </ul>
          </HowItWorksStep>

          <HowItWorksStep step={4} title="Get Matched" Icon={Briefcase}>
            <ul className="list-disc list-inside">
              <li>AI-Powered Job Matching</li>
              <li>Explore detailed Candidate Profiles</li>
              <li>Use Direct Messaging system</li>
              <li>Schedule interviews with Integrated Calendar</li>
            </ul>
          </HowItWorksStep>

          <HowItWorksStep step={5} title="Employer Portal" Icon={Building2}>
            <ul className="list-disc list-inside">
              <li>Search for talent using advanced filters</li>
              <li>Track recruitment metrics</li>
              <li>Manage subscription plans</li>
            </ul>
          </HowItWorksStep>

          <HowItWorksStep step={6} title="Analytics Dashboard" Icon={LineChart}>
            <ul className="list-disc list-inside">
              <li>Access Personal Analytics</li>
              <li>Utilize Employer Analytics</li>
              <li>Gain valuable Market Insights</li>
            </ul>
          </HowItWorksStep>

          <HowItWorksStep step={7} title="Community Hub" Icon={Users}>
            <ul className="list-disc list-inside">
              <li>Attend Webinars & Events</li>
              <li>Join the Mentorship Program</li>
              <li>Connect with the Alumni Network</li>
            </ul>
          </HowItWorksStep>

          <HowItWorksStep step={8} title="Advance Your Career" Icon={Rocket}>
            <h4 className="text-white font-medium">Students:</h4>
            <p>Land your dream role with new skills and Web3-secured certifications</p>
            <h4 className="text-white font-medium mt-2">Employers:</h4>
            <p>Recruit top talent efficiently and scale your organization</p>
          </HowItWorksStep>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;