import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [adminDropdown, setAdminDropdown] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-orange-500" : "text-gray-800";
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    setAdminDropdown(false);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl shadow-orange-400 py-4 px-4 md:px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="logo.png"
            alt="Autofficina Gaglione Logo"
            className="h-16 md:h-20 w-auto rounded-2xl"
            onError={(e) => {
              console.error("Error loading logo");
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`${isActive(
              "/"
            )} hover:text-orange-500 font-medium transition-colors`}
          >
            Home
          </Link>
          <Link
            to="/officina"
            className={`${isActive(
              "/officina"
            )} hover:text-orange-500 font-medium transition-colors`}
          >
            Officina
          </Link>
          <Link
            to="/calendario"
            className={`${isActive(
              "/calendario"
            )} hover:text-orange-500 font-medium transition-colors`}
          >
            Calendario
          </Link>
          <Link
            to="/servizi"
            className={`${isActive(
              "/servizi"
            )} hover:text-orange-500 font-medium transition-colors`}
          >
            Servizi
          </Link>
          <Link
            to="/contattaci"
            className={`${isActive(
              "/contattaci"
            )} hover:text-orange-500 font-medium transition-colors`}
          >
            Contattaci
          </Link>
        </div>

        {/* Admin Link con dropdown */}
        {isAdmin && (
          <div className="relative hidden md:inline-block">
            <button
              onClick={() => setAdminDropdown((prev) => !prev)}
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-4 py-2 transition-colors"
            >
              Admin
            </button>
            {adminDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-50">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

        {/* Call Button - Always visible */}
        <a
          href="tel:064744274"
          className="bg-amber-600 hover:bg-amber-700 text-white rounded-xl px-4 py-2 transition-colors"
          style={{ textDecoration: "none" }}
        >
          Chiama Ora
        </a>

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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
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
              className={`${isActive(
                "/"
              )} hover:text-orange-500 font-medium transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/officina"
              className={`${isActive(
                "/officina"
              )} hover:text-orange-500 font-medium transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Officina
            </Link>
            <Link
              to="/calendario"
              className={`${isActive(
                "/calendario"
              )} hover:text-orange-500 font-medium transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Calendario
            </Link>
            <Link
              to="/servizi"
              className={`${isActive(
                "/servizi"
              )} hover:text-orange-500 font-medium transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Servizi
            </Link>
            <Link
              to="/contattaci"
              className={`${isActive(
                "/contattaci"
              )} hover:text-orange-500 font-medium transition-colors`}
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
