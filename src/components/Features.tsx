
import React from 'react';
import { MessageSquare, Headphones, Globe, BookOpen, Coffee, Building } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-croissant" />,
      title: "Community Forum",
      description: "Ask questions, share experiences, and connect with fellow international students navigating life in France."
    },
    {
      icon: <Headphones className="h-10 w-10 text-croissant" />,
      title: "Weekly Podcast",
      description: "Listen to interviews with experts providing practical advice on visas, housing, education, and culture."
    },
    {
      icon: <Globe className="h-10 w-10 text-croissant" />,
      title: "Cultural Insights",
      description: "Discover the nuances of French culture, customs, and social norms to help you integrate more smoothly."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-croissant" />,
      title: "Resource Library",
      description: "Access guides, templates, and documents to help with bureaucratic processes and academic requirements."
    },
    {
      icon: <Coffee className="h-10 w-10 text-croissant" />,
      title: "Meetup Events",
      description: "Join regular in-person and virtual gatherings to build your network and make new friends."
    },
    {
      icon: <Building className="h-10 w-10 text-croissant" />,
      title: "University Guides",
      description: "Institution-specific advice and insider tips from current students and alumni."
    }
  ];

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How We Help You Thrive</h2>
          <p className="text-lg text-navy-light max-w-2xl mx-auto">
            Everything you need to navigate your student journey in France, all in one buttery-smooth platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-navy mb-2">{feature.title}</h3>
              <p className="text-navy-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
