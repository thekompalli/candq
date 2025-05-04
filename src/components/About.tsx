import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
// Import team member images and background
import feiyangImg from '../assets/feiyang.jpg';
import isabelleImg from '../assets/Isabelle.jpg';
import meImg from '../assets/me.JPG';
import satvikImg from '../assets/satvik.jpg';
import sreemanthImg from '../assets/sreemanth.jpg';
import blueBg from '../assets/blue.png';

const TeamPage = () => {
  // Team members with their roles
  const teamMembers = [
    { 
      id: 1, 
      name: "Krishna Kompalli", 
      role: "Community Manager", 
      avatar: meImg,
      bgColor: "bg-blue-100"
    },
    { 
      id: 2, 
      name: "Feiyang XU", 
      role: "Content Creator", 
      avatar: feiyangImg,
      bgColor: "bg-croissant-light" 
    },
    { 
      id: 3, 
      name: "Hangjing Xie", 
      role: "Student Ambassador", 
      avatar: isabelleImg,
      bgColor: "bg-purple-100"
    },
    { 
      id: 4, 
      name: "Sreemanth", 
      role: "Technical Support", 
      avatar: sreemanthImg,
      bgColor: "bg-green-100"
    },
    { 
      id: 5, 
      name: "Satvik Reddy", 
      role: "Podcast Host", 
      avatar: satvikImg,
      bgColor: "bg-red-100"
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Vision Section with Blue Background */}
      <section 
        className="py-16"
        style={{ 
          backgroundImage: `url(${blueBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">Our vision</h2>
            <p className="text-navy-light mb-4 max-w-3xl mx-auto">
              We help international students navigate life in France through community-driven
              support and expert advice. Join our platform to connect with peers and access
              resources that make your French experience smoother.
            </p>
            <p className="text-navy-light max-w-3xl mx-auto">
              Meet the best student support community today.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">The dream team</h2>
            <p className="text-lg text-navy-light max-w-2xl mx-auto">
              We have spent years building communities, creating content, and helping students
              navigate French bureaucracy, academia, and culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
                <div className="relative w-40 h-40 mb-4">
                  <div className={`absolute ${member.bgColor} w-32 h-32 rounded-full top-4 left-4`}></div>
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="absolute z-10 w-40 h-40 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy">{member.name}</h3>
                <p className="text-navy-light mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-navy hover:text-croissant transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="text-navy hover:text-croissant transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-navy hover:text-croissant transition-colors">
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-navy to-croissant-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join our community today</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Whether you're preparing for your arrival in France, navigating your first semester,
            or looking to connect with fellow international students, we're here to help you thrive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/forum" 
              className="bg-white text-navy hover:bg-cream transition-colors duration-200 px-8 py-3 rounded-md font-medium inline-block"
            >
              Join the Forum
            </a>
            <a 
              href="/podcast" 
              className="border border-white text-white hover:bg-white/10 transition-colors duration-200 px-8 py-3 rounded-md font-medium inline-block"
            >
              Listen to the Podcast
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;