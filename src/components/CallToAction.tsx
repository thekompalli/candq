
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-navy text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to join the Croissant & Questions community?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Connect with fellow international students, get answers to your questions, and navigate French life with confidence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/register" 
            className="bg-croissant hover:bg-croissant-dark text-white px-8 py-3 rounded-md font-medium transition-colors duration-200"
          >
            Join for Free
          </Link>
          <Link 
            to="/forum" 
            className="bg-transparent hover:bg-white/10 border border-white text-white px-8 py-3 rounded-md font-medium transition-colors duration-200"
          >
            Browse the Forum
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
