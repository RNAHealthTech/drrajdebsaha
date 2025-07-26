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
                    <strong>প্রস্রাবে রক্ত (Blood in urine)</strong> - গোলাপি, লাল বা বাদামী রঙের প্রস্রাব
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>হঠাৎ কিডনি বন্ধ (Sudden kidney failure)</strong> - কিডনি দ্রুত কাজ বন্ধ করে দেওয়া
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>শরীর ফুলে যাওয়া (Severe swelling)</strong> - মুখ, পা বা সারা শরীর ফুলে যাওয়া
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>কিডনিতে পাথর (Kidney stones)</strong> - পিঠে বা পাশে তীব্র ব্যথা
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <div>
                    <strong>অতিরিক্ত উচ্চ রক্তচাপ</strong> - ওষুধে নিয়ন্ত্রণ করা কঠিন
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">⚕️ দীর্ঘমেয়াদী কিডনি সমস্যা</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <strong>ডায়াবেটিসের কারণে কিডনি ক্ষতি</strong> - চিনির রোগ কিডনিকে প্রভাবিত করা
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <strong>ক্রনিক কিডনি ডিজিজ</strong> - ধীরে ধীরে কিডনির কার্যক্ষমতা কমে যাওয়া
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <strong>প্রস্রাবে প্রোটিন</strong> - ফেনাযুক্ত বা বুদবুদ প্রস্রাব
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <strong>প্রস্রাবের সমস্যা</strong> - খুব বেশি বা খুব কম প্রস্রাব হওয়া
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <div>
                    <strong>কিডনি ইনফেকশন</strong> - ব্যথা, জ্বর, জ্বালাপোড়া
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-50 rounded-xl">
            <h4 className="text-xl font-bold text-green-800 mb-3">🩺 কখন কিডনি বিশেষজ্ঞের কাছে যাবেন?</h4>
            <p className="text-gray-700 mb-3">
              এই লক্ষণগুলো দেখা দিলে দেরি না করে ডাক্তার দেখান:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
              <div>• ক্রমাগত দুর্বলতা ও ক্লান্তি</div>
              <div>• ক্ষুধা কমে যাওয়া বা বমি বমি ভাব</div>
              <div>• ঘুমের সমস্যা</div>
              <div>• ক্রমাগত চুলকানি</div>
              <div>• মুখে ধাতব স্বাদ</div>
              <div>• মাংসপেশীতে খিঁচুনি</div>
            </div>
            <div className="text-center">
              <a
                href="mailto:rajdeb@live.com"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium inline-block"
              >
                এখনই বিশেষজ্ঞের পরামর্শ নিন
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
                <li>• কিডনি বায়োপসি (Kidney biopsy for tissue diagnosis)</li>
                <li>• ডায়ালাইসিস এক্সেস তৈরি (Dialysis access creation)</li>
                <li>• পেরিটোনিয়াল ডায়ালাইসিস ক্যাথেটার (PD catheter placement)</li>
                <li>• কিডনি পাথরের চিকিৎসা পরামর্শ</li>
                <li>• ট্রান্সপ্ল্যান্ট পূর্ব মূল্যায়ন</li>
                <li>• ট্রান্সপ্ল্যান্ট পরবর্তী পরিচর্যা</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 আমাদের বিশেষত্ব</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• আজই পরামর্শের সুবিধা</li>
                <li>• বাংলা ও স্থানীয় ভাষায় বিস্তারিত ব্যাখ্যা</li>
                <li>• অন্যান্য বিশেষজ্ঞদের সাথে সমন্বয়</li>
                <li>• খাদ্য ও জীবনযাত্রার পরামর্শ</li>
                <li>• জরুরি অবস্থায় ২৪/৭ গাইডেন্স</li>
                <li>• বীমা ও ক্যাশলেস চিকিৎসার সহায়তা</li>
              </ul>
              <div className="mt-4">
                <a
                  href="mailto:rajdeb@live.com"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors block text-center"
                >
                  পরামর্শের জন্য যোগাযোগ করুন
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
                  question: "সিলিগুড়িতে কিডনি বিশেষজ্ঞের কাছে কখন যাব? (When should I see a kidney specialist in Siliguri?)",
                  answer: "যদি আপনার প্রস্রাবে রক্ত থাকে, শরীর ফুলে যায়, উচ্চ রক্তচাপ নিয়ন্ত্রণে না থাকে, ডায়াবেটিসের জটিলতা হয়, অথবা আপনার পারিবারিক ডাক্তার কিডনি টেস্টে অস্বাভাবিকতা দেখে পরামর্শ দেন।"
                },
                {
                  question: "প্রথম অ্যাপয়েন্টমেন্টে কী কী নিয়ে আসব?",
                  answer: "সর্বশেষ রক্ত ও প্রস্রাবের রিপোর্ট, বর্তমান ওষুধের তালিকা, চিকিৎসার ইতিহাস, এবং কিডনি সংক্রান্ত আগের যেকোনো পরীক্ষা নিয়ে আসুন। ডায়াবেটিস বা উচ্চ রক্তচাপ থাকলে সেগুলোর রিপোর্টও আনুন।"
                },
                {
                  question: "কিডনি পাথরের চিকিৎসা পাওয়া যায়?",
                  answer: "হ্যাঁ, ডা. রাজদেব সাহা কিডনি পাথরের সম্পূর্ণ মূল্যায়ন এবং চিকিৎসা প্রদান করেন। প্রয়োজনে অস্ত্রোপচারের জন্য ইউরোলজিস্টদের সাথে সমন্বয় করে সম্পূর্ণ চিকিৎসা নিশ্চিত করেন।"
                },
                {
                  question: "কিডনি ট্রান্সপ্ল্যান্টের পরামর্শ পাওয়া যায়?",
                  answer: "অবশ্যই। ডা. রাজদেব সাহা সম্পূর্ণ ট্রান্সপ্ল্যান্ট পূর্ব মূল্যায়ন, দাতার সঙ্গতি পরীক্ষা, এবং দীর্ঘমেয়াদী ট্রান্সপ্ল্যান্ট পরবর্তী পরিচর্যা প্রদান করেন।"
                },
                {
                  question: "উত্তরবঙ্গের রোগীদের জন্য বিশেষ সুবিধা আছে?",
                  answer: "হ্যাঁ, আমরা স্থানীয় ভাষায় পরামর্শ, আঞ্চলিক স্বাস্থ্য সমস্যার বিশেষ বিবেচনা, এবং স্থানীয় হাসপাতালগুলোর সাথে সমন্বয়ের মাধ্যমে উত্তরবঙ্গের রোগীদের বিশেষ সেবা প্রদান করি।"
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
            আপনার কিডনির স্বাস্থ্য আমাদের অগ্রাধিকার
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            কিডনির সমস্যা আপনার জীবনকে নিয়ন্ত্রণ করতে দেবেন না। আজই ডা. রাজদেব সাহার সাথে পরামর্শ নিন এবং সুস্থ কিডনির দিকে প্রথম পদক্ষেপ নিন।
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">📧 যোগাযোগ</h3>
              <p className="text-green-100">Email: rajdeb@live.com<br/>সিলিগুড়ি ও উত্তরবঙ্গের জন্য<br/>বিশেষজ্ঞ কিডনি চিকিৎসা</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">🏥 সেবা এলাকা</h3>
              <p className="text-green-100">সিলিগুড়ি, জলপাইগুড়ি, কুচবিহার<br/>দার্জিলিং, কালিম্পং, মালদা<br/>এবং সমগ্র উত্তরবঙ্গ</p>
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
              এখনই পরামর্শ নিন
            </a>
            <button
              onClick={() => window.location.href = '/services'}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-green-700 transition-all duration-300 cursor-pointer"
            >
              সব সেবা দেখুন
            </button>
          </motion.div>

         
          <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
            <p className="text-sm text-green-100">
              <strong>বিশেষ সুবিধা:</strong> জরুরি পরামর্শ ২৪/৭ • বাংলা ভাষায় সম্পূর্ণ পরামর্শ • বীমা গ্রহণযোগ্য • ক্যাশলেস সুবিধা
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
              <h3 className="text-xl font-bold text-red-800 mb-2">🚨 জরুরি কিডনি সমস্যায়</h3>
              <p className="text-red-700 mb-3">
                যদি আপনার হঠাৎ প্রস্রাব বন্ধ হয়ে যায়, প্রচণ্ড ব্যথা হয়, অতিরিক্ত ফুলে যান, বা শ্বাসকষ্ট হয় - তাহলে দেরি না করে নিকটতম হাসপাতালে যান।
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-800 font-semibold">জরুরি পরামর্শের জন্য:</p>
                <p className="text-gray-700">📧 rajdeb@live.com তে তাৎক্ষণিক ইমেইল করুন</p>
                <p className="text-gray-700">🏥 সিলিগুড়ির প্রধান হাসপাতালগুলোতে আমাদের সরাসরি কোঅর্ডিনেশন আছে</p>
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
              <span className="text-green-600">পৌঁছানোর সুবিধা</span> ও অবস্থান
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">🚗 কীভাবে আসবেন</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>সিলিগুড়ি স্টেশন থেকে:</strong> অটো/ট্যাক্সিতে ১৫-২০ মিনিট</li>
                  <li>• <strong>বাগডোগরা বিমানবন্দর থেকে:</strong> ৪৫ মিনিট ড্রাইভ</li>
                  <li>• <strong>পার্কিং:</strong> হাসপাতাল কমপ্লেক্সে পর্যাপ্ত পার্কিং স্থান</li>
                  <li>• <strong>পাবলিক ট্রান্সপোর্ট:</strong> প্রধান বাস রুটের কাছেই</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">♿ রোগীদের সুবিধা</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• হুইলচেয়ার বন্ধুত্বপূর্ণ পরিবেশ</li>
                  <li>• রোগী ও আত্মীয়দের জন্য বসার ব্যবস্থা</li>
                  <li>• পরিষ্কার ওয়াশরুম সুবিধা</li>
                  <li>• ক্যান্টিন ও ফার্মেসি একই কমপ্লেক্সে</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-green-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-800 mb-3">📅 অ্যাপয়েন্টমেন্ট বুকিং টিপস</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>• সকাল ১০টার মধ্যে ইমেইল করলে দ্রুত উত্তর পাবেন</div>
                <div>• জরুরি ক্ষেত্রে ইমেইলে "URGENT" লিখুন</div>
                <div>• পুরনো রিপোর্ট থাকলে PDF করে পাঠান</div>
                <div>• রোগীর বয়স ও প্রধান সমস্যা উল্লেখ করুন</div>
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
            রোগীদের <span className="text-green-600">মতামত</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "শ্রী রাম প্রসাদ শর্মা",
                location: "জলপাইগুড়ি",
                text: "ডায়াবেটিসের কারণে কিডনির সমস্যা হয়েছিল। ডা. রাজদেব সাহার চিকিৎসায় এখন অনেক ভালো আছি। উনার ব্যাখ্যা খুবই সহজ ও বোধগম্য।",
                rating: 5
              },
              {
                name: "সুশীলা দেবী",
                location: "সিলিগুড়ি",
                text: "কিডনি পাথরের জন্য দেখিয়েছিলাম। অপারেশন ছাড়াই ওষুধে ভালো হয়ে গেছে। ডাক্তার বাবু খুব ধৈর্য ধরে বোঝান।",
                rating: 5
              },
              {
                name: "মিঃ তেনজিং শেরপা",
                location: "দার্জিলিং",
                text: "High blood pressure এর কারণে kidney affected হয়েছিল। Dr. Saha'র treatment অনেক effective. Follow-up ও regular করেন।",
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