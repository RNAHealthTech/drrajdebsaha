
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Appointment Modal Component
const AppointmentModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '919561409398';

    const message = `Hello Dr. Rajdeb,\n\nNew appointment request from Delhi page:\nName: ${formData.name}\nPhone: ${formData.phone}\nQuery: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    onClose();
    
    // Reset form
    setFormData({ name: '', phone: '', message: '' });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Book Consultation</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your contact number"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Query *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your kidney-related concerns or symptoms"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book via WhatsApp
            </motion.button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>📱 Quick Booking:</strong> Your details will be sent via WhatsApp for immediate appointment confirmation.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const DelhiPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <motion.div
        className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-purple-600 opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute left-1/4 -bottom-32 w-96 h-96 rounded-full bg-indigo-500 opacity-15"
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
            Delhi's Leading <span className="text-blue-200">Kidney Specialist</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-center max-w-4xl mb-6"
            variants={itemVariants}
          >
            Dr. Rajdeb Saha - Your Trusted Nephrologist at Sir Ganga Ram Hospital
          </motion.p>
          <motion.div 
            className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center"
            variants={itemVariants}
          >
            <p className="text-lg font-medium">🏥 Sir Ganga Ram Hospital | 📍 Rajinder Nagar, New Delhi</p>
            <p className="text-base mt-2">⏰ Mon-Sat: 6:00 PM - 8:00 PM | 📞 Expert Kidney Care Since 2010</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Why Choose Dr. Rajdeb Saha Section */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Dr. Rajdeb Saha for Your <span className="text-blue-600">Kidney Problems?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you're dealing with kidney issues, you need a specialist who combines expertise, compassion, and cutting-edge treatment options. Here's why patients across Delhi trust Dr. Rajdeb Saha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "🎓",
                title: "Top Medical Credentials",
                description: "MD, DM (Nephrology) with specialized training in kidney diseases and transplantation from premier medical institutions"
              },
              {
                icon: "🏥",
                title: "Sir Ganga Ram Hospital",
                description: "Practicing at one of Delhi's most prestigious hospitals with state-of-the-art kidney care facilities and advanced dialysis units"
              },
              {
                icon: "💉",
                title: "Advanced Procedures",
                description: "Expert in interventional nephrology including kidney biopsies, dialysis access procedures, and minimally invasive treatments"
              },
              {
                icon: "🫀",
                title: "Comprehensive Care",
                description: "Complete kidney care from early detection to transplant coordination, managing both acute and chronic kidney conditions"
              },
              {
                icon: "🌍",
                title: "Multilingual Expert",
                description: "Consultations available in English, Hindi, Bengali, Marathi, Nepali, and Kannada for better patient communication"
              },
              {
                icon: "⭐",
                title: "Patient-Centered Approach",
                description: "Personalized treatment plans focusing on your specific needs, lifestyle, and long-term kidney health goals"
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
            Common <span className="text-blue-600">Kidney Problems</span> We Treat in Delhi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🚨 Urgent Kidney Issues</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Sudden kidney failure</strong> - When kidneys stop working quickly
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Blood in urine</strong> - Pink, red, or brown colored urine
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Severe swelling</strong> - Face, legs, or whole body swelling
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Very high blood pressure</strong> - Difficult to control with medicines
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Kidney stones</strong> - Severe pain in back or side
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">⚕️ Long-term Kidney Conditions</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Diabetes kidney damage</strong> - Sugar affecting your kidneys
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Chronic kidney disease</strong> - Gradual loss of kidney function
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Protein in urine</strong> - Foamy or bubbly urine
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Frequent urination problems</strong> - Too much or too little urination
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <strong>Kidney infection</strong> - Pain, fever, burning sensation
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl">
            <h4 className="text-xl font-bold text-blue-800 mb-3">🩺 When Should You See a Kidney Specialist?</h4>
            <p className="text-gray-700 mb-3">
              Don't wait if you experience any of these warning signs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
              <div>• Persistent fatigue and weakness</div>
              <div>• Loss of appetite or nausea</div>
              <div>• Difficulty sleeping</div>
              <div>• Persistent itching</div>
              <div>• Metallic taste in mouth</div>
              <div>• Muscle cramps</div>
            </div>
            <div className="text-center">
              <button
                onClick={openModal}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Expert Opinion Now
              </button>
            </div>
          </div>
        </motion.section>

        {/* Treatment Approach */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-blue-600">Treatment Approach</span>
          </h2>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white p-8 md:p-12 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-3">Accurate Diagnosis</h3>
                <p className="text-blue-100">
                  Advanced testing and imaging to identify the exact cause of your kidney problems
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💊</div>
                <h3 className="text-xl font-bold mb-3">Personalized Treatment</h3>
                <p className="text-blue-100">
                  Customized treatment plans based on your specific condition, lifestyle, and preferences
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">Long-term Care</h3>
                <p className="text-blue-100">
                  Ongoing monitoring and support to prevent complications and maintain kidney health
                </p>
              </div>
            </div>
          </div>

          {/* Specialized Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🏥 Advanced Procedures Available</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Kidney biopsy (tissue examination)</li>
                <li>• Dialysis access creation and maintenance</li>
                <li>• Peritoneal dialysis catheter placement</li>
                <li>• Kidney stone treatment consultation</li>
                <li>• Pre-transplant evaluation</li>
                <li>• Post-transplant care and monitoring</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 What Makes Us Different</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Same-day consultation available</li>
                <li>• Detailed explanation in your language</li>
                <li>• Coordination with other specialists</li>
                <li>• Diet and lifestyle counseling</li>
                <li>• 24/7 emergency guidance</li>
                <li>• Insurance and cashless treatment support</li>
              </ul>
              <div className="mt-4">
                <button
                  onClick={openModal}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Patient Success Stories */}
        <motion.section 
          className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Why Patients Choose Dr. Rajdeb Saha in Delhi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Dr. Saha detected my kidney problem early when other doctors missed it. His timely treatment saved my kidneys from further damage.",
                patient: "Priya S., Gurgaon",
                condition: "Early CKD Detection"
              },
              {
                quote: "I was scared about dialysis, but Dr. Saha explained everything clearly and made the process comfortable. He's not just a doctor, he's a caring human being.",
                patient: "Ramesh K., Delhi",
                condition: "Dialysis Care"
              },
              {
                quote: "My diabetes was affecting my kidneys. Dr. Saha's comprehensive approach helped control both conditions effectively.",
                patient: "Sunita M., Noida",
                condition: "Diabetic Kidney Disease"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-blue-500 text-4xl mb-3">"</div>
                <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.patient}</p>
                  <p className="text-sm text-blue-600">{testimonial.condition}</p>
                </div>
              </motion.div>
            ))}
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
                  question: "How do I know if I need to see a kidney specialist?",
                  answer: "You should consult a nephrologist if you have persistent swelling, blood in urine, high blood pressure that's hard to control, diabetes complications, or if your family doctor recommends it after abnormal kidney function tests."
                },
                {
                  question: "What should I bring to my first appointment?",
                  answer: "Bring all your recent blood and urine test reports, list of current medications, medical history, and any previous kidney-related investigations. If you have diabetes or high blood pressure, bring those records too."
                },
                {
                  question: "Does Dr. Saha treat kidney stones?",
                  answer: "Yes, Dr. Saha provides comprehensive evaluation and medical management of kidney stones. For surgical interventions, he works closely with urologists to ensure complete care."
                },
                {
                  question: "Is kidney transplant consultation available?",
                  answer: "Absolutely. Dr. Saha provides complete pre-transplant evaluation, helps with donor compatibility testing, and offers long-term post-transplant care and monitoring."
                },
                {
                  question: "What are the consultation fees?",
                  answer: "Consultation fees vary based on the complexity of the case. The hospital accepts most insurance plans and offers cashless treatment options. Contact the hospital for current fee structure."
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

        {/* Contact and Appointment Section */}
        <motion.section 
          className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl text-white p-8 md:p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Control of Your Kidney Health?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't let kidney problems control your life. Schedule a consultation with Dr. Rajdeb Saha today and take the first step towards better kidney health.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">📍 Location</h3>
              <p className="text-blue-100">Sir Ganga Ram Hospital<br/>Room 1236, Rajinder Nagar<br/>New Delhi</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">⏰ OPD Hours</h3>
              <p className="text-blue-100">Monday to Saturday<br/>6:00 PM - 8:00 PM<br/>By Appointment</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">📞 Contact</h3>
              <p className="text-blue-100">Email: rajdeb@live.com<br/>Phone: Available via hospital<br/>WhatsApp booking available</p>
            </div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <button
              onClick={openModal}
              className="px-8 py-4 bg-white text-blue-700 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg cursor-pointer"
            >
              Book Your Consultation Now
            </button>
            <button
              onClick={() => window.location.href = '/services'}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-700 transition-all duration-300 cursor-pointer"
            >
              View All Services
            </button>
          </motion.div>
        </motion.section>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default DelhiPage;