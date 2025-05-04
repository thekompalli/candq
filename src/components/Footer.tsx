import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from '@/assets/logo2.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
          <Link to="/" className="flex items-center">
                <img className="h-30 w-auto" src={logo} alt="Croissant & Questions Logo" /> 
              </Link>
            <p className="text-gray-300 mb-4">
              
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/croissant_questions?igsh=MWE5bW92aGZkbTlsMQ==" target="_blank" className="text-gray-300 hover:text-croissant transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://open.spotify.com/show/2FRLx4tCY7fcrJzzhgOtLD" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-croissant transition-colors duration-200">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="https://www.reddit.com/r/CroissantAndQuestions/" target="_blank" className="text-gray-300 hover:text-croissant transition-colors duration-200">Forum</Link>
              </li>
              <li>
                <Link to="https://open.spotify.com/show/2FRLx4tCY7fcrJzzhgOtLD" target="_blank" className="text-gray-300 hover:text-croissant transition-colors duration-200">Podcast</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-croissant transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-croissant transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources/visa-guide" className="text-gray-300 hover:text-croissant transition-colors duration-200">Visa Guide</Link>
              </li>
              <li>
                <Link to="https://www.service-public.fr/particuliers/vosdroits/N20360" target="_blank" className="text-gray-300 hover:text-croissant transition-colors duration-200">Housing Tips</Link>
              </li>
              <li>
                <Link to="https://learnfrenchwithalexa.com/blog" target="_blank" className="text-gray-300 hover:text-croissant transition-colors duration-200">Language Resources</Link>
              </li>
              <li>
                <a
                  href="https://www.studentjob.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-croissant transition-colors duration-200"
                >
                  Student Jobs
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">Get weekly podcast updates and community highlights.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-navy-light text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-croissant hover:bg-croissant-dark px-4 py-2 rounded-r-md transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Croissant & Questions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-croissant transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-croissant transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
