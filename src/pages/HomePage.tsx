
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FeaturedQuestions from '../components/FeaturedQuestions';
import PodcastPreview from '../components/PodcastPreview';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <FeaturedQuestions />
      <PodcastPreview />
      <CallToAction />
    </div>
  );
};

export default HomePage;
