import { useState, useEffect, useRef } from 'react';
import { Bell, ChevronDown, Search, Menu, X, User, LogOut, Settings, HelpCircle } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LiveDashboard } from './LiveDashboard';

const navigation = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Instructions', path: '/instructions' },
  { name: 'Design System', path: '/design' },
  { name: 'Process', path: '/process' },
  { name: 'About', path: '/about' },
  { name: 'Engage', path: '/engage' }
];

export function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle scroll events for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchExpanded(false);
    setShowUserMenu(false);
  }, [location]);

  // Focus input when search is expanded
  useEffect(() => {
    if (isSearchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchExpanded]);

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setIsSearchExpanded(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
    }`}>
      <LiveDashboard />
      <div className="max-w-7xl mx-auto">
        <nav className="relative px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <Link 
              to="/dashboard" 
              className="flex flex-col touch-target"
            >
              <span className="text-xl font-semibold text-black">NAVADA</span>
              <span className="text-[8px] text-zinc-500 -mt-1">
                Navigating Artistic Vision, with Advance Digital Assistance
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-black'
                      : 'text-zinc-500 hover:text-black'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Desktop Search */}
              <div className="hidden md:flex items-center relative">
                <div
                  className={`flex items-center transition-all duration-300 ${
                    isSearchExpanded ? 'w-64' : 'w-10'
                  }`}
                >
                  <button
                    onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                    className={`p-2 rounded-lg transition-colors ${
                      isSearchExpanded ? 'hover:bg-zinc-100' : 'hover:bg-zinc-100'
                    }`}
                  >
                    <Search className="h-5 w-5 text-zinc-600" />
                  </button>
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search..."
                    className={`absolute left-0 pl-10 pr-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 ${
                      isSearchExpanded
                        ? 'w-full opacity-100'
                        : 'w-10 opacity-0 pointer-events-none'
                    }`}
                  />
                </div>
              </div>

              {/* Notifications */}
              <div className="relative">
                <button 
                  className="p-2 hover:bg-zinc-100 rounded-full relative touch-target"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <Bell className="h-6 w-6 text-zinc-600" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-black rounded-full"></span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-zinc-200 max-h-[80vh] overflow-y-auto smooth-scroll">
                    {/* Notifications content */}
                  </div>
                )}
              </div>

              {/* User Menu */}
              <div className="relative hidden md:block" ref={userMenuRef}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 p-2 hover:bg-zinc-100 rounded-lg transition-colors"
                >
                  <div className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <ChevronDown className={`h-4 w-4 text-zinc-600 transition-transform ${
                    showUserMenu ? 'rotate-180' : ''
                  }`} />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-zinc-200 py-1">
                    <div className="px-4 py-3 border-b border-zinc-200">
                      <p className="text-sm font-medium text-black">Leslie Akpareva</p>
                      <p className="text-xs text-zinc-500">leslie@navada.com</p>
                    </div>
                    <div className="py-1">
                      <Link
                        to="/settings"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50"
                      >
                        <Settings className="h-4 w-4" />
                        Settings
                      </Link>
                      <Link
                        to="/help"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-600 hover:bg-zinc-50"
                      >
                        <HelpCircle className="h-4 w-4" />
                        Help & Support
                      </Link>
                    </div>
                    <div className="border-t border-zinc-200 py-1">
                      <button
                        onClick={() => {
                          // Handle logout
                          navigate('/');
                        }}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-zinc-50 w-full text-left"
                      >
                        <LogOut className="h-4 w-4" />
                        Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-zinc-100 rounded-lg touch-target"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-zinc-600" />
                ) : (
                  <Menu className="h-6 w-6 text-zinc-600" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="fixed inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
              <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
                <div className="h-full overflow-y-auto">
                  <div className="p-4 border-b border-zinc-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-semibold text-black">Menu</span>
                      <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 hover:bg-zinc-100 rounded-lg"
                      >
                        <X className="h-5 w-5 text-zinc-600" />
                      </button>
                    </div>
                    {/* Mobile Search */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                      />
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="p-4 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-4 py-2 rounded-lg transition-colors ${
                          location.pathname === item.path
                            ? 'bg-black text-white'
                            : 'text-zinc-600 hover:bg-zinc-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile User Menu */}
                  <div className="p-4 border-t border-zinc-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-black">Leslie Akpareva</p>
                        <p className="text-sm text-zinc-500">leslie@navada.com</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Link
                        to="/settings"
                        className="flex items-center gap-2 px-4 py-2 text-zinc-600 hover:bg-zinc-50 rounded-lg"
                      >
                        <Settings className="h-5 w-5" />
                        Settings
                      </Link>
                      <Link
                        to="/help"
                        className="flex items-center gap-2 px-4 py-2 text-zinc-600 hover:bg-zinc-50 rounded-lg"
                      >
                        <HelpCircle className="h-5 w-5" />
                        Help & Support
                      </Link>
                      <button
                        onClick={() => {
                          // Handle logout
                          navigate('/');
                        }}
                        className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-zinc-50 rounded-lg w-full"
                      >
                        <LogOut className="h-5 w-5" />
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}