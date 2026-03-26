import React, { useState } from "react";
import { motion } from 'framer-motion';

const Media: React.FC = () => {
  // State for active tab (Photos or Videos)
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  } as any;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any }
    }
  } as any;

  // Sample photo data (placeholders)
  const photos = [
    { id: 1, title: "Dr. Saha with patients", category: "Clinical" },
    { id: 2, title: "Conference presentation", category: "Professional" },
    { id: 3, title: "Hospital facility", category: "Facilities" },
    { id: 4, title: "Kidney awareness camp", category: "Community" },
    { id: 5, title: "Medical team", category: "Professional" },
    { id: 6, title: "Advanced treatment equipment", category: "Facilities" },
    { id: 7, title: "Patient success story", category: "Clinical" },
    { id: 8, title: "International medical conference", category: "Professional" },
  ];

  // Sample video data (placeholders)
  const videos = [
    { id: 1, title: "Understanding Kidney Disease", duration: "5:32", category: "Educational" },
    { id: 2, title: "Patient Testimonial - Rajesh Kumar", duration: "3:45", category: "Testimonial" },
    { id: 3, title: "Advancements in Nephrology", duration: "8:12", category: "Educational" },
    { id: 4, title: "Tour of Our Facilities", duration: "4:20", category: "Facilities" },
    { id: 5, title: "Interview with Dr. Saha", duration: "12:08", category: "Professional" },
    { id: 6, title: "Kidney Health Awareness", duration: "6:15", category: "Educational" },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-900 py-16 md:py-24">
        <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800 opacity-20 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-700 opacity-20 rounded-tr-full"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Media Gallery</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Explore photos and videos showcasing Dr. Rajdeb Saha's clinical practice, 
            educational content, and commitment to kidney health.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex border-b border-blue-200">
          <button
            onClick={() => setActiveTab('photos')}
            className={`px-6 py-3 font-medium text-lg mr-4 ${
              activeTab === 'photos'
                ? 'text-blue-700 border-b-2 border-blue-700'
                : 'text-blue-500 hover:text-blue-700'
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-6 py-3 font-medium text-lg ${
              activeTab === 'videos'
                ? 'text-blue-700 border-b-2 border-blue-700'
                : 'text-blue-500 hover:text-blue-700'
            }`}
          >
            Videos
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'photos' ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {photos.map((photo) => (
              <motion.div
                key={photo.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="aspect-w-16 aspect-h-9 bg-blue-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">Photo placeholder</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg text-blue-800">{photo.title}</h3>
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                    {photo.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {videos.map((video) => (
              <motion.div
                key={video.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="aspect-w-16 aspect-h-9 bg-blue-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-16 h-16 mx-auto text-blue-500 opacity-80" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                        </svg>
                        <span className="block mt-2 text-blue-600 font-medium">Video placeholder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-lg text-blue-800">{video.title}</h3>
                    <span className="text-blue-500 text-sm">{video.duration}</span>
                  </div>
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                    {video.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Upload/Share CTA Section */}
      <div className="bg-blue-50 py-12 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
            Share Your Experience with Dr. Rajdeb Saha
          </h2>
          <p className="text-blue-600 mb-8 max-w-2xl mx-auto">
            If you're a patient or colleague who would like to share your photos, videos, or testimonials,
            please contact our media team.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all font-medium shadow-md">
            Contact Media Team
          </button>
        </div>
      </div>

      {/* Media Categories */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-8 text-center">
          Media Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Clinical', 'Educational', 'Testimonials', 'Professional'].map((category) => (
            <div key={category} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-500">
              <h3 className="text-xl font-medium text-blue-700 mb-3">{category}</h3>
              <p className="text-blue-600">
                Browse {category.toLowerCase()} media related to Dr. Rajdeb Saha's nephrology practice.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;