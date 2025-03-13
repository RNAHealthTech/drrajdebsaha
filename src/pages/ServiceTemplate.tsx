import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getServiceBySlug, Service } from '../data/services';
import { ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  out: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const ServiceTemplate: React.FC = () => {
  
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    if (slug) {
      const serviceData = getServiceBySlug(slug);
      if (serviceData) {
        setService(serviceData);
      } else {
        // Redirect to services page if service not found
        navigate('/services');
      }
    }
    setIsLoading(false);
  }, [slug, navigate]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  if (!service) {
    return null;
  }

  return (
    <motion.div
      className="pt-20 pb-16"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
              <p className="text-lg text-blue-100 mb-6">{service.briefDescription}</p>
              <a 
                href="/appointment" 
                className="inline-flex items-center px-6 py-3 bg-white text-blue-800 rounded-md hover:bg-blue-50 transition-colors duration-300 font-medium"
              >
                Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="md:w-5/12">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={service.imagePath} 
                  alt={service.title} 
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content - Main Description */}
          <div className="lg:w-2/3">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">About {service.title}</h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">{service.fullDescription}</p>
              
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Key Characteristics</h3>
              <div className="grid md:grid-cols-1 gap-6 mb-8">
                {service.traits.map((trait, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                      {trait.title}
                    </h4>
                    <p className="text-gray-700">{trait.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-blue-700 mb-4">Treatment Approach</h3>
              <p className="text-gray-700 mb-6">
                Dr. Rajdeb Saha takes a comprehensive approach to treating {service.title}, combining the latest 
                evidence-based medicine with personalized care plans tailored to each patient's unique needs. Treatment 
                may include medication management, lifestyle modifications, and regular monitoring to ensure optimal outcomes.
              </p>
              
              <div className="bg-blue-700 text-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4">Schedule a Consultation</h3>
                <p className="mb-4">
                  If you're experiencing symptoms or have concerns about {service.title}, don't hesitate to schedule 
                  a consultation with Dr. Rajdeb Saha. Early intervention is key to achieving the best possible outcomes.
                </p>
                <a 
                  href="/appointment" 
                  className="inline-flex items-center px-5 py-2 bg-white text-blue-800 rounded-md hover:bg-blue-50 transition-colors duration-300 font-medium"
                >
                  Book Appointment <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Sidebar - Symptoms and Related Info */}
          <div className="lg:w-1/3">
            {/* Symptoms Card */}
            <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 mb-8 sticky top-24">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-blue-600" />
                Common Symptoms
              </h3>
              <ul className="space-y-3">
                {service.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2"></span>
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-blue-800 mb-3">When to Seek Medical Help</h4>
                <p className="text-gray-700 text-sm mb-4">
                  Contact Dr. Rajdeb Saha immediately if you're experiencing severe symptoms or rapid worsening of your condition. 
                  Early intervention is crucial for preventing complications.
                </p>
                <a 
                  href="/contact" 
                  className="text-blue-700 hover:text-blue-900 font-medium flex items-center text-sm"
                >
                  Emergency Contact Information
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
            
        </div>
        </div>
      </div>
      
      {/* Related Services Section */}
      <div className="bg-gray-50 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center">Related Services</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* This would ideally be populated with related services dynamically */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/services/ckd.jpg" 
                  alt="Chronic Kidney Disease" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Chronic Kidney Disease</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">Progressive loss of kidney function requiring specialized management.</p>
                <a 
                  href="/services/ckd" 
                  className="text-blue-700 hover:text-blue-900 font-medium flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/services/hypertension.jpg" 
                  alt="Hypertension Management" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Hypertension Management</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">Specialized treatment for high blood pressure affecting kidney health.</p>
                <a 
                  href="/services/hypertension" 
                  className="text-blue-700 hover:text-blue-900 font-medium flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/images/services/electrolyte.jpg" 
                  alt="Electrolyte Imbalance" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Electrolyte Imbalance</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">Abnormal levels of essential minerals in the blood requiring specialized correction.</p>
                <a 
                  href="/services/electrolyte-imbalance" 
                  className="text-blue-700 hover:text-blue-900 font-medium flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-5">
          <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Dr. Rajdeb Saha provides personalized care for patients with {service.title}. 
            Schedule your consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/appointment" 
              className="px-8 py-3 bg-white text-blue-800 rounded-md hover:bg-blue-50 transition-colors duration-300 font-medium"
            >
              Book Appointment
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-blue-700 text-white rounded-md border border-blue-400 hover:bg-blue-800 transition-colors duration-300 font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceTemplate;