import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { getCommonServices } from "../data/services";

const ServicesSection: React.FC = () => {
  const commonServices = getCommonServices();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  // Auto-rotate services, but pause on hover
  React.useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % commonServices.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [commonServices.length, isHovering]);

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-300 rounded-full opacity-20 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-5">
        <motion.div 
          // initial={{ opacity: 0, y: 30 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Expert Kidney Care Services
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Dr. Rajdeb Saha delivers specialized nephrology treatments using innovative, 
            evidence-based approaches for optimal kidney health
          </p>
        </motion.div>

        {/* Interactive service showcase */}
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-20">
          {/* Left: Service Carousel */}
          <motion.div 
            className="w-full lg:w-1/2 relative h-96 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative w-full h-full max-w-md mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20, rotateY: -30 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  exit={{ opacity: 0, y: -20, rotateY: 30 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-white rounded-2xl shadow-xl p-8 flex flex-col overflow-hidden"
                  style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      {commonServices[activeIndex].iconPath ? (
                        <img 
                          src={commonServices[activeIndex].imagePath} 
                          alt={commonServices[activeIndex].title} 
                          className="w-8 h-8" 
                        />
                      ) : (
                        <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800">
                      {commonServices[activeIndex].shortTitle}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {commonServices[activeIndex].briefDescription}
                  </p>
                  
                  <ul className="space-y-2 mb-6 flex-grow">
                    {commonServices[activeIndex].symptoms.slice(0, 3).map((symptom, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={`/services/${commonServices[activeIndex].slug}`}
                    className="mt-auto text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2 absolute bottom-4 left-0 right-0">
              {commonServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`View ${commonServices[index].title}`}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Right: Floating Medical Visuals */}
          <motion.div 
            className="w-full lg:w-1/2 relative h-80 lg:h-96"
            // initial={{ opacity: 0, x: 30 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full">
              {/* Moving kidney illustration */}
              <motion.div
                className="absolute w-40 h-40 top-0 left-10"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="https://www.svgrepo.com/show/284209/kidneys-kidney.svg" 
                  alt="Kidney illustration" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              {/* Moving medical chart */}
              <motion.div
                className="absolute w-32 h-32 bottom-10 left-0"
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <img 
                  src="/images/medical-chart.avif" 
                  alt="Medical chart" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              {/* Moving medical symbol */}
              <motion.div
                className="absolute w-24 h-24 top-10 right-20"
                animate={{
                  y: [0, 10, 0],
                  x: [0, 8, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <img 
                  src="/images/medical-symbol.png" 
                  alt="Medical symbol" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              {/* Moving microscope */}
              <motion.div
                className="absolute w-48 h-48 bottom-0 right-0"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <img 
                  src="/images/microscope.webp" 
                  alt="Microscope" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          // initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/services" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium group shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span className="text-lg">Explore All Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;