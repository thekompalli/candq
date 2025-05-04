import React from 'react';
import { Play, Calendar, Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import navyBg from '../assets/navy.png';

const PodcastPreview = () => {
  const latestEpisode = {
    id: "ep43",
    title: "Interning in France – Culture shocks, office life & language gaps",
    guest: "Xiaoting",
    role: "Intern at Sodexo",
    duration: "16 mins",
    date: "May 4, 2025",
    description: "Xiaoting shares honest insights on adapting to French office culture, communicating in multilingual teams, making friends as an intern, and her surreal team-building dinner cruise on the Seine!",
  };

  const upcomingEpisodes = [
    {
      id: "ep44",
      title: "Finding Affordable Housing in Paris",
      guest: "Jean Dupont",
      role: "Housing Specialist",
      date: "May 8, 2025"
    },
    {
      id: "ep45",
      title: "Healthcare Access for International Students",
      guest: "Dr. Camille Lefèvre",
      role: "International Student Health Advisor",
      date: "May 15, 2025"
    },
    {
      id: "ep46",
      title: "Building Your Career Network in France",
      guest: "Alexandre Lambert",
      role: "Career Coach",
      date: "May 22, 2025"
    }
  ];

  return (
    <section className="py-16 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">The Croissant & Questions Podcast</h2>
          <p className="text-lg text-navy-light max-w-2xl mx-auto">
            Weekly conversations with experts who share valuable insights and practical advice for international students in France.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Latest episode */}
          <div className="lg:w-2/3 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <a 
                href="https://open.spotify.com/episode/1eqv7TGhxIEmLFDBEFjEXb?si=vZyrEJ26RguA-TU1euHSdQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="md:w-2/5 flex items-center justify-center p-8"
                style={{ 
                  backgroundImage: `url(${navyBg})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center'
                }}
              >
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors duration-300">
                  <Play className="h-12 w-12 text-white" fill="white" />
                </div>
              </a>
              <div className="md:w-3/5 p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-croissant-light text-croissant-dark text-sm font-medium px-3 py-1 rounded-full">Latest Episode</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">{latestEpisode.title}</h3>
                <div className="mb-4">
                  <p className="text-navy font-medium">with {latestEpisode.guest}</p>
                  <p className="text-navy-light">{latestEpisode.role}</p>
                </div>
                <p className="text-navy-light mb-4">{latestEpisode.description}</p>
                <div className="flex items-center text-navy-light mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="mr-4">{latestEpisode.duration}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{latestEpisode.date}</span>
                </div>
                <a 
                  href="https://open.spotify.com/episode/1eqv7TGhxIEmLFDBEFjEXb?si=vZyrEJ26RguA-TU1euHSdQ" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-croissant hover:text-croissant-dark font-medium"
                >
                  Listen to episode
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Upcoming episodes */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-navy mb-4">Upcoming Episodes</h3>
              <div className="space-y-4">
                {upcomingEpisodes.map((episode, index) => (
                  <div key={episode.id} className={`pb-4 ${index < upcomingEpisodes.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <h4 className="text-navy font-medium mb-1">{episode.title}</h4>
                    <p className="text-navy-light text-sm mb-1">with {episode.guest}, {episode.role}</p>
                    <div className="flex items-center text-sm text-navy-light">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{episode.date}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/podcast" className="mt-6 inline-block text-croissant hover:text-croissant-dark font-medium">
                View all episodes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastPreview;