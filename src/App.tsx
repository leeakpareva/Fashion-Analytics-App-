import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Instructions } from './pages/Instructions';
import { DesignSystem } from './pages/DesignSystem';
import { EnterPage } from './components/EnterPage';
import { RegisterForm } from './components/RegisterForm';
import { SubscriptionPage } from './components/SubscriptionPage';
import { Overview } from './pages/Overview';
import { AboutUs } from './pages/AboutUs';
import { Engage } from './pages/Engage';
import { ChatButton } from './components/ChatButton';
import { CookieConsent } from './components/CookieConsent';
import { ProductDesignProcess } from './pages/ProductDesignProcess';
import { Footer } from './components/Footer';
import { Terms } from './pages/Terms';
import { LandscapeModePopup } from './components/LandscapeModePopup';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<EnterPage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/subscribe" element={<SubscriptionPage />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/terms" element={<Terms />} />
          <Route
            path="/*"
            element={
              <div className="flex-1 flex flex-col bg-zinc-50">
                <Header />
                <main className="flex-1 pt-[80px] sm:pt-[100px] lg:pt-[140px]">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/instructions" element={<Instructions />} />
                    <Route path="/design" element={<DesignSystem />} />
                    <Route path="/process" element={<ProductDesignProcess />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/engage" element={<Engage />} />
                  </Routes>
                </main>
                <Footer />
                <ChatButton />
              </div>
            }
          />
        </Routes>
        <CookieConsent />
        <LandscapeModePopup />
      </div>
    </Router>
  );
}