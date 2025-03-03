import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Info, Users, HelpCircle, FileText, ExternalLink, BookOpen } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OrganizersPage from './pages/OrganizersPage';
import FAQPage from './pages/FAQPage';
import RegistrationsPage from './pages/RegistrationsPage';
import PublisherPage from './pages/PublisherPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/snist-logo.png" 
              alt="SNIST Logo" 
              className="h-10 w-auto"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/40x40?text=SNIST";
                e.currentTarget.onerror = null;
              }}
            />
            <span className="font-bold text-xl">Neural Nexus & Synergy 2025</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-200 flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="hover:text-blue-200 flex items-center gap-1">
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            <Link to="/organizers" className="hover:text-blue-200 flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>Organizers</span>
            </Link>
            <Link to="/publisher" className="hover:text-blue-200 flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>Publisher</span>
            </Link>
            <Link to="/faq" className="hover:text-blue-200 flex items-center gap-1">
              <HelpCircle className="h-4 w-4" />
              <span>FAQ</span>
            </Link>
            <Link to="/registrations" className="hover:text-blue-200 flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>Registrations</span>
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-800 py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              <Link to="/" className="text-white py-2 hover:bg-blue-700 px-2 rounded flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link to="/about" className="text-white py-2 hover:bg-blue-700 px-2 rounded flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span>About</span>
              </Link>
              <Link to="/organizers" className="text-white py-2 hover:bg-blue-700 px-2 rounded flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Organizers</span>
              </Link>
              <Link to="/publisher" className="text-white py-2 hover:bg-blue-700 px-2 rounded flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Publisher</span>
              </Link>
              <Link to="/faq" className="text-white py-2 hover:bg-blue-700 px-2 rounded flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                <span>FAQ</span>
              </Link>
              <Link to="/registrations" className="text-white py-2 hover:bg-blue-700 px-2 rounded flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Registrations</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/organizers" element={<OrganizersPage />} />
          <Route path="/publisher" element={<PublisherPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/registrations" element={<RegistrationsPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <p className="text-gray-300">Sreenidhi Institute of Science and Technology</p>
              <p className="text-gray-300">Yamnampet, Ghatkesar, Hyderabad</p>
              <p className="text-gray-300">Telangana, India - 501301</p>
              <p className="text-gray-300 mt-2">Email: conference@sreenidhi.edu.in</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link to="/organizers" className="text-gray-300 hover:text-white">Organizers</Link></li>
                <li><Link to="/publisher" className="text-gray-300 hover:text-white">Publisher</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">LinkedIn</a>
              </div>
              <div className="mt-4 flex items-center">
                <img 
                  src="/snist-logo.png" 
                  alt="SNIST Logo" 
                  className="h-8 w-auto mr-2"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/32x32?text=SNIST";
                    e.currentTarget.onerror = null;
                  }}
                />
                <p className="text-gray-400 text-sm">© 2025 Neural Nexus & Synergy. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;