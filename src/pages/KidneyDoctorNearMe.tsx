import React from 'react';
import { motion } from 'framer-motion';

const KidneyDoctorNearMe: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
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
        
        <motion.div
          className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-blue-600 opacity-20"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <motion.div
          className="absolute z-20 inset-0 flex flex-col justify-center items-center text-white p-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-tight mb-4">
            Best <span className="text-blue-200">Kidney Doctor Near Me</span>
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-4xl mb-6">
            Dr. Rajdeb Saha - Top Nephrologist in Delhi NCR | Gurgaon | Noida
          </p>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
            <p className="text-lg font-medium">🏥 Expert Kidney Specialist | Nephrology Consultant</p>
            <p className="text-base mt-2">📧 rajdeb@live.com | 🩺 25+ Years Experience | 🌟 1000+ Happy Patients</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        {/* Search Intent Section */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Looking for <span className="text-blue-600">"Kidney Doctor Near Me"</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              You've found the right place! Dr. Rajdeb Saha is the leading kidney specialist serving Delhi, Gurgaon, Noida, Faridabad, and entire NCR region with world-class nephrology care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: "🎯", title: "Best Nephrologist Near Me", desc: "Top-rated kidney doctor in Delhi NCR" },
              { icon: "🏥", title: "Kidney Specialist Doctor", desc: "Expert in all kidney diseases & treatments" },
              { icon: "💊", title: "Kidney Treatment Center", desc: "Advanced dialysis & transplant care" },
              { icon: "🔬", title: "Kidney Function Test", desc: "Complete diagnostic services available" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Services for Common Searches */}
        <motion.section 
          className="mb-16 bg-white rounded-2xl shadow-xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            <span className="text-blue-600">Kidney Problems</span> We Treat Near You
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-700 mb-4">🚨 Urgent Kidney Issues</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Kidney stone pain treatment</li>
                <li>• Blood in urine (hematuria)</li>
                <li>• Acute kidney failure</li>
                <li>• Kidney infection treatment</li>
                <li>• UTI specialist near me</li>
                <li>• Emergency kidney care Delhi</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-4">💊 Chronic Conditions</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Diabetes kidney disease doctor</li>
                <li>• High blood pressure kidney damage</li>
                <li>• Chronic kidney disease specialist</li>
                <li>• Kidney failure treatment options</li>
                <li>• Dialysis center near me</li>
                <li>• Kidney transplant consultation</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-700 mb-4">🔍 Tests & Checkups</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Kidney function test near me</li>
                <li>• Creatinine level check</li>
                <li>• Kidney biopsy procedure</li>
                <li>• Urine protein test</li>
                <li>• Kidney health screening</li>
                <li>• Best kidney doctor consultation</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-6 text-white text-center">
            <h4 className="text-xl font-bold mb-3">🆘 When to See a Kidney Doctor Immediately</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
              <div>• Severe back or side pain</div>
              <div>• Swelling in legs, ankles, face</div>
              <div>• Foamy or bloody urine</div>
              <div>• Frequent urination at night</div>
              <div>• Persistent fatigue & weakness</div>
              <div>• High blood pressure issues</div>
            </div>
            <a
              href="mailto:rajdeb@live.com"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium inline-block"
            >
              Get Expert Opinion Now
            </a>
          </div>
        </motion.section>

        {/* Location-Based Services */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            <span className="text-blue-600">Kidney Doctor Services</span> Across Delhi NCR
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🏙️ Areas We Serve</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-700 text-sm mb-4">
                <div>• Delhi (All Areas)</div>
                <div>• Gurgaon/Gurugram</div>
                <div>• Noida & Greater Noida</div>
                <div>• Faridabad</div>
                <div>• Ghaziabad</div>
                <div>• South Delhi</div>
                <div>• North Delhi</div>
                <div>• East Delhi</div>
                <div>• West Delhi</div>
                <div>• Central Delhi</div>
                <div>• Dwarka</div>
                <div>• Rohini</div>
              </div>
              <p className="text-xs text-gray-600">
                Serving patients from all major hospitals and clinics across NCR region
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🏥 Our Expertise</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Same-day kidney consultation available</li>
                <li>• Advanced kidney stone treatment</li>
                <li>• Dialysis access procedures (AV fistula)</li>
                <li>• Pre & post kidney transplant care</li>
                <li>• Pediatric kidney disease treatment</li>
                <li>• Geriatric nephrology care</li>
                <li>• Interventional nephrology procedures</li>
                <li>• 24/7 emergency kidney care guidance</li>
              </ul>
              <div className="mt-4">
                <a
                  href="mailto:rajdeb@live.com"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors block text-center text-sm"
                >
                  Book Appointment - Best Kidney Doctor
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section 
          className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Why Dr. Rajdeb Saha is the <span className="text-blue-600">Best Choice</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🏆",
                title: "Top Kidney Specialist",
                desc: "MD, DM Nephrology with 25+ years treating kidney diseases in Delhi NCR"
              },
              {
                icon: "🔬",
                title: "Advanced Technology",
                desc: "Latest diagnostic equipment for accurate kidney function assessment"
              },
              {
                icon: "💰",
                title: "Affordable Treatment",
                desc: "Cost-effective kidney care with insurance support & cashless options"
              },
              {
                icon: "🕐",
                title: "Quick Appointments",
                desc: "Same-day consultation for urgent kidney problems near you"
              },
              {
                icon: "🗣️",
                title: "Multi-language Support",
                desc: "Consultation in Hindi, English & regional languages"
              },
              {
                icon: "📱",
                title: "Easy Communication",
                desc: "Direct contact via email for quick medical queries & follow-ups"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Patient Reviews & FAQ */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Common <span className="text-blue-600">Questions</span> About Kidney Care
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              {[
                {
                  question: "How do I find the best kidney doctor near me in Delhi NCR?",
                  answer: "Dr. Rajdeb Saha is rated as one of the top nephrologists in Delhi NCR with MD, DM qualifications and 25+ years experience treating all kidney conditions."
                },
                {
                  question: "What kidney problems require immediate medical attention?",
                  answer: "Severe kidney stone pain, blood in urine, sudden swelling, reduced urination, or persistent back pain need urgent kidney specialist consultation."
                },
                {
                  question: "Do you treat kidney stones without surgery?",
                  answer: "Yes, we offer both non-surgical (medication, lithotripsy) and surgical kidney stone treatments based on stone size and location."
                },
                {
                  question: "Is dialysis available for kidney failure patients?",
                  answer: "We provide complete dialysis care including access creation, hemodialysis, peritoneal dialysis, and kidney transplant preparation."
                },
                {
                  question: "How much does kidney specialist consultation cost?",
                  answer: "We offer affordable consultation fees with insurance acceptance and cashless treatment options at major hospitals in Delhi NCR."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
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
            Get Expert Kidney Care Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't search anymore for "kidney doctor near me" - you've found the best! Contact Dr. Rajdeb Saha for immediate kidney care consultation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">📧 Direct Contact</h3>
              <p className="text-blue-100">Email: rajdeb@live.com<br/>Best Kidney Doctor in Delhi NCR<br/>Expert Nephrology Care</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">🏥 Coverage Area</h3>
              <p className="text-blue-100">Delhi • Gurgaon • Noida<br/>Faridabad • Ghaziabad<br/>All Major NCR Hospitals</p>
            </div>
          </div>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" whileHover={{ scale: 1.05 }}>
            <a
              href="mailto:rajdeb@live.com"
              className="px-8 py-4 bg-white text-blue-700 rounded-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg"
            >
              Contact Best Kidney Doctor Now
            </a>
            <button
              onClick={() => window.location.href = '/services'}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-700 transition-all duration-300"
            >
              View All Kidney Services
            </button>
          </motion.div>

          <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
            <p className="text-sm text-blue-100">
              <strong>Quick Benefits:</strong> Same-day Appointments • All Insurance Accepted • Emergency Care Available • Multi-language Support
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default KidneyDoctorNearMe;