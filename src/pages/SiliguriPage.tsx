import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SiliguriPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  } as any;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <motion.div
        className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-r from-green-800 via-teal-700 to-blue-800 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-teal-600 opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute left-1/4 -bottom-32 w-96 h-96 rounded-full bg-green-500 opacity-15"
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
            Best <span className="text-green-200">Kidney Doctor</span> in Siliguri
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-center max-w-4xl mb-6"
            variants={itemVariants}
          >
            Dr. Rajdeb Saha - Serving North Bengal with Expert Nephrology Care
          </motion.p>
          <motion.div 
            className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center"
            variants={itemVariants}
          >
            <p className="text-lg font-medium">🏥 Advanced Kidney Care for Siliguri & North Bengal Region</p>
            <p className="text-base mt-2">📧 rajdeb@live.com | 🩺 Expert Nephrologist | 🌟 Trusted by Thousands</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Why Dr. Rajdeb Saha is Siliguri's Top Choice */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Dr. Rajdeb Saha is <span className="text-green-600">Siliguri's Preferred</span> Kidney Specialist
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When kidney problems affect your life, you need North Bengal's most trusted nephrologist. Dr. Rajdeb Saha brings world-class kidney care to Siliguri and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "🎓",
                title: "Premier Medical Education",
                description: "MD, DM (Nephrology) with specialized training from top medical institutions. Bringing international standards to Siliguri"
              },
              {
                icon: "🏥",
                title: "Advanced Treatment Options",
                description: "State-of-the-art kidney care including dialysis, kidney biopsies, and comprehensive chronic kidney disease management"
              },
              {
                icon: "💉",
                title: "Interventional Nephrology",
                description: "Expert in advanced procedures like dialysis access creation, kidney biopsies, and minimally invasive treatments"
              },
              {
                icon: "🫀",
                title: "Complete Kidney Solutions",
                description: "From early detection to transplant guidance - comprehensive care for all kidney-related conditions"
              },
              {
                icon: "🗣️",
                title: "Local Language Comfort",
                description: "Consultations in Bengali, Hindi, English, Nepali, and other regional languages for better understanding"
              },
              {
                icon: "⭐",
                title: "Patient-First Approach",
                description: "Personalized treatment plans considering your lifestyle, financial situation, and family needs"
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

        {/* Common Kidney Problems in North Bengal */}
        <motion.section 
          className="mb-16 bg-white rounded-2xl shadow-xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            <span className="text-green-600">Kidney Problems</span> Common in Siliguri & North Bengal
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🚨 Emergency Kidney Issues</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Blood in Urine (Hematuria)</strong> - Pink, red, or cola-colored urine
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Acute Kidney Failure</strong> - Sudden loss of kidney function
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Severe Body Swelling</strong> - Face, legs, or whole body swelling
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Kidney Stones</strong> - Severe pain in the back or side
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>Severe Hypertension</strong> - High blood pressure difficult to control
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">⚕️ Chronic Kidney Problems</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <strong>Diabetic Kidney Disease</strong> - Diabetes impacting kidney function
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <strong>Chronic Kidney Disease</strong> - Gradual loss of kidney function over time
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <strong>Protein in Urine</strong> - Foamy or bubbly appearance in urine
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <strong>Urinary Issues</strong> - Passing too much or too little urine
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <strong>Kidney Infections</strong> - Pain, fever, and burning sensation
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-xl">
            <h4 className="text-xl font-bold text-green-800 mb-3">🩺 When to See a Kidney Specialist?</h4>
            <p className="text-gray-700 mb-3">
              Consult a doctor immediately if you notice these symptoms:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
              <div>• Persistent weakness and fatigue</div>
              <div>• Loss of appetite or nausea</div>
              <div>• Difficulty sleeping</div>
              <div>• Persistent skin itching</div>
              <div>• Metallic taste in mouth</div>
              <div>• Muscle cramps</div>
            </div>
            <div className="text-center">
              <a
                href="mailto:rajdeb@live.com"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium inline-block"
              >
                Consult Specialist Now
              </a>
            </div>
          </div>
        </motion.section>

        {/* Treatment Specializations */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our <span className="text-green-600">Specialized Treatments</span>
          </h2>

          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl text-white p-8 md:p-12 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-3">Advanced Diagnostics</h3>
                <p className="text-green-100">
                  Complete kidney function tests, imaging, and specialized investigations for accurate diagnosis
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💊</div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Treatment</h3>
                <p className="text-green-100">
                  From medications to dialysis planning - complete kidney care under one roof
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">Prevention Focus</h3>
                <p className="text-green-100">
                  Early intervention and lifestyle guidance to prevent kidney disease progression
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🏥 Advanced Procedures We Offer</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Kidney Biopsy - Precision tissue diagnosis</li>
                <li>• Dialysis Access Creation - AV fistula and graft</li>
                <li>• Peritoneal Dialysis (PD) Catheter Placement</li>
                <li>• Kidney Stone Management & Counseling</li>
                <li>• Pre-transplant Recipient Evaluation</li>
                <li>• Post-transplant Monitoring & Care</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Our Specializations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Prompt Consultation Availability</li>
                <li>• Explanation in Local & Regional Languages</li>
                <li>• Multi-disciplinary Care Coordination</li>
                <li>• Dietary & Lifestyle Guidance</li>
                <li>• 24/7 Emergency Support Guidance</li>
                <li>• Insurance & Cashless Treatment Assistance</li>
              </ul>
              <div className="mt-4">
                <a
                  href="mailto:rajdeb@live.com"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors block text-center"
                >
                  Contact for Consultation
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Special Focus for Siliguri Patients */}
        <motion.section 
          className="mb-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Special Care for <span className="text-green-600">North Bengal Patients</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Regional Health Concerns</h3>
              <p className="text-gray-600">
                Understanding specific kidney health challenges in North Bengal, including monsoon-related infections and regional dietary factors affecting kidney health.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-4">🚑</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Emergency Coordination</h3>
              <p className="text-gray-600">
                Direct coordination with Siliguri's major hospitals for emergency kidney care, ensuring quick access to advanced treatments when needed.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Affordable Care Options</h3>
              <p className="text-gray-600">
                Understanding local economic considerations, we offer flexible payment options and work with various insurance providers popular in North Bengal.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">🏥 Serving These Areas in North Bengal</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700">
              <div>• Siliguri</div>
              <div>• Jalpaiguri</div>
              <div>• Cooch Behar</div>
              <div>• Alipurduar</div>
              <div>• Darjeeling</div>
              <div>• Kalimpong</div>
              <div>• Malda</div>
              <div>• North Dinajpur</div>
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
            Frequently Asked <span className="text-green-600">Questions</span>
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              {[
                {
                  question: "When should I see a kidney specialist in Siliguri?",
                  answer: "You should consult a nephrologist if you notice blood in urine, persistent body swelling, uncontrolled high blood pressure, diabetic complications, or if your primary doctor finds abnormalities in kidney tests."
                },
                {
                  question: "What should I bring for my first appointment?",
                  answer: "Bring your latest blood and urine reports, list of current medications, medical history, and any previous kidney-related scan results. Reports for diabetes or hypertension are also essential."
                },
                {
                  question: "Is treatment for kidney stones available?",
                  answer: "Yes, Dr. Rajdeb Saha provides comprehensive evaluation and management for kidney stones, often using medications and coordination with urologists if surgical intervention is needed."
                },
                {
                  question: "Do you offer guidance for kidney transplantation?",
                  answer: "Absolutely. Dr. Rajdeb Saha provides complete pre-transplant assessment, donor matching guidance, and specialized long-term post-transplant follow-up care."
                },
                {
                  question: "Are there special facilities for North Bengal patients?",
                  answer: "Yes, we provide consultations in regional languages, specific consideration for health challenges in North Bengal, and direct coordination with local hospitals in the region."
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
          className="bg-gradient-to-r from-green-700 to-teal-700 rounded-2xl text-white p-8 md:p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Kidney Health is Our Priority
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Don't let kidney issues control your life. Consult with Dr. Rajdeb Saha today and take the first step towards better kidney health.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">📧 Contact</h3>
              <p className="text-green-100">Email: rajdeb@live.com<br/>Specialized Kidney Care for<br/>Siliguri & North Bengal</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">🏥 Service Areas</h3>
              <p className="text-green-100">Siliguri, Jalpaiguri, Cooch Behar<br/>Darjeeling, Kalimpong, Malda<br/>& All North Bengal Districts</p>
            </div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="mailto:rajdeb@live.com"
              className="px-8 py-4 bg-white text-green-700 rounded-lg font-bold hover:bg-green-50 transition-all duration-300 shadow-lg"
            >
              Consult Now
            </a>
            <button
              onClick={() => window.location.href = '/services'}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-green-700 transition-all duration-300 cursor-pointer"
            >
              View All Services
            </button>
          </motion.div>

         
          <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
            <p className="text-sm text-green-100">
              <strong>Special Benefits:</strong> 24/7 Emergency Guidance • Full Consultation in English & Regional Languages • Insurance Accepted • Cashless Facilities
            </p>
          </div>
        </motion.section>

        {/* Emergency Contact Section */}
        <motion.section 
          className="mb-16 bg-red-50 border-l-4 border-red-500 rounded-lg p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-red-800 mb-2">🚨 Emergency Kidney Issues</h3>
              <p className="text-red-700 mb-3">
                If you experience sudden stoppage of urine, severe pain, extreme swelling, or short of breath - visit the nearest hospital without delay.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-800 font-semibold">For Emergency Guidance:</p>
                <p className="text-gray-700">📧 Email rajdeb@live.com immediately</p>
                <p className="text-gray-700">🏥 We have direct coordination with major hospitals in Siliguri</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Location & Accessibility */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              <span className="text-green-600">Accessibility</span> & Location
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">🚗 How to Reach</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>From Siliguri Station:</strong> 15-20 mins by Auto/Taxi</li>
                  <li>• <strong>From Bagdogra Airport:</strong> 45 mins drive</li>
                  <li>• <strong>Parking:</strong> Ample parking space in hospital complex</li>
                  <li>• <strong>Public Transport:</strong> Easily accessible via major bus routes</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">♿ Patient Facilities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Wheelchair accessible environment</li>
                  <li>• Comfortable waiting area for patients and relatives</li>
                  <li>• Clean washroom facilities</li>
                  <li>• Canteen & Pharmacy within the same complex</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-green-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-800 mb-3">📅 Appointment Booking Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>• Email before 10 AM for faster response</div>
                <div>• Mention "URGENT" for emergency cases</div>
                <div>• Send previous reports as PDF attachments</div>
                <div>• Mention patient age and primary concern</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Patient <span className="text-green-600">Testimonials</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mr. Ram Prasad Sharma",
                location: "Jalpaiguri",
                text: "Was suffering from kidney complications due to diabetes. I am much better now under Dr. Rajdeb Saha's treatment. His explanations are very easy to understand.",
                rating: 5
              },
              {
                name: "Sushila Devi",
                location: "Siliguri",
                text: "Consulted for kidney stones. Recovered with medication alone, without surgery. The doctor explains everything with a lot of patience.",
                rating: 5
              },
              {
                name: "Mr. Tenzing Sherpa",
                location: "Darjeeling",
                text: "Kidneys were affected due to high blood pressure. Dr. Saha's treatment is very effective. He also provides regular follow-ups.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-green-600">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SiliguriPage;