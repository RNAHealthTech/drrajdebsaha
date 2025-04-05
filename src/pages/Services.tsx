import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getAllServices, Service } from '../data/services';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      const allServices = getAllServices();
      setServices(allServices);
    };
    
    fetchServices();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-b from-cyan-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mt-20"
      >
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-cyan-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Nephrology Services
          </motion.h1>
          <motion.p 
            className="mt-4 text-xl text-cyan-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Comprehensive kidney care and specialized treatments provided by Dr. Rajdeb Saha
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-cyan-100 hover:border-cyan-300 transition-all duration-300"
              onClick={() => openModal(service)}
            >
              <div className="h-48 bg-cyan-600 relative overflow-hidden">
                {service.imagePath && (
                  <div className="absolute inset-0 bg-cyan-800 bg-opacity-30">
                    <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${service.imagePath})` }}></div>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  {service.iconPath && (
                    <img 
                      src={service.iconPath} 
                      alt={`${service.title} icon`} 
                      className="h-16 w-16"
                    />
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-900 mb-2">{service.title}</h3>
                <p className="text-cyan-700 mb-4">{service.briefDescription}</p>
                <div className="flex justify-between items-center">
                  {service.isCommon && (
                    <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full">
                      Common Condition
                    </span>
                  )}
                  <Link 
                    to={`/services/${service.slug}`}
                    className="text-cyan-600 hover:text-cyan-800 font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Service Detail Modal */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-50 overflow-y-auto ${isModalOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={closeModal}>
              <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
            >
              <div className="relative">
                <div className="h-40 sm:h-56 bg-cyan-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-800 bg-opacity-30">
                    <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${selectedService.imagePath})` }}></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {selectedService.iconPath && (
                      <img 
                        src={selectedService.iconPath} 
                        alt={`${selectedService.title} icon`} 
                        className="h-20 w-20"
                      />
                    )}
                  </div>
                </div>
                
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                >
                  <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-cyan-900 mb-4">{selectedService.title}</h3>
                <p className="text-gray-700 mb-6">{selectedService.fullDescription}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-800 mb-3">Key Characteristics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.traits.map((trait, index) => (
                      <div key={index} className="bg-cyan-50 p-4 rounded-lg">
                        <h5 className="font-medium text-cyan-900">{trait.title}</h5>
                        <p className="text-cyan-700 text-sm mt-1">{trait.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-cyan-800 mb-3">Common Symptoms</h4>
                  <ul className="list-disc pl-5 text-cyan-700 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedService.symptoms.map((symptom, index) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeModal}
                    className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Services;