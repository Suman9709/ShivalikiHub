// Navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import shivaliklogo from './Image/shivalik-logo.png';
import nacc from './Image/nacc-grade.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyClick = () => {
    navigate('/form');
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              className="h-12 w-auto"
              src={shivaliklogo}
              alt="Shivalik College logo"
            />
            <div className="ml-2 text-xl font-bold text-gray-900">
              <img src={nacc} alt="NAAC Grade" className="h-8 w-24" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-900 hover:text-[#841B31] px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-900 hover:text-[#841B31] px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('activities')}
              className="text-gray-900 hover:text-[#841B31] px-3 py-2 text-sm font-medium transition-colors"
            >
              Activities
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-900 hover:text-[#841B31] px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </button>
            <button
              onClick={handleApplyClick}
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#841B31] hover:bg-[#6e1528] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-[#841B31] transition-all"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1 px-2">
            <button
              onClick={() => {
                scrollToSection('home');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-[#841B31]"
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection('about');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-[#841B31]"
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection('activities');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-[#841B31]"
            >
              Activities
            </button>
            <button
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-[#841B31]"
            >
              Contact
            </button>
            <button
              onClick={handleApplyClick}
              className="block w-full mt-2 text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#841B31] hover:bg-[#6e1528]"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;