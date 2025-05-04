
import React from 'react';
import { MessageCircle, ThumbsUp, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedQuestions = () => {
  const questions = [
    {
      id: 1,
      title: "How do I navigate the CAF housing assistance application?",
      author: "OddPomegranate1559",
      authorAvatar: "OP",
      replies: 2,
      views: 34,
      votes: 1,
      category: "Housing",
      excerpt: "I'm struggling with the documentation requirements for the CAF housing subsidy. Has anyone successfully completed this process recently?",
      timestamp: "Asked 1 month ago"
    },
    {
      id: 2,
      title: "What is the work culture like in France?",
      author: "Dry_Badger_9042",
      authorAvatar: "DB",
      replies: 1,
      views: 14,
      votes: 2,
      category: "Employment",
      excerpt: "Just curious about the work environment in France. I'm worried about some language barriers actually",
      timestamp: "asked 7hrs ago"
    },
  ];

  const categories = [
    { name: "Housing", color: "bg-blue-100 text-blue-800" },
    { name: "Finance", color: "bg-green-100 text-green-800" },
    { name: "Employment", color: "bg-purple-100 text-purple-800" },
    { name: "Education", color: "bg-yellow-100 text-yellow-800" },
    { name: "Healthcare", color: "bg-red-100 text-red-800" },
    { name: "Culture", color: "bg-indigo-100 text-indigo-800" }
  ];

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-2">Featured Questions</h2>
            <p className="text-navy-light">The most popular discussions in our community</p>
          </div>
          <Link to="/forum" className="mt-4 md:mt-0 inline-flex items-center text-croissant hover:text-croissant-dark font-medium">
            View all questions
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>

        <div className="grid gap-6">
          {questions.map((question) => (
            <div key={question.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-croissant rounded-full flex items-center justify-center text-white font-medium">
                    {question.authorAvatar}
                  </div>
                  <div className="ml-3">
                    <p className="text-navy font-medium">{question.author}</p>
                    <span className="text-sm text-navy-light">{question.timestamp}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(question.category)}`}>
                  {question.category}
                </span>
              </div>
              
              <Link to={`/forum/question/${question.id}`}>
                <h3 className="text-xl font-semibold text-navy mb-2 hover:text-croissant-dark">{question.title}</h3>
              </Link>
              <p className="text-navy-light mb-4">{question.excerpt}</p>
              
              <div className="flex items-center text-sm text-navy-light">
                <div className="flex items-center mr-6">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span>{question.replies} replies</span>
                </div>
                <div className="flex items-center mr-6">
                  <Eye className="w-4 h-4 mr-1" />
                  <span>{question.views} views</span>
                </div>
                <div className="flex items-center">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  <span>{question.votes} votes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedQuestions;
