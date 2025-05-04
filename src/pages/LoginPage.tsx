import React from 'react';
import { Construction } from 'lucide-react'; // Using an icon
import pinkBg from '../assets/pink.png'; // Adjust path if needed

const LoginPage = () => {
  return (
    <section
      className="py-16 flex items-center justify-center"
      style={{
        minHeight: 'calc(100vh - 10rem)',
        backgroundImage: `url(${pinkBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <Construction className="h-16 w-16 text-navy mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Coming Soon!</h2>
        <p className="text-lg text-navy-light max-w-xl mx-auto">
          We're working hard to bring you the sign-in and user account features. Stay tuned!
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
