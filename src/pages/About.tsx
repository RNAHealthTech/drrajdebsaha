import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Calendar, MapPin, Clock, BookOpen, Languages, Stethoscope, Award, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  } as any;
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as any;

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring" as any,
        damping: 12,
        stiffness: 100
      }
    }
  } as any;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-sky-600 text-white mt-16 md:mt-20">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <motion.div className="overflow-hidden">
                {/* Animated heading with letter animation */}
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-4"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  {Array.from("Dr. Rajdeb Saha").map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={letterAnimation}
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.h1>
              </motion.div>
              
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Consultant Nephrologist and Kidney Transplantation
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl opacity-90 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                With exceptional expertise in interventional nephrology and kidney transplantation, 
                Dr. Saha brings over a decade of specialized training and experience to his practice. 
                Renowned for his personalized approach to kidney care, he combines advanced medical knowledge 
                with compassionate patient support to deliver comprehensive treatment for complex kidney conditions. 
                His multilingual capabilities enable him to connect with patients from diverse backgrounds, 
                ensuring clear communication and understanding throughout the treatment process.
              </motion.p>
              
              <motion.div 
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <button className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold flex items-center transition hover:bg-sky-50">
                  Book Appointment <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className=" md:flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Placeholder for Doctor's Image */}
              <div className="w-full h-full md:h-96 rounded-lg flex items-center justify-center text-white">
                <div className="text-center">
                  <img src='/images/dr.JPG' alt='doctor' className='w-full h-full' />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-white h-6 rounded-t-3xl"></div>
      </div>

      {/* OPD Info Section */}
      <motion.div 
        className="container mx-auto px-6 py-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-sky-50 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-sky-800">
            <Clock className="mr-2 w-5 h-5" /> Private OPD Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-sky-600 mr-3" />
              <div>
                <div className="text-gray-600">Days</div>
                <div className="font-medium">Monday - Saturday</div>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-sky-600 mr-3" />
              <div>
                <div className="text-gray-600">Hours</div>
                <div className="font-medium">6:00 PM - 8:00 PM</div>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-sky-600 mr-3" />
              <div>
                <div className="text-gray-600">Location</div>
                <div className="font-medium">Room No. 1236</div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-sky-100">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-sky-600 mr-2" />
              <a href="mailto:rajdeb@live.com" className="text-sky-700 hover:underline">rajdeb@live.com</a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expertise Section */}
      <div className="container mx-auto px-6 py-16">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Expertise & Specialization
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Card 1 */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-sky-100"
            variants={fadeIn}
          >
            <div className="bg-sky-100 p-3 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Stethoscope className="w-7 h-7 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Conditions Treated</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Acute Kidney Injury (AKI)</li>
              <li>• Chronic Kidney Disease (CKD)</li>
              <li>• Glomerulonephritis</li>
              <li>• Electrolyte Imbalance</li>
              <li>• Diabetic Kidney Disease</li>
              <li>• Hypertension</li>
            </ul>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-sky-100"
            variants={fadeIn}
          >
            <div className="bg-sky-100 p-3 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Languages className="w-7 h-7 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Languages Spoken</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-600">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-sky-600 rounded-full mr-2"></span>
                <span>English</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-sky-600 rounded-full mr-2"></span>
                <span>Hindi</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-sky-600 rounded-full mr-2"></span>
                <span>Bengali</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-sky-600 rounded-full mr-2"></span>
                <span>Marathi</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-sky-600 rounded-full mr-2"></span>
                <span>Nepali</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-sky-600 rounded-full mr-2"></span>
                <span>Kannada</span>
              </div>
            </div>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-sky-100"
            variants={fadeIn}
          >
            <div className="bg-sky-100 p-3 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-7 h-7 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Areas of Interest</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-sky-600" />
                <span>Interventional Nephrology</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-sky-600" />
                <span>Kidney Transplant</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2 text-sky-600" />
                <span>Diabetic Kidney Disease</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Procedures Section */}
      <div className="bg-sky-50 py-16">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Procedures Performed
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['Kidney biopsy', 'Permcath Insertion', 'AV Fistula', 'Fistuloplasty', 'PD catheter insertion'].map((procedure, index) => (
              <motion.div 
                key={index} 
                className="bg-white border border-sky-100 rounded-lg p-6 text-center hover:shadow-md transition"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-sky-700 font-semibold">{procedure}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Education & Experience */}
      <div className="container mx-auto px-6 py-16">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education & Experience
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-sky-100 p-3 rounded-full mr-4">
                <Award className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                className="border-l-2 border-sky-200 pl-6 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="absolute w-4 h-4 bg-sky-600 rounded-full -left-2 top-1"></div>
                <div className="font-semibold text-lg">DM (Nephology)</div>
                <div className="text-gray-600">KMC, Manipal - 2024</div>
              </motion.div>
              
              <motion.div 
                className="border-l-2 border-sky-200 pl-6 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="absolute w-4 h-4 bg-sky-600 rounded-full -left-2 top-1"></div>
                <div className="font-semibold text-lg">Interventional Nephrology Fellowship (ISN)</div>
                <div className="text-gray-600">2024</div>
              </motion.div>
              
              <motion.div 
                className="border-l-2 border-sky-200 pl-6 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="absolute w-4 h-4 bg-sky-600 rounded-full -left-2 top-1"></div>
                <div className="font-semibold text-lg">MD (General Medicine)</div>
                <div className="text-gray-600">2019</div>
              </motion.div>
              
              <motion.div 
                className="border-l-2 border-sky-200 pl-6 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="absolute w-4 h-4 bg-sky-600 rounded-full -left-2 top-1"></div>
                <div className="font-semibold text-lg">MBBS</div>
                <div className="text-gray-600">2015</div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-sky-100 p-3 rounded-full mr-4">
                <Briefcase className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Professional Experience</h3>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                className="border-l-2 border-sky-200 pl-6 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="absolute w-4 h-4 bg-sky-600 rounded-full -left-2 top-1"></div>
                <div className="font-semibold text-lg">Interventional Nephrology Fellow</div>
                <div className="text-gray-600">Sir Ganga Ram Hospital, New Delhi</div>
                <div className="text-gray-500 text-sm">2024</div>
              </motion.div>
              
              <motion.div 
                className="border-l-2 border-sky-200 pl-6 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="absolute w-4 h-4 bg-sky-600 rounded-full -left-2 top-1"></div>
                <div className="font-semibold text-lg">DM Registrar</div>
                <div className="text-gray-600">KMC, Manipal</div>
                <div className="text-gray-500 text-sm">2021 - 2023</div>
              </motion.div>
              
              <motion.div 
                className="border-l-2 border-sky-200 pl-6 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="absolute w-4 h-4 bg-sky-600 rounded-full -left-2 top-1"></div>
                <div className="font-semibold text-lg">Senior Resident</div>
                <div className="text-gray-600">Dr. D. Y. Patil, Pimpri, Pune</div>
                <div className="text-gray-500 text-sm">2019 - 2020</div>
              </motion.div>
              
              <motion.div 
                className="border-l-2 border-sky-200 pl-6 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="absolute w-4 h-4 bg-sky-600 rounded-full -left-2 top-1"></div>
                <div className="font-semibold text-lg">MD General Medicine Residency</div>
                <div className="text-gray-600">Dr. D. Y. Patil, Pimpri, Pune</div>
                <div className="text-gray-500 text-sm">2016 - 2019</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-sky-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Schedule a Consultation</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
              Take the first step towards better kidney health. Dr. Raj Deb Saha provides personalized
              care and advanced treatment options for all kidney-related conditions.
            </p>
            <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold transition hover:bg-sky-50">
              Book an Appointment
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;