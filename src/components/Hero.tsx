import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Headphones } from 'lucide-react';
import goldBg from '../assets/cherry.png';
import cherryl from '../assets/cherry-l.png';   

const Hero = () => {
  return (
    <section className="py-20" style={{ backgroundImage: `url(${cherryl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
              Buttery-smooth advice for international students in France
            </h1>
            <p className="text-lg md:text-xl text-navy-light mb-8">
              Join our community forum and weekly podcast where real experts answer your juiciest "How do I survive French life?" questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/forum" 
                className="bg-blue-500 hover:bg-navy-600 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center sm:justify-start transition-colors duration-200"
              >
                <Users className="mr-2 h-5 w-5" />
                Join the Community
              </Link>
              <Link 
                to="/podcast" 
                className="bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-md font-medium flex items-center justify-center sm:justify-start transition-colors duration-200"
              >
                <Headphones className="mr-2 h-5 w-5" />
                Listen to the Podcast
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <div 
                className="w-full h-64 md:h-80 rounded-lg shadow-lg flex items-center justify-center"
                style={{ backgroundImage: `url(${goldBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">Think Reddit-style Q&A</h3>
                  <p className="text-lg">But with croissant crumbs and legit advice</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy text-white p-4 rounded-lg shadow-lg">
                <p className="font-medium">Weekly expert interviews with:</p>
                <ul className="mt-2">
                  <li className="flex items-center">→ Legal advisors</li>
                  <li className="flex items-center">→ University alumni</li>
                  <li className="flex items-center">→ Career coaches</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;