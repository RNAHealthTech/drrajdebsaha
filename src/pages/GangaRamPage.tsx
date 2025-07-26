import React from 'react';
import { motion } from 'framer-motion';

const GangaRamPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Hero Section */}
      <motion.div
        className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-r from-red-800 via-orange-700 to-red-900 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-red-600 opacity-20"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute left-1/4 -bottom-32 w-96 h-96 rounded-full bg-orange-500 opacity-15"
          animate={{ scale: [1.2, 1, 1.2], rotate: [10, 0, 10] }}
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
            Best <span className="text-orange-200">Kidney Doctor</span> at Sir Ganga Ram Hospital
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-center max-w-4xl mb-6"
            variants={itemVariants}
          >
            Dr. Rajdeb Saha - Premier Nephrology Care at Delhi's Leading Hospital
          </motion.p>
          <motion.div 
            className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center"
            variants={itemVariants}
          >
            <p className="text-lg font-medium">🏥 Sir Ganga Ram Hospital Nephrology Department</p>
            <p className="text-base mt-2">📧 rajdeb@live.com | 🩺 Expert Nephrologist | 🌟 Karol Bagh, New Delhi</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Why Choose Dr. Rajdeb Saha at SGRH */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Top <span className="text-red-600">Nephrologist</span> at Sir Ganga Ram Hospital
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced kidney care at one of Delhi's most trusted hospitals with state-of-the-art facilities and personalized treatment approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "🏥",
                title: "Sir Ganga Ram Hospital Excellence",
                description: "Practice at Delhi's premier multi-specialty hospital known for world-class medical care and advanced technology"
              },
              {
                icon: "🎓",
                title: "MD, DM Nephrology Expert",
                description: "Highly qualified nephrologist with specialized training in kidney diseases, dialysis, and transplant medicine"
              },
              {
                icon: "🔬",
                title: "Advanced SGRH Facilities",
                description: "Access to cutting-edge diagnostics, modern dialysis units, and comprehensive kidney care infrastructure"
              },
              {
                icon: "💉",
                title: "Kidney Transplant Specialist",
                description: "Expert in pre-transplant evaluation, post-transplant care, and immunosuppressive management at SGRH"
              },
              {
                icon: "⚡",
                title: "Emergency Kidney Care",
                description: "24/7 emergency nephrology services for acute kidney conditions at Sir Ganga Ram Hospital"
              },
              {
                icon: "🏆",
                title: "SGRH Quality Standards",
                description: "Adherence to international quality protocols and patient safety standards of Sir Ganga Ram Hospital"
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

        {/* Kidney Services at SGRH */}
        <motion.section 
          className="mb-16 bg-white rounded-2xl shadow-xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            <span className="text-red-600">Kidney Treatments</span> at Sir Ganga Ram Hospital
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🚨 Emergency Kidney Care</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div><strong>Acute Kidney Failure</strong> - 24/7 emergency care and intensive monitoring</div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div><strong>Kidney Stone Treatment</strong> - ESWL, PCNL, and advanced lithotripsy</div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div><strong>Dialysis Services</strong> - Hemodialysis and peritoneal dialysis at SGRH</div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div><strong>Kidney Infections</strong> - Advanced antibiotic therapy and management</div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">⚕️ Chronic Kidney Diseases</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div><strong>CKD Management</strong> - Comprehensive chronic kidney disease care</div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div><strong>Diabetic Nephropathy</strong> - Specialized diabetes kidney complication care</div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div><strong>Kidney Transplant</strong> - Pre and post-transplant care at SGRH</div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div><strong>Hypertension Nephrology</strong> - High BP related kidney damage treatment</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-red-50 rounded-xl">
            <h4 className="text-xl font-bold text-red-800 mb-3">🏥 Sir Ganga Ram Hospital Kidney Department</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 mb-4">
              <div>• Modern Dialysis Units</div>
              <div>• 24/7 Nephrology Emergency</div>
              <div>• Advanced Kidney Imaging</div>
              <div>• Transplant Surgery Center</div>
              <div>• Interventional Nephrology</div>
              <div>• Pediatric Kidney Care</div>
            </div>
            <div className="text-center">
              <a
                href="mailto:rajdeb@live.com"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium inline-block"
              >
                Book SGRH Consultation
              </a>
            </div>
          </div>
        </motion.section>

        {/* SGRH Facilities */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            <span className="text-red-600">World-Class</span> Kidney Care Facilities
          </h2>

          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl text-white p-8 md:p-12 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold mb-3">SGRH Infrastructure</h3>
                <p className="text-red-100">State-of-the-art nephrology department with modern equipment and dedicated kidney care units</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-3">Advanced Diagnostics</h3>
                <p className="text-red-100">Comprehensive kidney function tests, imaging, and specialized nephrology investigations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">👨‍⚕️</div>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-red-100">Multidisciplinary approach with nephrologists, surgeons, and support staff</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🏥 SGRH Nephrology Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Kidney Biopsy and Histopathology</li>
                <li>• Plasmapheresis and Immunoadsorption</li>
                <li>• Continuous Renal Replacement Therapy</li>
                <li>• AV Fistula Creation and Maintenance</li>
                <li>• Kidney Transplant Evaluation</li>
                <li>• Genetic Kidney Disease Testing</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">📍 Sir Ganga Ram Hospital Location</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Karol Bagh, New Delhi</li>
                <li>• Metro: Karol Bagh Station</li>
                <li>• Easy access from Central Delhi</li>
                <li>• Parking facilities available</li>
                <li>• International patient services</li>
                <li>• Insurance and TPA accepted</li>
              </ul>
              <div className="mt-4">
                <a
                  href="mailto:rajdeb@live.com"
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors block text-center"
                >
                  Schedule SGRH Appointment
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          className="mb-16 bg-white rounded-2xl shadow-xl p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Sir Ganga Ram Hospital <span className="text-red-600">Kidney Care FAQ</span>
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How to book appointment with kidney doctor at Sir Ganga Ram Hospital?",
                answer: "Contact Dr. Rajdeb Saha directly at rajdeb@live.com for prompt appointment scheduling. Emergency cases are seen immediately at SGRH nephrology department."
              },
              {
                question: "What kidney treatments are available at SGRH?",
                answer: "Complete range including dialysis, kidney transplant, stone treatment, acute kidney failure management, and all chronic kidney disease care with advanced SGRH facilities."
              },
              {
                question: "Does Sir Ganga Ram Hospital accept insurance for kidney treatment?",
                answer: "Yes, SGRH accepts most insurance plans and TPA arrangements. Cashless treatment options available for kidney procedures and dialysis."
              },
              {
                question: "Is emergency kidney care available 24/7 at SGRH?",
                answer: "Absolutely. Sir Ganga Ram Hospital provides round-the-clock emergency nephrology services with immediate access to dialysis and intensive care."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="bg-gradient-to-r from-red-700 to-orange-700 rounded-2xl text-white p-8 md:p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Expert Kidney Care at Sir Ganga Ram Hospital
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Trust Delhi's leading hospital for your kidney health. Dr. Rajdeb Saha provides comprehensive nephrology care with SGRH's world-class facilities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">📧 Direct Contact</h3>
              <p className="text-red-100">Email: rajdeb@live.com<br/>Sir Ganga Ram Hospital<br/>Nephrology Department</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">🏥 Hospital Location</h3>
              <p className="text-red-100">Karol Bagh, New Delhi<br/>Metro Connected<br/>International Standards</p>
            </div>
          </div>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" whileHover={{ scale: 1.05 }}>
            <a
              href="mailto:rajdeb@live.com"
              className="px-8 py-4 bg-white text-red-700 rounded-lg font-bold hover:bg-red-50 transition-all duration-300 shadow-lg"
            >
              Book SGRH Consultation
            </a>
          </motion.div>

          <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
            <p className="text-sm text-red-100">
              <strong>SGRH Benefits:</strong> 24/7 Emergency Care • Advanced Dialysis Units • Kidney Transplant Center • Insurance Accepted
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default GangaRamPage;