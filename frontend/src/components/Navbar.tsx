import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-orange-500' : 'text-gray-800';
  };

  return (
    <nav className="bg-white shadow-2xl shadow-orange-400 py-4 px-4 md:px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="logo.png"
            alt="Autofficina Gaglione Logo" 
            className="h-16 md:h-20 w-auto rounded-2xl"
            onError={(e) => {
              console.error('Error loading logo');
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`${isActive('/')} hover:text-orange-500 font-medium transition-colors`}>
            Home
          </Link>
          <Link to="/officina" className={`${isActive('/officina')} hover:text-orange-500 font-medium transition-colors`}>
            Officina
          </Link>
          <Link to="/servizi" className={`${isActive('/servizi')} hover:text-orange-500 font-medium transition-colors`}>
            Servizi
          </Link>
          <Link to="/contattaci" className={`${isActive('/contattaci')} hover:text-orange-500 font-medium transition-colors`}>
            Contattaci
          </Link>
        </div>

        {/* Call Button - Always visible */}
        <button className="bg-amber-600 hover:bg-amber-700 text-white rounded-xl px-4 py-2 transition-colors">
          Chiama Ora
        </button>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 ml-4 text-gray-800 hover:text-orange-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4 px-4">
            <Link 
              to="/" 
              className={`${isActive('/')} hover:text-orange-500 font-medium transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/officina" 
              className={`${isActive('/officina')} hover:text-orange-500 font-medium transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Officina
            </Link>
            <Link 
              to="/servizi" 
              className={`${isActive('/servizi')} hover:text-orange-500 font-medium transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Servizi
            </Link>
            <Link 
              to="/contattaci" 
              className={`${isActive('/contattaci')} hover:text-orange-500 font-medium transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contattaci
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;