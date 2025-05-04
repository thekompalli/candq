
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './components/About'; // Import the About component
import ForumPage from './pages/ForumPage'; // Import the Forum page component
import PodcastPage from './pages/PodcastPage'; // Import the Podcast page component
import LoginPage from './pages/LoginPage'; // Import the Login page component
import ContactPage from './pages/ContactPage'; // Import the Contact page component
import NotFound from './pages/NotFound';
import { Toaster } from "@/components/ui/sonner" // Import Toaster
import pinkBackground from '@/assets/pink.png'; // Import the background image
import './App.css';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';

function App() {
  // Define the image background style
  const backgroundStyle = {
    backgroundImage: `url(${pinkBackground})`,
    backgroundSize: 'cover', // Cover the entire area
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Do not repeat the image
    // Optional: Add backgroundAttachment: 'fixed' if you want it to stay fixed during scroll
  };

  return (
    <Router>
      {/* Apply gradient to the main container */}
      <div className="flex flex-col min-h-screen" style={backgroundStyle}> 
        <Navigation />
        <main className="flex-grow bg-transparent"> {/* Ensure main content area doesn't override gradient */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} /> {/* Add the route for the About page */}
            <Route path="/forum" element={<ForumPage />} /> {/* Add the route for the Forum page */}
            <Route path="/podcast" element={<PodcastPage />} /> {/* Add the route for the Podcast page */}
            <Route path="/login" element={<LoginPage />} /> {/* Add the route for the Login page */}
            <Route path="/contact" element={<ContactPage />} /> {/* Add the route for the Contact page */}
            <Route path="/privacy" element={<PrivacyPolicyPage/>} /> {/* Add the route for the Not Found page */}
            <Route path="/terms" element={<TermsAndConditionsPage />} /> {/* Add the route for the Not Found page */}
            {/* Add additional routes as they are developed */}
            <Route path="*" element={<NotFound />} />
            
          </Routes>
        </main>
        <Footer />
        <Toaster richColors /> {/* Add Toaster component here */}
      </div>
    </Router>
  );
}

export default App;
