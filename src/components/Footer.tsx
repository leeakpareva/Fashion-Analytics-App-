import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function Footer() {
  const location = useLocation();
  const restrictedPaths = ['/', '/register', '/subscribe'];
  
  if (restrictedPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="bg-zinc-900 text-zinc-400 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[10px]">
            © {new Date().getFullYear()} NAVADA. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[10px]">
            <Link 
              to="/terms" 
              className="hover:text-zinc-300 transition-colors"
            >
              Terms & Conditions
            </Link>
            <a 
              href="mailto:legal@navada.com" 
              className="hover:text-zinc-300 transition-colors"
            >
              Legal
            </a>
            <a 
              href="mailto:privacy@navada.com" 
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}