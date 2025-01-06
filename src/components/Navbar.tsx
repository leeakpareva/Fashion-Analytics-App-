import React, { useState } from 'react';
import { Menu, X, Key } from 'lucide-react';
import Logo from './Logo';
import NavLink from './navigation/NavLink';
import EmployerCTA from './navigation/EmployerCTA';
import MarketIntelligenceCTA from './navigation/MarketIntelligenceCTA';
import { Button } from './ui/button';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isAuthenticated: boolean;
  onLoginClick: () => void;
}

const Navbar = ({ currentPage, onNavigate, isAuthenticated, onLoginClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <Logo />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink 
              text="Learning Hub" 
              isActive={currentPage === 'learning'}
              onClick={() => onNavigate('learning')}
            />
            <NavLink 
              text="Jobs" 
              isActive={currentPage === 'jobs'}
              onClick={() => onNavigate('jobs')}
            />
            <NavLink 
              text="Community" 
              isActive={currentPage === 'community'}
              onClick={() => onNavigate('community')}
            />
            <NavLink 
              text="About" 
              isActive={currentPage === 'about'}
              onClick={() => onNavigate('about')}
            />
            <div className="h-6 w-px bg-gray-800" />
            <MarketIntelligenceCTA />
            <EmployerCTA onEmployerClick={() => onNavigate('employers')} />
            <Button 
              onClick={onLoginClick}
              className="w-12 h-12 p-0 flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Sign In"
            >
              <Key className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 border-b border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <NavLink 
              text="Learning Hub" 
              isActive={currentPage === 'learning'}
              onClick={() => {
                onNavigate('learning');
                setIsMenuOpen(false);
              }}
            />
            <NavLink 
              text="Jobs" 
              isActive={currentPage === 'jobs'}
              onClick={() => {
                onNavigate('jobs');
                setIsMenuOpen(false);
              }}
            />
            <NavLink 
              text="Community" 
              isActive={currentPage === 'community'}
              onClick={() => {
                onNavigate('community');
                setIsMenuOpen(false);
              }}
            />
            <NavLink 
              text="About" 
              isActive={currentPage === 'about'}
              onClick={() => {
                onNavigate('about');
                setIsMenuOpen(false);
              }}
            />
            <div className="pt-2 space-y-2">
              <MarketIntelligenceCTA />
              <EmployerCTA onEmployerClick={() => {
                onNavigate('employers');
                setIsMenuOpen(false);
              }} />
              <Button 
                onClick={() => {
                  onLoginClick();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2"
              >
                <Key className="w-6 h-6" />
                <span className="md:hidden">Sign In</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;