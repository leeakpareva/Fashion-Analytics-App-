import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from '../Logo';
import FooterSection from './FooterSection';
import FooterLink from './FooterLink';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 max-w-md">
              Empowering the next generation of innovators through cutting-edge AI and blockchain education.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/leslie-akpareva-mba-ma-56a888182/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <FooterSection title="Learning">
            <FooterLink href="/courses" onClick={() => onNavigate('learning')}>Courses</FooterLink>
            <FooterLink href="/tutorials" onClick={() => onNavigate('learning')}>Tutorials</FooterLink>
            <FooterLink href="/workshops" onClick={() => onNavigate('learning')}>Workshops</FooterLink>
            <FooterLink href="/certification" onClick={() => onNavigate('learning')}>Certification</FooterLink>
          </FooterSection>

          <FooterSection title="Community">
            <FooterLink href="/events" onClick={() => onNavigate('community')}>Events</FooterLink>
            <FooterLink href="/blog" onClick={() => onNavigate('community')}>Blog</FooterLink>
            <FooterLink href="/forum" onClick={() => onNavigate('community')}>Forum</FooterLink>
            <FooterLink href="/discord" onClick={() => onNavigate('community')}>Discord</FooterLink>
          </FooterSection>

          <FooterSection title="Company">
            <FooterLink href="/about" onClick={() => onNavigate('about')}>About</FooterLink>
            <FooterLink href="/employers" onClick={() => onNavigate('employers')}>For Employers</FooterLink>
            <FooterLink 
              href="https://claude.site/artifacts/16f7a620-5e60-40d2-8b8d-cc61172a170e"
              onClick={() => window.open('https://claude.site/artifacts/16f7a620-5e60-40d2-8b8d-cc61172a170e', '_blank')}
            >
              Market Intelligence
            </FooterLink>
          </FooterSection>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} NAVADA. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;