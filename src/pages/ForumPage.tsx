import React from 'react';
import { ExternalLink } from 'lucide-react';
import pinkBg from '../assets/pink.png';

const ForumPage = () => {
  const redditUrl = "https://www.reddit.com/r/CroissantAndQuestions/";

  return (
    <div className="min-h-screen">
      {/* Main section with pink background image */}
      <section 
        className="py-16 flex items-center justify-center"
        style={{
          backgroundImage: `url(${pinkBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '70vh'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Join the Community Forum</h2>
            <p className="text-lg text-navy-light max-w-2xl mx-auto mb-8">
              Our community forum is hosted on Reddit! It's the perfect place to ask questions, share experiences, and connect with fellow international students in France.
            </p>
            
            <a 
              href={redditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-croissant hover:bg-croissant-dark transition-colors duration-300"
            >
              Go to r/CroissantAndQuestions
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            
            <p className="text-sm text-navy-light mt-4">
              You will be redirected to Reddit.
            </p>
          </div>
        </div>
      </section>

      {/* Popular topics section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Popular Topics on Our Forum</h2>
            <p className="text-lg text-navy-light max-w-2xl mx-auto">
              Explore what the community is discussing and find answers to your questions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Housing category */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Housing
                </span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Finding Accommodation</h3>
              <p className="text-navy-light mb-4">
                Tips for finding apartments, understanding leases, CAF applications, and navigating the French housing market.
              </p>
              <a 
                href="https://www.reddit.com/r/CroissantAndQuestions/search?q=flair%3AHousing&restrict_sr=on" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-croissant hover:text-croissant-dark font-medium inline-flex items-center"
              >
                Browse Housing Topics
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            {/* Education category */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                  Education
                </span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">University Life</h3>
              <p className="text-navy-light mb-4">
                Discussions about enrollment, course selection, dealing with professors, and academic expectations in France.
              </p>
              <a 
                href="https://www.reddit.com/r/CroissantAndQuestions/search?q=flair%3AEducation&restrict_sr=on" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-croissant hover:text-croissant-dark font-medium inline-flex items-center"
              >
                Browse Education Topics
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            {/* Culture category */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-3">
                <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                  Culture
                </span>
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Cultural Integration</h3>
              <p className="text-navy-light mb-4">
                Tips for understanding French social norms, making friends, language learning, and enjoying local cuisine.
              </p>
              <a 
                href="https://www.reddit.com/r/CroissantAndQuestions/search?q=flair%3ACulture&restrict_sr=on" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-croissant hover:text-croissant-dark font-medium inline-flex items-center"
              >
                Browse Culture Topics
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForumPage;