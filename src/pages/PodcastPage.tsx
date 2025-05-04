import React from 'react';
import { ExternalLink, Mic } from 'lucide-react';
import greenBg from '../assets/green.png';

const PodcastPage = () => {
  const spotifyUrl = "https://open.spotify.com/show/2FRLx4tCY7fcrJzzhgOtLD";

  return (
    <section 
      className="py-16"
      style={{ 
        backgroundImage: `url(${greenBg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-10 max-w-3xl mx-auto">
          <Mic className="h-16 w-16 text-croissant mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">The Croissant & Questions Podcast</h2>
          <p className="text-lg text-navy-light max-w-2xl mx-auto mb-8">
            Listen to our weekly conversations with experts sharing valuable insights and practical advice for international students in France. Available now on Spotify!
          </p>
          
          <a 
            href={spotifyUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1DB954] hover:bg-[#1ed760] transition-colors duration-300"
          >
            Listen on Spotify
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>

          <p className="text-sm text-navy-light mt-4">
            You will be redirected to Spotify.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PodcastPage;