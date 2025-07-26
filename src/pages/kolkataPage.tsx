import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KolkataPage: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <motion.div
        className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-r from-blue-800 via-teal-700 to-green-800 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-blue-600 opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute left-1/4 -bottom-32 w-96 h-96 rounded-full bg-teal-500 opacity-15"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [10, 0, 10],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        />

        <motion.div
          className="absolute z-20 inset-0 flex flex-col justify-center items-center text-white p-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-tight mb-4"
            variants={itemVariants}
          >
            Best <span className="text-blue-200">Kidney Doctor</span> in Kolkata
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-center max-w-4xl mb-6"
            variants={itemVariants}
          >
            Dr. Rajdeb Saha - Premier Nephrology Care in the City of Joy
          </motion.p>
          <motion.div 
            className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center"
            variants={itemVariants}
          >
            <p className="text-lg font-medium">🏥 Advanced Kidney Care for Kolkata & West Bengal</p>
            <p className="text-base mt-2">📧 rajdeb@live.com | 🩺 Expert Nephrologist | 🌟 Trusted by Thousands</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Why Choose Dr. Rajdeb Saha in Kolkata */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Dr. Rajdeb Saha in <span className="text-blue-600">Kolkata</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bringing world-class nephrology expertise to Kolkata with personalized care and advanced treatment options for all kidney-related conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "🎓",
                title: "Advanced Medical Training",
                description: "MD, DM (Nephrology) with specialized expertise in complex kidney disorders and interventional nephrology procedures"
              },
              {
                icon: "🏥",
                title: "Comprehensive Kidney Care",
                description: "Complete spectrum of services from early detection to dialysis management and transplant coordination"
              },
              {
                icon: "💉",
                title: "Advanced Procedures",
                description: "Expert in kidney biopsies, dialysis access procedures, and minimally invasive interventional nephrology"
              },
              {
                icon: "🔬",
                title: "Precision Diagnostics",
                description: "State-of-the-art diagnostic capabilities for accurate kidney function assessment and disease monitoring"
              },
              {
                icon: "🗣️",
                title: "Multilingual Consultation",
                description: "Consultations available in Bengali, Hindi, English ensuring clear communication and understanding"
              },
              {
                icon: "💚",
                title: "Patient-Centric Approach",
                description: "Personalized treatment plans considering individual health needs, lifestyle, and financial considerations"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Kidney Conditions We Treat */}
        <motion.section 
          className="mb-16 bg-white rounded-2xl shadow-xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            <span className="text-blue-600">Kidney Conditions</span> We Specialize In
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🚨 Acute Kidney Problems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Acute Kidney Injury (AKI)</strong> - Sudden loss of kidney function requiring immediate intervention
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Kidney Stone Disease</strong> - Comprehensive management including prevention strategies
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Severe UTI & Kidney Infections</strong> - Advanced treatment for complicated urinary infections
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Glomerulonephritis</strong> - Inflammation of kidney filtering units requiring specialized care
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">⚕️ Chronic Kidney Diseases</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Diabetic Kidney Disease</strong> - Specialized care for diabetes-related kidney complications
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Chronic Kidney Disease (CKD)</strong> - Progressive kidney function decline management
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Hypertensive Nephropathy</strong> - High blood pressure causing kidney damage
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Polycystic Kidney Disease</strong> - Genetic kidney disorder requiring specialized monitoring
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl">
            <h4 className="text-xl font-bold text-blue-800 mb-3">🩺 When to Consult a Kidney Specialist</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
              <div>• Blood in urine (hematuria)</div>
              <div>• Persistent swelling in legs or face</div>
              <div>• Unexplained fatigue and weakness</div>
              <div>• Difficulty controlling blood pressure</div>
              <div>• Foamy or frothy urine</div>
              <div>• Reduced urine output</div>
            </div>
            <div className="text-center">
              <a
                href="mailto:rajdeb@live.com"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-block"
              >
                Schedule Expert Consultation
              </a>
            </div>
          </div>
        </motion.section>

        {/* Our Services */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-blue-600">Specialized Services</span>
          </h2>

          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl text-white p-8 md:p-12 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-3">Advanced Diagnostics</h3>
                <p className="text-blue-100">
                  Comprehensive kidney function assessment, imaging studies, and specialized laboratory investigations
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💊</div>
                <h3 className="text-xl font-bold mb-3">Medical Management</h3>
                <p className="text-blue-100">
                  Evidence-based treatment protocols tailored to individual patient needs and disease progression
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">Preventive Care</h3>
                <p className="text-blue-100">
                  Early intervention strategies and lifestyle modifications to prevent kidney disease progression
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🏥 Advanced Procedures</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Kidney Biopsy - Tissue diagnosis for complex kidney diseases</li>
                <li>• Dialysis Access Creation - AV fistula and graft procedures</li>
                <li>• Peritoneal Dialysis Catheter Placement</li>
                <li>• Interventional Nephrology Procedures</li>
                <li>• Pre-transplant Evaluation and Counseling</li>
                <li>• Post-transplant Care and Monitoring</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Our Expertise</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Same-day consultation availability</li>
                <li>• Comprehensive health screening programs</li>
                <li>• Multidisciplinary care coordination</li>
                <li>• Nutritional counseling for kidney health</li>
                <li>• 24/7 emergency guidance support</li>
                <li>• Insurance and cashless treatment assistance</li>
              </ul>
              <div className="mt-4">
                <a
                  href="mailto:rajdeb@live.com"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors block text-center"
                >
                  Book Your Consultation
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Kolkata-Specific Care */}
        <motion.section 
          className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Specialized Care for <span className="text-blue-600">Kolkata Patients</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-4">🏙️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Urban Health Factors</h3>
              <p className="text-gray-600">
                Understanding Kolkata's unique environmental and lifestyle factors that affect kidney health, including water quality and urban pollution effects.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Hospital Network</h3>
              <p className="text-gray-600">
                Direct coordination with leading hospitals in Kolkata for seamless care delivery and emergency interventions when required.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cultural Sensitivity</h3>
              <p className="text-gray-600">
                Respecting Bengali culture and traditions while providing modern medical care, ensuring comfort and understanding for all patients.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">🏥 Serving Greater Kolkata Area</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700">
              <div>• Central Kolkata</div>
              <div>• South Kolkata</div>
              <div>• North Kolkata</div>
              <div>• East Kolkata</div>
              <div>• Salt Lake</div>
              <div>• New Town</div>
              <div>• Howrah</div>
              <div>• Surrounding Districts</div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              {[
                {
                  question: "What kidney conditions does Dr. Rajdeb Saha treat in Kolkata?",
                  answer: "Dr. Saha treats all kidney-related conditions including acute kidney injury, chronic kidney disease, diabetic nephropathy, kidney stones, glomerulonephritis, and provides comprehensive dialysis and transplant care."
                },
                {
                  question: "What should I bring for my first consultation?",
                  answer: "Please bring recent blood and urine test reports, current medication list, medical history, and any previous kidney-related investigations. If you have diabetes or hypertension, bring those reports as well."
                },
                {
                  question: "Do you provide kidney transplant services?",
                  answer: "Yes, Dr. Saha provides complete pre-transplant evaluation, donor compatibility testing, and comprehensive long-term post-transplant care and monitoring."
                },
                {
                  question: "Are consultations available in Bengali?",
                  answer: "Absolutely. Dr. Saha provides consultations in Bengali, Hindi, and English to ensure clear communication and better understanding of your condition and treatment options."
                },
                {
                  question: "How quickly can I get an appointment in Kolkata?",
                  answer: "We offer same-day consultation for urgent cases. For routine appointments, please email rajdeb@live.com with your details and preferred timing for prompt scheduling."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="bg-gradient-to-r from-blue-700 to-teal-700 rounded-2xl text-white p-8 md:p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Kidney Health is Our Priority
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't let kidney problems control your life. Consult with Dr. Rajdeb Saha today and take the first step towards better kidney health and improved quality of life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">📧 Contact Information</h3>
              <p className="text-blue-100">Email: rajdeb@live.com<br/>Expert Kidney Care for Kolkata<br/>& Greater West Bengal Region</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">🏥 Service Areas</h3>
              <p className="text-blue-100">Central Kolkata, South Kolkata<br/>Salt Lake, New Town, Howrah<br/>& All West Bengal Districts</p>
            </div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="mailto:rajdeb@live.com"
              className="px-8 py-4 bg-white text-blue-700 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              Schedule Consultation Now
            </a>
            <button
              onClick={() => window.location.href = '/services'}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-700 transition-all duration-300 cursor-pointer"
            >
              View All Services
            </button>
          </motion.div>

          <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
            <p className="text-sm text-blue-100">
              <strong>Special Benefits:</strong> Same-day Consultations • Bengali Language Support • Insurance Accepted • Cashless Treatment Options
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default KolkataPage;