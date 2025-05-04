
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png'; // Import the logo

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-cream shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                {/* Use the imported logo */}
                <img className="h-60 w-auto" src={logo} alt="Croissant & Questions Logo" /> 
                {/* Optional: Keep text if desired, or remove */}
                {/* <span className="text-croissant-dark text-2xl font-bold ml-3">Croissant</span>
                <span className="text-navy text-2xl mx-1">&</span>
                <span className="text-navy text-2xl font-bold">Questions</span> */}
              </Link>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/forum" className="text-navy hover:text-croissant-dark transition-colors duration-200 link-underline">
              Forum
            </Link>
            <Link to="/podcast" className="text-navy hover:text-croissant-dark transition-colors duration-200 link-underline">
              Podcast
            </Link>
            <Link to="/about" className="text-navy hover:text-croissant-dark transition-colors duration-200 link-underline">
              About
            </Link>
            <Link to="/login" className="bg-croissant hover:bg-croissant-dark text-white px-4 py-2 rounded-md transition-colors duration-200">
              Sign In
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy hover:text-croissant-dark focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-cream-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/forum"
              className="block px-3 py-2 rounded-md text-navy hover:text-croissant-dark hover:bg-cream"
              onClick={toggleMenu}
            >
              Forum
            </Link>
            <Link
              to="/podcast"
              className="block px-3 py-2 rounded-md text-navy hover:text-croissant-dark hover:bg-cream"
              onClick={toggleMenu}
            >
              Podcast
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-navy hover:text-croissant-dark hover:bg-cream"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md bg-croissant text-white hover:bg-croissant-dark"
              onClick={toggleMenu}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
