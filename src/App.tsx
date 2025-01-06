import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import AssessmentPage from './pages/AssessmentPage';
import LoginPage from './pages/LoginPage';
import LearningHubPage from './pages/LearningHubPage';
import AboutPage from './pages/AboutPage';
import CommunityPage from './pages/CommunityPage';
import BlogPage from './pages/BlogPage';
import EmployerLoginPage from './pages/EmployerLoginPage';
import EntrancePage from './pages/EntrancePage';
import LoadingScreen from './components/loading/LoadingScreen';
import Chat from './components/chat/Chat';
import CookieConsent from './components/cookies/CookieConsent';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  const [currentPage, setCurrentPage] = useState('entrance');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEnter = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentPage('home');
    }, 3000);
  };

  if (currentPage === 'entrance') {
    return (
      <>
        {isLoading && <LoadingScreen />}
        <EntrancePage onEnter={handleEnter} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        isAuthenticated={isAuthenticated}
        onLoginClick={() => setCurrentPage('login')}
      />
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'jobs' && <JobsPage />}
        {currentPage === 'assessment' && <AssessmentPage />}
        {currentPage === 'login' && <LoginPage />}
        {currentPage === 'learning' && <LearningHubPage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'community' && <CommunityPage />}
        {currentPage === 'blog' && <BlogPage />}
        {currentPage === 'employers' && <EmployerLoginPage />}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <Chat />
      <CookieConsent />
      <ScrollToTop />
    </div>
  );
}

export default App;